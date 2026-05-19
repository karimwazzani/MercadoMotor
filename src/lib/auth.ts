import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma"; // Instancia global corregida
import bcrypt from "bcryptjs";
import { verifyTurnstileToken } from "@/lib/captcha";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "dummy-client-id",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "dummy-client-secret",
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        captchaToken: { label: "Captcha Token", type: "text" }
      },
      async authorize(credentials) {
        // Verificar captcha primero
        const isCaptchaValid = await verifyTurnstileToken(credentials?.captchaToken);
        if (!isCaptchaValid) {
          throw new Error("Fallo de validación de seguridad (Captcha).");
        }

        if (!credentials?.email || !credentials?.password) {
          throw new Error("Credenciales inválidas");
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        });

        if (!user || !user.password) {
          throw new Error("Usuario no encontrado");
        }

        if (user.status === "PENDING_VERIFICATION") {
          throw new Error("Por favor, verifica tu correo antes de ingresar.");
        }

        if (user.status === "SUSPENDED") {
          throw new Error("Esta cuenta ha sido suspendida preventivamente por razones de seguridad. Ponete en contacto con soporte.");
        }

        const isPasswordCorrect = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isPasswordCorrect) {
          throw new Error("Contraseña incorrecta");
        }

        return user;
      }
    })
  ],
  callbacks: {
    async signIn({ user }) {
      if (user?.email) {
        const dbUser = await prisma.user.findUnique({
          where: { email: user.email }
        });
        if (dbUser && dbUser.status === "SUSPENDED") {
          throw new Error("Esta cuenta ha sido suspendida preventivamente por razones de seguridad.");
        }
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.accountType = (user as any).accountType;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id;
        (session.user as any).accountType = token.accountType;
      }
      return session;
    }
  },
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/logout",
  },
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET,
};

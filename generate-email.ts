import { sendPriceDropEmail } from './src/lib/mailer';
import fs from 'fs';

// We mock resend by temporarily replacing it or just overriding the console.log
const title = "¡Bajó de precio el vehículo de tus favoritos!";
const contentHtml = `
  <h2 class="title">🔥 ¡Bajó de precio el Honda Prelude!</h2>
  <p class="text">
    ¡Buenas noticias! El vehículo que tenías guardado en tus favoritos acaba de bajar de precio:
  </p>
  <div style="background-color: #27272a; padding: 20px; border-radius: 8px; margin-bottom: 30px; text-align: center; font-size: 16px;">
    <span style="text-decoration: line-through; color: #71717a; margin-right: 15px;">Antes: US$ 16.000</span>
    <strong style="color: #2ecc71; font-size: 18px;">Ahora: US$ 15.000</strong>
  </div>
  <div class="btn-container">
    <a href="https://mercadomotor.ar/catalogo/123" class="btn" target="_blank">Ver publicación</a>
  </div>
`;

const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>${title}</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          background-color: #0f0f11;
          margin: 0;
          padding: 40px 20px;
          color: #e4e4e7;
        }
        .card {
          background-color: #18181b;
          max-width: 550px;
          margin: 0 auto;
          border-radius: 12px;
          border: 1px solid #27272a;
          padding: 40px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }
        .logo {
          font-size: 24px;
          font-weight: 700;
          color: #ffffff;
          text-align: center;
          margin-bottom: 30px;
          letter-spacing: -0.04em;
        }
        .logo-accent {
          color: #b89759;
        }
        .title {
          font-size: 20px;
          font-weight: 600;
          color: #ffffff;
          margin-top: 0;
          margin-bottom: 20px;
          text-align: center;
        }
        .text {
          font-size: 15px;
          line-height: 1.6;
          color: #a1a1aa;
          margin-bottom: 30px;
        }
        .btn-container {
          text-align: center;
          margin-bottom: 30px;
        }
        .btn {
          background-color: #b89759;
          color: #000000 !important;
          text-decoration: none;
          padding: 14px 28px;
          border-radius: 6px;
          font-size: 15px;
          font-weight: 600;
          display: inline-block;
          transition: background-color 0.2s ease;
        }
        .footer {
          text-align: center;
          font-size: 12px;
          color: #71717a;
          border-top: 1px solid #27272a;
          padding-top: 20px;
          margin-top: 30px;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="logo">
          Mercado<span class="logo-accent">Motor</span>
        </div>
        ${contentHtml}
        <div class="footer">
          &copy; ${new Date().getFullYear()} MercadoMotor. Todos los derechos reservados.<br>
          Plataforma digital de publicación y gestión de vehículos.
        </div>
      </div>
    </body>
  </html>
`;

fs.writeFileSync('C:\\Users\\karim\\.gemini\\antigravity\\brain\\5c88c7aa-c4ed-4096-84a8-54760b6ca896\\scratch\\email-preview.html', html);
console.log('HTML generated successfully.');

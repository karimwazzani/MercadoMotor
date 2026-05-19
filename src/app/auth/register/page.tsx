"use client";

import { useEffect } from "react";
import RegisterForm from "./RegisterForm";
import styles from "./RegisterForm.module.css";

export default function RegisterPage() {
  useEffect(() => {
    document.title = "Registrarse | MercadoMotor";
  }, []);

  return (
    <div className={styles.pageWrapper}>
      <RegisterForm />
    </div>
  );
}

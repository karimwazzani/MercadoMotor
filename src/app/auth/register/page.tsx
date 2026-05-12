"use client";

import RegisterForm from "./RegisterForm";
import styles from "./RegisterForm.module.css";

export default function RegisterPage() {
  return (
    <div className={styles.pageWrapper}>
      <RegisterForm />
    </div>
  );
}

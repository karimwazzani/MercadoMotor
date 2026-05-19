"use client";

import { useEffect } from "react";
import RegisterForm from "../register/RegisterForm";

export default function RegisterAgencyPage() {
  useEffect(() => {
    document.title = "Registrar Agencia | MercadoMotor";
  }, []);

  return <RegisterForm />;
}

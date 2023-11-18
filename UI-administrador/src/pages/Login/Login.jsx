import { Link } from "wouter";
import logo from "../../images/logo-blanco.jpg";
import "./Login.css";
import { useState } from "react";

export default function Login() {
  const [register, setRegistrer] = useState(false);
  const handleRegister = () => {
    setRegistrer((prev) => !prev);
  };
  return (
    <form className="login">
      <img src={logo} />
      <input type="email" placeholder="Correo" required />
      <input type="password" placeholder="Contrasena" required />
      {register && (
        <>
          <input type="text" placeholder="Nombre" required />
          <input type="text" placeholder="Apellido" required />
          <input type="tel" placeholder="Num. telefonico" required />
        </>
      )}
      <span className="register" onClick={handleRegister}>
        {!register ? "Aun no te has registrado" : "Ya estas registrado?"}
      </span>
      <button className="purpleButton">
        {!register ? "INICIAR SESION" : "REGISTRAR"}
      </button>
    </form>
  );
}

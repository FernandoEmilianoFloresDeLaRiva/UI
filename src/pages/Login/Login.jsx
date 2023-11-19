import logo from "../../images/logo-blanco.jpg";
import "./Login.css";
import { useState } from "react";
import { useForm } from "../../hooks/useForm.jsx";
import { postUserAsync } from "../../redux/Auth/thunks/postUser.async";
import { getAuthAsync } from "../../redux/Auth/thunks/getAuth.async";
import { useDispatch } from "react-redux";

export default function Login() {
  const [register, setRegistrer] = useState(false);
  //estado inicial dependiendo del registro
  const initialState = register
    ? {
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
        password: "",
        tipo: 2,
      }
    : {
        email: "",
        password: "",
      };
  //custom hook
  const { object, handleObject } = useForm(initialState);
  const dispatch = useDispatch();
  const handleRegister = () => {
    setRegistrer((prev) => !prev);
  };
  const handleChange = ({ target }) => {
    handleObject(target);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const ejecutarFuncion = register
      ? postUserAsync(object)
      : getAuthAsync(object);
    dispatch(ejecutarFuncion);
  };
  return (
    <form className="login" onSubmit={handleSubmit}>
      <img src={logo} />
      <input
        type="email"
        placeholder="Correo"
        name="email"
        required
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Contrasena"
        name="password"
        required
        onChange={handleChange}
      />
      {register && (
        <>
          <input
            type="text"
            placeholder="Nombre"
            name="nombre"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Apellido"
            name="apellido"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Num. telefonico"
            name="telefono"
            required
            onChange={handleChange}
          />
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

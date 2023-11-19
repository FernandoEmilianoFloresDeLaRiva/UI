import logo from "../../images/logo-blanco.jpg";
import "./Login.css";
import { useContext, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { authActions } from "../../context/AuthContext/AuthActions";
import { AuthContext } from "../../context/AuthContext/AuthContext";

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
  //dispatch de contexto
  const { dispatch } = useContext(AuthContext);
  const handleRegister = () => {
    setRegistrer((prev) => !prev);
  };
  const handleChange = ({ target }) => {
    handleObject(target);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({
      type: register ? authActions.postUser : authActions.getAuth,
      payload: object,
    });
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

import { authActions } from "./AuthActions";
import { getAuth } from "../../services/services/auth/getAuth";
import { postUsuario } from "../../services/services/auth/postUsuario";

export default async function AuthReducer(state, action) {
  switch (action.type) {
    case authActions.getAuth: {
      const res = await getAuth(action.payload);
      if (res) {
        const { token, usuario } = res;
        window.localStorage.setItem("token", token);
        const newState = await {
          isAuth: true,
          user: usuario,
          token,
        };
        console.log(newState);
        return newState;
      }
      console.error(`Error validando credenciales`);
      return state;
    }
    case authActions.postUser: {
      try {
        const res = await postUsuario(action.payload, state.token);
        window.alert(`Usuario ${action.payload.nombre} creado exitosamente`);
        return state;
      } catch (err) {
        window.alert("Error creando el usuario");
        return state;
      }
    }
  }
}

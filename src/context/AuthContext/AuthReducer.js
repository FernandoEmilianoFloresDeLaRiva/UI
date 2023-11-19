import { authActions } from "./AuthActions";
import { getAuth } from "../../services/services/auth/getAuth";
import { postUsuario } from "../../services/services/auth/postUsuario";

export default async function AuthReducer(state, action) {
  switch (action.type) {
    case authActions.getAuth: {
      const res = await getAuth(action.payload);
      if (res) {
        const { token, usuario } = res;
        const newState = await {
          isAuth: true,
          user: usuario,
          token,
        };
        window.localStorage.setItem("userLog", JSON.stringify(newState));
        window.location.reload();
        return newState;
      }
      console.error(`Error validando credenciales`);
      return state;
    }
    case authActions.postUser: {
      const objeto = {
        ...action.payload,
        tipo: 2,
      };
      const res = await postUsuario(objeto);
      if (res) window.alert(res.message);
      else window.alert("Error creando el usuario");
      return state;
    }
    case authActions.logout: {
      window.localStorage.removeItem("userLog");
      return {
        isAuth: false,
        user: {},
        token: null,
      };
    }
  }
}

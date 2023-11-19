import { apiPost } from "../../api/api";
import { AUTH_BASE } from "../../../constants/auth_URL";

export const postUsuario = async (data) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    const res = await apiPost(`${AUTH_BASE}`, data, headers);
    return res;
  } catch (err) {
    console.error("Error fetching: ", err);
    throw err;
  }
};

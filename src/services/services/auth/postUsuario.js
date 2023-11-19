import { apiPost } from "../../api/api";
import { AUTH_BASE } from "../../../constants/auth_URL";

export const postUsuario = async (data, token) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const body = {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    };
    const res = await apiPost(`${AUTH_BASE}`, body);
    return res;
  } catch (err) {
    console.error("Error fetching: ", err);
    throw err;
  }
};

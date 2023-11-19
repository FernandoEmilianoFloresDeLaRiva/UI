import { apiPost } from "../../api/api";
import { AUTH_BASE } from "../../../constants/auth_URL";

export const getAuth = async (auth) => {
  try {
    const headers = {
      "Content-Type": "application/json"
    };
    const res = await apiPost(`${AUTH_BASE}/login`, auth, headers);
    return res;
  } catch (err) {
    console.error("Error fetching: ", err);
    throw err;
  }
};

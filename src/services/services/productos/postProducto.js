import { apiPost } from "../../api/api";
import { PRODUCTOS_BASE } from "../../../constants/productos_URL";

export const postProducto = async (data, token) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const res = await apiPost(`${PRODUCTOS_BASE}`, data, headers);
    return res;
  } catch (err) {
    console.error("Error fetching: ", err);
    throw err;
  }
};

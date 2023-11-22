import { apiPut } from "../../api/api";
import { PRODUCTOS_BASE } from "../../../constants/productos_URL";

export const postImg = async (data, id, token) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const objetoData = {
      // mode : "no-cors",
      method: "PUT",
      headers,
      body: JSON.stringify(data),
    };
    const res = await apiPut(
      `${PRODUCTOS_BASE}/updateImagen/${id}`,
      objetoData
    );
    return res;
  } catch (err) {
    console.error("Error fetching: ", err);
    throw err;
  }
};

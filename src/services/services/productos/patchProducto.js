import { apiPatch } from "../../api/api";
import { PRODUCTOS_BASE } from "../../../constants/productos_URL";

export const patchProducto = async (data, token, id) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    const objetoData = {
      method: "PATCH",
      headers,
      body: JSON.stringify(data),
    };

    const res = await apiPatch(
      `${PRODUCTOS_BASE}/parcialUpdate/${id}`,
      objetoData
    );
    return res;
  } catch (err) {
    console.error("Error fetching: ", err);
    throw err;
  }
};

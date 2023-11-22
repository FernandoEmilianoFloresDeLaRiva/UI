import { apiDelete } from "../../api/api";
import { PRODUCTOS_BASE } from "../../../constants/productos_URL";

export const deleteImg = async (id, token) => {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const body = {
      method: "DELETE",
      headers,
    };
    const res = await apiDelete(
      `${PRODUCTOS_BASE}/eliminarImagen/producto/${id}`,
      body
    );
    return res;
  } catch (err) {
    console.error("Error fetching: ", err);
    throw err;
  }
};

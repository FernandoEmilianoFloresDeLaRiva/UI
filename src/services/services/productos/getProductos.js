import { apiGet } from "../../api/api";
import { PRODUCTOS_BASE } from "../../../constants/productos_URL";

export const getProductos = async (
  page = 1,
  limit = 10,
  orden = "nombre_producto"
) => {
  try {
    const res = await apiGet(
      `${PRODUCTOS_BASE}?page=${page}&limit=${limit}&orden=${orden}`
    );

    return res;
  } catch (err) {
    console.error("Error fetching: ", err);
    throw err;
  }
};

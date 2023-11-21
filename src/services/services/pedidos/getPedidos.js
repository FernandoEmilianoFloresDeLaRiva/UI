import { apiGetWithAuth } from "../../api/api";
import { PEDIDOS_URL } from "../../../constants/pedidos_URL";

export const getPedidos = async (token, id) => {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const res = await apiGetWithAuth(
      `${PEDIDOS_URL}/pedidosUser/${id}`,
      headers
    );
    return res;
  } catch (err) {
    console.error("Error fetching: ", err);
    throw err;
  }
};

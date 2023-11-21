import { PEDIDOS_URL } from "../../../constants/pedidos_URL";
import { apiPatch } from "../../api/api";

export const acceptPedido = async (id, token) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const body = {
      method: "PATCH",
      headers,
    };
    const res = await apiPatch(`${PEDIDOS_URL}/aceptarPedido/${id}`, body);
    return res;
  } catch (err) {
    console.error("Error fetching: ", err);
    throw err;
  }
};

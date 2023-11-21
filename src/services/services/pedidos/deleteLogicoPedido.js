import { apiDelete } from "../../api/api";
import { PEDIDOS_URL } from "../../../constants/pedidos_URL";

export const deleteLogicoPedido = async (id, token) => {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const body = {
      method: "DELETE",
      headers,
    };
    const res = await apiDelete(`${PEDIDOS_URL}/eliminarLogico/${id}`, body);
    return res;
  } catch (err) {
    console.error("Error fetching: ", err);
    throw err;
  }
};

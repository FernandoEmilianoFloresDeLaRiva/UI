import { apiGet } from "../../api/api";
import { PEDIDOS_URL } from "../../../constants/pedidos_URL";

export const getPedidos = async () => {
  try {
    const res = await apiGet(`${PEDIDOS_URL}/pedidos/Pendientes`);
    return res;
  } catch (err) {
    console.error("Error fetching: ", err);
    throw err;
  }
};

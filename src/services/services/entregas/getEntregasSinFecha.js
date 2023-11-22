import { apiGet } from "../../api/api";
import { ENTREGAS_URL } from "../../../constants/entregas_URL";

export const getEntregasSinFecha = async () => {
  try {
    const res = await apiGet(`${ENTREGAS_URL}/entregasAprobadas/sinFecha`);
    return res;
  } catch (err) {
    console.error("Error fetching: ", err);
    throw err;
  }
};
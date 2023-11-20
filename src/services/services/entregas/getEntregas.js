import { apiGetWithAuth } from "../../api/api";
import { ENTREGAS_URL } from "../../../constants/entregas_URL";

export const getEntregas = async (token) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const res = await apiGetWithAuth(`${ENTREGAS_URL}`, headers);
    return res;
  } catch (err) {
    console.error("Error fetching: ", err);
    throw err;
  }
};

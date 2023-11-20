import { apiPost } from "../../api/api";
import { ENTREGAS_URL } from "../../../constants/entregas_URL";

export const postEntregas = async (data, token) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const res = await apiPost(`${ENTREGAS_URL}/creacionTotal`, data, headers);
    return res;
  } catch (err) {
    console.error("Error fetching: ", err);
    throw err;
  }
};

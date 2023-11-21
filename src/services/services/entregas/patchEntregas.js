import { apiPatch } from "../../api/api";
import { ENTREGAS_URL } from "../../../constants/entregas_URL";

export const patchEntrega = async (data, token) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const body = {
      method: "PATCH",
      headers,
      body: JSON.stringify(data),
    };
    const res = await apiPatch(`${ENTREGAS_URL}`, body);
    return res;
  } catch (err) {
    console.error("Error fetching: ", err);
    throw err;
  }
};

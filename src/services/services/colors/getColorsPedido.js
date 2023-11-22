import { apiGetWithAuth } from "../../api/api";
import { COLOR_URL } from "../../../constants/color_URL";

export const getColorPedido = async (id, token) => {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const res = await apiGetWithAuth(
      `${COLOR_URL}/coloresPedido/${id}`,
      headers
    );
    return res;
  } catch (err) {
    console.error("Error fetching: ", err);

  }
};

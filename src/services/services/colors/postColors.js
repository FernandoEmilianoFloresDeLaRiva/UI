import { apiPost } from "../../api/api";
import { COLOR_URL } from "../../../constants/color_URL";

export const postColor = async (data, token) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const objetoData = {
      // mode : "no-cors",
      method: "POST",
      headers,
      body: JSON.stringify(data),
    };
    const res = await apiPost(
      `${COLOR_URL}/agregarColorProducto`,
      objetoData
    );
    return res;
  } catch (err) {
    console.error("Error fetching: ", err);
    throw err;
  }
};

import { apiDelete } from "../../api/api";
import { COLOR_URL } from "../../../constants/color_URL";

export const deleteColors = async (id, token, data) => {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const body = {
      method: "DELETE",
      headers,
      body: JSON.stringify(data),
    };
    const res = await apiDelete(
      `${COLOR_URL}/eliminarColoresProducto/${id}`,
      body
    );
    return res;
  } catch (err) {
    console.error("Error fetching: ", err);
    throw err;
  }
};

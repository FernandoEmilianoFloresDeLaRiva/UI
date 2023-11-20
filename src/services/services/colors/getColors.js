import { apiGet } from "../../api/api";
import { COLOR_URL } from "../../../constants/color_URL";

export const getColors = async () => {
  try {
    const res = await apiGet(COLOR_URL);
    return res;
  } catch (err) {
    console.error("Error fetching: ", err);
    throw err;
  }
};

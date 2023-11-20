import { apiGet } from "../../api/api";
import { PRODUCTOS_BASE } from "../../../constants/productos_URL";

export const getProducto = async (token, id) => {
    try{
        const resProducto = await apiGet(`${PRODUCTOS_BASE}`)
        return resProducto
    }catch(err){
        console.error("Error fetching: ", err);
    throw err;
    }
}
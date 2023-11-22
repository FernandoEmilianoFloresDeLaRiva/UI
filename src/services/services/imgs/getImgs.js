import { apiGet, apiGetImg } from "../../api/api";
import { PRODUCTOS_BASE } from "../../../constants/productos_URL";

export const getImgs = async (id_producto, token) => {
  try {
    // Obtiene el nombre de la imagen
    const resImgs = await apiGet(
      `${PRODUCTOS_BASE}/ImagenesProducto/${id_producto}`
    );
    const { data } = resImgs;
    //data cambiara mediante el indice mandado
    //condicion para checar que el indice no es mayor al array de imagenes, si es, el indice ahora seria 0

    const { url_imagen } = data[0];
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    // Obtiene la imagen (respuesta)
    const imgResponse = await apiGetImg(
      `${PRODUCTOS_BASE}/mostrarArchivo/${url_imagen}`,
      headers
    );
    if (imgResponse === 401) return 401;
    if (!imgResponse.ok) {
      throw new Error(`Error consiguiendo la imagen`);
    }

    return imgResponse;
  } catch (err) {
    console.error("Error consiguiendo img: ", err);
    throw err;
  }
};

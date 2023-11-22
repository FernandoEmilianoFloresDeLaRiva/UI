import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/Auth/auth.slice";
import { getImgs } from "../services/services/imgs/getImgs";
export const useGetImgs = (token, id_producto, ref) => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    ref.current.src =
      "https://www.suzukijember.com/gallery/gambar_product/default.jpg";
    const fetchImg = async () => {
      try {
        //el indice se manda
        const img = await getImgs(id_producto, token);
        if (!img) {
          ref.current.src =
            "https://www.suzukijember.com/gallery/gambar_product/default.jpg";
          return;
        }
        if (img === 401) {
          dispatch(logout());
          window.alert(
            "Su sesión de usuario ha vencido, favor de iniciar de nuevo"
          );
          console.log("Sesion terminada, redirigiendo...");
        }
        const imgBlob = await img.blob();
        const newUrl_img = URL.createObjectURL(imgBlob);
        // Se asigna la img desde aca
        setLoading(false);
        ref.current.src = newUrl_img;
      } catch (err) {
        console.error("error consiguiendo img, custoom hook " + err);
      }
    };
    fetchImg();
  }, [id_producto]);
  return { isLoading };
};

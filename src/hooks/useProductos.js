import { useState, useEffect } from "react";
import { getProductos } from "../services/services/productos/getProductos";

export const useProductos = () => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const fetchProductos = () => {
      getProductos()
        .then((res) => {
          const { data } = res;
          setProductos(data);
        })
        .then(() => setIsLoading(false))
        .catch((err) =>
          console.error("error consiguiendo los productos " + err)
        );
    };
    fetchProductos();
  }, []);
  return { productos, isLoading };
};

import { useState } from "react";
import { getPedidos } from "../services/services/pedidos/getPedidos";
import { useEffect } from "react";
export const usePedidos = (token, id) => {
  const [pedidos, setPedidos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const fetchProductos = () => {
      getPedidos(token, id)
        .then((res) => {
          const { data } = res;
          setPedidos(data);
        })
        .then(() => setIsLoading(false))
        .catch((err) =>
          console.error("error consiguiendo las entregas " + err)
        );
    };
    fetchProductos();
  }, []);
  return { pedidos, isLoading };
};

import { useState } from "react";
import { getPedidos } from "../services/services/pedidos/getPedidos";
import { useEffect } from "react";
export const usePedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const fetchProductos = () => {
      getPedidos()
        .then((res) => {
          const { data } = res;
          setPedidos(data);
        })

        .catch((err) => console.error("error consiguiendo las entregas " + err))
        .finally(() => setIsLoading(false));
    };
    fetchProductos();
  }, []);
  return { pedidos, isLoading };
};

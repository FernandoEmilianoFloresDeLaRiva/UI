import { useState, useEffect } from "react";
import { getEntregasSinFecha } from "../services/services/entregas/getEntregasSinFecha";

export const useEntregas = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getEntregasSinFecha()
      .then(({data}) => setOrders(data))
      .catch((err) => console.error("Error consiguiendo entregas", err))
      .finally(() => setLoading(false));
  }, []);
  return { orders, loading, setOrders };
};

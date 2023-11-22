import "./OrderList.css";
import { useEntregas } from "../../hooks/useEntregas";

export default function OrderList({ sucess, setSuccess }) {
  const { orders, loading, setOrders } = useEntregas();
  const setOrderData = (order, hour, e) => {
    e.dataTransfer.setData("order", order);
    e.dataTransfer.setData("hour", hour);
  };

  const deleteOrder = (e, orderToDelete) => {
    if (sucess) {
      const auxOrders = orders.filter(
        (order) => order.id_entrega !== orderToDelete
      );
      setOrders([...auxOrders]);
    }
    setSuccess(false);
  };

  return (
    <aside className="orderList">
      {loading && <h1>Cargando entregas...</h1>}
      {!loading && !orders.length ? (
        <h1>Sin entregas pendientes</h1>
      ) : (
        <>
          <h3>Pedidos: </h3>
          {orders.map((order) => {
            return (
              <div
                key={order.id_entrega}
                className="order"
                draggable
                onDragStart={(e) =>
                  setOrderData(order.id_entrega, order.horario, e)
                }
                onDragEnd={(e) => deleteOrder(e, order.id_entrega)}
              >
                <span>#{order.id_entrega}</span>
                <span>{order.horario}</span>
              </div>
            );
          })}
        </>
      )}
    </aside>
  );
}

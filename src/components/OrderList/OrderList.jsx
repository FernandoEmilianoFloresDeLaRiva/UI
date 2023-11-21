import "./OrderList.css";
import { useState } from "react";

export default function OrderList({ monthOrders, sucess, setSuccess }) {
  const [orders, setOrders] = useState(monthOrders);

  const setOrderData = (order, hour, e) => {
    e.dataTransfer.setData("order", order);
    e.dataTransfer.setData("hour", hour);
  };

  const deleteOrder = (e, orderToDelete) => {
    if (sucess) {
      const auxOrders = orders.filter((order) => order.order !== orderToDelete);
      setOrders([...auxOrders]);
    }
    setSuccess(false);
  };

  return (
    <aside className="orderList">
      <h3>Pedidos: </h3>

      {orders.map((order) => {
        return (
          <div
            className="order"
            draggable
            onDragStart={(e) => setOrderData(order.order, order.hour, e)}
            onDragEnd={(e) => deleteOrder(e, order.order)}
          >
            <span>#{order.order}</span>
            <span>{order.hour}</span>
          </div>
        );
      })}
    </aside>
  );
}

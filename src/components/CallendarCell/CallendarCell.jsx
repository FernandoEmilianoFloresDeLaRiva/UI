import { useState } from "react";
import "./CallendarCell.css";

export default function CallendarCell({
  day,
  month,
  year,
  dayOrders,
  setSuccess,
}) {
  const [orders, setOrders] = useState(dayOrders);

  const addOrder = (e) => {
    const order = e.dataTransfer.getData("order");
    const hour = e.dataTransfer.getData("hour");
    setOrders((prev) => [...prev, { order: order, hour: hour }]);
    setSuccess(true);
  };

  return (
    <>
      {day !== 0 ? (
        <td
          className="calendarCell"
          onDrop={addOrder}
          onDragOver={(e) => {
            e.preventDefault();
          }}
        >
          <span className="day">
            {day}-{month}-{year}
          </span>
          {dayOrders
            .filter((orderMonth) => month === orderMonth.month)
            .map((order) => {
              return (
                <span className="orderSpan">
                  <span>{order.hour}</span>
                  <span>#{order.order}</span>
                </span>
              );
            })}
        </td>
      ) : (
        <td className="disabled"></td>
      )}
    </>
  );
}

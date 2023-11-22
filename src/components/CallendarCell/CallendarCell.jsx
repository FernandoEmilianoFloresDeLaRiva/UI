import { useState } from "react";
import "./CallendarCell.css";
import { useDispatch, useSelector } from "react-redux";
import { patchEntregaAsync } from "../../redux/Entregas/thunks/patchEntrega.async";

export default function CallendarCell({
  day,
  month,
  year,
  dayOrders,
  setSuccess,
}) {
  const { token } = useSelector((state) => state.auth);
  const [orders, setOrders] = useState(dayOrders);
  const dispatch = useDispatch();
  const addOrder = (e) => {
    const order = e.dataTransfer.getData("order");
    const hour = e.dataTransfer.getData("hour");
    setOrders((prev) => [...prev, { order: order, hour: hour }]);
    setSuccess(true);
    dispatch(
      patchEntregaAsync({
        token,
        fecha: `${year}-${month}-${day+1}`,
        id: order,
      })
    );
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
            {day}
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

import { useState } from "react";
import "./Calendar.css";
import { useEffect } from "react";
import CallendarCell from "../../components/CallendarCell/CallendarCell";
import { useSelector } from "react-redux";
import OrderList from "../../components/OrderList/OrderList";

export default function Calendar() {
  const orders = useSelector((state) => state.entrega);
  //sucesfulDrag sirve para validar si se realizo correctamente el Drag

  const [sucesfulDrag, setSuccess] = useState(false);

  const months = [
    "ENERO",
    "FEBRERO",
    "MARZO",
    "ABRIL",
    "MAYO",
    "JUNIO",
    "JULIO",
    "AGOSTO",
    "SEPTIEMBRE",
    "OCTUBRE",
    "NOVIEMBRE",
    "DICIEMBRE",
  ];
  //mes actual
  const actualDate = new Date();
  const [index, setIndex] = useState(actualDate.getMonth());
  const date = new Date(actualDate.getFullYear(), index, 1);
  const firstDay = date.getDay();
  //mes que interactua con el cliente
  const [month, setMonth] = useState(months[index]);
  const daysMonth = new Date(actualDate.getFullYear(), index + 1, 0).getDate();
  const days = [];
  const auxDays = [];

  const selectOrders = (day) => {
    const dayOrders = orders.filter((order) => order.day === day);
    return dayOrders;
  };

  if (firstDay != 0) {
    for (let i = 0; i < firstDay - 1; i++) {
      days.push(0);
    }
  } else {
    days.push(0, 0, 0, 0, 0, 0);
  }

  for (let i = 1; i <= daysMonth; i++) {
    days.push(i);
  }

  const nRows = Math.ceil(days.length / 7);
  const rest = nRows * 7 - days.length;
  for (let i = 0; i < rest; i++) {
    days.push(0);
  }

  for (let i = 0; i < nRows; i++) {
    let arrayAux = days.splice(0, 7);
    auxDays.push(arrayAux);
  }

  useEffect(() => {
    setMonth(months[index]);
  }, [index]);

  const increaseMonth = () => {
    if (index == 11) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const decreaseMonth = () => {
    if (index == 0) {
      setIndex(11);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <section className="section-pedidos">
      <div className="containerCalendar">
        <header className="containerMonth">
          <button onClick={decreaseMonth}> - </button>
          <h2>{month}</h2>
          <button onClick={increaseMonth}> + </button>
        </header>

        <table>
          <thead>
            <tr>
              <td>Lunes</td>
              <td>Martes</td>
              <td>Miercoles</td>
              <td>Jueves</td>
              <td>Viernes</td>
              <td>Sabado</td>
              <td>Domingo</td>
            </tr>
          </thead>
          <tbody>
            {auxDays.map((row) => {
              return (
                <tr>
                  {row.map((day) => {
                    let dayOrders = [];
                    if (day !== 0) {
                      dayOrders = selectOrders(day);
                    }
                    return (
                      <CallendarCell
                        day={day}
                        month={index}
                        year={2023}
                        dayOrders={dayOrders}
                        setSuccess={setSuccess}
                      />
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <OrderList sucess={sucesfulDrag} setSuccess={setSuccess} />
    </section>
  );
}

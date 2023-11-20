import { useEffect, useState } from "react";
import menos from "../../images/minus-solid.svg";
import mas from "../../images/plus-solid.svg";
import InputsColores from "../../components/InputsColores/InputsColores";
import "./Personalizado.css";
import Card from "../../components/Card/Card";
import Select from "../../components/Select/Select";
import InputImage from "../../components/InputImage/InputImage";
import { useDispatch, useSelector } from "react-redux";
import { postEntregaAsync } from "../../redux/Entregas/thunks/postEntrega.async";

export default function Personalizado() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const colors = useSelector((state) => state.colors);
  const date = new Date();
  const [special, setSpecial] = useState(false);
  //atributos de productos
  const [products, setProducts] = useState(1);
  const [coloresElegidos, setColores] = useState([]);
  const [img, setImg] = useState([]);
  const [nombre, setNombre] = useState("");
  const [id_tamaño, setId_tamaño] = useState(null);
  const [lugar, setLugar] = useState("");
  const [horario, setHorario] = useState("");
  const [especificacion, setEspecificacion] = useState("");
  const [dedicatoria, setDedicatoria] = useState("");
  const [fecha, setFecha] = useState(null);
  useEffect(() => {
    if (id_tamaño === "Pequeño") setId_tamaño(1);
    else if (id_tamaño === "Mediano") setId_tamaño(2);
    else if (id_tamaño === "Grande") setId_tamaño(3);
    else return;
  }, [id_tamaño, colors]);
  //-------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    const newColoresElegidos = [];
    coloresElegidos.forEach(({ id_color }) =>
      newColoresElegidos.push(id_color)
    );
    const producto = {
      nombre_producto: nombre,
      precio: 50,
      id_tamaño,
      tipo_producto: 2,
      imagenes: img,
      colores: newColoresElegidos,
    };
    const pedido = {
      nombre_pedido: nombre,
      cantidad: products,
      especificacion,
      dedicatoria,
      status: false,
      colores: newColoresElegidos,
    };
    const entrega = {
      lugar,
      horario,
      fecha,
      total: producto.precio * pedido.cantidad,
    };
    const data = {
      token,
      data: {
        producto: { ...producto },
        pedido: { ...pedido },
        entrega: { ...entrega },
      },
    };
    dispatch(postEntregaAsync(data));
  };
  const deliveryPoints = [
    "Plaza paso limón",
    "Parque del oriente",
    "Convivencia infantil",
  ];
  const sizes = ["Pequeño", "Mediano", "Grande"];
  const schedule = ["1-2 PM", "2-3 PM", "3-4 PM", "4-5 PM", "5-6 PM"];
  const switchSpecial = () => {
    setSpecial(!special);
  };

  return (
    <Card>
      <form className="deliveryForm" onSubmit={handleSubmit}>
        <div className="leftContainer">
          <InputImage setImg={setImg} />
          <InputsColores
            colors={colors}
            setColors={setColores}
            elegidos={coloresElegidos}
          />
        </div>

        <div className="rightContainer">
          <input
            onChange={({ target }) => setNombre(target.value)}
            placeholder="Nombre"
            className="inputText"
            id="nombre"
            required
            name="nombre"
          />

          <textarea
            onChange={({ target }) => setDedicatoria(target.value)}
            placeholder="Dedicatoria (opcional)"
            className="inputText"
            id="dedicatoria"
            name="dedicatoria"
          />

          <textarea
            onChange={({ target }) => setEspecificacion(target.value)}
            placeholder="Especificaciones"
            className="inputText"
            id="especificaciones"
            name="especificaciones"
          />

          <Select
            funcion={setLugar}
            labelText={"Lugar de entrega"}
            id={"lugarEntrega"}
            defaultText={"Seleccione el punto de entrega"}
            options={deliveryPoints}
          />
          <Select
            funcion={setId_tamaño}
            labelText={"Tamaño"}
            id={"tamaño"}
            defaultText={"Seleccione el tamaño"}
            options={sizes}
          />
          <Select
            funcion={setHorario}
            labelText={"Horario"}
            id={"horario"}
            defaultText={"Seleccione el horario de entrega"}
            options={schedule}
          />
          <div>
            <input
              type="checkbox"
              id="pedidoEspecial"
              onClick={switchSpecial}
            />
            <label htmlFor="pedidoEspecial"> Pedido Especial</label>
          </div>

          {special ? (
            <input
              onChange={({ target }) => setFecha(target.value)}
              type="date"
              required
              className="inputDate"
              min={`${date.getFullYear()}-${date.getMonth() + 1}-${
                date.getDate() + 4
              }`}
            />
          ) : (
            <></>
          )}

          <small>
            *los pedidos especiales permiten elegir el dia de entrega de
            preferencia
          </small>

          <div className="contenedorCantidad">
            <p>Cantidad </p>
            <div>
              <button className="iconos" type="button">
                <img
                  src={menos}
                  alt=""
                  className="iconos"
                  onClick={() => {
                    if (products != 1) {
                      setProducts(products - 1);
                    }
                  }}
                />
              </button>
              <p>{products}</p>
              <button className="iconos" type="button">
                <img
                  src={mas}
                  alt=""
                  className="iconos"
                  onClick={() => {
                    setProducts(products + 1);
                  }}
                />
              </button>
            </div>
          </div>

          <button className="whiteButton">ACEPTAR</button>
          {special ? (
            <small>
              *Debes esperar a que Shynicrochet confirme si es posible entregar
              y realizar el producto en la fecha deseada
            </small>
          ) : (
            <small>
              *Debes esperar a que Shinycrochet confirme si es posible realizar
              tu pedido
            </small>
          )}
        </div>
      </form>
    </Card>
  );
}

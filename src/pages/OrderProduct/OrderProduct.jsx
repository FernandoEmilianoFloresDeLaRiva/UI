import { useState } from "react";
import menos from "../../images/minus-solid.svg";
import mas from "../../images/plus-solid.svg";
import InputsColores from "../../components/InputsColores/InputsColores";
import "./OrderProduct.css";
import Card from "../../components/Card/Card";
import Select from "../../components/Select/Select";
import ContainerImages from "../../components/ContainerImages/ContainerImages";
import { postEntregaAsync } from "../../redux/Entregas/thunks/postEntrega.async";
import { useDispatch, useSelector } from "react-redux";

export default function OrderProduct({ token }) {
  //se recupera producto del contexto
  const producto = useSelector((state) => state.producto);
  const dispatch = useDispatch();

  //Atributos de los objetos
  //colores elegidos por usuario
  const [colores, setColores] = useState([]);
  const [products, setProducts] = useState(1);
  const [lugar, setLugar] = useState("");
  const [dedicatoria, setDedicatoria] = useState("");
  const [horario, setHorario] = useState("");
  const [fecha, setFecha] = useState(null);
  //----------------------
  const date = new Date();
  const [special, setSpecial] = useState(false);

  const deliveryPoints = [
    "Plaza paso limón",
    "Parque del oriente",
    "Convivencia infantil",
  ];
  const schedule = ["1-2 PM", "2-3 PM", "3-4 PM", "4-5 PM", "5-6 PM"];

  const switchSpecial = () => {
    setSpecial(!special);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const colorsToSend = colores.map((color) => color.id_color);
    const data = {
      token,
      id_producto: producto.id_producto,
      data: {
        id_productoNew: "2218a179-9a10-4816-a878-291999c8b154",
        pedido: {
          //nombre del producto en contexto
          nombre_pedido: producto.nombre_producto,
          cantidad: products,
          especificacion: "",
          dedicatoria,
          status: true,
          colores: colorsToSend,
        },
        entrega: {
          lugar,
          horario,
          fecha,
          total: producto.precio * products,
        },
      },
    };
    dispatch(postEntregaAsync(data));
  };

  return (
    <Card>
      <form className="deliveryForm" onSubmit={handleSubmit}>
        <div className="leftContainer">
          <ContainerImages
            token={token}
            id={producto.id_producto}
          />

          {/* si el producto tiene colores, pasarlo por props */}
          <InputsColores
            colors={producto.data || []}
            elegidos={colores}
            setColors={setColores}
          />
        </div>

        <div className="rightContainer">
          <h3>{producto.nombre_producto}</h3>
          <div className="tipo_tamaño">
            <h4>Tamaño :</h4> <h5>{producto.nombre_tamaño}</h5>
          </div>
          <textarea
            placeholder="Dedicatoria (opcional)"
            className="inputText"
            id="dedicatoria"
            name="dedicatoria"
            onChange={({ target }) => setDedicatoria(target.value)}
          />

          <Select
            funcion={setLugar}
            labelText={"Lugar de entrega"}
            id={"lugarEntrega"}
            defaultText={"Seleccione el punto de entrega"}
            options={deliveryPoints}
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
              *Debes esperar a que Shinycrochet confirme si es posible realizar
              tu pedido en la fecha deseada
            </small>
          ) : (
            <small>
              *Debes esperar a que Shinycrochet confirme la fecha de tu pedido
            </small>
          )}
        </div>
      </form>
    </Card>
  );
}

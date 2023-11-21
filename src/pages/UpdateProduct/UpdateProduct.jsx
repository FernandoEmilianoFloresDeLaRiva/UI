import { useState, useEffect } from "react";
import InputsColores from "../../components/InputsColores/InputsColores";
import "./UpdateProduct.css";
import Card from "../../components/Card/Card";
import Select from "../../components/Select/Select";
import InputImage from "../../components/InputImage/InputImage";
import { useSelector, useDispatch } from "react-redux";
import { postProductoAsync } from "../../redux/Producto/thunks/postProducto.async";

export default function UpdateProduct({ token }) {
  const dispatch = useDispatch();
  const colors = useSelector((state) => state.colors);
  const sizes = ["Chico", "Mediano", "Grande"];
  //atributos del producto, inicializarlos con objeto que esta dentro del contexto
  const [img, setImg] = useState([]);
  const [coloresElegidos, setColoresElegidos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [id_tamaño, setId_tamaño] = useState(null);
  const [precio, setPrecio] = useState(0);
  useEffect(() => {
    if (id_tamaño === "Chico") setId_tamaño(1);
    else if (id_tamaño === "Mediano") setId_tamaño(2);
    else if (id_tamaño === "Grande") setId_tamaño(3);
    else return;
  }, [id_tamaño, colors]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const objetoData = {
      token,
      data: {
        nombre_producto: nombre,
        precio,
        id_tamaño,
        tipo_producto: 1,
        colores: coloresElegidos,
        imagenes: img,
      },
    };
    dispatch(postProductoAsync(objetoData));
  };
  return (
    <Card>
      <form className="deliveryForm" onSubmit={handleSubmit}>
        <div className="leftContainer">
          <InputImage setImg={setImg} />
          <InputsColores
            colors={colors}
            setColores={setColoresElegidos}
            elegidos={coloresElegidos}
          />
        </div>

        <div className="rightContainer">
          <input
            value={nombre}
            onChange={({ target }) => setNombre(target.value)}
            placeholder="Nombre"
            className="inputText"
            id="nombre"
            required
            name="nombre"
          />

          <input
            placeholder="Precio"
            className="inputText"
            id="precio"
            required
            name="precio"
            type="number"
            onChange={({ target }) => setPrecio(parseInt(target.value))}
          />

          <Select
            funcion={setId_tamaño}
            labelText={"Tamaño"}
            id={"tamaño"}
            defaultText={"Seleccione el tamaño"}
            options={sizes}
          />
          <button className="whiteButton">ACEPTAR</button>
        </div>
      </form>
    </Card>
  );
}

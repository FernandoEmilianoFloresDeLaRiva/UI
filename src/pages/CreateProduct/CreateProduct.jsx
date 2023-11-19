import { useState } from "react";
import menos from "../../images/minus-solid.svg";
import mas from "../../images/plus-solid.svg";
import InputsColores from "../../components/InputsColores/InputsColores";
import "./CreateProduct.css";
import Card from "../../components/Card/Card";
import Select from "../../components/Select/Select";
import InputImage from "../../components/InputImage/InputImage";

export default function CreateProduct(
  {
    // productImages,
  }
) {
  const [products, setProducts] = useState(1);
  const sizes = ["Chico", "Mediano", "Grande"];

  return (
    <Card>
      <form className="deliveryForm">
        <div className="leftContainer">
          <InputImage />
          <InputsColores />
        </div>

        <div className="rightContainer">
          <input
            placeholder="Nombre"
            className="inputText"
            id="nombre"
            required
            name="nombre"
          />

          <textarea
            placeholder="Dedicatoria (opcional)"
            className="inputText"
            id="dedicatoria"
            name="dedicatoria"
          />

          <textarea
            placeholder="Especificaciones"
            className="inputText"
            id="especificaciones"
            name="especificaciones"
          />

          <Select
            labelText={"Tamaño"}
            id={"tamaño"}
            defaultText={"Seleccione el tamaño"}
            options={sizes}
          />

          <div className="contenedorCantidad">
            <p>Cantidad </p>
            <div>
              <button className="iconos" type="button">
                <img
                  src={menos}
                  alt=""
                  className="iconos"
                  onClick={() => {
                    if (products === 0) return;
                    setProducts((prev) => prev - 1);
                  }}
                />
              </button>
              <p>{products}</p>
              <button className="iconos" type="button">
                <img
                  src={mas}
                  alt=""
                  className="iconos"
                  onClick={() => setProducts((prev) => prev + 1)}
                />
              </button>
            </div>
          </div>

          <button className="whiteButton">ACEPTAR</button>
        </div>
      </form>
    </Card>
  );
}

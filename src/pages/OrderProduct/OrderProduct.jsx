import { useState } from "react";
import menos from "../../images/minus-solid.svg";
import mas from "../../images/plus-solid.svg";
import InputsColores from "../../components/InputsColores/InputsColores";
import "./OrderProduct.css";
import Card from "../../components/Card/Card";
import Select from "../../components/Select/Select";
import InputImage from "../../components/InputImage/InputImage";
import ContainerImages from "../../components/ContainerImages/ContainerImages";

export default function OrderProduct({
  personalized,
  // productImages,
  nameProduct,
}) {
  const productImages = [
    "https://images4-a.ravelrycache.com/uploads/loopycathrine/607713742/F8A2A9DB-F8CF-441E-B65D-46108C308F1E_medium2.jpeg",
    "https://i5.walmartimages.com/seo/Piusho-Action-Figure-7-5-GK-Muscle-Psyduck-Vinyl-Figure-Exquisite-Figurine-for-Collection-Home-Decoration-Perfect-Gift-for-Boys-Girls_006c6c76-3a2c-4fe1-b6ac-165ae0965670.1fa78d68c27fa8f4638c084333f85762.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    "https://ae01.alicdn.com/kf/S4ea4065dddfa4b469a3c5686c7dc9e67f/Figura-de-acci-n-de-Pok-mon-Pikachu-Psyduck-Squirtle-juguete-divertido-de-Anime-modelo-de.jpg",
  ];
  const date = new Date();
  const [special, setSpecial] = useState(false);
  const [products, setProducts] = useState(1);

  const deliveryPoints = ["La Mision", "Caminera", "La Salle"];
  const sizes = ["Chico", "Mediano", "Grande"];
  const schedule = ["1-2 PM", "2-3 PM", "3-4 PM", "4-5 PM", "5-6 PM"];

  const switchSpecial = () => {
    setSpecial(!special);
  };

  return (
    <Card>
      <form className="deliveryForm">
        <div className="leftContainer">
          {personalized ? (
            <InputImage />
          ) : (
            <ContainerImages images={productImages} />
          )}

          <InputsColores />
        </div>

        <div className="rightContainer">
          {personalized ? (
            <input
              placeholder="Nombre"
              className="inputText"
              id="nombre"
              required
              name="nombre"
            />
          ) : (
            <h3>{nameProduct}</h3>
          )}

          <textarea
            placeholder="Dedicatoria (opcional)"
            className="inputText"
            id="dedicatoria"
            name="dedicatoria"
          />
          {personalized ? (
            <textarea
              placeholder="Especificaciones"
              className="inputText"
              id="especificaciones"
              name="especificaciones"
            />
          ) : (
            <></>
          )}

          <Select
            labelText={"Lugar de entrega"}
            id={"lugarEntrega"}
            defaultText={"Seleccione el punto de entrega"}
            options={deliveryPoints}
          />
          <Select
            labelText={"Tamaño"}
            id={"tamaño"}
            defaultText={"Seleccione el tamaño"}
            options={sizes}
          />
          <Select
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
          {special && personalized ? (
            <small>
              *Debes esperar a que Shynicrochet confirme si es posible entregar
              y realizar el producto en la fecha deseada
            </small>
          ) : special ? (
            <small>
              *Debes esperar a que Shinycrochet confirme si es posible realizar
              tu pedido
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

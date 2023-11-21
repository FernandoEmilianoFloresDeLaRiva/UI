import ContainerImages from "../../components/ContainerImages/ContainerImages";
import ProductColor from "../../components/ProductColor/ProductColor";
import "./ProductInfo.css";
import { usePedidos } from "../../hooks/usePedidos";
import { useSelector } from "react-redux";
import { deleteLogicoPedido } from "../../services/services/pedidos/deleteLogicoPedido";
import { acceptPedido } from "../../services/services/pedidos/acceptPedido";
import { number } from "prop-types";

export default function ProductInfo() {
  const { token } = useSelector((state) => state.auth);
  const { pedidos, isLoading } = usePedidos();
  const handleDelete = async (id) => {
    try {
      const res = await deleteLogicoPedido(id, token);
      if (typeof res === number) window.alert("error eliminando el producto");
      const { message } = res;
      window.alert(message);
      window.location.reload();
    } catch (err) {
      console.error("Error rechazando pedido ", err);
      throw err;
    }
  };
  const handleAccept = async (id) => {
    try {
      const res = await acceptPedido(id, token);
      if (typeof res === number) window.alert("error aceptando el producto");
      const { message } = res;
      window.alert(message);
      window.location.reload();
    } catch (err) {
      console.error("Error rechazando pedido ", err);
      throw err;
    }
  };
  return (
    <section className="ProductInfo">
      <h1>PEDIDOS</h1>
      {isLoading ? (
        <h1>Cargando...</h1>
      ) : (
        pedidos.map(
          ({
            id_pedido,
            id_producto,
            nombre_pedido,
            precio,
            lugar,
            fecha,
            cantidad,
          }) => {
            return (
              <article className="containerProduct" key={id_pedido}>
                <ContainerImages token={token} id={id_producto} />
                <div className="containerProductInfo">
                  <h3>{nombre_pedido}</h3>
                  <div className="containerFlexInfo">
                    <span>Precio: </span>
                    <span>${precio}.00</span>
                  </div>
                  <ProductColor id={id_pedido} token={token} />
                  <div className="containerFlexInfo">
                    <span>Entrega: </span>
                    <span>{lugar}</span>
                  </div>
                  <div className="containerFlexInfo">
                    <span>Fecha:</span>
                    <span>{fecha}</span>
                  </div>
                  <div className="containerFlexInfo">
                    <span>Cantidad:</span>
                    <span>{cantidad}</span>
                  </div>
                </div>

                <div className="containerButtons">
                  <button
                    className="purpleButton"
                    onClick={() => handleAccept(id_pedido)}
                  >
                    ACEPTAR
                  </button>
                  <button
                    className="purpleButton"
                    onClick={() => handleDelete(id_pedido)}
                  >
                    RECHAZAR
                  </button>
                </div>
              </article>
            );
          }
        )
      )}
    </section>
  );
}

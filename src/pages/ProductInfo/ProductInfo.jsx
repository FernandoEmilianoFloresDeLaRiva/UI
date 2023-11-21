import ContainerImages from "../../components/ContainerImages/ContainerImages";
import ProductColor from "../../components/ProductColor/ProductColor";
import "./ProductInfo.css";
import { usePedidos } from "../../hooks/usePedidos";
import { useSelector } from "react-redux";

export default function ProductInfo({ token }) {
  const { user } = useSelector((state) => state.auth);
  const { id } = user;
  const { isLoading, pedidos } = usePedidos(token, id);

  return (
    <section className="ProductInfo">
      <h1>PEDIDOS</h1>
      {isLoading && <h1>Cargando...</h1>}

      {(!isLoading && !pedidos) || pedidos.length === 0 ? (
        <h1>Sin pedidos</h1>
      ) : (
        <>
          {Array.isArray(pedidos) &&
            pedidos.map((pedido) => {
              return (
                <article className="containerProduct" key={pedido.id_pedido}>
                  <ContainerImages token={token} id={pedido.id_producto} />
                  <div className="containerProductInfo">
                    <h3>{pedido.nombre_pedido}</h3>
                    <div className="containerFlexInfo">
                      <span>Precio: </span>
                      <span>${pedido.precio}.00</span>
                    </div>
                    <ProductColor id={pedido.id_pedido} token={token} />
                    <div className="containerFlexInfo">
                      <span>Entrega: </span>
                      <span>{pedido.lugar}</span>
                    </div>
                    <div className="containerFlexInfo">
                      <span>Fecha:</span>
                      <span>
                        {new Date(pedido.fecha).toLocaleString() ||
                          "Fecha sin asignar"}
                      </span>
                    </div>
                    <div className="containerFlexInfo">
                      <span>Cantidad:</span>
                      <span>{pedido.cantidad}</span>
                    </div>
                  </div>
                </article>
              );
            })}
        </>
      )}
    </section>
  );
}

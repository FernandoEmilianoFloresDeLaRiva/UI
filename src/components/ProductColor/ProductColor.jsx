import { useState } from "react";
import "./ProductColor.css";
import { useEffect } from "react";
import { getColorPedido } from "../../services/services/colors/getColorsPedido";

export default function ProductColor({ id, token }) {
  const [colors, setColor] = useState([]);
  useEffect(() => {
    const getColors = async () => {
      const res = await getColorPedido(id, token);
      const { data } = res;
      setColor(data);
    };
    getColors();
  }, [id]);
  return (
    <div className="productColorContainer">
      <span>Colores: </span>
      <div>
        {colors.map(({ codigo_color }) => {
          console.log(codigo_color);
          return (
            <figure
              className="productColor"
              style={{ backgroundColor: codigo_color }}
            />
          );
        })}
      </div>
    </div>
  );
}

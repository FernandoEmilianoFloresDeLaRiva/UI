import "./InputsColores.css";

export default function InputsColores({ colors = [], setColors, elegidos }) {
  const addColor = (e) => {
    e.target.disabled = true;
    setColors((prev) => [
      ...prev,
      { id_color: e.target.value, codigo_color: e.target.name },
    ]);
  };

  const removeColor = (e) => {
    const colorRemove = e.target.value;
    const auxArryay = elegidos.filter(
      ({ id_color }) => id_color !== colorRemove
    );
    setColors([...auxArryay]);
    const inputColor = document.querySelector(
      `.containerColors input[value='${colorRemove}']`
    );
    inputColor.disabled = false;
  };

  return (
    <div>
      <div className="selectedColors">
        <span>Colores :</span>
        {elegidos.map(({ codigo_color, id_color }) => {
          return (
            <input
              type="checkbox"
              className="inputColor"
              name="colors"
              value={id_color}
              onClick={removeColor}
              id="color1"
              style={{ backgroundColor: codigo_color }}
            />
          );
        })}
      </div>

      <div className="containerColors">
        {colors.map(({ codigo_color, id_color }) => {
          return (
            <input
              type="checkbox"
              className="inputColor"
              name={codigo_color}
              onClick={addColor}
              value={id_color}
              id="color1"
              style={{ backgroundColor: codigo_color }}
            />
          );
        })}
      </div>
    </div>
  );
}

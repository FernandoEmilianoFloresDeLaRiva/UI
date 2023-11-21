import "./Select.css";

export default function Select({
  id,
  labelText,
  defaultText,
  options,
  funcion,
}) {
  return (
    <div className="contenedorPunto">
      <label htmlFor={id}>{labelText}:</label>
      <select
        name={id}
        id={id}
        required
        className="inputEntrega"
        onChange={({ target }) => funcion(target.value)}
      >
        <option value="" disabled selected>
          {defaultText}
        </option>
        {options.map((optionN) => {
          return <option value={optionN}>{optionN}</option>;
        })}
      </select>
    </div>
  );
}

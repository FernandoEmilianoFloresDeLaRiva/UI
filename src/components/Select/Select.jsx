import './Select.css'

export default function Select({id, labelText, defaultText, options}){

    return(
        <div className='contenedorPunto'>
            <label htmlFor={id}>{labelText}:</label>
            <select name={id} id={id} required className='inputEntrega'>
                <option value="" disabled selected>{defaultText}</option>
                {
                    options.map(optionN => { return < option value={optionN}>{optionN}</option>})
                }  
            </select>
        </div>
    )
}
import './ProductColor.css'

export default function ProductColor({colors}){

    return(
        <div className='productColorContainer'>
            <span>Colores: </span>
            <div>
                {
                    colors.map( color => <figure className="productColor" style={{backgroundColor: color}}/>   )
                }
            </div>
        </div>
    )
}
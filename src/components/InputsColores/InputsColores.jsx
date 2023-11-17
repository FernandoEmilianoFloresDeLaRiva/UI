
import { useState } from 'react'
import './InputsColores.css'

export default function InputsColores({colors = ['#ffd200', '#ff8000', '#6c4675', '#f50087', '#cb3234', '#00a86b', '92c5fc', '#393d42', '#2d572c', '#4b3621', '#faf00c']}){

    const [selectedColors, setColors] = useState([])

    const addColor = (e) =>{

        selectedColors.push(e.target.value)
        e.target.disabled = true
        setColors([...selectedColors])
    
    } 

    const removeColor = (e) =>{

        const colorRemove = e.target.value
        const auxArryay = selectedColors.filter((currentColor) => currentColor !== colorRemove)

        setColors([...auxArryay])

        const inputColor = document.querySelector(`.containerColors input[value='${colorRemove}']`)
        inputColor.disabled = false
    }

    return( 
            <div>
                <div className='selectedColors'>
                    <span>Colores :</span>
                    {
                        selectedColors.map( color => {
                            return <input 
                            type="checkbox"
                            className='inputColor' 
                            name='colors'
                            value={color}
                            onClick={removeColor} 
                            id='color1'
                            style={{backgroundColor: color}} 
                            />
                        })
                    }
                </div>

                <div className='containerColors'>
                {
                    colors.map( color =>{
                        return <input 
                        type="checkbox" 
                        className='inputColor' 
                        name='colors'
                        onClick={addColor}
                        value={color} 
                        id='color1'
                        style={{backgroundColor: color}} 
                        />
                    })
                }
                </div>
            </div>
    )
}
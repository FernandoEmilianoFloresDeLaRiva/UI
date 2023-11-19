import './InputImage.css'
import image from '../../images/image-purple.svg'
import { useRef } from 'react'
import { useState } from 'react'
import ContainerImages from '../ContainerImages/ContainerImages'

export default function InputImage(){

    const [existingImage, setExisting] = useState(false)
    const [images, setImages] = useState([])
    const inputImage = useRef(null)

    const previewImage = () =>{

        const inputImages = inputImage.current.files
        if(inputImages.length !== 0){
            for(let i = 0; i < inputImages.length; i++){
                images.push(URL.createObjectURL(inputImages[i]))    
            }
    
            setImages([...images])
            setExisting(true)
            console.log(images)
        }
    }


    return(
        <div className='containerInputImage'>
            {
                !existingImage ? 
                <>
                    <input type="file" id="image" name="image" required accept="image/*" ref={inputImage} onChange={previewImage} multiple/>
                    <label htmlFor="image">
                        <img src={image} alt="imagen" />
                        Foto de tu idea
                    </label>
                </>
                :   
                <ContainerImages images={images}/>
                

            }
        </div>
    )
}
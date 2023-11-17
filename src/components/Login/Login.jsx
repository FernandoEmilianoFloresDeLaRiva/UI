import { Link } from 'wouter'
import logo from '../../images/logo-blanco.jpg'
import './Login.css'
import { useState } from 'react'

export default function Login() {

    const [register, setRegistrer] = useState(false)

    return (
        <form className='login'>

            <img src={logo} />

            <input type="email" placeholder='Correo' required/>
            <input type="password" placeholder='Contrasena' required/>
            {
                !register ? 
                <span className='register' onClick={ () => setRegistrer(true)}>Aun no te has registrado?</span>
                :
                <span className='register' onClick={ () => setRegistrer(false)}>Ya estas registrado?</span>
            }

            <button className='purpleButton'>
                {
                    !register ?
                    'INICIAR SESION'
                    :
                    'REGISTRAR'
                }
            </button>


        </form>

    )
}
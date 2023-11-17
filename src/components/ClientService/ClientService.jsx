import Contact from "../Contact/Contact";
import './ClientService.css'


export default function ClientService(){

    return(
        <section className="containerClientService">
            <h2>SERVICIO A CLIENTES</h2>
            <div>
                <article className="containerContacts">
                    <Contact image="phone" contact="961 172 7213" contactLink="tel:9611727213"/>
                    <Contact image="envelope" contact="ShinyCrochet@gmail.com" contactLink='mailto:ShinyCrochet@gmail.com' />
                    <Contact image="instagram" contact="@ShinyCrochet" contactLink="" />
                </article>
                <article className="containerMessage">
                    <h3>Un pequeño mensaje: </h3>
                    <hr />
                    <p>
                        Hola, soy Shiny, aqui tienes mi lista de contacto para poder comunicarme conmigo
                        y compartirme dudas o problemas con los productos o pedidos. <br /> <br />
                        No dudes en contactarme.
                    </p>
                </article>
            </div>
            
            
            
        </section>
    )
}
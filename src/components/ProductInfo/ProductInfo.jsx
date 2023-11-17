import image from '../../images/image-purple.svg'
import ContainerImages from '../ContainerImages/ContainerImages'
import ProductColor from '../ProductColor/ProductColor'
import './ProductInfo.css'

export default function ProductInfo({admin, usuario}){

    const products = [{
        name: 'Psyduck',
        productImages: ['https://images4-a.ravelrycache.com/uploads/loopycathrine/607713742/F8A2A9DB-F8CF-441E-B65D-46108C308F1E_medium2.jpeg', 
        'https://i5.walmartimages.com/seo/Piusho-Action-Figure-7-5-GK-Muscle-Psyduck-Vinyl-Figure-Exquisite-Figurine-for-Collection-Home-Decoration-Perfect-Gift-for-Boys-Girls_006c6c76-3a2c-4fe1-b6ac-165ae0965670.1fa78d68c27fa8f4638c084333f85762.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
        'https://ae01.alicdn.com/kf/S4ea4065dddfa4b469a3c5686c7dc9e67f/Figura-de-acci-n-de-Pok-mon-Pikachu-Psyduck-Squirtle-juguete-divertido-de-Anime-modelo-de.jpg'],
        price: 250,
        color: ['#e45f67', '#000', '#e6f'],
        deliveryPoint: 'La Mision',
        date: '12-12-23',
        quantity: 2
    },
    {
        name: 'Pikachu',
        productImages: ['https://m.media-amazon.com/images/I/61CSIeRXieL._UF1000,1000_QL80_.jpg', 
        'https://amigurumi.meteoorfiles.com/images/amigurumi-62Pikachu-Pokemon.jpeg'],
        price: 300,
        color: ['#f4dc26', '#e92929', '#5c3613', '#000']

    }
    ]

    const getUserProducts = () =>{
        //las peticiones necesarias para obtener los pedidos de un usuario
    }

    return(
        <section className="ProductInfo">
            <h1>PEDIDOS</h1>

            {
                    products.map( product =>{

                         return <article className="containerProduct">
                
                            <ContainerImages images={product.productImages} />
                            <div className='containerProductInfo'>
                                <h3>{product.name}</h3>
                                <span> Dedicatoria: </span>
                                <div className='containerFlexInfo'>
                                    <span>Precio: </span>
                                    <span>${product.price}.00</span>
                                </div>
                                <ProductColor colors={product.color}/>
                                <div className='containerFlexInfo'>
                                    <span>Entrega: </span>
                                    <span>{product.deliveryPoint}</span>
                                </div>
                                <div className='containerFlexInfo'>   
                                    <span>Fecha:</span>
                                    <span>{product.date}</span>
                                </div>
                                <div className='containerFlexInfo'>
                                    <span>Cantidad:</span>
                                    <span>{product.quantity}</span>
                                </div>
                            </div>

                            {
                                admin ?
                                <div className='containerButtons'>
                                    <button className='purpleButton'>ACEPTAR</button>
                                    <button className='purpleButton'>RECHAZAR</button>
                                </div>:
                                <></>
                            }
                        </article>

                        

                    })
                }
            
            
        </section>
    )
}
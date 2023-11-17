import { Route } from 'wouter';
import './App.css';
import NavHeader from './components/NavHeader/NavHeader';
import OrderProduct from './components/OrderProduct/OrderProduct';
import ClientService from './components/ClientService/ClientService';
import ProductInfo from './components/ProductInfo/ProductInfo';
import Calendar from './components/Calendar/Calendar';
import Login from './components/Login/Login';




function App() {

  const testingImages = ['https://images4-a.ravelrycache.com/uploads/loopycathrine/607713742/F8A2A9DB-F8CF-441E-B65D-46108C308F1E_medium2.jpeg', 
                          'https://i5.walmartimages.com/seo/Piusho-Action-Figure-7-5-GK-Muscle-Psyduck-Vinyl-Figure-Exquisite-Figurine-for-Collection-Home-Decoration-Perfect-Gift-for-Boys-Girls_006c6c76-3a2c-4fe1-b6ac-165ae0965670.1fa78d68c27fa8f4638c084333f85762.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
                          'https://ae01.alicdn.com/kf/S4ea4065dddfa4b469a3c5686c7dc9e67f/Figura-de-acci-n-de-Pok-mon-Pikachu-Psyduck-Squirtle-juguete-divertido-de-Anime-modelo-de.jpg']

  return (
    <div className="App"> 

      <Login />
      
      <NavHeader/>
      <Route 
      component={ClientService}
      path='/contacto'
      />
      <Route 
      component={Calendar}
      path='/calendario'
      />
      <Route 
      component={ProductInfo}
      path='/pedidos'
      />
      
      <OrderProduct personalized={false} nameProduct={'Psyduck'} productImages={testingImages}/>
      <OrderProduct personalized={true} />
      <ProductInfo 
      nameProduct={"nombre del producto"} 
      price={0} 
      number={1}
      deliveryPoint={"La Mision"}
      date={"31-01-01"}
      />
      <ProductInfo admin={true}/>
    </div>
  );
}

export default App;

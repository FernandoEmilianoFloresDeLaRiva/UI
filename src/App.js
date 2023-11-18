import { Route } from "wouter";
import NavHeader from "./components/NavHeader/NavHeader";
import OrderProduct from "./components/OrderProduct/OrderProduct";
import ClientService from "./components/ClientService/ClientService";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import Calendar from "./components/Calendar/Calendar";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <ProductInfo
        nameProduct={"nombre del producto"}
        price={0}
        number={1}
        deliveryPoint={"La Mision"}
        date={"31-01-01"}
      />
    </div>
  );
}

export default App;

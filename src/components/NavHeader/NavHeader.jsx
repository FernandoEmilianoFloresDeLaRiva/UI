import "./NavHeader.css";
import { Link } from "wouter";
import logo from "../../images/logo-blanco.jpg";
import { useRef } from "react";
import bars from "../../images/bars-solid.svg";

export default function NavHeader() {
  const myRef = useRef();
  const showMenu = () => {
    const display = myRef.current.style.display;
    display === "inline-block"
      ? (myRef.current.style.display = "none")
      : (myRef.current.style.display = "inline-block");
    console.log(display);
  };

  return (
    <nav className="navHeader">
      <ul>
        <li className="logo">
          <Link to="/home" className="link">
            <img src={logo} alt="" />
            <h1>SHINYCROCHET</h1>
          </Link>
          <button onClick={showMenu} className="buttonMenu">
            <img src={bars} alt="" />
          </button>
        </li>

        <span ref={myRef}>
          <li>
            <Link to="/contacto" className="link">
              CONTACTO
            </Link>
          </li>
          <li>
            <Link to="/catalogo" className="link">
              CATÁLOGO
            </Link>
          </li>
          <li>
            <Link to="/calendario" className="link">
              CALENDARIO
            </Link>
          </li>
          <li>
            <Link to="/pedidos" className="link">
              PEDIDOS
            </Link>
          </li>
        </span>
      </ul>
    </nav>
    /*<nav className='menu-items'>
            <div className="brand-image">
                <h4 className="brand-text">Logo <span className="brand">brand</span></h4>
            </div>
            <div className="items">
                <a href="" className='menu-item active'>Inicio</a>
                <a href="" className='menu-item'>Servicio a clientes</a>
                <a href="" className="menu-item">Catalogo</a>
                <a href="" className="menu-item">Shinycrochet</a
                ><a href="" className="menu-item">Calendario</a>
                <a href="" className="menu-item">Entrega</a>
            </div>
            
        </nav>*/
  );
}

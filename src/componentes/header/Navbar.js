import 'bootstrap/dist/css/bootstrap.min.css';
/* import Button from 'react-bootstrap/Button'; */
/* import { BsFillCartFill } from "react-icons/bs";  ME DIO ERROR LA INSTALACION DE REACT-ICONS*/


const  Navbar = (props) =>{

return (

        <header id= "main-header">
        <nav className="navbar navbar-expand-lg navbar-light header--color">
        <a className="navbar-brand" href="index.html">
          <img src="https://i.ibb.co/1RDMJgg/Logo-Index.jpg" width="70" height="70" alt="" className="header--color header--logo img-fluid"/>
        </a>
    
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse header--color" id="navbarScroll"/>
          <ul className="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll header--color">
            <li className="nav-item">
              <a className="nav-link header--color" href="./" >HOME</a>
            </li>
            <li className="nav-item">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle header--color" href="#" id="navbarScrollingDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                 PRODUCTOS
                </a>
                <ul className="dropdown-menu header--color" aria-labelledby="navbarScrollingDropdown">
                  <li><a className="dropdown-item header--color" href="#">Suave</a></li>
                  <li><a className="dropdown-item header--color" href="#">Espresso</a></li>
                  <li><a className="dropdown-item header--color" href="#">Especiales</a></li>
                </ul>
              </li>
            </li>
            <li className="nav-item">
              <a className="nav-link header--color" href= "#" >CONTACTO</a>
            </li>
        </ul>
        <span className="material-icons estiloCarrito header--color">
        SHOPPING_CART
        </span>
          </nav>
          </header>
        )

}

export default Navbar;
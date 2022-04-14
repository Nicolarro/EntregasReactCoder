import "bootstrap/dist/css/bootstrap.min.css";
import { BsFillCartFill } from "react-icons/bs";
import { useCarrito } from "../../contexto/CarritoContexto";
import { Link } from "react-router-dom";

const CardWidget = () => {

  const {carritoCantidad} = useCarrito()

  return (

    <Link to={"/carrito"} className="cart-widget">
      
      <BsFillCartFill  className = "widgetEstilo"/>
      <span>{carritoCantidad() || ''}</span> 
  </Link>
  );
};

export default CardWidget;

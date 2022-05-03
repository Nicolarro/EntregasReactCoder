import React from "react";
import { useCarrito } from "../contexto/CarritoContexto";
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const Carrito = () => {

  const navigate = useNavigate();

  const { carrito, carritoTotal, vaciarCarrito, borrarItemCarrito } =
    useCarrito();
    

  if (carrito.length === 0) {
    return (
      <div className="container my-5">
        <h2>Tu carrito está vacío</h2>
        <hr />
        <h5>Vuelve al shop para comprar</h5>
        <Link to={"/"} className="btn btn-primary">
          VOLVER
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-5 elementos-carrito">
      <h2>Tu compra</h2>
      <hr />
      {carrito.map((item) => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <p className = "parrafo-carrito">Cantidad: {item.cantidad}</p>
          <h5 className="parrafo-carrito">Precio: ${item.price * item.cantidad}</h5>
          <button
            className="btn btn-danger"
            onClick={ () => borrarItemCarrito(item.id)}
          >
            <BsFillTrashFill />
          </button>
          <hr />
        </div>
      ))}

      <h3>TOTAL: ${carritoTotal()}</h3>
      <hr />
      <button className="btn btn-danger vaciar" onClick={vaciarCarrito}>
        Vaciar carrito
      </button>
      <button
        value = "Comprar"
        className="btn btn-btn-btn-success mx-3"
        onClick={
          () => navigate(`/checkout`)}>     
        Terminar Compra
      </button>
    </div>
  );
};

export default Carrito;

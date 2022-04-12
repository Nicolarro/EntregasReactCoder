import React from "react";
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from "react-router-dom"

const Cart= () => {

    if (cart.length === 0) {
        return  <div className="container my-5">
                    <h2>Tu carrito está vacío</h2>
                    <hr/>
                    <h5>Vuelve al shop para comprar</h5>
                    <Link to={"/"} className="btn btn-primary">VOLVER</Link>
                </div>

    return (
      <div>





      </div>
    );
  };
  
  export default Cart;
  
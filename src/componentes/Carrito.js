import React from "react";
/* import { useContext } from "react" */
import { useCarrito } from "../contexto/CarritoContexto"
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from "react-router-dom"

const Carrito= () => {

  const {carrito, carritoTotal, limpiarCarrito, borrarItemCarrito} = useCarrito()

    if (carrito.length === 0) {

        return  <div className="container my-5">
                    <h2>Tu carrito está vacío</h2>
                    <hr/>
                    <h5>Vuelve al shop para comprar</h5>
                    <Link to={"/"} className="btn btn-primary">VOLVER</Link>
                </div>
    }

      return (

        <div className="container my-5">
        <h2>Tu compra</h2>
        <hr/>
        {
                          carrito.map((item) => (
                            <div key={item.id}>
                                <h4>{item.title}</h4>
                                <p>Cantidad: {item.cantidad}</p>
                                <h5>Precio: ${item.price * item.cantidad}</h5>
                                <button 
                                    className="btn btn-danger"
                                    onClick={() => borrarItemCarrito(item.id)}
                                >
                                    <BsFillTrashFill/>
                                </button>
                                <hr/>
                            </div>
                        ))
        }

                      <h3>TOTAL: ${carritoTotal()}</h3>
            <hr/>
            <button className="btn btn-danger" onClick={limpiarCarrito}>Vaciar carrito</button>

      </div>
      )

  }
  
  export default Carrito;
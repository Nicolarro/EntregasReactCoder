import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css'
/* import { Link } from "react-router-dom"; */
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const ItemCount = ({stock, initial, contador, setContador, agregarItems}) =>{


    const navegarProductos = useNavigate();

    const handleNavigate = () => {
        navegarProductos(-1)
    }

    const sumar = () =>{
         (contador < stock) && setContador(contador + 1)
         console.log(contador)
        }


    const restar = () => {
          (contador > 0 && setContador(contador - 1))
          console.log(contador)
                }

            const resetear = () => {
                setContador(0)

            }

/*             const agregarProducto = (contador) => {
                console.log(contador)
                agregarItems(contador,stock)
                setContador(initial)
            }
 */
        return(
                <>   
                    <br/>
                    <br/>
                    <h2>CARRITO DE COMPRAS</h2>
                    <p>Cantidad Agregada:{contador}</p>
                    <button onClick={sumar}
                    disabled={contador === stock}
                    > SUMAR</button>
                    <br/>
                    <button onClick={restar}> RESTAR</button>
                    <br/>
                    <button onClick={resetear}> RESETEAR</button>
                    <button onClick={()=>agregarItems(contador)} disabled={contador ===0}> AGREGAR AL CARRITO</button>
                    <button onClick={handleNavigate}> SEGUIR COMPRANDO</button>
                    <br/>   
                </>
            )

            }

export default ItemCount;
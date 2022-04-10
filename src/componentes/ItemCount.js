import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";
import { useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) =>{

    let [contador, setContador] = useState(initial)

    const sumar = () =>{
        if (contador === stock){
            toast("No hay mas stock")
            return
        }
        else
        {
            setContador(contador +1 )
            console.log(contador)
        }
    }

    const restar = () => {
                if(contador === 0){
                    toast("La cantidad a comprar no puede ser menor a 1")
                    return
                }
                else
                {
                setContador(contador - 1)}
            }

            const resetear = () => {
                setContador(0)

            }

            const agregarProducto = () => {
                console.log(contador)
                onAdd(contador,stock)
                setContador(initial)
            }

            return (
                <>   
                    <p>Contador Actual:{contador}</p>
                    <button onClick={sumar}> SUMAR</button>
                    <ToastContainer />
                    <button onClick={restar}> RESTAR</button>
{                    <ToastContainer />}
                    <button onClick={resetear}> RESETEAR</button>
{/*                     <Link to={`/carrito`}/> */}
                    <button onClick={()=>agregarProducto(contador)}> AGREGAR AL CARRITO</button>
                    <br/>   
                </>
            )

            }

export default ItemCount;
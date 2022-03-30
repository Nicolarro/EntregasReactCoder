import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate } from "react-router-dom";


const ItemDetail = ({prod}) => {

 /*    const {title, price, pictureUrl} = detalle */

    const navigate = useNavigate()

    const handleNavigate = () => {

        navigate(-1)
    }


    return (

        <div>
            <h2>PRODUCTO</h2>
            <h3>{prod.title}</h3>
            <img src={prod.pictureUrl} alt={prod.title} height = "50px" width = "50px" border="0"/> 
            <p>Precio:{prod.price}</p>
            <button onClick={handleNavigate}>Volver </button>  

        </div>

)
}


export default ItemDetail;
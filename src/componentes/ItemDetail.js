import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate } from "react-router-dom";


const ItemDetail = ({detalle}) => {

    const {title, price, pictureUrl} = detalle

    const navigate = useNavigate()

    const handleNavigate = () => {

        navigate(-1)
    }


    return (

        <div>
            <h2>PRODUCTO</h2>
            <h3>{title}</h3>
            <img src={pictureUrl} alt={title} height = "50px" width = "50px" border="0"/> 
            <p>Precio:{price}</p>
            <button onclick={handleNavigate}>Volver </button>  

        </div>

)
}


export default ItemDetail;
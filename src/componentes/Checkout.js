import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import {useCarrito} from '../contexto/CarritoContexto'
import ItemList from './ItemList';

const  Checkout = () => {
    
const [nombre , setNombre] = useState("")

const [cart,cartTotal] = useCarrito()


    const navigate = useNavigate();

        const handleNavigate = () => {
      navigate(-1);
    };

    const handleSubmit = (e) => {
     e.preventDefault()
     console.log()
  
        const orden =  {

          items:cart,
          total: cartTotal(),
            comprador : {
              nombre: nombre,
              email: email,
              tel: tel,
          }

        
        }

        console.log(orden)

  return (
    <div>
    <br />
    <h3 className= ""> CHECKOUT </h3>
    <br />
    <form onSubmit={handleSubmit}>

        <input  className = "form-control my-3" type={'text'}   value = {nombre}/>
        <input  className = "form-control my-3" type= {'email'}  value = {email} />
        <input  className = "form-control my-3" type= {'tel'}  value = {tel} />

    </form>

    <button className="btn btn-primary" onClick={{}}> ENVIAR </button>
    <button className="btn btn-primary" onClick={handleNavigate}> VOLVER </button>
    </div>
    
  )
}
}

export default Checkout;
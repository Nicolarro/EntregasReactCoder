import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { CarritoContexto } from "../contexto/CarritoContexto";
import { Navigate } from "react-router-dom";
import { generarOrden } from "../../firebase/generarOrden";
import { ThankYou } from "./ThankYou";
import { validar } from "./validar";
import { collection, db, addDoc, TimeStamp, doc, getDoc,updateDoc } from "../../firebase/firebase";
                  
const Checkout = () => {
  const { carrito, totalCarrito, vaciarCarrito } = useContext(CarritoContexto);

  const [orderId, setOrderId] = useState(null);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };

  const [values, setValues] = useState({
    nombre: "",
    email: "",
    tel: "",
  });

  const handleValueChange = (e) => {
    console.log(e.target.value);

    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validar(values) &&
      generarOrden(values, carrito, totalCarrito, setOrderId, vaciarCarrito);

      console.log(generarOrden)
    }
  

    const orden = {
      items: carrito,
      total: totalCarrito(),
      comprador: {
        ...values,
      },
      fechayHora: TimeStamp(),
      // segun conrado timestamp.fromDate(new Date()) VERLO //
    };

    const orderDb = collection(db, "orders");

    addDoc(orderDb, orden)
    .then((resp) => {
    
     carrito.forEach((item) => {
         const docRef = doc(db, 'productos', item.id)
         getDoc(docRef)
             .then((dbDoc) => {
                 updateDoc(docRef, {stock: dbDoc.data().stock - item.cantidad})
             })
     })
    })

    if (orderId) {
      return <ThankYou order={orderId} />;
    }

    if (carrito.length === 0) {
      return <Navigate to="/" />;
    }

    return (
      <div>
        <br />
        <h3> CHECKOUT </h3>
        <br />
        <form onSubmit={handleSubmit}>
          <input
            className="form-control my-3"
            type={"text"}
            placeholder="Ingresar Nombre"
            value={values.nombre}
            onChange={handleValueChange}
            autoComplete="off"
          />
          <input
            className="form-control my-3"
            type={"email"}
            value={values.email}
            placeholder="Ingresar email"
            onChange={handleValueChange}
            autoComplete="off"
          />
          <input
            className="form-control my-3"
            type={"tel"}
            value={values.tel}
            placeholder="Ingresar Telefono"
            onChange={handleValueChange}
            autoComplete="off"
          />
        </form>

        <button className="btn btn-primary" type="submit">
          ENVIAR
        </button>
        <button className="btn btn-primary" onClick={handleNavigate}>
          VOLVER
        </button>
      </div>
    );
  };


export default Checkout;

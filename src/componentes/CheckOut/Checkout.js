import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCarrito } from "../../contexto/CarritoContexto";
import { Navigate } from "react-router-dom";
import { MensajeCompra } from "../CheckOut/MensajeCompra";
import swall from 'sweetalert';

import {
  collection,
  addDoc,
  doc,
  getDoc,
  updateDoc,
  Timestamp,
} from "firebase/firestore";
import { db } from "../../firebase/config.js";

const Checkout = () => {
  const { carrito, carritoTotal, vaciarCarrito } = useCarrito();

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

    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const orden = {
      items: carrito,
      total: carritoTotal(),
      comprador: {
        ...values,
      },
      fechayHora: Timestamp.fromDate(new Date()),
    };

    const orderDb = collection(db, "ordenes");


    carrito.forEach(
      (item) => {
        const docRef = doc(db, "productos", item.id);
        getDoc(docRef).then((dbDoc) => {
          if (doc.data().stock >= item.cantidad) {
            updateDoc(docRef, { stock: dbDoc.data().stock - item.cantidad });

            console.log(item.stock);
          } 
            else {
            swall({title:"Stock Insuficiente",
            text:"No hay stock de este item",
            icon:"error",
            button: "Aceptar",
            timer: 2000})
          }
        });
      },

      addDoc(orderDb, orden).then((doc) => {
        setOrderId(doc.id);
        vaciarCarrito();
      })
    );
  };

  if (orderId) {
    return <MensajeCompra order={orderId} />;
  }

  if (carrito.length === 0) {

    return <Navigate to="/" />;
  }

  return (
    <div>
      <br />
      <h3> CHECKOUT </h3>
      <br />
      <form onSubmit={handleSubmit} className="formulario">
        <input
          className="form-control my-3"
          type={"text"}
          name="nombre"
          placeholder="Ingresar Nombre"
          value={values.nombre}
          onChange={handleValueChange}
          autoComplete="off"
          required
        />
        <input
          className="form-control my-3"
          type={"email"}
          name="email"
          value={values.email}
          placeholder="Ingresar email"
          onChange={handleValueChange}
          autoComplete="off"
          required
        />
        <input
          className="form-control my-3"
          type={"tel"}
          name="tel"
          value={values.tel}
          placeholder="Ingresar Telefono"
          onChange={handleValueChange}
          autoComplete="off"
          required
        />

        <button className="btn btn-primary" type="submit">
          ENVIAR
        </button>
      </form>

      <button className="btn btn-primary" onClick={handleNavigate}>
        VOLVER
      </button>
    </div>
  );
};

export default Checkout;

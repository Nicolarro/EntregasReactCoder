import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCarrito } from "../../contexto/CarritoContexto";
import { Navigate } from "react-router-dom";
/* import { generarOrden } from "../../firebase/generarOrden"; */
import { MensajeCompra } from "../CheckOut/MensajeCompra";
/* import { validar } from "./Validacion"; */
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
    console.log(e.target.value);

    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /*     validar(values) && */
    /*       generarOrden(values, carrito, totalCarrito, setOrderId, vaciarCarrito); */

    /*       console.log(generarOrden) */

    const orden = {
      items: carrito,
      total: carritoTotal(),
      comprador: {
        ...values,
      },
      fechayHora: Timestamp.fromDate(new Date()),
      // segun conrado timestamp.fromDate(new Date()) VERLO //
    };

    const orderDb = collection(db, "ordenes");

    console.log(orderDb);

    carrito.forEach(
      (item) => {
        const docRef = doc(db, "productos", item.id);
        getDoc(docRef).then((dbDoc) => {
          if (doc.data().stock >= item.cantidad) {
            updateDoc(docRef, { stock: dbDoc.data().stock - item.cantidad });
            console.log(item.stock);
          } else {
            alert("No hay stock de este item");
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
      <form onSubmit={handleSubmit}>
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

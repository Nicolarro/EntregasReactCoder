import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { useCarrito } from "../contexto/CarritoContexto";
import { CarritoContexto } from "../contexto/CarritoContexto";
import ItemList from "./ItemList";

const Checkout = () => {
  const { carrito, totalCarrito, vaciarCarrito } = useContext(CarritoContexto);

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
    console.log();

    const orden = {
      items: carrito,
      total: totalCarrito(),
      comprador: {
        ...values,
      },
    };


    
    console.log(orden);
  };

  return (
    <div>
      <br />
      <h3> CHECKOUT </h3>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          className="form-control my-3"
          type={"text"}
          value={values.nombre}
          onChange={handleValueChange}
        />
        <input
          className="form-control my-3"
          type={"email"}
          value={values.email}
          onChange={handleValueChange}
        />
        <input
          className="form-control my-3"
          type={"tel"}
          value={values.tel}
          onChange={handleValueChange}
        />
      </form>

      <button className="btn btn-primary" type="submit">
        {" "}
        ENVIAR{" "}
      </button>
      <button className="btn btn-primary" onClick={handleNavigate}>
        {" "}
        VOLVER{" "}
      </button>
    </div>
  );
};

export default Checkout;

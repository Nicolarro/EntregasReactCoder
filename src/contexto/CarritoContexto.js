import React from "react";
import { createContext, useContext, useState } from "react";

export const CarritoContexto = createContext([]);

export const CarritoProvider = ({ children }) => {


  const [carrito, setCarrito] = useState([]);

 

  const agregarAlCarrito = (producto) => {

    setCarrito([...carrito, producto]);
 
   };
 

  const carritoCantidad = () => {   //acumulador
    return carrito.reduce((acc, prod) => acc += prod.cantidad, 0);
  };


  const borrarItemCarrito = (item) => { 
   setCarrito( carrito.filter((prod) => prod.id !== item.id)
    )

  };

  const carritoTotal = () => {
    return carrito.reduce(
      (acc, prod) => acc += prod.price * prod.cantidad,0
    );
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };


  const estaEnCarrito = (id) => {
    return carrito.find((prod) => prod.id === id);


  };

  return (
    <CarritoContexto.Provider
      value={{
        carrito,
        agregarAlCarrito,
        estaEnCarrito,
        carritoCantidad,
        carritoTotal,
        vaciarCarrito,
        borrarItemCarrito,
      }}
    >
      {children}
    </CarritoContexto.Provider>
  );
};

export default CarritoProvider;

export const useCarrito = () => useContext(CarritoContexto); //para no hacer el useContext en cada componente

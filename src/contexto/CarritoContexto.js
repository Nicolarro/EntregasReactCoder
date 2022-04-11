import React from "react";
import { createContext, useContext, useState } from "react";
import { useParams } from "react-router-dom";



export const CarritoContexto = createContext([]);

export const CarritoProvider = ({ children }) => {

  const {id} = useParams()

  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {

    console.log("Soy el Provider");
    console.log( producto);
    setCarrito([...carrito, producto]);

  };

  const carritoCantidad = () => {   //acumulador
    return carrito.reduce((acc, prod) => acc += prod.cantidad, 0);
  };


  const borrarDelCarrito = (item) => {
    const nuevo_carrito = setCarrito(
      carrito.filter((e) => e.item.id !== id)
    )
    console.log(nuevo_carrito);
  };

  

  const carritoTotal = () => {
    return carrito.reduce(
      (acc, prod) => (acc += prod.price * prod.cantidad),
      0
    );
  };

  const limpiarCarrito = () => {
    setCarrito([]);
  };


  const estaEnCarrito = (id) => {
    return carrito.find((producto) => producto.id === id);
  };

  return (
    <CarritoContexto.Provider
      value={{
        carrito,
        agregarAlCarrito,
        estaEnCarrito,
        carritoCantidad,
        carritoTotal,
        limpiarCarrito,
        borrarDelCarrito,
      }}
    >
      {children}
    </CarritoContexto.Provider>
  );
};

export default CarritoProvider;

export const useCarrito = () => {useContext(CarritoContexto)} //para no hacer el useContext en cada componente

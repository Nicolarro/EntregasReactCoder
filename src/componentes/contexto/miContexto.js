import React from "react";
import { createContext, useContext, useState } from "react";

export const Contexto = createContext();

export const useContexto = () => {
  return useContext(Contexto);
};

export const CartProvider = ({ children }) => {

  const [carrito, setCarrito] = useState([]);
  const [cantidad, setCantidad] = useState(0);

  const agregarAlCarrito = (cantidad, producto) => {
    console.log("Soy el Provider");
    console.log(cantidad, producto);
    setCarrito([...carrito, producto]);
  };

  const cartQuantity = () => {
    return carrito.reduce((acc, prod) => (acc += prod.cantidad), 0);
  };

  const borrarDelCarrito = (item, cantidad) => {
    const nuevo_carrito = setCarrito(
      carrito.filter((e) => e.item.id !== item.id)
    );
    console.log(nuevo_carrito);
    setCarrito(cantidad);
  };

  const cartTotal = () => {
    return carrito.reduce(
      (acc, prod) => (acc += prod.price * prod.cantidad),
      0
    );
  };

  const limpiarCarrito = () => {
    setCarrito([]);
  };

  const isInCarrito = (id) => {
    return carrito.find((producto) => producto.id === id);
  };

  return (
    <Contexto.Provider
      value={{
        carrito,
        agregarAlCarrito,
        isInCarrito,
        cartQuantity,
        cartTotal,
        limpiarCarrito,
        borrarDelCarrito,
      }}
    >
      {children}
    </Contexto.Provider>
  );
};

export default CartProvider;

import React from "react";
import { createContext, useContext, useState } from "react";
import swall from "sweetalert";

export const CarritoContexto = createContext([]);

export const CarritoProvider = ({ children }) => {

  const [carrito, setCarrito] = useState([]);


  const agregarAlCarrito = (producto) => {
    swall({
      title: "Agregar Producto",
      text: "Esta por agregar este producto. Quiere continuar?",
      icon: "warning",
      buttons: true,
    })
      .then(respuesta=> {
      if(respuesta){
        swall({text: "Producto Agregado con exito", icon: "success"});
    setCarrito([...carrito, producto]);
  }
})
  };

  const carritoCantidad = () => {
    return carrito.reduce((acc, prod) => (acc += prod.cantidad), 0);
  };

  const borrarItemCarrito = (id) => {
    swall({
      title: "Borrar Item",
      text: "Esta por borrar este producto. Quiere continuar?",
      icon: "warning",
      buttons: true,
    })
    .then(respuesta=> {
      if(respuesta){
        swall({text: "Producto Borrado con exito", icon: "success"});
        setCarrito(carrito.filter((prod) => prod.id !== id));
      }
  })
}

  const carritoTotal = () => {
    return carrito.reduce(
      (acc, prod) => (acc += prod.price * prod.cantidad),
      0
    );
  };

  const vaciarCarrito = () => {
    swall({
      title: "Borrar Item",
      text: "Esta por borrar todos los productos. Quiere continuar?",
      icon: "warning",
      buttons: true
    })
      .then(respuesta=> {
      if(respuesta){
        swall({text: "Productos Borrados con exito", icon: "success"})
    setCarrito([])
  }})};

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

export const useCarrito = () => useContext(CarritoContexto);

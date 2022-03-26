import React from "react";
import "./App.css";
import Navbar from "./componentes/header/Navbar";
import ItemListContainer from "./componentes/header/ItemListContainer";
import ItemCount from "./componentes/ItemCount";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
/* import {BrowserRouter, Routes, Route} from "react-router-dom"; */



function App() {

  const greeting = "Este es el container";

  const initial = 1;
  const stock = 10;
  const onAdd = (contador) => {
    toast(contador + " PRODUCTOS AGREGADOS AL CARRITO");
  };

  return (


    <div>
      <Navbar />
      <br />
      <main className="titulo"> ECOMMERCE TIENDA CAFE</main>
      <ItemListContainer greeting={greeting} />
      <br />
      <br />
      <h2>CARRITO DE COMPRAS</h2>
      <ItemCount initial={initial} stock={stock} onAdd={onAdd} />

      <br />
    </div>
  );
}

export default App;

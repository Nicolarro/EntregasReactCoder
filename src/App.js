import React from "react";
/* import logo from './logo.svg'; */
import './App.css';
import Navbar from "./componentes/header/Navbar";
import ItemListContainer from "./componentes/header/ItemListContainer";
import ItemCount from "./componentes/ItemCount";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


function App() {

  const greeting = "Este es el container"

  const initial = 1;
  const stock = 10;
  const onAdd = (contador)=> {
  toast(contador + " PRODUCTOS AGREGADOS AL CARRITO")

  };

  return (
    <div>

      <Navbar />
      <ItemListContainer greeting= {greeting}/>
      <br />
      <br />
      <p>CARRITO DE COMPRAS</p>
      <ItemCount initial={initial} stock = {stock} onAdd = {onAdd}/>

     <br/>


    </div>
  );
}

export default App;

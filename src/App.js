import React from "react";
import logo from './logo.svg';
import './App.css';
import Navbar from "./componentes/header/Navbar";
import ItemListContainer from "./componentes/header/ItemListContainer";
/* import  Navbar from './componentes/header/Navbar.js' */

function App() {

  return (
    <div>
      <Navbar/>
      <ItemListContainer/>
     <br/>
     <main> ECOMMERCE</main>

    </div>
  );
}

export default App;

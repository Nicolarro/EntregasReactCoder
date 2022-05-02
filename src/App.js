import React from "react";
import "./App.css";
import Navbar from "./componentes/header/Navbar";
import ItemListContainer from "./componentes/header/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import Carrito from "./componentes/Carrito";
import Checkout from "../src/componentes/CheckOut/Checkout";
import { Navigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarritoProvider } from "../src/contexto/CarritoContexto";
import { ToastContainer } from 'react-toastify';
import Footer from "../src/componentes/footer/Footer";

function App() {

  const greeting = "Bienvendidos a Tienda Cafe";

  const datosFooter = {
    copyright: "Todos los Derechos Reservados 2022",
    autor: "Nicolas Larrosa"
  }


  const links = [
    { href: "/", name: "HOME", id: 1 },
    { href: "/productos", name: "PRODUCTOS", id: 2 },
    { href: "/categoria/clasicos", name: "CLASICOS", id: 3 },
    { href: "/categoria/premium", name: "PREMIUM", id: 4 },
  ];

  return (
    <CarritoProvider>
      <BrowserRouter>
        <Navbar links={links} />
        <main className="titulo"> ECOMMERCE TIENDA CAFE
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={greeting} />} />
          <Route
            path="/productos"
            element={<ItemListContainer greeting={greeting} />}
          />
          <Route
            path="/categoria/:categoria/"
            element={<ItemListContainer greeting={greeting} />}
          />
          <Route path="detalle/:id/" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer data={datosFooter} />
      <ToastContainer autoClose={2000}/>
      </BrowserRouter>
    </CarritoProvider>
  );
}

export default App;

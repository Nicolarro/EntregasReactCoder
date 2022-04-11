import React from "react";
import "./App.css";
import Navbar from "./componentes/header/Navbar";
import ItemListContainer from "./componentes/header/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import ItemCount from "./componentes/ItemCount";
import { Navigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {CarritoProvider, useCarrito} from "../src/contexto/CarritoContext";

function App() {
  const greeting = "Bienvendidos a Tienda Cafe";

  const initial = 1;
  const stock = 10;
  const onAdd = (contador) => {
    toast(contador + " PRODUCTOS AGREGADOS AL CARRITO");
  };

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
        <main className="titulo"> ECOMMERCE TIENDA CAFE</main>
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
          <Route
            path="/carrito"
            element={
              <ItemCount initial={initial} stock={stock} onAdd={onAdd} />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </CarritoProvider>
  );
}

export default App;

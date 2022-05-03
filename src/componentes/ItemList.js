import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { React } from "react";
import Item from "./Item.js";

const ItemList = ({ listaProductos }) => {
  return (
    <>
      {listaProductos.map((producto) => (
        <Item key={producto.id} precio={producto.price} producto={producto} />
      ))}
    </>
  );
};

export default ItemList;

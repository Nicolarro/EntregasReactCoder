import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { React } from "react";
import Item from "./Item.js";

const ItemList = ({ listaProductos }) => {
  return (
<>
        <div id="contenedor_productos" className="my-5">
        {listaProductos.map((producto) => (
                <Item key={producto.id} precio={producto.price} producto={producto} />
        ))}
        </div>
    </>
  );
};

export default ItemList;

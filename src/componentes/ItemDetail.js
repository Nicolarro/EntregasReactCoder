import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";
import Button from "react-bootstrap/Button";
import { useState } from "react";
/* import { CartProvider } from "./contexto/miContexto"; */

const ItemDetail = ({ id, title, price, pictureUrl, stock, categoria }) => {
  /*   const [estado, setEstado] = useState(true)
  const [item, setItem] = useState([]) */

  const [compra, setCompra] = useState(false);
  const [contador, setContador] = useState(1);

  const [cantidad, setCantidad] = useState(0);
  /*  const { agregarAlCarrito, isInCarrito } = useContext(CartProvider) */

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };

  const agregarItems = (contador) => {
    const itemToAdd = {
      id,
      title,
      price,
      pictureUrl,
      cantidad: contador,
    };

    console.log("agregaste al carrito:", itemToAdd);
    setCompra(true);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={pictureUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Precio: {price}</Card.Text>
        <Card.Text>Stock: {stock}</Card.Text>
        <Button variant="primary" onClick={handleNavigate}>
          VOLVER
        </Button>
        {!compra && <ItemCount
          stock={stock}
          initial={1}
          onAdd={agregarItems}
          contador={contador}
          setContador={setContador}
        />}

        {compra && <Button variant="secondary"onClick={()=>navigate('/carrito')}> IR AL CARRITO</Button>}
      </Card.Body> 

    </Card>
  );
};

export default ItemDetail;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useCarrito, CarritoProvider, CarritoContexto } from "../contexto/CarritoContexto";


const ItemDetail = ({prod}) => {

  const {id, title, price, pictureUrl, stock, categoria} = prod


  const [compra, setCompra] = useState(false);
  const [contador, setContador] = useState(0);


  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };

  const {agregarAlCarrito} = useCarrito()


  const agregarItems = (contador) => {
    const itemToAdd = {
      id,
      title,
      price,
      pictureUrl,
      categoria,
      cantidad: contador,
    };

    console.log("agregaste al carrito:", itemToAdd);
    setCompra(true)

    agregarAlCarrito(itemToAdd);
  };

  return (

    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={pictureUrl} />
      <hr/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Precio: {price}</Card.Text>
        <Card.Text>Stock: {stock}</Card.Text>
        <Button variant="primary" onClick={handleNavigate}>
          VOLVER
        </Button>
        <br />
        <br />
        {!compra && (
          <ItemCount
            stock={stock}
            initial={0}
            onAdd={agregarItems}
            contador={contador}
            setContador={setContador}
          />
        )}

        {compra && (
          <Button variant="secondary" onClick={() => navigate("/carrito")}>
            {" "}
            IR AL CARRITO
          </Button>

        )}
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;

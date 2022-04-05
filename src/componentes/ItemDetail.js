import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";
import Button from "react-bootstrap/Button";
import { useContexto, Provider, useState, Contexto } from "react";
import { useParams } from "react-router-dom";

const ItemDetail = ({prod}) => {

  const {id,title,price,pictureUrl} = prod;

  const [estado, setEstado] = useState(true);
  const [item, setItem] = useState([]);
  const [cantidad, setCantidad] = useState(0)

  const { agregarAlCarrito, isInCarrito } = useContexto();

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };

  const agregarItems = (item) => {

    const itemToAdd = {
      id,
      title,
      price,
      pictureUrl,
      cantidad,
    };

    agregarAlCarrito(itemToAdd);
  };

  function onAdd(stock) {
    console.log("Agregado al carrito");
    setEstado(false);
    agregarAlCarrito(cantidad, prod);
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={prod.pictureUrl} />
      <Card.Body>
        <Card.Title>{prod.title}</Card.Title>
        <Card.Text>Precio: {prod.price}</Card.Text>
        <Card.Text>Stock: {prod.stock}</Card.Text>
        <Button variant="primary" onClick={handleNavigate}>
          VOLVER
        </Button>
        <ItemCount stock={5} initial={1} agregarItems={onAdd} />
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;

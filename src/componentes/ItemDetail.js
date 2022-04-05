import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";
import Button from "react-bootstrap/Button";
import { useContext, useState} from "react";
import { Contexto } from "./contexto/miContexto";

const ItemDetail = ({ id, title, price, pictureUrl, stock, categoria }) => {

  const [estado, setEstado] = useState(true);
  const [item, setItem] = useState([]);
  const [cantidad, setCantidad] = useState(0);
  const { agregarAlCarrito, isInCarrito } = useContext(Contexto);

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
        <ItemCount stock={5} initial={1} agregarItems={agregarItems} />
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";
import Button from "react-bootstrap/Button";
import { useContexto, Provider, useState, Contexto } from "react";
import { useParams } from "react-router-dom";

const ItemDetail = ({id,price,title,pictureUrl,}) => {

  const {producto} = useParams()

  const [estado, setEstado] = useState(true);
  const [item, setItem] = useState([]);

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
    }

    agregarAlCarrito(itemToAdd)
}


  function onAdd(stock) {

    console.log("Agregado al carrito");
    setEstado(false);
   agregarAlCarrito(cantidad,unidad)
  }




  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.pictureUrl} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>Precio: {item.price}</Card.Text>
        <Card.Text>Stock: {item.stock}</Card.Text>
        <Button variant="primary" onClick={handleNavigate}>
          VOLVER
        </Button>
        <ItemCount stock={5} initial={1} agregarItems={onAdd} />
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;

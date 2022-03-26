import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemList from "../componentes/ItemList";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Item = ({ producto }) => {

  return (
    
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={producto.pictureUrl} />
      <Card.Body>
        <Card.Title> Producto: {producto.title}</Card.Title>
        <Card.Text> Precio: {producto.price}</Card.Text>
        <Button variant="primary">Ver Detalle</Button>
      </Card.Body>
    </Card>
  );
};

export default Item;


import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

const Item = ({ producto }) => {

  return (
    
    <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" src={producto.pictureUrl} className="img-fluid" />
      <Card.Body>
        <Card.Title> Producto: {producto.title}</Card.Title>
        <Card.Text> Precio: {producto.price}</Card.Text>
       <Link to={`/item/${producto.id}`}><Button variant="primary">Ver Detalle</Button> </Link>
      </Card.Body>
    </Card>
  );
};

export default Item;


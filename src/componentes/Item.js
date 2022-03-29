import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";

const Item = ({ producto }) => {

const {id} = useParams()

  return (
    
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={producto.pictureUrl} />
      <Card.Body>
        <Card.Title> Producto: {producto.title}</Card.Title>
        <Card.Text> Precio: {producto.price}</Card.Text>
       <Link to={`/item/${id}`}><Button variant="primary">Ver Detalle</Button> </Link>
      </Card.Body>
    </Card>
  );
};

export default Item;


import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Item = ({ producto }) => {
  const navegar = useNavigate();

  return (
    <Card style={{ width: "20rem" }} className="card_productos">
      <Card.Img variant="top" src={producto.pictureUrl} className="img-fluid" />
      <Card.Body>
        <Card.Title> Producto: {producto.title}</Card.Title>
        <Card.Text> Precio: {producto.price}</Card.Text>
        <hr />{" "}
        <Button
          variant="primary"
          onClick={() => navegar(`/detalle/${producto.id}`)}
          className="btn btn-primary btn-verMas"
        >
          Ver Detalle
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Item;

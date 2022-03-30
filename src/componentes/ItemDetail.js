import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


const ItemDetail = ({prod}) => {

 /*    const {title, price, pictureUrl} = detalle */

    const navigate = useNavigate()

    const handleNavigate = () => {

        navigate(-1)
    }


    return (


<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={prod.pictureUrl} />
<Card.Body>
  <Card.Title>{prod.title}</Card.Title>
  <Card.Text>
      Precio: {prod.price}
  </Card.Text>
  <Button variant="primary" onClick={handleNavigate}>VOLVER</Button>
</Card.Body>
</Card>

)
}

export default ItemDetail;
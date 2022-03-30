import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import {getProducts} from "../componentes/fakeApi.js";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = (prop) => {

    const {id} = useParams()


const [prod, setProd] = useState({});
const [loading,setLoading] = useState(false)

useEffect(()=>{
    setLoading(true)
    getProducts
    .then((res) => setProd(res.find((prod) => prod.id === parseInt(id))))
    .catch((error) => console.log(error))
    .finally(() => setLoading(false))
}, [id])




return (

<Container >    

{loading ? <h2>Loading...</h2> : <ItemDetail detalle = {prod} />}

</Container>


)
}


export default ItemDetailContainer;


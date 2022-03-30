import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import {getProducts} from "../componentes/fakeApi.js";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = (prop) => {

const [prod, setProd] = useState({});
const [loading,setLoading] = useState(false)

    const {id} = useParams() /* El use params me pasa el objeto como un string */

useEffect(()=>{
    setLoading(true)
    getProducts
    .then((res) => setProd(res.find((item) => item.id === id)))
    .catch((error) => console.log(error))
    .finally(() => setLoading(false))
}, [id])


return (

<Container >    
<br />
{loading ? <h2>Loading...</h2> : <ItemDetail prod = {prod} />}

</Container>


)
}


export default ItemDetailContainer;


import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import {getProducts} from "../componentes/fakeApi.js";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config.js";
import { doc, getDoc } from "firebase/firestore"


const ItemDetailContainer = (props) => {

const [prod, setProd] = useState({});
const [loading,setLoading] = useState(false)

    const {id} = useParams() /* El use params me pasa el objeto como un string */


useEffect(() => {
    setLoading(true)

    const docRef = doc(db, "productos", id)
    getDoc(docRef)
        .then(doc => {
            const prod =  {id: doc.id, ...doc.data()} 
            console.log(prod)
            setProd(prod)
        })
        .finally(() => {
            setLoading(false)
        })

}, [id])


return (

<Container >    
<br />
{loading ? <h2>Loading...</h2> : <ItemDetail prod = {prod} />}

</Container>


)
}

export default ItemDetailContainer;


import 'bootstrap/dist/css/bootstrap.min.css';
import {React, useEffect, useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import ItemList from "../ItemList.js";
import { useParams } from 'react-router-dom';
import {getProducts} from "../fakeApi.js";
import {listadoProductos} from "../fakeApi.js";

const ItemListContainer = (props) => {


    const {greeting} = props

    const {categoria} = useParams()

    console.log(listadoProductos.categoria)

    const [listado, setlistado] = useState([])
    const [cargando, setCargando] = useState(false)

console.log(listado)

    useEffect(()=>{
        setCargando(true)
        getProducts
        .then((res) => setlistado(res.filter((prod) => prod.categoria === categoria)))
        .catch((error) => console.log(error))
        .finally(()=> setCargando(false))
    }, [categoria])



    return(

        <div>
        
        <br/>
        <h2> {greeting}</h2>
         {cargando ?  <h2> Loading....</h2> : <ItemList listado = {listado}/>}

        </div>


    )
}

export default ItemListContainer;
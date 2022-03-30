import 'bootstrap/dist/css/bootstrap.min.css';
import {React, useEffect, useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import ItemList from "../ItemList.js";
import { useParams } from 'react-router-dom';
import {getProducts} from "../fakeApi.js";

const ItemListContainer = (props) => {

    const {greeting} = props

   

    const{categoria} = useParams()

    const [listadoProductos, setListaProductos] = useState([])
    const [cargando, setCargando] = useState(false)



    useEffect(()=>{
        setCargando(true)
        getProducts
        .then((res) => setListaProductos(res.filter((prod) => listadoProductos.categoria === categoria)))
        .catch((error) => console.log(error))
        .finally(()=> setCargando(false))
    }, [categoria])

    return(

        <div>
        
        <br/>
        <h2> {greeting}</h2>
         {cargando ?  <h2> Loading....</h2> : <ItemList listado = {listadoProductos}/>}

        </div>


    )
}

export default ItemListContainer;
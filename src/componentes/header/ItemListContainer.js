import 'bootstrap/dist/css/bootstrap.min.css';
import {React, useEffect, useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import ItemList from "../ItemList.js"
import {getProducts} from "../fakeApi.js"

const ItemListContainer = (props) => {

    const {greeting} = props

    const [listadoProductos, setListaProductos] = useState([])
    const [cargando, setCargando] = useState(false)



    useEffect(()=>{
        setCargando(true)
        getProducts
        .then((res) => setListaProductos(res))
        .catch((error) => console.log(error))
        .finally(()=> setCargando(false))
    }, [])

    return(

        <div>
        
        <br/>
        <h2> {greeting}</h2>
        <ToastContainer/>  
         <ItemList listado = {listadoProductos}/>

        </div>


    )
}

export default ItemListContainer;
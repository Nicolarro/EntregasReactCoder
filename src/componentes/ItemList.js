import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import {React, useEffect} from 'react';
import Item from "./Item.js"


const ItemList = ({listado}) =>{

    return(
    
            <ul>
                    {listado.map((producto)=>(
    
            <Item key={producto.id} precio= {producto.precio} producto= {producto}/> 
           
                    ))}
            </ul>   
    
    )
    }
    
    export default ItemList;

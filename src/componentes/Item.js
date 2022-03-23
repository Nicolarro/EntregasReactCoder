import React from 'react'
import ItemList from "../componentes/ItemList"
/* import {} from  */


const Item = ({listadoProductos}) => {



  return (

  
<div className="card">
  <img src={listadoProductos.img} className="card-img-top" alt={listadoProductos.name}/>
  <div className="card-body">
        <p className="card-text">{listadoProductos.name}</p>
    </div>
</div>

);
}

export default Item;
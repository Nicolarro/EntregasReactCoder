import "bootstrap/dist/css/bootstrap.min.css";
import { React, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import ItemList from "../ItemList.js";
import { useParams } from "react-router-dom";
import { getProducts } from "../fakeApi.js";


const ItemListContainer = (props) => {

  const { greeting } = props;

  const { categoria } = useParams();

  const [listaProductos, setListaProductos] = useState([]);
  const [cargando, setCargando] = useState(false);


  useEffect(() => {
    setCargando(true);
    getProducts
      .then((res) =>{
      if (categoria){                                            /* esta categoria es la del param */
      setListaProductos(res.filter((item) => item.categoria === categoria)) 
      } else {
        setListaProductos(res)
      }
    })
      .catch((error) => toast.error("Error al cargar los productos"))
      .finally(() => setCargando(false));
  }, [categoria]);

  return (
    <div>
      <br />
      <h2> {greeting}</h2>
      {cargando ? <h2> Loading....</h2> : <ItemList listaProductos={listaProductos} />}
    </div>
  );
};

export default ItemListContainer;

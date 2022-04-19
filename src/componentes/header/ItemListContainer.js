import "bootstrap/dist/css/bootstrap.min.css";
import { React, useEffect, useState } from "react";
import ItemList from "../ItemList.js";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config.js";

const ItemListContainer = (props) => {
  const { greeting } = props;

  const { categoria } = useParams();

  const [listaProductos, setListaProductos] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    setCargando(true);

    const productosRefe = collection(db, "productos");

    const qprod = categoria
      ? query(productosRefe, where("categoria", "==", categoria))
      : productosRefe;

    getDocs(qprod)
      .then((snapshot) => {
        /* aca retorno un objeto-->por eso pongo parentesis, que tenga una propiedad id, y aparte las propiedades del documento (el spread) */

        const producto = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log(producto);
        setListaProductos(producto);
      })

      .finally(() => setCargando(false));
  }, [categoria]);

  return (
    <div>
      <br />
      <h2> {greeting}</h2>
      {cargando ? (
        <h2> Loading....</h2>
      ) : (
        <ItemList listaProductos={listaProductos} />
      )}
    </div>
  );
};

export default ItemListContainer;

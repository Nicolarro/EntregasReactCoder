import React from "react";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const ItemCount = ({ stock, initial, contador, setContador, onAdd }) => {
  const navegarProductos = useNavigate();

  const handleNavigate = () => {
    navegarProductos(-1);
  };

  const sumar = () => {
    contador < stock && setContador(contador + 1);
  };

  const restar = () => {
    contador > 0 && setContador(contador - 1);
    console.log(contador);
  };

  const resetear = () => {
    setContador(0);
  };

  return (
    <div className="container-btns mt-5">
      <br />
      <br />
      <hr />
      <h2>CARRITO DE COMPRAS</h2>
      <p>Cantidad Agregada:{contador}</p>
      <button className="btn-cart btn-contador" onClick={sumar} disabled={contador === stock}>
        SUMAR
      </button>
      <br />
      <button className="btn-cart btn-contador"  onClick={restar}> RESTAR</button>
      <br />
      <button className="btn-cart btn-contador" onClick={resetear}> RESETEAR</button>
      <button className="btn-cart btn-agregar" onClick={() => onAdd(contador)} disabled={contador === 0}>
        AGREGAR AL CARRITO
      </button>
      <button onClick={handleNavigate}> SEGUIR COMPRANDO</button>
      <br />
    </div>
  );
};

export default ItemCount;

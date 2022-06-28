import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ItemCount = ({ item }) => {
  //const { id, articulo, descripcion, imagen, precio, stock } = item;

  const { addItem } = useContext(CartContext);

  let initial = 1;
  let stockLimite = item.stock;

  const onAdd = (count) => {
    alert(`Se han agregado ${count} prendas a la cesta.`);
    addItem(item, count);
    console.log(item, count);
  };

  const [count, setCount] = useState(initial);

  const sumar = () => {
    count < stockLimite
      ? setCount(count + 1)
      : alert("El stock es insuficiente, no puede agregar más prendas.");
  };

  const restar = () => {
    count > initial
      ? setCount(count - 1)
      : alert("Este es el mínimo de prendas que se pueden agregar a la cesta.");
  };

  const [eventButton, setEventButton] = useState(true);

  //Función que cambia de estatus el boton para que cambie el botón de agregar a ir al carrito
  function changeButton() {
    setEventButton(false);
  }
  return (
    <>
      {eventButton ? (
        <div>
          <div className="d-flex flex-row justify-content-center">
            <button onClick={restar} className="class= btn btn-none">
              -
            </button>

            <span className="fs-6 fw-bold ">{count}</span>
            <button onClick={sumar} className="class= btn btn-none">
              +
            </button>
          </div>
          <div className={"d-flex flex-row justify-content-center"}>
            <button
              className={"btn btn-info"}
              onClick={() => {
                onAdd(count);
                changeButton();
              }}
            >
              Agregar
            </button>
          </div>
        </div>
      ) : (
        <div className={"d-flex flex-row justify-content-center"}>
          <Link to="/Cart">
            <button style={{marginRight: 10}} className={"btn btn-info"}>Ir a la cesta</button>
          </Link>
          <Link to="/"> 
            <button className={"btn btn-info"}>Seguir comprando</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default ItemCount;

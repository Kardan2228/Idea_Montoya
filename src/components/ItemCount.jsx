import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { CartContext } from "../context/CartContext";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2500,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
  background: "rgba(218, 247, 166, 0.7)",
});

const ItemCount = ({ item }) => {
  const { addItem } = useContext(CartContext);

  let initial = 1;
  let stockLimite = item.stock;

  const onAdd = (count) => {
    let imgItem = item.image;
    let textToast =
      // eslint-disable-next-line eqeqeq
      count != 1
        ? `Se han agregado ${count} prendas a la cesta.`
        : `Se ha agregado ${count} prenda a la cesta.`;

    Toast.fire({
      imageUrl: imgItem,
      imageHeight: 100,
      icon: 'success',
      title: textToast,
    });
    addItem(item, count);
  };

  const [count, setCount] = useState(initial);

  const sumar = () => {
    count < stockLimite
      ? setCount(count + 1)
      : Toast.fire({
        icon: 'error',
        color: 'red',
        imageHeight: 100,
        title: "El stock es insuficiente, no puede agregar más prendas.",
      });
  };

  const restar = () => {
    count > initial
      ? setCount(count - 1)
      : Toast.fire({
        icon: 'error',
        color: 'red',
        imageHeight: 100,
        title: "1 el mínimo de prendas que se pueden agregar a la cesta.",
      }); 
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
              className={"btn btn-outline-secondary"}
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
            <button
              style={{ marginRight: 10 }}
              className={"btn btn-outline-secondary"}
            >
              Ir a la cesta
            </button>
          </Link>
          <Link to="/">
            <button className={"btn btn-outline-secondary"}>
              Seguir comprando
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default ItemCount;

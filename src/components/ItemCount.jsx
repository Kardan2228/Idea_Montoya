import { useState } from "react";

const ItemCount = ({ handleEvent }, { initial, stock, onAdd }) => {
  initial = 1;
  stock = 5;
  const [count, setCount] = useState(1);
  console.log("inicial", initial);
  console.log("count", count);
  const sumar = () => {
    count < stock
      ? setCount(count + 1)
      : alert("El stock es insuficiente, no puede agregar más prendas.");
  };

  const restar = () => {
    count > initial
      ? setCount(count - 1)
      : alert("Este es el mínimo de prendas que se pueden agregar a la cesta.");
  };

  return (
    <>
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
          <button className={"btn btn-info"} onClick={(e) => handleEvent(true)}>
            Agregar a la cesta
          </button>
        </div>
        {/* <button onClick={() => onAdd(count) } className={"btn btn-info"}>Agregar a la cesta</button> */}
      </div>
    </>
  );
};

export default ItemCount;

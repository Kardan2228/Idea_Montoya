import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, getItemCount, totalCart, removeItem, emptyCart } =
    useContext(CartContext);

  if (getItemCount === 0) {
    return (
      <>
        <div style={{marginTop: '4rem'}}>
          <h1 style={{ marginTop: "2rem", textAlign: "center" }}>
            ¡Ooops! tu cesta está vacía...
          </h1>
          <div style={{ marginTop: "4rem", textAlign: "center" }}>
            <Link to={`/`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16%"
                height="16%"
                fill="purple"
                className="bi bi-basket3"
                viewBox="0 0 16 16"
              >
                <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z" />
              </svg>
            </Link>
          </div>
          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link to={`/`}>
              <h2 className="btn btn-outline-success">Mira más prendas</h2>
            </Link>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div style={{marginTop: '4rem'}}>
          <h1 style={{ marginLeft: "20px" }}>Cesta</h1>
          <hr></hr>
          <div className="container">
            {cart.map((itemCart) => (
              
                <div className="row p-3 border" key={itemCart.id}> 
                  <div className="col-sm ">
                    <button
                      style={{ marginRight: "10px" }}
                      className="btn btn-outline"
                      onClick={() => removeItem(itemCart.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path
                          fillRule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                        />
                      </svg>
                    </button>
                    <img
                      style={{ width: 90 }}
                      src={itemCart.image}
                      alt={itemCart.article}
                    />
                  </div>
                  <div className="col-sm">
                    <h4 style={{ textAlign: "center" }}>{itemCart.article}</h4>
                    <span>{itemCart.description}</span>
                  </div>
                  <div style={{ textAlign: "center" }} className="col-sm">
                    <h4>Cantidad</h4>
                    <span>
                      <strong>{itemCart.cantidad}</strong>
                    </span>
                  </div>
                  <div className="col-sm">
                    <span>
                      <strong>Precio unitario:</strong> ${itemCart.price}.00
                    </span>
                    <h4 className="lh-lg">
                      Subtotal: ${itemCart.cantidad * itemCart.price}.00
                    </h4>
                  </div>
                </div>
             
            ))}
            <hr></hr>
            <div className="text-end">
              <h1>Total: ${totalCart}.00</h1>
              <button
                style={{ marginRight: 10, marginTop: 20 }}
                className={"btn btn-danger"}
                onClick={() => emptyCart()}
              >
                Vaciar la cesta
              </button>
              <Link to="/purchaseOrder">
                <button
                  style={{ marginRight: 10, marginTop: 20 }}
                  className={"btn btn-success"}
                >
                  Terminar la compra
                </button>
              </Link>
              <Link to={`/`}>
                <button style={{ marginTop: 20 }} className={"btn btn-warning"}>
                  Seguir comprando
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Cart;

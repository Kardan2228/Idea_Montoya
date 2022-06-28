import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, getItemCount, totalCart, removeItem, emptyCart } =
    useContext(CartContext);

  console.log(getItemCount);

  if (getItemCount === 0) {
    return (
      <>
        <div
          style={{
            width: "60px",
            height: "60px",
            position: "absolute",
            margin: "10% 10% 10% 10%",
          }}
        >
          <Link to={`/`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.0"
              width="1100pt"
              height="300pt"
              viewBox="0 0 900 1218"
              preserveAspectRatio="xMidYMid meet"
            >
              <metadata>
                Created by potrace 1.15, written by Peter Selinger 2001-2017
              </metadata>
              <g
                transform="translate(0.000000,1218.000000) scale(0.100000,-0.100000)"
                fill="#086A87"
                stroke="none"
              >
                <path d="M5920 12167 c-228 -52 -421 -312 -701 -942 -51 -115 -258 -541 -459 -945 -202 -404 -532 -1069 -735 -1477 l-368 -743 -1426 -2 -1426 -3 -69 -33 c-50 -23 -89 -53 -145 -110 -171 -172 -304 -425 -486 -927 -92 -254 -110 -328 -102 -414 11 -130 74 -204 278 -326 191 -113 272 -201 292 -315 4 -19 27 -213 52 -430 24 -217 76 -673 115 -1012 38 -340 102 -896 140 -1235 39 -340 91 -796 116 -1013 24 -217 67 -593 95 -835 55 -492 62 -537 90 -649 107 -420 366 -654 809 -733 101 -17 264 -18 4340 -18 4438 0 4329 -1 4535 41 408 84 636 301 719 684 9 41 106 795 216 1675 455 3635 428 3427 469 3519 25 57 94 117 246 218 72 47 150 107 173 132 229 249 99 719 -387 1401 -132 186 -223 269 -356 324 -157 66 -100 63 -1478 61 l-1247 -1 -726 1458 c-400 802 -771 1555 -826 1673 -213 461 -349 690 -493 835 -126 126 -245 171 -357 133 -62 -22 -206 -118 -252 -168 -200 -222 -157 -678 127 -1350 151 -357 352 -740 716 -1365 99 -169 235 -426 387 -734 129 -261 233 -476 231 -478 -2 -1 -720 -2 -1595 -1 l-1591 3 486 975 c742 1491 921 1858 954 1950 34 96 81 285 100 405 17 103 18 394 2 461 -36 150 -106 251 -205 294 -64 28 -178 35 -258 17z" />
              </g>
            </svg>
          </Link>
        </div>
        <div>
          <h1 style={{ textAlign: "center" }}>
            ¡Ooops! tu cesta está vacía...
          </h1>
          <Link to={`/`}>
            <h2 className="btn btn-outline-success position-absolute top-20 start-50">
              Mira más prendas
            </h2>
          </Link>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <h1 style={{marginLeft: "20px"}}>Cesta</h1>
          {/* <p>Prendas en la cesta: {getItemCount}</p> */}
          <hr></hr>
          <div className="container">
            {cart.map((itemCart) => (
              <>
                <div className="row p-3 border">
                  <div className="col-sm ">
                    <button style={{marginRight: "10px"}} className="btn btn-outline" onClick={() => removeItem(itemCart.id)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path
                          fill-rule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                        />
                      </svg>
                    </button>
                    <img
                      style={{ width: 90 }}
                      src={itemCart.imagen}
                      alt={itemCart.articulo}
                    />
                  </div>
                  <div className="col-sm">
                    <h4 style={{ textAlign: "center" }}>{itemCart.articulo}</h4>
                    <span>{itemCart.descripcion}</span>
                  </div>
                  <div style={{ textAlign: "center" }} className="col-sm">
                    <h4>Cantidad</h4>
                    <span>
                      <strong>{itemCart.cantidad}</strong>
                    </span>
                  </div>
                  <div className="col-sm">
                    <span>
                      <strong>Precio unitario:</strong> ${itemCart.precio}.00
                    </span>
                    <h4 class="lh-lg">
                      Subtotal: ${itemCart.cantidad * itemCart.precio}.00
                    </h4>
                  </div>
                </div>
              </>
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
              <Link to="/Compra">
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

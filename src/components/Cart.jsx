import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, getItemCount, totalCart, removeItem } = useContext(CartContext);
  
  return (
    <>
      <div>
        <h1>Cesta</h1>
        <p>Prendas en la cesta: {getItemCount}</p>
        <hr></hr>
        {cart.map((itemCart) => (
          <>
          <button onClick={() => removeItem(itemCart.id)}>Eliminar</button>
       <Link to={`/`} >Seguir comprando</Link>
            {/* <img src={itemCart.imagen} alt={itemCart.articulo} /> */}
            <li>{itemCart.id}</li>
            <li>{itemCart.articulo}</li>
            <li>{itemCart.descripcion}</li>
            <li>Cantidad: {itemCart.cantidad}</li>
            <li>Precio: ${itemCart.precio}.00</li>
            <li>Subtotal: ${itemCart.cantidad * itemCart.precio}.00</li>
          </>
        ))}
        <hr></hr>
        <h1>Total: ${totalCart}.00</h1>
      </div>
    </>
  );
};

export default Cart;

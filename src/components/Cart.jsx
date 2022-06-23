import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const {cart} = useContext(CartContext)

  return (
    <>
    <div>
        <h1>aquí viene el renderizado de la lógica de CartContext</h1>
    </div>
    </>
  )
}

export default Cart;

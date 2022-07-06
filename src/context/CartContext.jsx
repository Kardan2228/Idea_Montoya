import React from "react";
import { createContext, useState } from "react";
export const CartContext = createContext()

const { Provider } = CartContext;

const MyProvider = ({ children }) => {

    const [cart, setCart] = useState([])
   
    //Método Reduce, CartWidget- retorna la cantidad total de unidades que tiene nuestro state cart
    function getItemCount(cart){
        let result = 0;
        cart.map(countItems => result += countItems.cantidad)
        return result
      }

    //Se busca el índice del producto, en caso de no existir en el carrito nos devolverá -1
    const isInCart = (id) => {
        return cart.findIndex(item => item.id === id);
    }

    const addItem = (item, cantidad) => {
        let positionItem = isInCart(item.id);
        if (positionItem === -1) {
            setCart([...cart, { ...item, cantidad: cantidad }])
            // console.log(cart.cantidad)
        } else {
            let tempCart = [...cart]
            tempCart[positionItem].cantidad = tempCart[positionItem].cantidad + cantidad
            setCart(tempCart)
            // let updateStock = [...cart]
            // updateStock.stock = 15
            // setCart(item.article, item.cantidad, item.category, item.color, item.stock = 20)
            // console.log('En temCart', updateStock)
            // console.log(cart)
        }
        // console.log('antes de stock modificado', cart)
        // cart['stock'] = 10
        // console.log('después de stock modificado', cart)
        
        // item.stock = item.stock - item.cantidad;
        //     console.log(item.stock)
    }
  
    // Limpia la cesta
    const emptyCart = () => {
        setCart([])
    }

    //Retorna un nuevo array sin el producto eliminado
    const removeItem = (id) => {
        return setCart(cart.filter(item => item.id !== id))
    }
  
    function totalCart(cart) {
        let totalPrice = 0;
        cart.map ( (sumatory) => totalPrice += sumatory.cantidad * sumatory.price )
        return totalPrice
      }

    return (
        <Provider value={{ cart, addItem, isInCart, emptyCart, removeItem, getItemCount: getItemCount(cart), totalCart: totalCart(cart) }}>
            {children}
        </Provider>
    )
}

export default MyProvider;

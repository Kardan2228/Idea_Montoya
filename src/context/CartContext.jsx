import { createContext, useState } from "react";
export const CartContext = createContext()

const { Provider } = CartContext;

const MyProvider = ({ children }) => {

    const [cart, setCart] = useState([])
   
    //metodo Some (devuelve valor booleano) para detectar si el producto a agregar ya se encuentra en la cesta de compras
    // const isInCart = (id) => {
    //     return cart.some(x => x.id === id);
    // }
    // ItemDeatl se encarga de agregar el producto a la cesta sin pisas los agregados anteriormente sino aumentar la cantidad
    // const addItem = (item, count) => {
    //     const newItem = {
    //         ...item,
    //         count
    //     }
    //     if (isInCart(newItem.id)) {
    //         const findItem = cart.find(x => x.id === newItem.id)
    //         const itemIndex = cart.indexOf(findItem)
    //         const auxArray = [...cart]
    //         auxArray[itemIndex].count += count
    //         setCart(auxArray)
    //     } else {
    //         setCart([...cart], newItem)
    //     }
    // }
    // // Limpia la cesta
    // const emptyCart = () => {
    //     setCart([])
    // }

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
        } else {
            let tempCart = [...cart]
            tempCart[positionItem].cantidad = tempCart[positionItem].cantidad + cantidad
            setCart(tempCart)
        }
    }
  
    // Limpia la cesta
    const clearCart = () => {
        setCart([])
    }

    //Retorna un nuevo array sin el producto eliminado
    const removeItem = (id) => {
        return setCart(cart.filter(item => item.id !== id))
    }
  
    function totalCart(cart) {
        let totalPrice = 0;
        cart.map ( (sumatory) => totalPrice += sumatory.cantidad * sumatory.precio )
        return totalPrice
      }

    return (
        <Provider value={{ cart, addItem, isInCart, clearCart, removeItem, getItemCount: getItemCount(cart), totalCart: totalCart(cart) }}>
            {children}
        </Provider>
    )
}

export default MyProvider;

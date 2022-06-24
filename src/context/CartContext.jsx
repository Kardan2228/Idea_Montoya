import { createContext, useState } from "react";
import data from '../helpers/data.js';
export const CartContext = createContext();

const {Provider} = CartContext;

const MyProvider = ({children}) => {

    const item = data;
    console.log(item);


    const [cart, setCart] = useState()

//     //metodo Some (devuelve valor booleano) para detectar si el producto a agregar ya se encuentra en la cesta de compras
// const isInCart = (id) => {
//     return cart.some(x => x.id === id);
// }
// // ItemDeatl se encarga de agregar el producto a la cesta sin pisas los agregados anteriormente sino aumentar la cantidad
// const addItem = (item, count) => {
//     const newItem = {
//         ...item,
//         count
//     }
//     if (isInCart(newItem.id )) {
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
// //Retroma un nuevo array sin el producto eliminado
// const deleteItem = (id) => {
//     return setCart(cart.filter(x => x.id !== id))
// }
// //Método Reduce, CartWidget- retorna la cantidad total de unidades que tiene nuestro state cart
// const getItemCount = () => {
//      return cart.reduce((acc, x) => acc += x.count, 0)
// } 
// // Método Reduce- Cart - Retorna el precio total del carrito
// const getItemPrice = () => {
//     return cart.reduce((acc, x) => acc += x.count * x.precio)
// }
const addItem = (item, count) => {
console.log(item, count);
}

    return <Provider value={{cart, addItem}}>{children}</Provider>
}

export default MyProvider;

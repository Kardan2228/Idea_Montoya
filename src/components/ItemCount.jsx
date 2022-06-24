import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';


const ItemCount = ({item}) => {
    //const { id, articulo, descripcion, imagen, precio, stock } = item;

    const {addItem} = useContext (CartContext);

    let initial = 1;
    let stockLimite = item.stock;
  
    const onAdd = (count) => {
      //alert(`Se han agregado ${count} prendas a la cesta.`);
      addItem(item, count);
      console.log(item, count);
    };

    const [count, setCount] = useState(initial);

    const sumar = () => {
        //console.log(evento.currentTarget.parentNode.parentNode)
        count < stockLimite ? setCount(count + 1) :  alert('El stock es insuficiente, no puede agregar más prendas.');
    }

    const restar = () => {
        count > initial ? setCount(count - 1) : alert('Este es el mínimo de prendas que se pueden agregar a la cesta.');
    }

const [eventButton, setEventButton] = useState(true)

//Función que cambia de estatus el boton para que cambie el botón de agregar a ir al carrito
function changeButton(){ setEventButton (false)}
  return (
    <>
    {eventButton ? 
    <div>
        <button onClick={()=> {sumar()}}>+</button>
        <button onClick={()=> {restar()}}>-</button>
        <button onClick={()=> {onAdd(count);changeButton()}}>Agregar</button>
        <p>{count} : </p>
    </div> : <Link to='/Cart'> <button className={"btn btn-info"}>Ir a la cesta</button> </Link>
    }
    </>
    // <div>
        
    //     <div className='d-flex flex-row justify-content-center'>
    //         <button onClick={restar} className="class= btn btn-none">-</button>
           
    //         <span className="fs-6 fw-bold ">{count}</span>
    //         <button onClick={sumar} className="class= btn btn-none">+</button>
    //     </div>
    //     <div className={'d-flex flex-row justify-content-center'}>
    //         <Link to='/Cart' onClick={() => onAdd(count) } className={"btn btn-info"}>Agregar a la cesta</Link>
            
    //     </div>
    // </div>
  )
}

export default ItemCount;

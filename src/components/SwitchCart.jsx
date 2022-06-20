import { useState } from 'react';
import { Link } from "react-router-dom";
import styles from "./Item.module.scss";
import ItemCount from './ItemCount';

const SwitchCart = ({ initial, stock, onAdd }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    if (!isLoggedIn) return <ItemCount handleEvent={setIsLoggedIn} initial={initial} stock={stock} onAdd={onAdd} />;
  
    return (
    <>
    <Link className={styles.enlaceBoton} to={`/cart`} >Ir a la cesta</Link>
    </>

    );

}

export default SwitchCart;
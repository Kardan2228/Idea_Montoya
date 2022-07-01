import React from "react";
import { Link } from "react-router-dom";
import styles from "./Item.module.scss";

const Item = (prenda) => {
    const {id, article, image, price, stock} = prenda.prenda;


    return (
        <>
        <div className={styles.container}>
            <div className={styles.cardPrenda}>
                {/* <div className={styles.articulo}>{articulo}</div> */}
                <Link to={`/item/${id}`} ><img className={styles.imgCard} src={image} alt={article} /></Link>
                <div className={styles.divDetails}>
                    <span className={styles.codigo}>Código</span>
                    <span className={styles.id}>{id}</span>
                    <p className={styles.precio}>Precio: ${price}.00</p>
                    <p className={styles.stock}>Stock: {stock}</p>
                    <Link className={styles.enlaceBoton} to={`/item/${id}`} >Detalles</Link>
                </div>
            
            </div>
        </div>
        </>
    );
};

export default Item;
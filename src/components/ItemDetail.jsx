import React from 'react'
import styles from "./Item.module.scss";

const ItemDetail = ({detalle}) => {
    const {id, articulo, descripcion, imagen, precio, stock} = detalle;
  return (
    <div className={styles.container}>
            <div className={styles.cardPrenda}>
                <div className={styles.articulo}>{articulo}</div>
                <img className={styles.imgCard} src={imagen} alt="Imagen de blusa" />
                <div className={styles.divDetails}>
                    <span className={styles.codigo}>Código</span>
                    <span className={styles.id}>{id}</span>
                    <p>{descripcion}</p>
                    <p className={styles.precio}>Precio: {precio}</p>
                    <p className={styles.stock}>Stock: {stock}</p>
                </div>
            </div>
        </div>
  )
}

export default ItemDetail

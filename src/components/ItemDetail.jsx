import React from "react";
import styles from "./Item.module.scss";
import ItemCount from "./ItemCount";

const ItemDetail = ({ detalle }) => {
  const { id, article, description, image, price, stock } = detalle;

  return (
    <div className={styles.container}>
      <div className={styles.cardPrenda}>
        <div className={styles.articulo}>{article}</div>
        <img className={styles.imgCard} src={image} alt="Imagen de blusa" />
        <div className={styles.divDetails}>
          <span className={styles.codigo}>Código</span>
          <span className={styles.id}>{id}</span>
          <p>{description}</p>
          <p className={styles.precio}>Precio: ${price}.00</p>
          <p className={styles.stock}>Stock: {stock}</p>
        </div>
        <ItemCount item={detalle} />
      </div>
    </div>
  );
};

export default ItemDetail;

import React from "react";
import ItemCount from "./ItemCount";
import styles from "./Item.module.scss";

const Item = (prenda) => {
    const {id, articulo, imagen, precio, stock} = prenda.prenda;
    console.log(prenda.prenda);
    
    const onAdd = (count) => {
        alert(`Se han agregado ${count} prendas a la cesta.`);
      }

      const onDetail = () => {
        alert('Detalle del producto');
      }

    return (
        <div className={styles.container}>
            <div className={styles.cardPrenda}>
                <div className={styles.articulo}>{articulo}</div>
                <img className={styles.imgCard} src="vestido_dibujo.png" alt={imagen} />
                <div className={styles.divDetails}>
                    <span className={styles.codigo}>Código</span>
                    <span className={styles.id}>{id}</span>
                    <p className={styles.precio}>Precio: {precio}</p>
                    <p className={styles.stock}>Stock: {stock}</p>
                    <button onClick={() => onDetail()} className={styles.btnCard}>Detalles</button>
                </div>
                <ItemCount initial={1} stock={10} onAdd={onAdd}/>
            </div>
        </div>
    );
};

export default Item;

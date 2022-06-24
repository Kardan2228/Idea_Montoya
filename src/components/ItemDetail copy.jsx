import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import styles from "./Item.module.scss";
import ItemCount from "./ItemCount";

const ItemDetail = ({ detalle }) => {
  const { id, articulo, descripcion, imagen, precio, stock } = detalle;

  const {addItem} = useContext(CartContext)

  let initial = 1;
  let stockLimite = stock;

  const onAdd = (count) => {
    alert(`Se han agregado ${count} prendas a la cesta.`);
    addItem(detalle, count);
    console.log(addItem);
  };
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
        <ItemCount detalle={detalle} initial={initial} stock={stockLimite} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;

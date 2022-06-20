import React from 'react'
import styles from "./Item.module.scss";
import ItemCount from './ItemCount';
import SwitchCart from './SwitchCart';

const ItemDetail = ({detalle}) => {
    const {id, articulo, descripcion, imagen, precio, stock} = detalle;

    const onAdd = (count) => {
      alert(`Se han agregado ${count} prendas a la cesta.`);
      // botonAgregar = false;
      // console.log(botonAgregar);
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
                {/* <ItemCount initial={1} stock={5} onAdd={onAdd} /> */}
                <SwitchCart initial={1} stock={5} onAdd={onAdd}/>
            </div>
        </div>
  )
}

export default ItemDetail

// import React from "react";
// import styles from "./Item.module.scss";
// import ItemCount from "./ItemCount";
// import SwitchCart from "./SwitchCart";

// const ItemDetail = ({ detalle }) => {
//   const { id, articulo, descripcion, imagen, precio, stock } = detalle;

//   let initial = 1;
//   let stockLimite = detalle.stock;
//   const onAdd = (count) => {
//     alert(`Se han agregado ${count} prendas a la cesta.`);

//   };
//   return (
//     <div className={styles.container}>
//       <div className={styles.cardPrenda}>
//         <div className={styles.articulo}>{articulo}</div>
//         <img className={styles.imgCard} src={imagen} alt="Imagen de blusa" />
//         <div className={styles.divDetails}>
//           <span className={styles.codigo}>Código</span>
//           <span className={styles.id}>{id}</span>
//           <p>{descripcion}</p>
//           <p className={styles.precio}>Precio: {precio}</p>
//           <p className={styles.stock}>Stock: {stock}</p>
//         </div>
//         {/* <ItemCount initial={initial} stock={stockLimite} onAdd={onAdd} /> */}
//         <SwitchCart />
//       </div>
//     </div>
//   );
// };

// export default ItemDetail;

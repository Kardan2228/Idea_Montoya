import React from 'react'
import Item from './Item'
import styles from './ItemList.module.scss'

const ItemList = ({prendasMujer}) => {
  return (
    <div className={styles.containerCards}>
        {prendasMujer.map(prenda => <Item key={prenda.id} prenda={prenda} />)}
    </div>
  )
}

export default ItemList
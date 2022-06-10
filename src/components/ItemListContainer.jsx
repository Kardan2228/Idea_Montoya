import React, { useEffect, useState } from 'react'
import ProgressBar from './ProgressBar';
import ItemList from './ItemList';
import styles from './ItemListContainer.module.scss'


const ItemListContainer = ({ greeting }) => {

  const [prendasMujer, setPrendasMujer] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  //const [prendasMujer, setPrendasMujer] = useState();

  useEffect(() => {

    const itemPrenda = new Promise((res, rej) => {
      setTimeout(() => {
        //Aquí se colocan los datos que se quieren devolver   
        res([
          { id: "001", articulo: "Vestido", "imagen": "/images/vestido.jpg", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", color: "Negro", tallas: "16-28", precio: "$2500.00", stock: 15 },
          { id: "002", articulo: "Pantalón", "imagen": "/images/vestido.jpg", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", color: "Rojo", tallas: "16-28", precio: "$1350.00", stock: 15 },
          { id: "003", articulo: "Falda", "imagen": "/images/vestido.jpg", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", color: "Azul", tallas: "16-28", precio: "$2400.00", stock: 15 },
          { id: "004", articulo: "Pantalón corto", "imagen": "/images/vestido.jpg", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", color: "Blanco", tallas: "16-28", precio: "$850.00", stock: 15 },
          { id: "005", articulo: "Blusa", "imagen": "/images/vestido.jpg", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", color: "Naranja", tallas: "16-28", precio: "$1500.00", stock: 15 },
          { id: "006", articulo: "Faldón", "imagen": "/images/vestido.jpg", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", color: "Amarillo", tallas: "16-28", precio: "$3200.00", stock: 15 },
          { id: "007", articulo: "Short", "imagen": "/images/vestido.jpg", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", color: "Rosa", tallas: "16-28", precio: "$1750.00", stock: 15 },
          { id: "008", articulo: "Pescador", "imagen": "/images/vestido.jpg", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", color: "Beige", tallas: "16-28", precio: "$2700.00", stock: 15 },
          { id: "009", articulo: "Enterizo", "imagen": "/images/vestido.jpg", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", color: "Violeta", tallas: "16-28", precio: "$1800.00", stock: 15 }
        ]);
      }, 2000);
    });

    itemPrenda
      .then((result) => {
        setPrendasMujer(result);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);

  console.log(prendasMujer);
  // Pasamos por props a ItemList el array de prendas
  return (
    <>
      <div className={styles.ItemListContainer}><h3>{greeting}</h3></div>
      
      <ProgressBar loading={loading}/>

      <div>
        <div>{error && 'Hubo un error al cargar los datos'}</div>
        <ItemList prendasMujer={prendasMujer} />
      </div>
    </>
  )
}

export default ItemListContainer;

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../helpers/data.js';
import ItemDetail from './ItemDetail';


export default function ItemDetailContainer() {
const {id} = useParams();
const [loading, setLoading] = useState(true);
const [error, setError] = useState(false);
const [detalle, setDetalle] = useState({});

    useEffect(() => {

        const itemDetalle = new Promise((res,) => {
         
            setTimeout(() => {
                res(data.find(item => item.id === id));
            }, 1000);
        });

        itemDetalle
        .then((result) => {
            setDetalle(result);
          })
          .catch((error) => {
            setError(true);
            console.log(error);
          })
          .finally(() => {
            setLoading(false);

          })
      }, [id]);

    // console.log('Este es el detalle' , detalle);
    // console.log(loading);
    console.log(error);
  return (
    <>
    {Object.keys(detalle).length <1
       ? <div>{loading && 'Cargando...'}</div>
       : <ItemDetail detalle={detalle}/>}
    </>
  )
}


import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import data from '../helpers/data.js';
import {
  doc,
  getDoc,
  getFirestore
} from "firebase/firestore";
import ItemDetail from './ItemDetail';
import ProgressBar from './ProgressBar';

export default function ItemDetailContainer() {
const { id } = useParams();
const [detalle, setDetalle] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(false);

useEffect(() => {
  const db = getFirestore();
  const itemDetail = doc(db, 'products', id);
  getDoc(itemDetail)
  .then((snapshot) => {
    setDetalle({ ...snapshot.data(), id: snapshot.id });
  })
  .catch((error) => {
    setError(error);
  })
  .finally(() => {
    setLoading(false);
  });
}, [id]);

  return (
    <>
    {Object.keys(detalle).length <1
       ? <ProgressBar loading={loading} />
       : <ItemDetail detalle={detalle}/>}
    </>
  )
}
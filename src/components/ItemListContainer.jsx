import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import ProgressBar from './ProgressBar';
import data from '../helpers/data.js';

export default function ItemListContainer() {

  const { id } = useParams();
  const [prendasMujer, setPrendasMujer] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // setPrendasMujer([]);
    // setLoading(true);
    // setError(error);
    const itemPrenda = new Promise((res,) => {
      setTimeout(() => {
        (!id) ? res(data) : res(data.filter(item => item.categoria === id));
      }, 1000);
    });

    itemPrenda
      .then((result) => {
        setPrendasMujer(result);
        // console.log(result);
      })
      .catch((error) => {
        setError(error);
        // console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  // Pasamos por props a ItemList el array de prendas
  return (
    <>
      <ProgressBar loading={loading} />
      <div>
        <div>{error && 'Hubo un error al cargar los datos'}</div>
        <ItemList prendasMujer={prendasMujer} />
      </div>
    </>
  )
}


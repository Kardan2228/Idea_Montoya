import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import ProgressBar from "./ProgressBar";

export default function ItemListContainer() {
  const { id } = useParams();
  const [prendasMujer, setPrendasMujer] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, "products");

    if (id) {
      const queryId = query(productsCollection, where("category", "==", id));
      getDocs(queryId)
        .then((snapshot) => {
          setPrendasMujer(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      getDocs(productsCollection)
        .then((snapshot) => {
          setPrendasMujer(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id]);

  // Pasamos por props a ItemList el array de prendas
  return (
    <>
      {loading ? (
        <ProgressBar loading={loading} />
      ) : (
        <div>
          <div>{error && "Hubo un error al cargar los datos"}</div>
          <ItemList prendasMujer={prendasMujer} />
        </div>
      )}
    </>
  );
}

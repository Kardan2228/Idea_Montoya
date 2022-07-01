import React, { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import {Link} from 'react-router-dom';

export default function Categories() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const categoriesCollection = collection(db, "Categories");

    getDocs(categoriesCollection).then((snapshot) => {
      setCategory(snapshot.docs.map((doc) => doc.data().category));
    });
  }, []);

  return (
    <>
    {
        category.map((itemCategory) => (
            <li className="nav-item" key={itemCategory}>
              <Link className="nav-link" to={`/category/${itemCategory}`}>
                {itemCategory.charAt(0).toUpperCase() + itemCategory.slice(1)}
              </Link>
            </li>
        )
        )
    }
    </>
  )
  
}

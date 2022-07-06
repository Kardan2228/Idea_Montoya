import {useEffect, useState, useRef} from 'react';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import {Link} from 'react-router-dom';

export default function Categories() {
  const [category, setCategory] = useState([]);
  const navButton = useRef(null);
  const linksContainerRef = useRef(null);

  function collapseNav() {
    navButton.current.classList.add("collapsed");
    linksContainerRef.current.classList.remove("show");
  }


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
              <Link onClick={collapseNav} className="nav-link" to={`/category/${itemCategory}`}>
                {itemCategory.charAt(0).toUpperCase() + itemCategory.slice(1)}
              </Link>
            </li>
        )
        )
    }
    </>
  )
  
}

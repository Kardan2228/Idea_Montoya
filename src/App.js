import React from "react";
import styles from "./App.module.scss";
import ItemListContainer from "./components/ItemListContainer.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {

    return ( <
        >
        <
        header className = { styles.header } > < NavBar / > < /header> <
        ItemListContainer greeting = { 'Prendas para mujer' }
        />   <
        />
    );
}

export default App;
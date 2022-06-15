import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {

    return (
        <BrowserRouter>
            <NavBar />
            {/* <ItemCount /> */}
            <Routes>

                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:id" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />

            </Routes>

        </BrowserRouter>
    );
}

export default App;

{/* <>
        <header className = { styles.header } > 
        < NavBar /> </header> 
        <ItemListContainer greeting = { 'Prendas para mujer' }/>   
        </> */}

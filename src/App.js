import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import NavBar from "./components/NavBar.jsx";
import MyProvider from "./context/CartContext";

function App() {

    return (
        <BrowserRouter>
        <MyProvider>
            <NavBar />
            <Routes>

                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:id" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />

            </Routes>
            </MyProvider> 
        </BrowserRouter>
    );
}

export default App;
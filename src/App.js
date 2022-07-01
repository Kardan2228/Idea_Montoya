import { initializeApp } from "firebase/app";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import NavBar from "./components/NavBar.jsx";
import PurchaseOrder from "./components/PurchaseOrder.jsx";
import ToPay from "./components/ToPay.jsx";
import MyProvider from "./context/CartContext";

function App() {

  //COnfiguración para inicializar firebase
initializeApp({
  apiKey: "AIzaSyB_adwqxxgzSVDUwe-IfraHSwPF2W84p_8",
  authDomain: "abrigatestore-d970f.firebaseapp.com",
  projectId: "abrigatestore-d970f",
  storageBucket: "abrigatestore-d970f.appspot.com",
  messagingSenderId: "329844174492",
  appId: "1:329844174492:web:054b54ff4abdc371378759"
});

  return (

    <MyProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:id" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer />}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/purchaseOrder" element={<PurchaseOrder />} />
          <Route path="/toPay" element={<ToPay />} />
        </Routes>
      </BrowserRouter>
    </MyProvider>
    
  );
}

export default App;

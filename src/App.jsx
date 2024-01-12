import React from "react";
import "./App.css";
import CartContextProvider from "./components/CartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Cart from "./components/Cart";
import Error404 from "./components/Error404";

const App = () => {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/category/:id" element={<ItemListContainer />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<Cart />}/>
                    <Route path="*" element={<Error404 />} />
                </Routes>
                <p id="creditos">Desarrollado por <a href="https://www.linkedin.com/in/alejandro-portaluppi/" target="_blank" rel="noreferrer">Alejandro P</a></p>
            </BrowserRouter>
        </CartContextProvider>
    );
}

export default App;

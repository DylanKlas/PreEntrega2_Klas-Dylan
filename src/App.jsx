import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetail from "./components/ItemDetail";
import CartContainer from "./components/CartContainer";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route
            exact
            path="/category/:categoria"
            element={<ItemListContainer />}
          />
          <Route exact path="/item/:id" element={<ItemDetail />} />
          <Route exact path="/cart" element={<CartContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

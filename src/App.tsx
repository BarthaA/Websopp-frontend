import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import LandingPage from "./pages/LandingPage";

const App = () => (
    <div className="app flex flex-row">
        <Navbar />
        <main>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </main>
    </div>
);

export default App;

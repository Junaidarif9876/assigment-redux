import React, { useEffect } from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import Cart from "./pages/Cart";
import CheckoutPage from "./pages/CheckoutPage";
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage";
import ProductDetail from "./pages/ProductDetail";
import Sale from "./pages/Sale";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";


const App = () => {
 
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/SignIn" element={<SignIn/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/checkout" element={<CheckoutPage/>}/>
        <Route path="/product" element={<ProductPage/>}/>
        <Route path="/category" element={<CategoryPage/>}/>
        <Route path="/sale" element={<Sale/>}/>
        <Route path="/product/:id" element={<ProductDetail/>}/>
        
        
      </Routes>
    </div>
  );
};

export default App;
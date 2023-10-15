import React from "react";
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import './App.css';
import CartSite from "./CartSite";

import Home from "./Home";
import { useSelector } from 'react-redux';
import { getCartItems} from './redux/cartSlice';




function App() {
  const cartItem = useSelector(getCartItems);


  return (

   

    <div className="App">
      <Router>
        <div className="container-menu">
        <div>
          <h1>Salvator</h1>
        </div>
     
        <nav className="nav">
        <Link className="nav-text" to="/">HOME</Link>
          <Link className="nav" to="/cart"><img className="nav-cart" src="cart_2420157.png" alt="Zum Einkaufskorb" width="50px"/><p className="nav-text">({cartItem.length})</p></Link>
        </nav>
     
        </div>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
          <Route path="/cart" element={<CartSite/>}></Route>
        </Routes>
      </Router>
   



    </div>
  );
}

export default App;

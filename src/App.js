import React from 'react';
import './App.css';
import Home from './Home';
import Products from './Products';
import Offers from './Offers';
import Search from './Search';
import Cart from './Cart';
import PageNotFound from './PageNotFound'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/products" element={<Products />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/cart" element={<Cart cart={Cart} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

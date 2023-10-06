import React, { useState, useEffect } from 'react';
import './Products.css';

function Products() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const addToCart = (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);

    // Store the updated cart in local storage
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    // Store the title of the item in local storage
    const titlesInCart = JSON.parse(localStorage.getItem('titlesInCart')) || [];
    titlesInCart.push(item.title);
    localStorage.setItem('titlesInCart', JSON.stringify(titlesInCart));
  };

  return (
    <div>
      <div className="header-strip">
        <h2 className="section-heading">Our Products</h2>
      </div>
      <div className="cart-count">Cart ({cart.length} items)</div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div className="item-list">
          {items.map((item) => (
            <div key={item.id} className="item-card">
              <img src={item.image} alt={item.title} />
              <h2 className="item-title">{item.title}</h2>
              <p className="item-price">${item.price}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;

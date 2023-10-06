import React, { useState, useEffect } from 'react';
import './Offers.css';

function Offers() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0); // State to track the number of items in the cart

  useEffect(() => {
    fetch('http://127.0.0.1:5000/products')
      .then((response) => response.json())
      .then((data) => {
        const firstFourItems = data.slice(0, 4);

        const discountedItems = firstFourItems.map((item) => ({
          ...item,
          price: item.price * 0.5,
        }));

        setItems(discountedItems);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const addToCart = (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    setCartCount(cartCount + 1); // Increment cart count

    // You can perform any cart-related actions here, such as updating local storage.
    // For this example, I'll just update the state.
  };

  return (
    <div className="content">
      <div className="header">
        <img
          src="https://img.freepik.com/free-vector/gradient-colorful-sale-background_23-2148846276.jpg"
          alt="Special Offers"
          className="header-image"
        />
      </div>
      <h2>Special Offers</h2>
      <div className="cart-status">Cart Items: {cartCount}</div>
      <div className="offers-list">
        {items.map((item) => (
          <div key={item.id} className="offer-card">
            <div className="offer-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="offer-details">
              <h3 className="offer-title">{item.title}</h3>
              <p className="offer-price">
                <span className="original-price">${item.price.toFixed(2)}</span>
                <span className="discounted-price">
                  ${((item.price * 2) / 3).toFixed(2)} (50% off)
                </span>
              </p>
              <button onClick={() => addToCart(item)} className="add-to-cart-button">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offers;

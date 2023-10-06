import React from 'react';
import './Cart.css'; // Import your CSS file

function Cart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  return (
    <div className="cart-container">
      <h2 className="section-heading">Your Cart</h2>
      <div className="item-list">
        {cart.map((item) => (
          <div key={item.id} className="item-card">
            <img src={item.image} alt={item.title} />
            <h2 className="item-title">{item.title}</h2>
            <p className="item-price">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;

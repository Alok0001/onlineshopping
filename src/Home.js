import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="container">
      <nav className="navbar">
        <h1>Online Shopping</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/offers">Offers</Link>
          </li>
          <li>
            <Link to="/search" className="search-link">
              Search
            </Link>
          </li>
          {/* Add a Cart link */}
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>

      {/* Image section after the navbar */}
      <img
        src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?w=900&t=st=1696569619~exp=1696570219~hmac=b883c385287bc67b1f730060fe069c3748e064ccb2699c99fe40665cca01ce1d"
        alt="Black Friday"
        className="image-section"
      />

      <div className="hero">
        <h2>Welcome to Our Online Store</h2>
        <p>Discover a wide range of products and exclusive offers.</p>
        <Link to="/products" className="btn btn-primary">
          Explore Products
        </Link>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h2>About Us</h2>
            <p>
              Online Shopping is your go-to destination for an unparalleled online shopping experience. We are committed to providing our customers with top-quality products and exceptional service.
            </p>
          </div>
          <div className="footer-section contact">
            <h2>Contact Us</h2>
            <p>Email: contact@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
        </div>
        <p className="footer-bottom">&copy; {new Date().getFullYear()} Online Shopping. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;

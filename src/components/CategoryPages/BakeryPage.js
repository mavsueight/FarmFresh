// src/components/CategoryPages/BakeryPage.js
import React from 'react';
import './BakeryPage.css'; // Make sure to import the CSS for styling if you have one

const BakeryPage = () => {
  return (
    <div>
      <header className="navbar">
        <h1 className="brand-name">FarmFresh</h1>
        <nav>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="fruits.html">Fruits</a></li>
            <li><a href="vegetables.html">Vegetables</a></li>
            <li><a href="dairy.html">Dairy</a></li>
            <li><a href="meat.html">Meat</a></li>
            <li><a href="organic.html">Organic</a></li>
            <li><a href="bakery.html">Bakery</a></li>
            <li><a href="cart.html">Cart</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="product-section">
          <h2 className="category-title">Bakery Products</h2>
          <div className="product-grid">
            <div className="product-card">
              <img src="images/bread.jpg" alt="Bread" />
              <h3>Bread</h3>
              <p>₱50 / loaf</p>
            </div>
            <div className="product-card">
              <img src="images/cake.jpg" alt="Cake" />
              <h3>Cake</h3>
              <p>₱250 / whole</p>
            </div>
            <div className="product-card">
              <img src="images/cookies.jpg" alt="Cookies" />
              <h3>Cookies</h3>
              <p>₱80 / pack</p>
            </div>
            <div className="product-card">
              <img src="images/pastry.jpg" alt="Pastry" />
              <h3>Pastry</h3>
              <p>₱60 / piece</p>
            </div>
            <div className="product-card">
              <img src="images/croissant.jpg" alt="Croissant" />
              <h3>Croissant</h3>
              <p>₱90 / piece</p>
            </div>
            <div className="product-card">
              <img src="images/muffin.jpg" alt="Muffin" />
              <h3>Muffin</h3>
              <p>₱70 / piece</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="App-footer">
        <p>&copy; 2025 FarmFresh. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default BakeryPage;

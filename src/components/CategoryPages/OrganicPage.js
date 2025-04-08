// src/components/CategoryPages/OrganicPage.js
import React from 'react';
import './OrganicPage.css'; // Ensure to import your CSS file

const OrganicPage = () => {
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
          <h2 className="category-title">Organic Products</h2>
          <div className="product-grid">
            <div className="product-card">
              <img src="images/organic-kale.jpg" alt="Organic Kale" />
              <h3>Organic Kale</h3>
              <p>₱120 / bunch</p>
            </div>
            <div className="product-card">
              <img src="images/organic-tomato.jpg" alt="Organic Tomato" />
              <h3>Organic Tomato</h3>
              <p>₱80 / kg</p>
            </div>
            <div className="product-card">
              <img src="images/organic-apple.jpg" alt="Organic Apple" />
              <h3>Organic Apple</h3>
              <p>₱90 / kg</p>
            </div>
            <div className="product-card">
              <img src="images/organic-spinach.jpg" alt="Organic Spinach" />
              <h3>Organic Spinach</h3>
              <p>₱50 / bunch</p>
            </div>
            <div className="product-card">
              <img src="images/organic-carrot.jpg" alt="Organic Carrot" />
              <h3>Organic Carrot</h3>
              <p>₱100 / kg</p>
            </div>
            <div className="product-card">
              <img src="images/organic-banana.jpg" alt="Organic Banana" />
              <h3>Organic Banana</h3>
              <p>₱60 / kg</p>
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

export default OrganicPage;

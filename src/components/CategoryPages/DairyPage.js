// src/components/CategoryPages/DairyPage.js
import React from 'react';
import './DairyPage.css'; // Make sure to import your CSS file if you have one

const DairyPage = () => {
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
          <h2 className="category-title">Fresh Dairy</h2>
          <div className="product-grid">
            <div className="product-card">
              <img src="images/milk.jpg" alt="Milk" />
              <h3>Milk</h3>
              <p>₱50 / liter</p>
            </div>
            <div className="product-card">
              <img src="images/cheese.jpg" alt="Cheese" />
              <h3>Cheese</h3>
              <p>₱120 / kg</p>
            </div>
            <div className="product-card">
              <img src="images/yogurt.jpg" alt="Yogurt" />
              <h3>Yogurt</h3>
              <p>₱80 / pack</p>
            </div>
            <div className="product-card">
              <img src="images/butter.jpg" alt="Butter" />
              <h3>Butter</h3>
              <p>₱150 / pack</p>
            </div>
            <div className="product-card">
              <img src="images/cream.jpg" alt="Cream" />
              <h3>Cream</h3>
              <p>₱100 / jar</p>
            </div>
            <div className="product-card">
              <img src="images/paneer.jpg" alt="Paneer" />
              <h3>Paneer</h3>
              <p>₱200 / block</p>
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

export default DairyPage;

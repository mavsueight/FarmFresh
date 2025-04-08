// src/components/CategoryPages/FruitsPage.js
import React from 'react';
import './FruitsPage.css'; // Ensure to import your CSS file

const FruitsPage = () => {
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
          <h2 className="category-title">Fresh Fruits</h2>
          <div className="product-grid">
            <div className="product-card">
              <img src="images/apple.jpg" alt="Apple" />
              <h3>Apple</h3>
              <p>₱80 / kg</p>
            </div>
            <div className="product-card">
              <img src="images/banana.jpg" alt="Banana" />
              <h3>Banana</h3>
              <p>₱50 / kg</p>
            </div>
            <div className="product-card">
              <img src="images/mango.jpg" alt="Mango" />
              <h3>Mango</h3>
              <p>₱120 / kg</p>
            </div>
            <div className="product-card">
              <img src="images/orange.jpg" alt="Orange" />
              <h3>Orange</h3>
              <p>₱90 / kg</p>
            </div>
            <div className="product-card">
              <img src="images/grapes.jpg" alt="Grapes" />
              <h3>Grapes</h3>
              <p>₱140 / kg</p>
            </div>
            <div className="product-card">
              <img src="images/watermelon.jpg" alt="Watermelon" />
              <h3>Watermelon</h3>
              <p>₱60 / kg</p>
            </div>
            <div className="product-card">
              <img src="images/pineapple.jpg" alt="Pineapple" />
              <h3>Pineapple</h3>
              <p>₱70 / piece</p>
            </div>
            <div className="product-card">
              <img src="images/papaya.jpg" alt="Papaya" />
              <h3>Papaya</h3>
              <p>₱55 / kg</p>
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

export default FruitsPage;

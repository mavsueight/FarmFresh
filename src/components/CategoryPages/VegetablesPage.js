// src/components/CategoryPages/VegetablesPage.js
import React from 'react';
import './VegetablesPage.css'; // Ensure to import your CSS file

const VegetablesPage = () => {
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
          <h2 className="category-title">Fresh Vegetables</h2>
          <div className="product-grid">
            <div className="product-card">
              <img src="images/tomato.jpg" alt="Tomato" />
              <h3>Tomato</h3>
              <p>₱60 / kg</p>
            </div>
            <div className="product-card">
              <img src="images/onion.jpg" alt="Onion" />
              <h3>Onion</h3>
              <p>₱85 / kg</p>
            </div>
            <div className="product-card">
              <img src="images/potato.jpg" alt="Potato" />
              <h3>Potato</h3>
              <p>₱50 / kg</p>
            </div>
            <div className="product-card">
              <img src="images/carrot.jpg" alt="Carrot" />
              <h3>Carrot</h3>
              <p>₱70 / kg</p>
            </div>
            <div className="product-card">
              <img src="images/cabbage.jpg" alt="Cabbage" />
              <h3>Cabbage</h3>
              <p>₱45 / head</p>
            </div>
            <div className="product-card">
              <img src="images/broccoli.jpg" alt="Broccoli" />
              <h3>Broccoli</h3>
              <p>₱100 / kg</p>
            </div>
            <div className="product-card">
              <img src="images/eggplant.jpg" alt="Eggplant" />
              <h3>Eggplant</h3>
              <p>₱55 / kg</p>
            </div>
            <div className="product-card">
              <img src="images/spinach.jpg" alt="Spinach" />
              <h3>Spinach</h3>
              <p>₱35 / bunch</p>
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

export default VegetablesPage;

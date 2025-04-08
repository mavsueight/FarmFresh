// src/components/CategoryPages/MeatPage.js
import React from 'react';
import './MeatPage.css'; // Ensure to import your CSS file

const MeatPage = () => {
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
          <h2 className="category-title">Fresh Meat</h2>
          <div className="product-grid">
            <div className="product-card">
              <img src="images/chicken.jpg" alt="Chicken" />
              <h3>Chicken</h3>
              <p>₱150 / kg</p>
            </div>
            <div className="product-card">
              <img src="images/beef.jpg" alt="Beef" />
              <h3>Beef</h3>
              <p>₱250 / kg</p>
            </div>
            <div className="product-card">
              <img src="images/pork.jpg" alt="Pork" />
              <h3>Pork</h3>
              <p>₱200 / kg</p>
            </div>
            <div className="product-card">
              <img src="images/lamb.jpg" alt="Lamb" />
              <h3>Lamb</h3>
              <p>₱350 / kg</p>
            </div>
            <div className="product-card">
              <img src="images/turkey.jpg" alt="Turkey" />
              <h3>Turkey</h3>
              <p>₱400 / kg</p>
            </div>
            <div className="product-card">
              <img src="images/sausages.jpg" alt="Sausages" />
              <h3>Sausages</h3>
              <p>₱180 / pack</p>
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

export default MeatPage;

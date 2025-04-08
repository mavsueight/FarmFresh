import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="navbar">
          <h1 className="brand-name">FarmFresh</h1>
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <h2>Welcome to <span className="highlight">FarmFresh</span>!</h2>
          <p>Your online marketplace for fresh, organic produce.</p>
          <button className="cta-btn">Shop Now</button>
        </section>

        <section className="categories" id="products">
          <h2>Product Categories</h2>
          <div className="category-grid">

            <div className="category-card">
              <h3>Fruits</h3>
              <ul>
                <li>Mango</li>
                <li>Banana</li>
                <li>Apple</li>
                <li>Orange</li>
                <li>Grapes</li>
                <li>Pineapple</li>
                <li>Strawberry</li>
                <li>Watermelon</li>
              </ul>
            </div>

            <div className="category-card">
              <h3>Vegetables</h3>
              <ul>
                <li>Carrots</li>
                <li>Tomatoes</li>
                <li>Spinach</li>
                <li>Broccoli</li>
                <li>Bell Peppers</li>
                <li>Eggplant</li>
                <li>Lettuce</li>
                <li>Onions</li>
              </ul>
            </div>

            <div className="category-card">
              <h3>Dairy</h3>
              <ul>
                <li>Milk</li>
                <li>Cheese</li>
                <li>Butter</li>
                <li>Yogurt</li>
                <li>Fresh Cream</li>
                <li>Condensed Milk</li>
                <li>Ice Cream</li>
              </ul>
            </div>

            <div className="category-card">
              <h3>Meat</h3>
              <ul>
                <li>Chicken</li>
                <li>Beef</li>
                <li>Pork</li>
                <li>Goat Meat</li>
                <li>Ground Beef</li>
                <li>Chicken Wings</li>
                <li>Bacon</li>
              </ul>
            </div>

            <div className="category-card">
              <h3>Organic</h3>
              <ul>
                <li>Organic Kale</li>
                <li>Organic Tomatoes</li>
                <li>Organic Apples</li>
                <li>Organic Rice</li>
                <li>Organic Eggs</li>
                <li>Organic Beans</li>
                <li>Organic Banana</li>
              </ul>
            </div>

            <div className="category-card">
              <h3>Bakery</h3>
              <ul>
                <li>Whole Wheat Bread</li>
                <li>Croissants</li>
                <li>Cookies</li>
                <li>Bagels</li>
                <li>Chocolate Cake</li>
                <li>Banana Bread</li>
                <li>Muffins</li>
              </ul>
            </div>

          </div>
        </section>

        <section className="features">
          <div className="feature">
            <h3>Fresh Produce</h3>
            <p>From farm to your door, always fresh.</p>
          </div>
          <div className="feature">
            <h3>Eco-Friendly</h3>
            <p>Sustainably grown and responsibly sourced.</p>
          </div>
          <div className="feature">
            <h3>Easy Shopping</h3>
            <p>Convenient shopping with easy checkout and delivery.</p>
          </div>
        </section>

        <footer className="App-footer">
          <p>&copy; 2025 FarmFresh. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;

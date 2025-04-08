// src/components/ProductPages/BeefSteakPage.js
import React from 'react';
import './BeefSteakPage.css'; // Ensure to import your CSS file

const BeefSteakPage = () => {
  // Function to add product to cart
  const addToCart = (productName, price) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || []; // Retrieve existing cart or create a new one
    const product = { name: productName, price: price, quantity: 1 };

    // Check if the product already exists in the cart
    const existingProductIndex = cart.findIndex(item => item.name === productName);
    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += 1; // If it exists, increase quantity
    } else {
      cart.push(product); // Otherwise, add new product
    }

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} added to your cart!`);
  };

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
        <section className="product-details">
          <div className="product-info">
            <img src="images/beef-steak.jpg" alt="Beef Steak" />
            <h2>Beef Steak</h2>
            <p>₱350 / kg</p>
            <p>Premium, tender beef steak perfect for grilling, pan-searing, or cooking in your favorite steak recipe.</p>
            <button
              className="add-to-cart"
              onClick={() => addToCart('Beef Steak', '₱350')}
            >
              Add to Cart
            </button>
          </div>
        </section>
      </main>

      <footer className="App-footer">
        <p>&copy; 2025 FarmFresh. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default BeefSteakPage;

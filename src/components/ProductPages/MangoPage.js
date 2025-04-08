// src/components/ProductPages/MangoPage.js
import React from 'react';
import './MangoPage.css'; // Ensure to import your CSS file

const MangoPage = () => {
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
            <img src="images/mango.jpg" alt="Mango" />
            <h2>Mango</h2>
            <p>₱120 / kg</p>
            <p>Juicy, sweet mangoes full of flavor. Enjoy them fresh, in a smoothie, or as part of a fruit salad.</p>
            <button
              className="add-to-cart"
              onClick={() => addToCart('Mango', '₱120')}
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

export default MangoPage;

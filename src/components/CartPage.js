// src/components/CartPage.js
import React, { useState, useEffect } from 'react';
import './CartPage.css'; // Ensure to import your CSS file

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
    } else {
      // Logic to proceed to checkout (redirect to checkout page or process the order)
      alert('Proceeding to checkout...');
    }
  };

  return (
    <div>
      <header>
        <h1>Your Shopping Cart</h1>
      </header>

      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <p>{item.name} - {item.quantity} x {item.price}</p>
            </div>
          ))
        )}
      </div>

      <footer>
        <button onClick={handleCheckout}>Proceed to Checkout</button>
      </footer>
    </div>
  );
};

export default CartPage;

// script.js
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Product added to cart!');
        window.location.href = 'cart.html'; // Go to cart page
    });
});

// Search bar functionality (redirect to product category page)
document.getElementById('searchBar').addEventListener('input', (e) => {
    const query = e.target.value;
    // Redirect to category page with query
    window.location.href = `searchResults.html?query=${query}`;
});

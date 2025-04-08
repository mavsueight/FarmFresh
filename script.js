// Wait for the DOM to fully load before running any scripts
document.addEventListener("DOMContentLoaded", function () {
    console.log("Script Loaded: DOM fully loaded");

    // Handle "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    console.log("Add to Cart buttons:", addToCartButtons);  // Log the buttons to ensure they are being selected

    if (addToCartButtons.length === 0) {
        console.error("No 'Add to Cart' buttons found. Make sure the buttons have the 'add-to-cart' class.");
    }

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            console.log("Button clicked:", event.target);

            // Get the product details from the button's closest parent (product card)
            const productCard = event.target.closest('.product-card');
            if (productCard) {
                const productName = productCard.querySelector('h3').innerText;
                const productPrice = productCard.querySelector('p').innerText;
                const productImage = productCard.querySelector('img').src;

                console.log('Product Added: ', { productName, productPrice, productImage });

                // Create product object
                const product = {
                    name: productName,
                    price: productPrice,
                    image: productImage,
                };

                // Get cart from localStorage or create a new one if not existing
                let cart = JSON.parse(localStorage.getItem('cart')) || [];

                // Add the selected product to the cart
                cart.push(product);

                // Save the updated cart back to localStorage
                localStorage.setItem('cart', JSON.stringify(cart));

                // Alert user and redirect to the cart page
                alert(`${productName} has been added to your cart.`);

                // Log cart data for debugging
                console.log('Current Cart: ', cart);

                // Go to the cart page
                window.location.href = 'cart.html'; // Go to the cart page
            } else {
                console.error("Product card not found.");
            }
        });
    });

    // Search bar functionality (redirect to product category page)
    const searchBar = document.getElementById('searchBar');
    if (searchBar) {
        searchBar.addEventListener('input', (e) => {
            const query = e.target.value;
            console.log('Search query:', query); // Log the search query

            // Redirect to the search results page with the search query
            window.location.href = `searchResults.html?query=${query}`;
        });
    }
});

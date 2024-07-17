// Sample product data
const products = [
    { id: 1, name: 'Organic Tomatoes', price: 2.99, image: 'images/tomatoes.jpg' },
    { id: 2, name: 'Fresh Spinach', price: 1.99, image: 'images/spinach.jpg' },
    { id: 3, name: 'Crisp Lettuce', price: 1.49, image: 'images/lettuce.jpg' },
    { id: 4, name: 'Broccoli Bunch', price: 2.49, image: 'images/broccoli.jpg' }
];

// Function to create product HTML
function createProductHTML(product) {
    return `
        <div class="product-item">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})" class="button">Add to Cart</button>
        </div>
    `;
}

// Function to display products
function displayProducts() {
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = products.map(createProductHTML).join('');
}

// Function to add item to cart
function addToCart(productId) {
    // Here you would typically update the cart in local storage or send to a server
    console.log(`Product ${productId} added to cart`);
    
    // Update cart count (this is just a simple example)
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = parseInt(cartCount.textContent) + 1;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
});

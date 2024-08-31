// script.js
document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.querySelector('.product-grid');
    
    // Sample product data
    const products = [
        { name: 'Product 1', price: 19.99, image: 'am2.jpg' },
        { name: 'Product 2', price: 29.99, image: 'amg2.jpg' },
        { name: 'Product 3', price: 39.99, image: 'amg3.jpg' },
        // Add more products as needed
    ];

    // Function to create product elements
    function createProductElement(product) {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button class="add-to-cart">Add to Cart</button>
        `;
        return productElement;
    }

    // Add products to the grid
    products.forEach(product => {
        const productElement = createProductElement(product);
        productGrid.appendChild(productElement);
    });

    // Add to cart functionality (basic)
    productGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            alert('Product added to cart!');
            // Here you would typically update the cart state
        }
    });
});
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.querySelector('.product-grid');
    const categoryFilter = document.getElementById('category-filter');
    const minPriceInput = document.getElementById('min-price');
    const maxPriceInput = document.getElementById('max-price');
    const applyPriceFilterBtn = document.getElementById('apply-price-filter');
    
    // Sample product data with categories
    const products = [
        { name: 'Laptop', price: 999.99, image: 'laptop.jpg', category: 'electronics' },
        { name: 'Smartphone', price: 499.99, image: 'smartphone.jpg', category: 'electronics' },
        { name: 'T-shirt', price: 19.99, image: 'tshirt.jpg', category: 'clothing' },
        { name: 'Jeans', price: 49.99, image: 'jeans.jpg', category: 'clothing' },
        { name: 'Novel', price: 9.99, image: 'novel.jpg', category: 'books' },
        { name: 'Cookbook', price: 24.99, image: 'cookbook.jpg', category: 'books' },
    ];

    // Function to create product elements
    function createProductElement(product) {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <p>Category: ${product.category}</p>
            <button class="add-to-cart">Add to Cart</button>
        `;
        return productElement;
    }

    // Function to filter and display products
    function filterAndDisplayProducts() {
        const selectedCategory = categoryFilter.value;
        const minPrice = parseFloat(minPriceInput.value) || 0;
        const maxPrice = parseFloat(maxPriceInput.value) || Infinity;

        const filteredProducts = products.filter(product => 
            (selectedCategory === 'all' || product.category === selectedCategory) &&
            (product.price >= minPrice && product.price <= maxPrice)
        );

        productGrid.innerHTML = '';
        filteredProducts.forEach(product => {
            const productElement = createProductElement(product);
            productGrid.appendChild(productElement);
        });
    }

    // Initial display of all products
    filterAndDisplayProducts();

    // Event listeners for filters
    categoryFilter.addEventListener('change', filterAndDisplayProducts);
    applyPriceFilterBtn.addEventListener('click', filterAndDisplayProducts);

    // Add to cart functionality (basic)
    productGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            alert('Product added to cart!');
            // Here you would typically update the cart state
        }
    });
});
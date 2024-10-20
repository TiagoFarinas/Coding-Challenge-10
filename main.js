// Task 2: Add Event Listener for Product Selection
document.addEventListener('DOMContentLoaded', function() {
    var sizeSelect = document.getElementById('sizeSelect');
    var productPrice = document.getElementById('productPrice');
    var pricing = {// Pricing for different sizes
        small: 20.00,
        medium: 22.50,
        large: 24.50};
    sizeSelect.addEventListener('change', function(event) {// Update price based on size selection
        var selectedSize = event.target.value;
        productPrice.textContent = "Price: $" + pricing[selectedSize]})});// Update price 

// Task 3: Handle Stock Availability
var purchaseButton = document.getElementById('purchaseButton');
var stock = {
    small: true, // In Stock
    medium: true, // In Stock
    large: false };// Out of Stock
sizeSelect.addEventListener('change', function(event) {
    var selectedSize = event.target.value;
    // Control purchase button based on stock availability
    purchaseButton.disabled = !stock[selectedSize]}); // Disable if out of stock

 // Task 4: Create a Checkout Event
 purchaseButton.addEventListener('click', function() {
    var selectedSize = sizeSelect.value;
    if (selectedSize === 'large') {// Show message based on stock availability
        alert('Sorry, the product is out of stock.');
    } else {
        alert('Product purchased successfully!')}});

   // Task 5: Implement Event Delegation for Dynamic Product List
    document.getElementById('productList').addEventListener('click', function(event) {
        if (event.target.className === 'buyButton') {
            var selectedSize = event.target.previousElementSibling.value;
            if (selectedSize.includes('Out of Stock')) {// Check stock and show appropriate message
                alert('Sorry, this product is out of stock.');
            } else {
                alert('Product purchased successfully!')}}});
        document.getElementById('addProductForm').addEventListener('submit', function(event) {    // Submit form to add products
        event.preventDefault(); // Form won't refresh page
        var newProductName = document.getElementById('newProductName').value;
        var newProductSizes = document.getElementById('newProductSizes').value.split(',').map(size => size.trim());
        addNewProduct(newProductName, newProductSizes); // Function to add product
        document.getElementById('newProductName').value = '';
        document.getElementById('newProductSizes').value = ''});
function addNewProduct(name, sizes) {// Function to add product to list
    var productList = document.getElementById('productList');
    var productDiv = document.createElement('div');    // Create new products
    var productTitle = document.createElement('h3');
    productTitle.textContent = name;
    var sizeSelect = document.createElement('select');
    sizes.forEach(function(size) {
        var option = document.createElement('option');
        option.value = size;
        option.textContent = size;
        sizeSelect.appendChild(option)});
    var buyButton = document.createElement('button');
    buyButton.textContent = "Buy Now";
    buyButton.className = 'buyButton'; // Class will delegate events
    productDiv.appendChild(productTitle); // Create product div
    productDiv.appendChild(sizeSelect);
    productDiv.appendChild(buyButton);
    productList.appendChild(productDiv)}; // Append product div to product list
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
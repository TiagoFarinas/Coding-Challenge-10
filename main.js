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
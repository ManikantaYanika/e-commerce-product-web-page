// JavaScript for E-commerce Product Page

// Update the main image when clicking a thumbnail
const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.getElementById('main-image');

thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', (e) => {
        mainImage.src = e.target.src;
    });
});

// Update the total price when the quantity changes
const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.getElementById('total-price');
const pricePerItem = 49.99;

quantityInput.addEventListener('input', () => {
    const quantity = parseInt(quantityInput.value);
    const totalPrice = (quantity * pricePerItem).toFixed(2);
    totalPriceElement.textContent = totalPrice;
});

// Add to cart functionality (basic)
document.getElementById('add-to-cart').addEventListener('click', () => {
    const quantity = parseInt(quantityInput.value);
    alert(`${quantity} item(s) added to your cart!`);
});

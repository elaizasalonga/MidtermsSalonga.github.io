document.addEventListener('DOMContentLoaded', function () {
  var cartCount = 0;

  // Function to update cart count and show notification
  function updateCartCount() {
    document.getElementById('cart-notification').textContent = ' ' + cartCount;
  }

  // Add click event listener to each "Buy Now" button
  var buyNowButtons = document.querySelectorAll('.btn-primary');
  buyNowButtons.forEach(function (button) {
      button.addEventListener('click', function (event) {
          event.preventDefault(); // Prevent the default form submission
          cartCount++;
          updateCartCount();
          alert('Item added to cart!');
      });
  });
});

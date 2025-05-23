function addToCart(title, price, image) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ title, price, image });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`Added "${title}" to cart!`);
  alert(`${title}\n\n${description}`);
}

  function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const container = document.getElementById('cart-items');
    const totalSpan = document.getElementById('total');
    container.innerHTML = '';
    let total = 0;
  
    if (cart.length === 0) {
      container.innerHTML = '<p>Your cart is empty.</p>';
      totalSpan.innerText = '$0.00';
      return;
    }
  
    cart.forEach((item, index) => {
      total += item.price;  
      const div = document.createElement('div');
      div.classList.add('cart-item');
      div.innerHTML = `
        <div class="item-info">
          <h4>${item.title}</h4>
          <p>$${item.price.toFixed(2)}</p>
        </div>
        <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
      `;
      container.appendChild(div);
    });
  
    totalSpan.innerText = `$${total.toFixed(2)}`;
  }
  
  function removeItem(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
  }
  
  // Load cart automatically on page with cart display
  document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('cart-items')) {
      displayCart();
    }
  });

  document.getElementById('checkoutBtn').addEventListener('click', () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (cart.length === 0) {
    alert('Your cart is empty. Please add some books first.');
    return;
  }
  
  // Simple checkout confirmation
  if (confirm('Proceed to checkout?')) {
    alert('Thank you for your purchase!');

    // Clear cart
    localStorage.removeItem('cart');
    
    // Reload cart page to show empty cart
    loadCart();
  }
});


  
 



const cartItemsContainer = document.getElementById("cart-items");

cartItems.forEach((item) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${item.name}</td>
    <td>${item.price}</td>
    <td>${item.quantity}</td>
  `;
  cartItemsContainer.appendChild(row);
});

// Add a button to clear the cart
const clearCartButton = document.createElement("button");
clearCartButton.innerHTML = "Clear Cart";
clearCartButton.addEventListener("click", () => {
    
  // Clear the cart items array and remove the rows from the table
  cartItems = [];
  cartItemsContainer.innerHTML = "";
});
cartItemsContainer.appendChild(clearCartButton);
// Initialize the cart from local storage or as an empty array
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to add an item to the cart
function addToCart(productName, productPrice) {
    let existingItem = cart.find(item => item.name === productName);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }

    saveCart();
    updateCart();
}

// Function to update the cart display and total price
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");

    cartItems.innerHTML = ""; // Clear existing cart items
    let totalPrice = 0;

    cart.forEach((item, index) => {
        totalPrice += item.price * item.quantity;
        
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;

        // Decrease quantity button
        const decreaseButton = document.createElement("button");
        decreaseButton.textContent = "-";
        decreaseButton.style.marginLeft = "10px";
        decreaseButton.onclick = () => decreaseQuantity(index);

        // Remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.style.marginLeft = "10px";
        removeButton.onclick = () => removeFromCart(index);

        listItem.appendChild(decreaseButton);
        listItem.appendChild(removeButton);
        cartItems.appendChild(listItem);
    });

    totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
    saveCart();
}

// Function to decrease item quantity
function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    } else {
        cart.splice(index, 1);
    }
    updateCart();
}

// Function to remove an item from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Function to simulate checkout with XION
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty. Add some items before checking out.");
        return;
    }

    alert(`Proceeding to checkout with XION. Total: $${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}`);
    
    cart = []; // Clear the cart after checkout
    updateCart();
}

// Function to save cart to local storage
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Load cart on page load
updateCart();
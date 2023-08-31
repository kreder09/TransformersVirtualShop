// Limpiar la lista del carrito
const cartItems = document.querySelector(".cart-items");

const clearCartButton = document.getElementById("clear-cart");

clearCartButton.addEventListener("click", () => {
    localStorage.removeItem("cart");
    cartItems.innerHTML = ""; 
});


// Función para calcular el subtotal
function calculateSubtotal(cart) {
    return cart.reduce((total, item) => total + parseFloat(item.price), 0);
}

// Mostrar elementos del carrito y subtotal al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    
    const emptyCartMessage = document.getElementById("empty-cart-message");
    const cartItemsList = document.querySelector(".cart-items");

    if (storedCart.length === 0) {
        emptyCartMessage.style.display = "block";
    } else {
        emptyCartMessage.style.display = "none";

        storedCart.forEach(item => {
            const cartItem = document.createElement("li");
            cartItem.innerText = `${item.name} - $${item.price}`;
            cartItemsList.appendChild(cartItem);
        });

        const subtotal = calculateSubtotal(storedCart);
        const subtotalElement = document.createElement("p");
        subtotalElement.innerText = `Subtotal: $${subtotal.toFixed(2)}`;
        cartItemsList.appendChild(subtotalElement);
    }
});

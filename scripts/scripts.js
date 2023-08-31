//MENU HAMBURGUESA//

const menuToggle = document.querySelector(".menu-toggle");
const headerNav = document.querySelector(".header-nav ul");

menuToggle.addEventListener("click", () => {
    headerNav.classList.toggle("active");
});

const headerLinks = document.querySelectorAll(".header-option");

headerLinks.forEach(link => {
    link.addEventListener("click", () => {
        headerNav.classList.remove("active");
    });
});


//CARRITO DE COMPRAS//

const productLinks = document.querySelectorAll(".product-link");

productLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        
        const productName = link.getAttribute("data-name");
        const productPrice = link.getAttribute("data-price");

        const cartItem = { name: productName, price: productPrice };
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        storedCart.push(cartItem);

        localStorage.setItem("cart", JSON.stringify(storedCart));
    });
});

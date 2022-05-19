// Variables
const header = document.querySelector(".header");
const menu = document.querySelector(".menu-container");
const icon = document.querySelector(".menu-box");

// EventListener para añadir clases a los elementos cuando el icono del menú sea pulsado
icon.addEventListener("click", function() {
    header.classList.toggle("header-resize");
    menu.classList.toggle("menu-show")
});
const plus = document.querySelector(".plus-sign");
const minus = document.querySelector(".minus-sign");
const navButt = document.getElementsByClassName("menu-button");
const navMenu = document.querySelector(".navbar-right");
const navLink = document.querySelectorAll(".nav-link")

for (let i = 0; i < navButt.length; i++) {
    navButt[i].addEventListener('click', mobileMenu);
}

navLink.forEach(n => n.addEventListener('click', closeMenu));

function mobileMenu() {
    plus.classList.toggle("hidden");
    minus.classList.toggle("shown");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    plus.classList.remove("hidden");
    minus.classList.remove("shown");
    navMenu.classList.remove("active");
}
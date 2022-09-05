const burger = document.getElementById("burger");
const navMobile = document.getElementById("nav-mobile");
const body = document.querySelector("body");
const header = document.querySelector("header");
const navLinks = document.querySelectorAll("#nav-mobile ul li a");
burger.addEventListener('click', () => {
    burger.classList.toggle('menu-active');
    navMobile.classList.toggle('menu-active');
    body.classList.toggle('menu-active');
    header.classList.toggle('menu-active');
    for (let navLink of navLinks) {
        navLink.classList.toggle("menu-active");
    }

})
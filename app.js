const burger = document.getElementById("burger");
const navMobile = document.getElementById("navmobile");
const body = document.querySelector("body");
const header = document.querySelector("header");
burger.addEventListener('click', () => {
    burger.classList.toggle('menu-active');
    navMobile.classList.toggle('menu-active');
    body.classList.toggle('menu-active');
    header.classList.toggle('menu-active');
})
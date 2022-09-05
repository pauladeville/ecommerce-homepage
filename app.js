/*NAV*/
const burger = document.getElementById("burger");
const burgerBars = document.querySelectorAll("#burger span");
const navMobile = document.getElementById("nav-mobile");
const body = document.querySelector("body");
const logo = document.querySelector("header a");
const navLinks = document.querySelectorAll("#nav-mobile ul li a");
burger.addEventListener("click", () => {
  burger.classList.toggle("menu-active");
  navMobile.classList.toggle("menu-active");
  body.classList.toggle("menu-active");
  for (let navLink of navLinks) {
    navLink.classList.toggle("menu-active");
  }
});
window.onscroll = function () {
  if (window.scrollY >= 100) {
    for (let burgerBar of burgerBars) {
      burgerBar.style.backgroundColor = "transparent";
    }
    logo.style.color = "transparent";
  }
  if (window.scrollY < 100) {
    for (let burgerBar of burgerBars) {
      burgerBar.style.backgroundColor = "#fff";
      logo.style.color = "#fff";

    }
  }
};

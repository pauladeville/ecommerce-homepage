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

let slides = document.getElementsByClassName("slider__container");
let currentSlide = 0;
let arrowsPrev = document.getElementsByClassName("prev");
let arrowsNext = document.getElementsByClassName("next");

for(let arrow of arrowsPrev) {
  arrow.addEventListener("click", () => {
    changeSlide(currentSlide - 1);
  });  
};
for(let arrow of arrowsNext) {
  arrow.addEventListener("click", () => {
    changeSlide(currentSlide + 1);
  });  
}
function changeSlide(wantedSlide){
  if(wantedSlide >= slides.length){
    wantedSlide = 0;
  }
  if(wantedSlide < 0) {
    wantedSlide = slides.length - 1;
  }
  console.log(wantedSlide);

  slides[currentSlide].classList.remove("active");
  slides[wantedSlide].classList.add("active");
  currentSlide = wantedSlide;
};

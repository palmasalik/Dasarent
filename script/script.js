AOS.init({
  offset: 150,
  duration: 2000
});
const swiper = new Swiper(".swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  slidesPerView: 1,
  breakpoints: {
    992: {
      slidesPerView: 3
    }
  },
  keyboard: {
    enabled: true
  },
  spaceBetween: 30,
  autoplay: true
});
const nav = document.querySelector(".nav"),
  intro = document.querySelector(".intro"),
  social = document.querySelector(".intro .social");
function scroll() {
  scrollY > nav.clientHeight ? (nav.classList.add("scrolled"), social.classList.add("scrolled")) : (nav.classList.remove("scrolled"), social.classList.remove("scrolled"));
}
window.addEventListener("scroll", function () {
  return scroll();
});

// Burger

const list = document.querySelector(".nav_wrapper-list"),
  burgerMunu = document.querySelector(".nav_wrapper-btn");
burgerMunu.addEventListener("click", function () {
  burgerMunu.classList.toggle("open");
  list.classList.toggle("open");
});
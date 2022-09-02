//! ===========  BURGERMENU SCRIPT START  ============ !\\
var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").classList.remove("scroll");
  } else {
    document.getElementById("navbar").classList.add("scroll");
  }
  prevScrollpos = currentScrollPos;
};

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");

  nav.classList.toggle("sticky", window.scrollY > 0);
});
//! ===========  BURGERMENU SCRIPT END  ============ !\\

//! ===========  SWIPER SCRIPT START  ============ !\\

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  spaceBetween: 35,
  // If we need pagination
  pagination: {
    el: ".swiper-custom-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class=${className}>${index + 1}</span>`;
    },
  },
});

//! ============  SWIPER SCRIPT END  ============= !\\

//! ============  HEADER CAROUSEL SCRIPT START  ============= !\\
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("h-img-dv");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
//! =============  HEADER CAROUSEL SCRIPT END  ============== !\\

//! =============  TILMELD SCRIPT START  ============== !\\

function removeDiv() {
  var sletknap = document.getElementById("sletknap");
  sletknap.parentNode.removeChild(sletknap);
}
//! ==============  TILMELD SCRIPT END  =============== !\\

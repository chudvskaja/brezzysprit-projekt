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

//! ==============  SWIPER SCRIPT START  =============== !\\

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  spaceBetween: 0,
  // If we need pagination
  pagination: {
    el: ".swiper-custom-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class=${className}>${index + 1}</span>`;
    },
  },
});

//! ===============  SWIPER SCRIPT END  ================ !\\

//! ==============  DROPDOWN SCRIPT START  =============== !\\

let dropdownBoxes = document.querySelectorAll(".dropdown-menu");
const activateBox = (e) => {
  if (e.currentTarget.classList.contains("show")) {
    e.currentTarget.classList.remove("show");
  } else {
    dropdownBoxes.forEach((box) => {
      box.classList.remove("show");
    });
    e.currentTarget.classList.add("show");
  }
};

dropdownBoxes.forEach((box) => {
  box.addEventListener("click", activateBox);
});

//! ===============  DROPDOWN SCRIPT END  ================ !\\

//! ==============  COUNTER SCRIPT START  =============== !\\

let add = document.getElementById("increment");
let remove = document.getElementById("decrement");

let int = document.getElementById("number");
let integer = 0;

add.addEventListener("click", function () {
  integer += 1;
  int.innerHTML = integer;
});

remove.addEventListener("click", function () {
  integer -= 1;
  int.innerHTML = integer;
});

//! ===============  COUNTER SCRIPT END  ================ !\\

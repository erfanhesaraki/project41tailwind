const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    400: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    2560: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});
let swipers = new Swiper(".ErfanSwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    400: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
});

let _ul = document.getElementById("list");
let _li = document.getElementById("ham-Menu");
let __ul = document.getElementById("hambergur-menu");
let _h = __ul.clientHeight;
__ul.height = 0 + "px";
console.log(_h);
let _btn = document.getElementById("btn-menu");

let _btnBook = document.getElementById("self");
let _About = document.getElementById("about-me");

_btnBook.addEventListener("click", function () {
  _About.classList.toggle("hidden");
});

_btn.addEventListener("click", function () {
  __ul.style.height = _h;
  __ul.classList.toggle("hidden");
});

_li.addEventListener("mousemove", function () {
  _ul.classList.remove("hidden");
});
_li.addEventListener("mouseleave", function () {
  _ul.classList.add("hidden");
});

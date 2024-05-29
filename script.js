// NAVIGATION TOGGLE SCRIPT
const navToggle = document.querySelector("#toggler #toggle");
const menu = document.querySelector("#navBar");
const closeMenu = document.querySelector("#closeMenu #times");
const iconUp = document.querySelector("iconUp");
const drop1 = document.getElementById("drop1");
const container1 = document.getElementById("container1");
const drop2 = document.getElementById("drop2");
const container2 = document.getElementById("container2");
const searchBtn = document.querySelector("#searchBtn");
const searchBackDrop = document.querySelector("#searchBackDrop");

navToggle.addEventListener("click", () => {
  menu.classList.add("showMenu");
});
closeMenu.addEventListener("click", () => {
  menu.classList.remove("showMenu");
});

drop1.addEventListener("click", () => {
  container1.style.display = "block";
  container1.style.opacity = "1";
});

window.addEventListener("click", (e) => {
  if (!drop1.contains(e.target)) {
    container1.style.display = "none";
    container1.style.opacity = "0";
  }
});
drop2.addEventListener("click", () => {
  container2.style.display = "block";
  container2.style.opacity = "1";
});

window.addEventListener("click", (e) => {
  if (!drop2.contains(e.target)) {
    container2.style.display = "none";
    container2.style.opacity = "0";
  }
});
searchBtn.addEventListener("click", () => {
  searchBackDrop.classList.toggle("showBackDrop");
});
window.addEventListener("click", (e) => {
  if (!searchBackDrop.contains(e.target) && !searchBtn.contains(e.target)) {
    searchBackDrop.classList.remove("showBackDrop");
  }
});

// HERO SWIPER
new Swiper(".heroSwiper", {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    1200: {
      slidesPerView: 1,
    },
  },
});
// TESTIMONIAL SLIDER
new Swiper(".testimonials-slider", {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    500: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    1200: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});

// OUR TEAM SLIDER
new Swiper(".team-slider", {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    1200: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});
// SCROLLTO TOP  SCRIPT
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 300) {
    $(".return-to-top").fadeIn();
  } else {
    $(".return-to-top").fadeOut();
  }
});
$(".return-to-top").on("click", function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    900
  );
  return false;
});

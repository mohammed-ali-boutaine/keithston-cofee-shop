const nav = document.querySelector("nav");
const toTopButton = document.querySelector(".toTop");
const menu = document.querySelector(".menu");
const links = document.querySelector(".links");

toTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.onscroll = function () {};

window.onscroll = function () {
  if (window.scrollY > 0) {
    nav.classList.add("shrink");
  } else {
    nav.classList.remove("shrink");
  }

  if (window.scrollY > 700) {
    toTopButton.classList.remove("active");
  } else {
    toTopButton.classList.add("active");
  }
};

menu.addEventListener("click", () => {
  links.classList.toggle("active");
});

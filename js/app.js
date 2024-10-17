


const nav =document.querySelector("nav");
const toTopButton = document.querySelector(".toTop");

toTopButton.addEventListener("click",() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });})

window.onscroll = function () {
    if (window.scrollY > 0) {
      nav.classList.add("shrink");
    } else {
      nav.classList.remove("shrink");
    }
  };
  

  
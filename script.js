// reference for the DOM
const navLinks = document.querySelector(".nav-links");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  //   toggle hamburger and close icon
  if (navLinks.classList.contains("active")) {
    hamburger.src = "./images/close.svg";
  } else {
    hamburger.src = "./images/hamburger.svg";
  }
});

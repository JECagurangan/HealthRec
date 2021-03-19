console.log("working");

let hamburgerCollapse = true;
const hamburger = document.querySelector(".nav__hamburger");
const hamburgerMenu = document.querySelector(".hamburger__menu");

hamburger.addEventListener("click", function () {
  console.log("working");

  if (hamburgerCollapse) {
    hamburgerMenu.style.paddingTop = "30px";
    hamburgerMenu.style.paddingBottom = "30px";
    hamburgerMenu.style.height = "341px";
    hamburgerMenu.style.overflow = "show";
    hamburgerCollapse = false;
  } else {
    hamburgerMenu.style.paddingTop = "0px";
    hamburgerMenu.style.paddingBottom = "0px";
    hamburgerMenu.style.height = "0px";
    hamburgerMenu.style.overflow = "hidden";
    hamburgerCollapse = true;
  }
});

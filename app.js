console.log("working");

let hamburgerCollapse = true;
const hamburger = document.querySelector(".nav__hamburger");
const hamburgerMenu = document.querySelector(".hamburger__menu");

const modal = document.querySelector(".modal");
const login = document.querySelector(".login");
const loginButton = document.querySelector(".login-button");
const loginHamburger = document.querySelector(".login-hamburger");

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

loginButton.addEventListener("click", function () {
  console.log("working");

  modal.style.display = "block";
  login.style.zIndex = "200";
  login.style.opacity = "1";
});

loginHamburger.addEventListener("click", function () {
  console.log("working");

  modal.style.display = "block";
  login.style.zIndex = "200";
  login.style.opacity = "1";
});

modal.addEventListener("click", function () {
  modal.style.display = "none";
  login.style.zIndex = "0";
  login.style.opacity = "0";
});

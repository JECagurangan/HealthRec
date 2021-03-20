console.log("working");

let hamburgerCollapse = true;
const hamburger = document.querySelector(".nav__hamburger"); //menu button
const hamburgerMenu = document.querySelector(".hamburger__menu"); //menu dropdown

const modal = document.querySelector(".modal"); //dim background
const login = document.querySelector(".login"); //login modal
const signUp = document.querySelector(".sign-up"); //sign up modal
const loginButton = document.querySelector(".login-button"); //login from desktop
const loginHamburger = document.querySelector(".login-hamburger"); //login from mobile

const join = document.querySelector("#join"); //join healthrec from signin
const backToLogin = document.querySelector("#back-to-login"); //back to login from register

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
  login.style.zIndex = "-5";
  login.style.opacity = "0";
  signUp.style.zIndex = "-5";
  signUp.style.opacity = "0";
});

join.addEventListener("click", function () {
  login.style.zIndex = "-5";
  login.style.opacity = "0";
  signUp.style.zIndex = "200";
  signUp.style.opacity = "1";
});

backToLogin.addEventListener("click", function () {
  signUp.style.zIndex = "-5";
  signUp.style.opacity = "0";
  login.style.zIndex = "200";
  login.style.opacity = "1";
});

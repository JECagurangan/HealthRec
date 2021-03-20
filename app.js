console.log("working");

let isHamburgerCollapsed = true;
const hamburger = document.querySelector(".nav__hamburger"); //menu button
const hamburgerMenu = document.querySelector(".hamburger__menu"); //menu dropdown

const modal = document.querySelector(".modal"); //dim background
const login = document.querySelector(".login"); //login modal
const signUp = document.querySelector(".sign-up"); //sign up modal
const loginButton = document.querySelector(".login-button"); //login from desktop
const loginHamburger = document.querySelector(".login-hamburger"); //login from mobile

const join = document.querySelector("#join"); //join healthrec from signin
const backToLogin = document.querySelector("#back-to-login"); //back to login from register

const regClinicOwner = document.querySelector(".account-type__owner"); //from register
const regDoctor = document.querySelector(".account-type__doctor"); //from register
let isOwnerActive = false;
let isDoctorActive = false;

hamburger.addEventListener("click", function () {
  console.log("working");

  if (isHamburgerCollapsed) {
    hamburgerMenu.style.paddingTop = "30px";
    hamburgerMenu.style.paddingBottom = "30px";
    hamburgerMenu.style.height = "341px";
    hamburgerMenu.style.overflow = "show";
    isHamburgerCollapsed = false;
  } else {
    hamburgerMenu.style.paddingTop = "0px";
    hamburgerMenu.style.paddingBottom = "0px";
    hamburgerMenu.style.height = "0px";
    hamburgerMenu.style.overflow = "hidden";
    isHamburgerCollapsed = true;
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

  resetJob();
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

  resetJob();
});

regClinicOwner.addEventListener("click", function () {
  regClinicOwner.style.borderWidth = "2px";
  regClinicOwner.style.borderColor = "#2626bc";
  regClinicOwner.style.color = "#2626bc";
  isOwnerActive = true;

  if (isDoctorActive) {
    regDoctor.style.borderWidth = "1px";
    regDoctor.style.borderColor = "black";
    regDoctor.style.color = "black";
    isDoctorActive = false;
  }
});

regDoctor.addEventListener("click", function () {
  regDoctor.style.borderWidth = "2px";
  regDoctor.style.borderColor = "#2626bc";
  regDoctor.style.color = "#2626bc";
  isDoctorActive = true;

  if (isOwnerActive) {
    regClinicOwner.style.borderWidth = "1px";
    regClinicOwner.style.borderColor = "black";
    regClinicOwner.style.color = "black";
    isOwnerActive = false;
  }
});

function resetJob() {
  regDoctor.style.borderWidth = "1px";
  regDoctor.style.borderColor = "black";
  regDoctor.style.color = "black";
  isDoctorActive = false;
  regClinicOwner.style.borderWidth = "1px";
  regClinicOwner.style.borderColor = "black";
  regClinicOwner.style.color = "black";
  isOwnerActive = false;
}

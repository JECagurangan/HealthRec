console.log("hello world");

const addDoctorButton = document.querySelector(".addDoctor-button");
const doctorForm = document.querySelector(".doctor-form");
const doctorFormBG = document.querySelector(".doctor-form-bg");

const overviewTab = document.querySelector(".links__item--overview");
const doctorsTab = document.querySelector(".links__item--doctors");
const patientsTab = document.querySelector(".links__item--patients");
const incomeTab = document.querySelector(".links__item--income");

const overview = document.querySelector(".overview-body");
const doctors = document.querySelector(".doctors-body");
const patients = document.querySelector(".patients-body");

addDoctorButton.addEventListener("click", function () {
  doctorForm.style.opacity = "1";
  doctorForm.style.zIndex = "100";
  doctorFormBG.style.opacity = "1";
  doctorFormBG.style.zIndex = "50";
});

doctorFormBG.addEventListener("click", function () {
  doctorForm.style.opacity = "0";
  doctorForm.style.zIndex = "-100";
  doctorFormBG.style.opacity = "0";
  doctorFormBG.style.zIndex = "-100";
});

overviewTab.addEventListener("click", function () {
  overviewTab.style.color = "black";
  doctorsTab.style.color = "#9fa4b8";
  patientsTab.style.color = "#9fa4b8";
  incomeTab.style.color = "#9fa4b8";

  overviewTab.childNodes[1].style.fill = "#2626bc";
  doctorsTab.childNodes[1].style.fill = "#9fa4b8";
  patientsTab.childNodes[1].style.fill = "#9fa4b8";
  incomeTab.childNodes[1].style.fill = "#9fa4b8";

  overview.style.display = "grid";
  patients.style.display = "none";
  doctors.style.display = "none";
});

doctorsTab.addEventListener("click", function () {
  doctorsTab.style.color = "black";
  overviewTab.style.color = "#9fa4b8";
  patientsTab.style.color = "#9fa4b8";
  incomeTab.style.color = "#9fa4b8";

  doctorsTab.childNodes[1].style.fill = "#2626bc";
  overviewTab.childNodes[1].style.fill = "#9fa4b8";
  patientsTab.childNodes[1].style.fill = "#9fa4b8";
  incomeTab.childNodes[1].style.fill = "#9fa4b8";

  doctors.style.display = "grid";
  overview.style.display = "none";
  patients.style.display = "none";
});

patientsTab.addEventListener("click", function () {
  patientsTab.style.color = "black";
  overviewTab.style.color = "#9fa4b8";
  doctorsTab.style.color = "#9fa4b8";
  incomeTab.style.color = "#9fa4b8";

  patientsTab.childNodes[1].style.fill = "#2626bc";
  overviewTab.childNodes[1].style.fill = "#9fa4b8";
  doctorsTab.childNodes[1].style.fill = "#9fa4b8";
  incomeTab.childNodes[1].style.fill = "#9fa4b8";

  patients.style.display = "grid";
  overview.style.display = "none";
  doctors.style.display = "none";
});

incomeTab.addEventListener("click", function () {
  incomeTab.style.color = "black";
  overviewTab.style.color = "#9fa4b8";
  doctorsTab.style.color = "#9fa4b8";
  patientsTab.style.color = "#9fa4b8";

  incomeTab.childNodes[1].style.fill = "#2626bc";
  overviewTab.childNodes[1].style.fill = "#9fa4b8";
  doctorsTab.childNodes[1].style.fill = "#9fa4b8";
  patientsTab.childNodes[1].style.fill = "#9fa4b8";

  overview.style.display = "none";
  patients.style.display = "none";
});

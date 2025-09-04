const lightModeBtn = document.getElementById("light-mode");
const darkModeBtn = document.getElementById("dark-mode");

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("drop-down-menu");

lightModeBtn.addEventListener("click", () => {
  document.body.setAttribute("class", "light");
  darkModeBtn.classList.remove("hidden");
  lightModeBtn.classList.add("hidden");
});

darkModeBtn.addEventListener("click", () => {
  document.body.removeAttribute("class");
  lightModeBtn.classList.remove("hidden");
  darkModeBtn.classList.add("hidden");
});

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
});

const lightModeBtn = document.getElementById("light-mode");
const darkModeBtn = document.getElementById("dark-mode");
const lightModeDropDown = document.getElementById('light-drop-down');
const darkModeDropDown = document.getElementById('dark-drop-down');

function toggleMode(lightBtn, darkBtn, isLight) {
  lightBtn.classList.toggle("hidden");
  darkBtn.classList.toggle("hidden");
  isLight ? document.body.setAttribute("class", "light") : document.body.removeAttribute("class");
}

lightModeBtn.addEventListener("click", () => {
  toggleMode(lightModeBtn, darkModeBtn, true);
});
darkModeBtn.addEventListener("click", () => {
  toggleMode(lightModeBtn, darkModeBtn, false)
});

lightModeDropDown.addEventListener('click', () => {
  toggleMode(lightModeDropDown, darkModeDropDown, true);
});
darkModeDropDown.addEventListener('click', () => {
  toggleMode(lightModeDropDown, darkModeDropDown, false);
})

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("drop-down-menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
});
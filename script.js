// test interactivité boutons
// script.js
const icons = document.querySelectorAll(".bottom-menu .icon");

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    icons.forEach((i) => i.classList.remove("active"));
    icon.classList.add("active");
  });
});

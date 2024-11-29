// Ouverture du menu
const activation = document.querySelector(".activation");
const navMenu = document.querySelector(".nav-menu");

activation.addEventListener("click", mobileMenu);

function mobileMenu() {
  activation.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Fermeture du menu
const navLink = document.querySelector(".nav-link");

navLink.forEach((e) => e.addEventListenerAll("click", closeMenu));

function closeMenu() {
  activation.classList.remove("active");
  navMenu.classList.remove("active");
}

// test interactivité boutons
// script.js
const icons = document.querySelectorAll(".bottom-menu .icon");

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    icons.forEach((i) => i.classList.remove("active"));
    icon.classList.add("active");
  });
});
// carroussel
// const slidesContainer = document.getElementById("slides-container");
// const slide = document.querySelector(".slide");
// const prevButton = document.getElementById("slide-arrow-prev");
// const nextButton = document.getElementById("slide-arrow-next");

// nextButton.addEventListener("click", () => {
//   const slideWidth = slide.clientWidth;
//   slidesContainer.scrollLeft += slideWidth;
// });

// prevButton.addEventListener("click", () => {
//   const slideWidth = slide.clientWidth;
//   slidesContainer.scrollLeft -= slideWidth;
// });

// CAROUSEL

//Variables
const track = document.querySelector(".carousel-track");
const items = Array.from(track.children);
const pagination = document.querySelector(".carousel-pagination");

//Calcul de la largeur des items
const itemWidth = items[0].getBoundingClientRect().width;

//Positionner les items en ligne
items.forEach((item, index) => {
  item.style.left = `${itemWidth * index}px`;
});
let currentIndex = 0;

//Fonction pour déplacer le carousel
const moveToItem = (index) => {
  track.style.transform = `translateX(-${itemWidth * index}px)`;
  currentIndex = index;
  updatePagination();
};

// Générer points de pagination

items.forEach((_, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (index === 0) dot.classList.add("active");
  dot.addEventListener("click", () => moveToItem(index));
  pagination.appendChild(dot);
});

//Mettre à jour les points de pagination

const updatePagination = () => {
  const dots = document.querySelectorAll(".carousel-pagination .dot");
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
};

// SWIPE SUR MOBILE
let startX = 0;
track.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});
track.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50 && currentIndex < items.length - 1) {
    moveToItem(currentIndex + 1); // swipe gauche = suivant
  } else if (endX - startX > 50 && currentIndex > 0) {
    moveToItem(currentIndex - 1); //Swipe droite = precedent
  }
});

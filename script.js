// Ouverture du menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Fermeture du menu
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((e) => e.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Tableau des stories
const tableauStories = [
  {
    name: "Obi-Wan",
    img: "https://nsabers.fr/cdn/shop/articles/metamind0000_Obi-Wan_Kenobi._Holding_a_lightsaber._Super_realis_918963db-12a7-4790-b95f-db9a4389dffd.png?v=1705395130",
  },
  {
    name: "Ahsoka",
    img: "https://nsabers.es/cdn/shop/articles/opolar_httpss.mj.runq7E9yDWLvjk_A_super_realistic_scene_illus_7294495f-1a2d-4626-aa61-e4680230c385_2.png?v=1722329508",
  },
  {
    name: "Gandalf",
    img: "https://lh4.googleusercontent.com/proxy/HKsXEex12rF6cSoS7WhfUFFQ09pfBE8fMpgf9CoDZAyfFaGQnm1hi-75_Yn4tEA07RiDGXO-9yoyrtRG-DWJaLvXVtrW2cOJCjOt9WT8U8FFt1IKDidx",
  },
  {
    name: "Rogue",
    img: "https://images.ctfassets.net/usf1vwtuqyxm/toxlayPDePtX8yx2wvWun/b65f6acd9087031b1ff39461d8f22d0a/severus-snape_2_1800x1248.png",
  },
];

// Création des stories de façon dynamique
// Création de la fonction pour générer nos story
function createdStory(createStory) {
  const stories = document.querySelector(".stories");
  // On efface les story précédentes
  stories.innerHTML = "";

  // Création de la boucle forEach pour générer les Story
  createStory.forEach((divStory) => {
    // Création de la div story_picture
    const story_picture = document.createElement("div");
    story_picture.classList.add("story_picture");
    stories.appendChild(story_picture);

    //Création de l'image
    const createPhoto = document.createElement("img");
    createPhoto.classList.add("photo");
    createPhoto.src = divStory.img;
    story_picture.appendChild(createPhoto);

    //Création du username
    const createName = document.createElement("p");
    createName.classList.add("username");
    createName.innerText = divStory.name;
    story_picture.appendChild(createName);
  });
}

// Execution de la fonction
createdStory(tableauStories);

// Tableau des catégories
const tableauCategories = [
  {
    name: "Frogs",
  },
  {
    name: "Wilders",
  },
  {
    name: "Hogwarts",
  },
  {
    name: "Force",
  },
];

// Création des catégories de façon dynamique
function createdCategory(createCategory) {
  const categories = document.querySelector(".categories");
  categories.innerHTML = "";

  // Création de boucle Each pour générer les catégories
  createCategory.forEach((divCategory) => {
    // Création de la div category

    const category = document.createElement("button");
    category.classList.add(".category");
    categories.appendChild(category);

    // Création de la div category_name
    const category_name = document.createElement("h2");
    category_name.classList.add(".category_name");
    category_name.innerText = divCategory.name;
    category.appendChild(category_name);
  });
}

// Execution de la fonction
createdCategory(tableauCategories);

// dynamisme catégories
const categories = Array.from(document.getElementsByTagName("h2"));

categories.forEach((h2) => {
  h2.addEventListener("click", () => {
    categories.forEach((i) => i.classList.remove("active"));
    h2.classList.add("active");
  });
});
// test interactivité icones du menu
// script.js
const icons = document.querySelectorAll(".bottom-menu .icon");

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    icons.forEach((i) => i.classList.remove("active"));
    icon.classList.add("active");
  });
});

// PASSAGE DES ITEMS CAROUSEL EN JS

const imgCarousel = document.querySelector(".section_carousel");

const publicationUsers = [
  {
    type: "Wilders",
    picture: "./assets/grogu_2.jpg",
  },
  {
    type: "gaming",
    picture: "./assets/grogu_3.jpg",
  },
];

function createPublication(publication) {
  const { type, picture } = publication;

  const carouselTrack = document.querySelector(".carousel-track");

  const cardImg = document.createElement("img");
  cardImg.src = picture;
  cardImg.classList.add("carousel-item");
  carouselTrack.appendChild(cardImg);
}

// Appel de la fonction

publicationUsers.forEach((publication) => {
  createPublication(publication);
});

//CAROUSEL
// Initialisation après avoir ajouté toutes les images
function initializeCarousel() {
  // Variables
  const track = document.querySelector(".carousel-track");
  const items = Array.from(track.children); // Récupère les enfants dynamiquement
  const pagination = document.querySelector(".carousel-pagination");

  // Calcul de la largeur des items
  const itemWidth = items[0].getBoundingClientRect().width;

  // Positionner les items en ligne
  items.forEach((item, index) => {
    item.style.left = `${itemWidth * index}px`;
  });

  let currentIndex = 0;

  // Fonction pour déplacer le carousel
  const moveToItem = (index) => {
    track.style.transform = `translateX(-${itemWidth * index}px)`;
    currentIndex = index;
    updatePagination();
  };

  // Générer points de pagination
  pagination.innerHTML = ""; // Réinitialiser les points existants
  items.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => moveToItem(index));
    pagination.appendChild(dot);
  });

  // Mettre à jour les points de pagination
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
}
setTimeout(() => {
  initializeCarousel();
}, 100);

// Pop-up (modal)
const dialog = document.querySelector("dialog");
const openModalButton = document.querySelector(".open_modal");
const closeModalButton = document.querySelector(".close_modal");

openModalButton.addEventListener("click", () => dialog.showModal());
closeModalButton.addEventListener("click", () => dialog.close());

// test light mode dark mode

const body = document.querySelector("body");
const lightButton = document.querySelector(".light-button");
const darkButton = document.querySelector(".dark-button");

lightButton.addEventListener("click", () => {
  body.classList.remove("darkmode");
  body.classList.add("lightmode");
});

darkButton.addEventListener("click", () => {
  body.classList.remove("lightmode");
  body.classList.add("darkmode");
});

// Like button
const heartIcon = document.querySelector(".heart-icon");
const likesAmountLabel = document.querySelector(".likes-amount");

let likesAmount = 41;

heartIcon.addEventListener("click", () => {
  heartIcon.classList.toggle("liked");
  if (heartIcon.classList.contains("liked")) {
    likesAmount++;
  } else {
    likesAmount--;
  }

  likesAmountLabel.innerHTML = likesAmount;
});

// Tablea des commentaires
const userComments = [
  {
    img: "https://imgsrc.cineserie.com/2020/11/star-wars-a-quoi-ressemblent-les-jawas-sous-leur-costume.jpeg?ver=1",
    username: "Jawa",
    comment: "Utini !",
  },
  {
    img: "https://i.pinimg.com/736x/64/7e/24/647e24bc03fd9fd5847e5cd49ee37d72.jpg",
    username: "Hermione",
    comment: "It's Leviosa, not Leviosaaaaa",
  },
  {
    img: "https://originalcup.fr/cdn/shop/files/P6_a7ce2898-0979-471a-8eb1-82c3bf8197d8_800x.jpg?v=1705413137",
    username: "Jigsaw",
    comment: "I want to play a game",
  },
  {
    img: "https://pbs.twimg.com/profile_images/3034048137/ff82f53ff48e228c3866d19806987354_400x400.jpeg",
    username: "Gollum",
    comment: "Mon précieux",
  },
  {
    img: "https://www.seguret-decoration.fr/57548-large_default/panoramique-the-mandalorian-gunslingers-collection-into-wonderland-komar-200x250cm-iadx4-095.jpg",
    username: "The Mandalorian",
    comment: "This is the Way",
  },
  {
    img: "https://imgcdn.stablediffusionweb.com/2024/9/15/74bfaded-4966-4cfe-9e6e-da76f55037ac.jpg",
    username: "Jack Sparrow",
    comment: "Vous n'auriez pas du rhum ici ?",
  },
];

// Création de la section commentaire de façon dynamique
function createdComment(createComment) {
  const containCommentaire = document.querySelector(".contain-commentaire");
  containCommentaire.innerHTML = "";

  // Création de la boucle forEach pour générer les commentaires
  createComment.forEach((divComment) => {
    // Création de la div com
    const com = document.createElement("div");
    com.classList.add("com");
    containCommentaire.appendChild(com);

    // Création de l'image
    const ppCom = document.createElement("img");
    ppCom.classList.add("pp-com");
    ppCom.src = divComment.img;
    com.appendChild(ppCom);

    // Création de la div commentaire-user
    const commentaireUser = document.createElement("div");
    commentaireUser.classList.add("commentaire-user");
    com.appendChild(commentaireUser);

    // Création du username du commentaire
    const userCom = document.createElement("div");
    userCom.classList.add("user-com");
    userCom.textContent = divComment.username;
    commentaireUser.appendChild(userCom);

    // Création du commentaire du user
    const userComment = document.createElement("p");
    userComment.classList.add("user-comment");
    userComment.textContent = divComment.comment;
    commentaireUser.appendChild(userComment);

    // Création des interactions des commentaires
    const interactionCom = document.createElement("div");
    interactionCom.classList.add("interaction-com");
    containCommentaire.appendChild(interactionCom);

    // Création du like commentaire
    const likeCom = document.createElement("p");
    likeCom.classList.add("like-com");
    likeCom.textContent = "J'aime";
    interactionCom.appendChild(likeCom);

    // Création de la réponse du commentaire
    const reponseCom = document.createElement("p");
    reponseCom.classList.add("com-com");
    reponseCom.textContent = "Répondre";
    interactionCom.appendChild(reponseCom);
  });
}

// Execution de la fonction
createdComment(userComments);

// Ajouter un commentaire qui ira dans la div contain-commentaire
function addNewComment() {
  const messageInput = document.querySelector(".mon-message");
  const newComment = messageInput.value.trim();

  if (newComment === "") {
    alert("Veuillez écrire un message avant d'envoyer.");
    return;
  }

  const myComment = {
    img: "/assets/gorgu_1.jpeg",
    username: "Grogu",
    comment: newComment,
  };

  userComments.push(myComment); // Ajoute le commentaire à la fin du tableau
  createdComment(userComments); // Regénère la section des commentaires
  messageInput.value = ""; // Vide la zone de saisie
}

// Fonction pour gérer la touche Entrée dans la zone de texte
function handleKeyDown(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Empêche le comportement par défaut (saut de ligne)
    addNewComment(); // Appelle la fonction d'ajout de commentaire
  }
}

// Ajouter un événement au bouton Envoyer
document.querySelector(".btn-send").addEventListener("click", addNewComment);

// Ajouter un événement keydown pour envoyer avec Entrée
document
  .querySelector(".mon-message")
  .addEventListener("keydown", handleKeyDown);

// Charger les commentaires existants au démarrage
createdComment(userComments);

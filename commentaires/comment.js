// Tablea des commentaires
const userComments = [
  {
    img: "/assets/free-photo-of-noir-et-blanc-nature-mode-homme.jpeg",
    username: "John Doe",
    comment: "Super photo !",
  },
  {
    img: "https://i.etsystatic.com/40317824/r/il/7f2fd8/4934631807/il_fullxfull.4934631807_ju2q.jpg",
    username: "Grogu",
    comment: "May the Force be with you",
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
  });
}

// Execution de la fonction
createdComment(userComments);

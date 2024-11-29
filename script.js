
// stories tableau
const tableauStories = [
  {
    name: "John Doe",
    img: "https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp",
  },
  {
    name: "Eva Doe",
    img: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
  },
  {
    name: "Rebecca Doe",
    img: "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
  },
  {
    name: "Killian Doe",
    img: "https://t4.ftcdn.net/jpg/06/08/55/73/360_F_608557356_ELcD2pwQO9pduTRL30umabzgJoQn5fnd.jpg",
  },
];


// stories dynamique

function createStory(create) {
  const stories = document.querySelector(".stories");
  stories.innerHTML = "";


  //méthode forEach

  create.forEach((divStory) => {
    //Création div story
    const story_picture = document.createElement("div");
    story_picture.classList.add("story_piture");
    stories.appendChild(story_picture);


    //Création image
    const createPhoto = document.createElement("img");
    createPhoto.classList.add("photo");
    createPhoto.src = divStory.img
    story_picture.appendChild(createPhoto);


    //Création username
    const createName = document.createElement("p");
    createName.classList.add("username");
    createName.innerText = divStory.name;
    story_picture.appendChild(createName);


  })
}

//Execution tableauStories

createStory(tableauStories);


// Tableau des catégories
const tableauCategories = [
  {
    name: "Popular",
  },
  {
    name: "Wilders",
  },
  {
    name: "Dev",
  },
  {
    name: "Gaming",
  },
];

// Création des catégories de façon dynamique
function createdCategory(createCategory) {
  const categories = document.querySelector(".categories");
  categories.innerHTML = "";

  // Création de boucle Each pour générer les catégories
  createCategory.forEach((divCategory) => {
    // Création de la div category
    const category = document.createElement("div");
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


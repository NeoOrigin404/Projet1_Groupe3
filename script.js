// Tableau des stories
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

// Création des stories de façon dynamique
// Création de la fonction pour générer nos story
function createdStory(create) {
    const stories = document.querySelector(".stories");
    // On efface les story précédentes
    stories.innerHTML = "";

    // Création de la boucle forEach pour générer les Story
    create.forEach((divStory) => {
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

// Execution de la fonction qui renvois vers le tableau
createdStory(tableauStories);
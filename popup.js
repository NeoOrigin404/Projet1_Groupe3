// Pop-up (modal)
const dialog = document.querySelector("dialog");
const openModalButton = document.querySelector(".open_modal");
const closeModalButton = document.querySelector(".close_modal");

openModalButton.addEventListener("click", () => dialog.showModal());
closeModalButton.addEventListener("click", () => dialog.close());
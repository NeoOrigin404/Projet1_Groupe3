// Like button
const like = document.querySelector(".like-btn");

let countLike = 0;
like.addEventListener("click", () => {
  if (countLike === 0) {
    like.classList.toggle("anim-like-btn");
    countLike = 1;
    like.style.backgroundPosition = "right";
  } else {
    countLike = 0;
    like.style.backgroundPosition = "left";
  }
});

like.addEventListener("animationned", () => {
  like.classList.toggle("anim-like-btn");
});

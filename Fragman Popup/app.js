const izle = document.querySelector(".izle");
const kapat = document.querySelector(".kapat");
const trailercart = document.querySelector(".trailer-cart");
const trailer = document.querySelector(".trailer");
const fragman = document.querySelector("video");
const body = document.querySelector("body");

izle.addEventListener("click", () => {
  trailer.classList.remove("active");
  trailercart.classList.add("active");
  body.style.backgroundColor = "black";
  fragman.play();
});
kapat.addEventListener("click", () => {
  trailer.classList.add("active");
  trailercart.classList.remove("active");
  fragman.pause();
  fragman.currentTime = 0;
  body.style.backgroundColor = "white";
});

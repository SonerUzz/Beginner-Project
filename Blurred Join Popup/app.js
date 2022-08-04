const katıl = document.querySelector(".katıl");
const kaydol = document.querySelector(".kaydol");
const kapat = document.querySelector(".kapat");
const popup = document.querySelector(".popup");
const body = document.querySelector(".body");

katıl.addEventListener("click", () => {
  popup.classList.remove("active");
  body.classList.add("active");
});
kapat.addEventListener("click", () => {
  popup.classList.add("active");
  body.classList.remove("active");
});

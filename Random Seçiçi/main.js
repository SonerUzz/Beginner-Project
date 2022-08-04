const textarea = document.querySelector("textarea");
const boxes = document.querySelector(".Boxes");
textarea.focus();
textarea.addEventListener("keyup", (e) => {
  if (e.key === "Enter") return;
  virgül(e.target.value);
});

const virgül = (input) => {
  let secenekler = input.split(",");
  boxes.innerHTML = " ";
  secenekler.forEach((secenek) => {
    var box = document.createElement("span");
    box.classList.add("secenek");
    box.innerText = secenek;
    boxes.appendChild(box);
  });
};
var denemeSayisi = 0;
var basla;
const deneme = () => {
  denemeSayisi++;
  let boxs = boxes.querySelectorAll(".secenek");
  var activeBox = boxes.querySelector(".secenek.active");
  if (activeBox) {
    activeBox.classList.remove("active");
  }
  boxs[Math.floor(Math.random() * boxs.length)].classList.add("active");
  if (denemeSayisi == 20) {
    stop();
  }
};
textarea.addEventListener("keypress", (t) => {
  if (t.key === "Enter") {
    start();
    t.target.value = "";
  }
});
const start = () => {
  basla = setInterval(deneme, 90);
};
const stop = () => {
  clearInterval(basla);
};

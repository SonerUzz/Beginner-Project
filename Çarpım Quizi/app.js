const soru = document.querySelector("h2");
const score = document.querySelector("p");
const cevap = document.querySelector("input");
const button = document.querySelector("button");
var scorePuanı = 0;
var sayı1;
var sayı2;
const randomSoru = () => {
  sayı1 = Math.floor(Math.random() * 10);
  sayı2 = Math.floor(Math.random() * 10);
  soru.innerHTML = `${sayı1} kere ${sayı2} kaç yapar?`;
  console.log(sayı1);
};
randomSoru();

button.addEventListener("click", () => {
  if (sayı1 * sayı2 == cevap.value) {
    scorePuanı++;
  } else {
    scorePuanı--;
  }
  score.innerHTML = `Score:${scorePuanı}`;
  cevap.value = "";
  randomSoru();
});

cevap.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    if (sayı1 * sayı2 == cevap.value) {
      scorePuanı++;
    } else {
      scorePuanı--;
    }
    score.innerHTML = `Score:${scorePuanı}`;
    cevap.value = "";
    randomSoru();
  }
});

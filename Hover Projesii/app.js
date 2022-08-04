const container = document.querySelector(".container");

createBox(255);

function createBox(count) {
  for (let i = 0; i < count; i++) {
    let boxEl = document.createElement("div");
    boxEl.classList.add("box");
    container.appendChild(boxEl);
  }
}

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("mouseover", function () {
    let numRed = Math.floor(Math.random() * 256);
    let hexRed = numRed.toString(16);
    let numGreen = Math.floor(Math.random() * 256);
    let hexGreen = numGreen.toString(16);
    let numBlue = Math.floor(Math.random() * 256);
    let hexBlue = numBlue.toString(16);

    let rondomColor = `#${hexRed}${hexGreen}${hexBlue}`;
    box.style.backgroundColor = rondomColor;
  });
  box.addEventListener("mouseout", function () {
    setTimeout(function () {
      box.style.backgroundColor = "#444";
    }, 1000);
  });
});

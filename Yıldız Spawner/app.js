const space = document.querySelector(".space");
window.addEventListener("click", () => {
  window.addEventListener("mousemove", (e) => {
    const xPos = e.offsetX;
    const yPos = e.offsetY;
    let star = document.createElement("i");
    star.classList.add("fa-solid");
    star.classList.add("fa-star");
    space.appendChild(star);
    star.style.left = xPos + "px";
    star.style.top = yPos + "px";
    const starSize = Math.random() * 100;
    star.style.fontSize = starSize + "px";

    setTimeout(() => {
      star.remove();
    }, 3000);
  });
});

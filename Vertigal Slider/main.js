const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const solSlide = document.querySelector(".solSlide");
const sagSlide = document.querySelector(".sağSlide");
const slider = document.querySelector(".slider");
const sagSlideLenght = sagSlide.querySelectorAll("div").length;

let anlıkResimIndex = 0;
solSlide.style.top = `-${(sagSlideLenght - 1) * 100}vh`;
let sliderHeight = slider.clientHeight;
const yukarı = () => {
  anlıkResimIndex++;
  if (anlıkResimIndex > sagSlideLenght - 1) {
    anlıkResimIndex = 0;
  }
  sagSlide.style.transform = `translateY(-${anlıkResimIndex * sliderHeight}px)`;
  solSlide.style.transform = `translateY(${anlıkResimIndex * sliderHeight}px)`;
};
next.addEventListener("click", () => {
  yukarı();
});
const asagı = () => {
  anlıkResimIndex--;
  if (anlıkResimIndex < 0) {
    anlıkResimIndex = sagSlideLenght - 1;
  }
  sagSlide.style.transform = `translateY(-${anlıkResimIndex * sliderHeight}px)`;
  solSlide.style.transform = `translateY(${anlıkResimIndex * sliderHeight}px)`;
};
prev.addEventListener("click", () => {
  asagı();
});

const slider = document.querySelector(".slider");
const sliderViewport = document.querySelector(".slider__viewport");
const sliderList = document.querySelector(".slider__list");
const sliderItems = document.querySelectorAll(".slider__item");
const sliderBtnLeft = document.querySelector(".slider-controlls__btn--left");
const sliderBtnRight = document.querySelector(".slider-controlls__btn--right");
const sliderItemDefaultActive = 0;
let activeSlideIndex = 0;

sliderBtnLeft.addEventListener("click", () => {
  slideMove("back");
});
sliderBtnRight.addEventListener("click", () => {
  slideMove("next");
});

function slideMove(direction) {
  if (direction === "next") {
    activeSlideIndex++;

    if (activeSlideIndex === sliderItems.length) {
      activeSlideIndex = 0;
    }
  } else if (direction === "back") {
    activeSlideIndex--;

    if (activeSlideIndex < 0) {
      activeSlideIndex = sliderItems.length - 1;
    }
  }

  const width = sliderList.clientWidth;
  sliderList.style.transform = `translateX(-${activeSlideIndex * width}px)`;
}

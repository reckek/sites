const body = document.body;
const header = document.querySelector(".header");
const menuBtn = document.querySelector(".menu__btn");
const menuBody = document.querySelector(".menu__body");
const menuLinks = document.querySelectorAll(".menu__link[data-goto]");

menuBtn.addEventListener("click", (event) => {
  body.classList.toggle("now-scroll");
  menuBtn.classList.toggle("menu__btn_active");
  menuBody.classList.toggle("menu__body_active");
});

menuBody.addEventListener("click", (event) => {
  body.classList.remove("now-scroll");
  menuBtn.classList.remove("menu__btn_active");
  menuBody.classList.remove("menu__body_active");
})


// scroll
if (menuLinks.length > 0) {
  menuLinks.forEach((element) => {
    element.addEventListener("click", (event) => {
      console.log("Поехал!");
      const menuLink = event.target;

      if (
        menuLink.dataset.goto &&
        document.querySelector(menuLink.dataset.goto)
      ) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue =
          gotoBlock.getBoundingClientRect().top +
          pageYOffset -
          header.offsetHeight;

        window.scrollTo({
          top: gotoBlockValue,
          behavior: "smooth",
        });
        event.preventDefault();
      }
    });
  });
}

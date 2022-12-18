document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const burgerBody = document.querySelector(".burger__body");
  const burgerMenuBtn = document.querySelector(".burger__btn");
  const navbar = document.querySelector(".navbar");
  const positionNavBar = document.querySelector(".navbar").offsetTop;
  const ANIMATION_TIME = 0.4;

  burgerMenuBtn.addEventListener("click", onClickBurgerMenuBtn);
  burgerBody.addEventListener("click", onClickBurgerBody);

  function onClickBurgerMenuBtn(event) {
    if (positionNavBar <= window.scrollY) {
      body.classList.toggle("now-scroll");

      burgerBody.style.transition = `all ${ANIMATION_TIME}s ease-out`;
      setTimeout(
        () => (burgerBody.style.transition = "unset"),
        ANIMATION_TIME * 1000
      );

      burgerMenuBtn.classList.toggle("burger__btn--active");
      burgerBody.classList.toggle("burger__body--active");

      if (burgerMenuBtn.classList.contains("burger__btn--active")) {
        burgerMenuBtn.setAttribute("aria-expended", true);
        burgerBody.setAttribute("aria-hidden", false);
      } else {
        burgerMenuBtn.setAttribute("aria-expended", false);
        burgerBody.setAttribute("aria-hidden", true);
      }
    }
  }

  function onClickBurgerBody(event) {
    body.classList.remove("now-scroll");
    burgerMenuBtn.classList.remove("burger__btn--active");
    burgerBody.classList.remove("burger__body--active");
    burgerMenuBtn.setAttribute("aria-expended", false);
    burgerBody.setAttribute("aria-hidden", true);
  }

  document.addEventListener("scroll", (e) => {
    if (positionNavBar+navbar.offsetHeight <= window.scrollY) navbar.classList.add("fixed");
    else {
      navbar.classList.remove("fixed");
    }
  });
});

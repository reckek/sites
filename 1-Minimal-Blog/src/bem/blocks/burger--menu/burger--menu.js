document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const burgerMenu = document.querySelector(".burger__menu");
  const burgerBody = document.querySelector(".burger__body");
  const burgerBtn = document.querySelector(".burger__btn");
  const mediaQuery = window.matchMedia('(min-width: 768px)')
  const ANIMATION_TIME = 0.6;

  burgerBtn.addEventListener("click", onClickBurgerMenuBtn);
  burgerBody.addEventListener("click", onClickBurgerBody);

  const addTimer = () => {
    setTimeout(() => {
      burgerBody.style.transitionDuration = "0s";
    }, ANIMATION_TIME * 1000);

    burgerBody.style.transitionDuration = `${ANIMATION_TIME}s`;
  };

  const setAttribute = () => {
    if (burgerBtn.classList.contains("burger__btn--active")) {
      burgerBtn.setAttribute("aria-expended", true);
      burgerBody.setAttribute("aria-hidden", false);
    } else {
      burgerBtn.setAttribute("aria-expended", false);
      burgerBody.setAttribute("aria-hidden", true);
    }
  };

  function onClickBurgerMenuBtn(e) {
    if (mediaQuery.matches) return
    body.classList.toggle("now-scroll");

    addTimer();

    burgerBtn.classList.toggle("burger__btn--active");
    burgerBody.classList.toggle("burger__body--active");

    setAttribute();
  }

  function onClickBurgerBody(event) {
    if (event.target.classList.contains("search__input")) return;
    if (event.target.classList.contains("burger__btn")) return;

    addTimer();
    onClickBurgerMenuBtn();
    setAttribute();
  }
});

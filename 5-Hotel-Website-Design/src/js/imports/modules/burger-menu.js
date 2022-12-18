document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const header = document?.querySelector(".header");
  const burgerBody = document?.querySelector(".nav__body");
  const burgerBtn = document?.querySelector(".nav__button");
  const ANIMATION_TIME = 0.6;
  let headerHight = null;

  document.addEventListener("click", onClickBurgerMenuBtn);
  document.addEventListener("click", onClickBurgerBody);
  document.addEventListener('scroll', onScrollBg)
  document.addEventListener('keydown', onKeyDown)

  const addTimer = () => {
    setTimeout(() => {
      burgerBody.style.transitionDuration = "0s";
    }, ANIMATION_TIME * 1000);

    burgerBody.style.transitionDuration = `${ANIMATION_TIME}s`;
  };

  const setActive = () => {
    body.classList.toggle("now-scroll");
    burgerBtn.classList.toggle("nav__button--active");
    burgerBody.classList.toggle("nav__body--active");

    if (burgerBtn.classList.contains("nav__button--active")) {
      burgerBtn.setAttribute("aria-expended", true);
      burgerBody.setAttribute("aria-hidden", false);
    } else {
      burgerBtn.setAttribute("aria-expended", false);
      burgerBody.setAttribute("aria-hidden", true);
    }
  };

  function onClickBurgerMenuBtn(event) {
    if (event.target !== burgerBtn) return;
    addTimer();
    setActive();
  }

  function onClickBurgerBody(event) {
    if (event.target !== burgerBody && !event.target.classList.contains("nav__link")) return;

    addTimer();
    setActive();
  }

  function onKeyDown(event) {
    if (!burgerBtn.classList.contains("nav__button--active")) return
    if (event.code === "Escape") {
      addTimer();
      setActive()
    }
  }

  function onScrollBg(event) {
    // console.dir(header, {showProxy: true})
    if (headerHight === null) headerHight = header.offsetHeight

    if (headerHight <= window.scrollY) {
      if (header.classList.contains("header__bg")) return
      header.classList.toggle("header__bg")
    } else {
      if (!header.classList.contains("header__bg")) return
      header.classList.toggle("header__bg")
    }
  }
});

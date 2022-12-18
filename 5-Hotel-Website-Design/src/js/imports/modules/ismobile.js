const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  IOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Min/i);
  },
  Windws: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.Opera() ||
      isMobile.Windws()
    );
  },
};

if (isMobile.any()) {
  document.body.classList.add("touchScreen")
} else {
  document.body.classList.add("pc")
}

function appHeight() {
  const app = document.documentElement;
  const WINDOW_HIGHT = window.innerHeight * 0.01;

  app.style.setProperty("--vh", `${WINDOW_HIGHT}px`);
};

appHeight()
window.addEventListener("resize", appHeight);

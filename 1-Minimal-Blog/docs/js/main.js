(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var body = document.body;
  var burgerMenu = document.querySelector(".burger__menu");
  var burgerBody = document.querySelector(".burger__body");
  var burgerBtn = document.querySelector(".burger__btn");
  var mediaQuery = window.matchMedia('(min-width: 768px)');
  var ANIMATION_TIME = 0.6;
  burgerBtn.addEventListener("click", onClickBurgerMenuBtn);
  burgerBody.addEventListener("click", onClickBurgerBody);

  var addTimer = function addTimer() {
    setTimeout(function () {
      burgerBody.style.transitionDuration = "0s";
    }, ANIMATION_TIME * 1000);
    burgerBody.style.transitionDuration = "".concat(ANIMATION_TIME, "s");
  };

  var setAttribute = function setAttribute() {
    if (burgerBtn.classList.contains("burger__btn--active")) {
      burgerBtn.setAttribute("aria-expended", true);
      burgerBody.setAttribute("aria-hidden", false);
    } else {
      burgerBtn.setAttribute("aria-expended", false);
      burgerBody.setAttribute("aria-hidden", true);
    }
  };

  function onClickBurgerMenuBtn(e) {
    if (mediaQuery.matches) return;
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

},{}],2:[function(require,module,exports){
"use strict";

window.addEventListener("DOMContentLoaded", function () {
  var cardsButton = document.querySelector(".cards__button");
  var cardsList = document.querySelector(".cards__list");
  var content = "<li class=\"cards__item\"><a href=\"article.html\" class=\"cards__body\"><picture><source srcset=\"./assets/images/image-2.webp\" type=\"image/webp\"><source srcset=\"./assets/images/image-2.jpg\" type=\"image/jpeg\"><img src=\"./assets/images/image-2.jpg\" alt=\"image\" class=\"cards__image\"></picture></a><div class=\"cards__content\"><h2 class=\"cards__title title\"><a href=\"article.html\">long established</a></h2><p class=\"cards__desc desc\">It&nbsp;is&nbsp;a&nbsp;long established fact that a&nbsp;reader will be&nbsp;distracted by the readable content of&nbsp;a&nbsp;page when looking at&nbsp;its layout. The point of&nbsp;using Lorem Ipsum is&nbsp;that\u2026</p><div class=\"cards__down\"><time datetime=\"2020-05-20\" class=\"cards__time\">May 20th 2020</time> <a href=\"article.html\" class=\"cards__link\">Read more</a></div></div></li><li class=\"cards__item\"><a href=\"article.html\" class=\"cards__body\"><picture><source srcset=\"./assets/images/image-3.webp\" type=\"image/webp\"><source srcset=\"./assets/images/image-3.jpg\" type=\"image/jpeg\"><img src=\"./assets/images/image-3.jpg\" alt=\"image\" class=\"cards__image\"></picture></a><div class=\"cards__content\"><h2 class=\"cards__title title\"><a href=\"article.html\">long established</a></h2><p class=\"cards__desc desc\">It&nbsp;is&nbsp;a&nbsp;long established fact that a&nbsp;reader will be&nbsp;distracted by the readable content of&nbsp;a&nbsp;page when looking at&nbsp;its layout. The point of&nbsp;using Lorem Ipsum is&nbsp;that\u2026</p><div class=\"cards__down\"><time datetime=\"2020-05-20\" class=\"cards__time\">May 20th 2020</time> <a href=\"article.html\" class=\"cards__link\">Read more</a></div></div></li><li class=\"cards__item\"><a href=\"article.html\" class=\"cards__body\"><picture><source srcset=\"./assets/images/image-4.webp\" type=\"image/webp\"><source srcset=\"./assets/images/image-4.jpg\" type=\"image/jpeg\"><img src=\"./assets/images/image-4.jpg\" alt=\"image\" class=\"cards__image\"></picture></a><div class=\"cards__content\"><h2 class=\"cards__title title\"><a href=\"article.html\">long established</a></h2><p class=\"cards__desc desc\">It&nbsp;is&nbsp;a&nbsp;long established fact that a&nbsp;reader will be&nbsp;distracted by the readable content of&nbsp;a&nbsp;page when looking at&nbsp;its layout. The point of&nbsp;using Lorem Ipsum is&nbsp;that\u2026</p><div class=\"cards__down\"><time datetime=\"2020-05-20\" class=\"cards__time\">May 20th 2020</time> <a href=\"article.html\" class=\"cards__link\">Read more</a></div></div></li><li class=\"cards__item cards__item--full-w cards__item--bg\"><a href=\"article.html\" class=\"cards__body\"><picture><source srcset=\"./assets/images/image-2.webp\" type=\"image/webp\"><source srcset=\"./assets/images/image-2.jpg\" type=\"image/jpeg\"><img src=\"./assets/images/image-2.jpg\" alt=\"image\" class=\"cards__image\"></picture></a><div class=\"cards__content\"><h2 class=\"cards__title title\"><a href=\"article.html\">long established</a></h2><p class=\"cards__desc desc\">It&nbsp;is&nbsp;a&nbsp;long established fact that a&nbsp;reader will be&nbsp;distracted by the readable content of&nbsp;a&nbsp;page when looking at&nbsp;its layout. The point of&nbsp;using Lorem Ipsum is&nbsp;that\u2026</p><div class=\"cards__down\"><time datetime=\"2020-05-20\" class=\"cards__time\">May 20th 2020</time> <a href=\"article.html\" class=\"cards__link\">Read more</a></div></div></li>";
  if (!cardsButton) return;
  cardsButton.addEventListener("click", function () {
    addCards();
  });

  var addCards = function addCards() {
    cardsList.insertAdjacentHTML("beforeend", content);
  };
});

},{}],3:[function(require,module,exports){
"use strict";

var _burgerMenu = _interopRequireDefault(require("../../bem/blocks/burger--menu/burger--menu"));

var _cards = _interopRequireDefault(require("../../bem/components/cards/cards"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

},{"../../bem/blocks/burger--menu/burger--menu":1,"../../bem/components/cards/cards":2}],4:[function(require,module,exports){
"use strict";

var _ismobile = _interopRequireDefault(require("./modules/ismobile"));

var _webp = _interopRequireDefault(require("./modules/webp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

},{"./modules/ismobile":5,"./modules/webp":6}],5:[function(require,module,exports){
"use strict";

var isMobile = {
  Android: function Android() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function BlackBerry() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  IOS: function IOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function Opera() {
    return navigator.userAgent.match(/Opera Min/i);
  },
  Windws: function Windws() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function any() {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.Opera() || isMobile.Windws();
  }
};

if (isMobile.any()) {
  document.body.classList.add("touchScreen");
} else {
  document.body.classList.add("pc");
}

function appHeight() {
  var app = document.documentElement;
  var WINDOW_HIGHT = window.innerHeight * 0.01;
  app.style.setProperty("--app-vh", "".concat(WINDOW_HIGHT, "px"));
}

;
document.addEventListener("scroll", appHeight);
appHeight();

},{}],6:[function(require,module,exports){
"use strict";

//*=================================================
//? WEBP compatibility check
function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

},{}],7:[function(require,module,exports){
"use strict";

var _modules = _interopRequireDefault(require("./imports/modules"));

var _bem = _interopRequireDefault(require("./imports/bem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

},{"./imports/bem":3,"./imports/modules":4}]},{},[7])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYmVtL2Jsb2Nrcy9idXJnZXItLW1lbnUvYnVyZ2VyLS1tZW51LmpzIiwic3JjL2JlbS9jb21wb25lbnRzL2NhcmRzL2NhcmRzLmpzIiwic3JjL2pzL2ltcG9ydHMvYmVtLmpzIiwic3JjL2pzL2ltcG9ydHMvbW9kdWxlcy5qcyIsInNyYy9qcy9pbXBvcnRzL21vZHVsZXMvaXNtb2JpbGUuanMiLCJzcmMvanMvaW1wb3J0cy9tb2R1bGVzL3dlYnAuanMiLCJzcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsUUFBUSxDQUFDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2xELE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUF0QjtBQUNBLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLGVBQXZCLENBQW5CO0FBQ0EsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBbkI7QUFDQSxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixjQUF2QixDQUFsQjtBQUNBLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFQLENBQWtCLG9CQUFsQixDQUFuQjtBQUNBLE1BQU0sY0FBYyxHQUFHLEdBQXZCO0FBRUEsRUFBQSxTQUFTLENBQUMsZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0Msb0JBQXBDO0FBQ0EsRUFBQSxVQUFVLENBQUMsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsaUJBQXJDOztBQUVBLE1BQU0sUUFBUSxHQUFHLFNBQVgsUUFBVyxHQUFNO0FBQ3JCLElBQUEsVUFBVSxDQUFDLFlBQU07QUFDZixNQUFBLFVBQVUsQ0FBQyxLQUFYLENBQWlCLGtCQUFqQixHQUFzQyxJQUF0QztBQUNELEtBRlMsRUFFUCxjQUFjLEdBQUcsSUFGVixDQUFWO0FBSUEsSUFBQSxVQUFV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LEdBRkQsTUFFTztBQUNMLElBQUEsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0IsU0FBL0IsQ0FBeUMsR0FBekMsQ0FBNkMsU0FBN0M7QUFDRDtBQUNGLENBTk8sQ0FBUjs7Ozs7QUNYQTs7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gIGNvbnN0IGJ1cmdlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlcl9fbWVudVwiKTtcbiAgY29uc3QgYnVyZ2VyQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyX19ib2R5XCIpO1xuICBjb25zdCBidXJnZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlcl9fYnRuXCIpO1xuICBjb25zdCBtZWRpYVF1ZXJ5ID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDc2OHB4KScpXG4gIGNvbnN0IEFOSU1BVElPTl9USU1FID0gMC42O1xuXG4gIGJ1cmdlckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25DbGlja0J1cmdlck1lbnVCdG4pO1xuICBidXJnZXJCb2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbkNsaWNrQnVyZ2VyQm9keSk7XG5cbiAgY29uc3QgYWRkVGltZXIgPSAoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBidXJnZXJCb2R5LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IFwiMHNcIjtcbiAgICB9LCBBTklNQVRJT05fVElNRSAqIDEwMDApO1xuXG4gICAgYnVyZ2VyQm9keS5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBgJHtBTklNQVRJT05fVElNRX1zYDtcbiAgfTtcblxuICBjb25zdCBzZXRBdHRyaWJ1dGUgPSAoKSA9PiB7XG4gICAgaWYgKGJ1cmdlckJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJidXJnZXJfX2J0bi0tYWN0aXZlXCIpKSB7XG4gICAgICBidXJnZXJCdG4uc2V0QXR0cmlidXRlKFwiYXJpYS1leHBlbmRlZFwiLCB0cnVlKTtcbiAgICAgIGJ1cmdlckJvZHkuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBidXJnZXJCdG4uc2V0QXR0cmlidXRlKFwiYXJpYS1leHBlbmRlZFwiLCBmYWxzZSk7XG4gICAgICBidXJnZXJCb2R5LnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIHRydWUpO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBvbkNsaWNrQnVyZ2VyTWVudUJ0bihlKSB7XG4gICAgaWYgKG1lZGlhUXVlcnkubWF0Y2hlcykgcmV0dXJuXG4gICAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwibm93LXNjcm9sbFwiKTtcblxuICAgIGFkZFRpbWVyKCk7XG5cbiAgICBidXJnZXJCdG4uY2xhc3NMaXN0LnRvZ2dsZShcImJ1cmdlcl9fYnRuLS1hY3RpdmVcIik7XG4gICAgYnVyZ2VyQm9keS5jbGFzc0xpc3QudG9nZ2xlKFwiYnVyZ2VyX19ib2R5LS1hY3RpdmVcIik7XG5cbiAgICBzZXRBdHRyaWJ1dGUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2xpY2tCdXJnZXJCb2R5KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWFyY2hfX2lucHV0XCIpKSByZXR1cm47XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJidXJnZXJfX2J0blwiKSkgcmV0dXJuO1xuXG4gICAgYWRkVGltZXIoKTtcbiAgICBvbkNsaWNrQnVyZ2VyTWVudUJ0bigpO1xuICAgIHNldEF0dHJpYnV0ZSgpO1xuICB9XG59KTtcbiIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IGNhcmRzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkc19fYnV0dG9uXCIpO1xuICBjb25zdCBjYXJkc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzX19saXN0XCIpO1xuICBjb25zdCBjb250ZW50ID0gYDxsaSBjbGFzcz1cImNhcmRzX19pdGVtXCI+PGEgaHJlZj1cImFydGljbGUuaHRtbFwiIGNsYXNzPVwiY2FyZHNfX2JvZHlcIj48cGljdHVyZT48c291cmNlIHNyY3NldD1cIi4vYXNzZXRzL2ltYWdlcy9pbWFnZS0yLndlYnBcIiB0eXBlPVwiaW1hZ2Uvd2VicFwiPjxzb3VyY2Ugc3Jjc2V0PVwiLi9hc3NldHMvaW1hZ2VzL2ltYWdlLTIuanBnXCIgdHlwZT1cImltYWdlL2pwZWdcIj48aW1nIHNyYz1cIi4vYXNzZXRzL2ltYWdlcy9pbWFnZS0yLmpwZ1wiIGFsdD1cImltYWdlXCIgY2xhc3M9XCJjYXJkc19faW1hZ2VcIj48L3BpY3R1cmU+PC9hPjxkaXYgY2xhc3M9XCJjYXJkc19fY29udGVudFwiPjxoMiBjbGFzcz1cImNhcmRzX190aXRsZSB0aXRsZVwiPjxhIGhyZWY9XCJhcnRpY2xlLmh0bWxcIj5sb25nIGVzdGFibGlzaGVkPC9hPjwvaDI+PHAgY2xhc3M9XCJjYXJkc19fZGVzYyBkZXNjXCI+SXQmbmJzcDtpcyZuYnNwO2EmbmJzcDtsb25nIGVzdGFibGlzaGVkIGZhY3QgdGhhdCBhJm5ic3A7cmVhZGVyIHdpbGwgYmUmbmJzcDtkaXN0cmFjdGVkIGJ5IHRoZSByZWFkYWJsZSBjb250ZW50IG9mJm5ic3A7YSZuYnNwO3BhZ2Ugd2hlbiBsb29raW5nIGF0Jm5ic3A7aXRzIGxheW91dC4gVGhlIHBvaW50IG9mJm5ic3A7dXNpbmcgTG9yZW0gSXBzdW0gaXMmbmJzcDt0aGF04oCmPC9wPjxkaXYgY2xhc3M9XCJjYXJkc19fZG93blwiPjx0aW1lIGRhdGV0aW1lPVwiMjAyMC0wNS0yMFwiIGNsYXNzPVwiY2FyZHNfX3RpbWVcIj5NYXkgMjB0aCAyMDIwPC90aW1lPiA8YSBocmVmPVwiYXJ0aWNsZS5odG1sXCIgY2xhc3M9XCJjYXJkc19fbGlua1wiPlJlYWQgbW9yZTwvYT48L2Rpdj48L2Rpdj48L2xpPjxsaSBjbGFzcz1cImNhcmRzX19pdGVtXCI+PGEgaHJlZj1cImFydGljbGUuaHRtbFwiIGNsYXNzPVwiY2FyZHNfX2JvZHlcIj48cGljdHVyZT48c291cmNlIHNyY3NldD1cIi4vYXNzZXRzL2ltYWdlcy9pbWFnZS0zLndlYnBcIiB0eXBlPVwiaW1hZ2Uvd2VicFwiPjxzb3VyY2Ugc3Jjc2V0PVwiLi9hc3NldHMvaW1hZ2VzL2ltYWdlLTMuanBnXCIgdHlwZT1cImltYWdlL2pwZWdcIj48aW1nIHNyYz1cIi4vYXNzZXRzL2ltYWdlcy9pbWFnZS0zLmpwZ1wiIGFsdD1cImltYWdlXCIgY2xhc3M9XCJjYXJkc19faW1hZ2VcIj48L3BpY3R1cmU+PC9hPjxkaXYgY2xhc3M9XCJjYXJkc19fY29udGVudFwiPjxoMiBjbGFzcz1cImNhcmRzX190aXRsZSB0aXRsZVwiPjxhIGhyZWY9XCJhcnRpY2xlLmh0bWxcIj5sb25nIGVzdGFibGlzaGVkPC9hPjwvaDI+PHAgY2xhc3M9XCJjYXJkc19fZGVzYyBkZXNjXCI+SXQmbmJzcDtpcyZuYnNwO2EmbmJzcDtsb25nIGVzdGFibGlzaGVkIGZhY3QgdGhhdCBhJm5ic3A7cmVhZGVyIHdpbGwgYmUmbmJzcDtkaXN0cmFjdGVkIGJ5IHRoZSByZWFkYWJsZSBjb250ZW50IG9mJm5ic3A7YSZuYnNwO3BhZ2Ugd2hlbiBsb29raW5nIGF0Jm5ic3A7aXRzIGxheW91dC4gVGhlIHBvaW50IG9mJm5ic3A7dXNpbmcgTG9yZW0gSXBzdW0gaXMmbmJzcDt0aGF04oCmPC9wPjxkaXYgY2xhc3M9XCJjYXJkc19fZG93blwiPjx0aW1lIGRhdGV0aW1lPVwiMjAyMC0wNS0yMFwiIGNsYXNzPVwiY2FyZHNfX3RpbWVcIj5NYXkgMjB0aCAyMDIwPC90aW1lPiA8YSBocmVmPVwiYXJ0aWNsZS5odG1sXCIgY2xhc3M9XCJjYXJkc19fbGlua1wiPlJlYWQgbW9yZTwvYT48L2Rpdj48L2Rpdj48L2xpPjxsaSBjbGFzcz1cImNhcmRzX19pdGVtXCI+PGEgaHJlZj1cImFydGljbGUuaHRtbFwiIGNsYXNzPVwiY2FyZHNfX2JvZHlcIj48cGljdHVyZT48c291cmNlIHNyY3NldD1cIi4vYXNzZXRzL2ltYWdlcy9pbWFnZS00LndlYnBcIiB0eXBlPVwiaW1hZ2Uvd2VicFwiPjxzb3VyY2Ugc3Jjc2V0PVwiLi9hc3NldHMvaW1hZ2VzL2ltYWdlLTQuanBnXCIgdHlwZT1cImltYWdlL2pwZWdcIj48aW1nIHNyYz1cIi4vYXNzZXRzL2ltYWdlcy9pbWFnZS00LmpwZ1wiIGFsdD1cImltYWdlXCIgY2xhc3M9XCJjYXJkc19faW1hZ2VcIj48L3BpY3R1cmU+PC9hPjxkaXYgY2xhc3M9XCJjYXJkc19fY29udGVudFwiPjxoMiBjbGFzcz1cImNhcmRzX190aXRsZSB0aXRsZVwiPjxhIGhyZWY9XCJhcnRpY2xlLmh0bWxcIj5sb25nIGVzdGFibGlzaGVkPC9hPjwvaDI+PHAgY2xhc3M9XCJjYXJkc19fZGVzYyBkZXNjXCI+SXQmbmJzcDtpcyZuYnNwO2EmbmJzcDtsb25nIGVzdGFibGlzaGVkIGZhY3QgdGhhdCBhJm5ic3A7cmVhZGVyIHdpbGwgYmUmbmJzcDtkaXN0cmFjdGVkIGJ5IHRoZSByZWFkYWJsZSBjb250ZW50IG9mJm5ic3A7YSZuYnNwO3BhZ2Ugd2hlbiBsb29raW5nIGF0Jm5ic3A7aXRzIGxheW91dC4gVGhlIHBvaW50IG9mJm5ic3A7dXNpbmcgTG9yZW0gSXBzdW0gaXMmbmJzcDt0aGF04oCmPC9wPjxkaXYgY2xhc3M9XCJjYXJkc19fZG93blwiPjx0aW1lIGRhdGV0aW1lPVwiMjAyMC0wNS0yMFwiIGNsYXNzPVwiY2FyZHNfX3RpbWVcIj5NYXkgMjB0aCAyMDIwPC90aW1lPiA8YSBocmVmPVwiYXJ0aWNsZS5odG1sXCIgY2xhc3M9XCJjYXJkc19fbGlua1wiPlJlYWQgbW9yZTwvYT48L2Rpdj48L2Rpdj48L2xpPjxsaSBjbGFzcz1cImNhcmRzX19pdGVtIGNhcmRzX19pdGVtLS1mdWxsLXcgY2FyZHNfX2l0ZW0tLWJnXCI+PGEgaHJlZj1cImFydGljbGUuaHRtbFwiIGNsYXNzPVwiY2FyZHNfX2JvZHlcIj48cGljdHVyZT48c291cmNlIHNyY3NldD1cIi4vYXNzZXRzL2ltYWdlcy9pbWFnZS0yLndlYnBcIiB0eXBlPVwiaW1hZ2Uvd2VicFwiPjxzb3VyY2Ugc3Jjc2V0PVwiLi9hc3NldHMvaW1hZ2VzL2ltYWdlLTIuanBnXCIgdHlwZT1cImltYWdlL2pwZWdcIj48aW1nIHNyYz1cIi4vYXNzZXRzL2ltYWdlcy9pbWFnZS0yLmpwZ1wiIGFsdD1cImltYWdlXCIgY2xhc3M9XCJjYXJkc19faW1hZ2VcIj48L3BpY3R1cmU+PC9hPjxkaXYgY2xhc3M9XCJjYXJkc19fY29udGVudFwiPjxoMiBjbGFzcz1cImNhcmRzX190aXRsZSB0aXRsZVwiPjxhIGhyZWY9XCJhcnRpY2xlLmh0bWxcIj5sb25nIGVzdGFibGlzaGVkPC9hPjwvaDI+PHAgY2xhc3M9XCJjYXJkc19fZGVzYyBkZXNjXCI+SXQmbmJzcDtpcyZuYnNwO2EmbmJzcDtsb25nIGVzdGFibGlzaGVkIGZhY3QgdGhhdCBhJm5ic3A7cmVhZGVyIHdpbGwgYmUmbmJzcDtkaXN0cmFjdGVkIGJ5IHRoZSByZWFkYWJsZSBjb250ZW50IG9mJm5ic3A7YSZuYnNwO3BhZ2Ugd2hlbiBsb29raW5nIGF0Jm5ic3A7aXRzIGxheW91dC4gVGhlIHBvaW50IG9mJm5ic3A7dXNpbmcgTG9yZW0gSXBzdW0gaXMmbmJzcDt0aGF04oCmPC9wPjxkaXYgY2xhc3M9XCJjYXJkc19fZG93blwiPjx0aW1lIGRhdGV0aW1lPVwiMjAyMC0wNS0yMFwiIGNsYXNzPVwiY2FyZHNfX3RpbWVcIj5NYXkgMjB0aCAyMDIwPC90aW1lPiA8YSBocmVmPVwiYXJ0aWNsZS5odG1sXCIgY2xhc3M9XCJjYXJkc19fbGlua1wiPlJlYWQgbW9yZTwvYT48L2Rpdj48L2Rpdj48L2xpPmA7XG5cbiAgaWYgKCFjYXJkc0J1dHRvbikgcmV0dXJuO1xuICBjYXJkc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGFkZENhcmRzKCk7XG4gIH0pO1xuXG4gIGNvbnN0IGFkZENhcmRzID0gKCkgPT4ge1xuICAgIGNhcmRzTGlzdC5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgY29udGVudCk7XG4gIH07XG59KTtcbiIsIi8vIGltcG9ydCBwYXRoOiBcIi4uLy4uL2JlbS9jb21wb25lbnRzL3t9L3t9XCIgb3IgXCIuLi8uLi9iZW0vbW9kdWxlcy97fS97fVwiXHJcbmltcG9ydCBidXJnZXJNZW51IGZyb20gIFwiLi4vLi4vYmVtL2Jsb2Nrcy9idXJnZXItLW1lbnUvYnVyZ2VyLS1tZW51XCI7XHJcbmltcG9ydCBjYXJkcyBmcm9tICBcIi4uLy4uL2JlbS9jb21wb25lbnRzL2NhcmRzL2NhcmRzXCI7XHJcbiIsImltcG9ydCBpc21vYmlsZSBmcm9tICcuL21vZHVsZXMvaXNtb2JpbGUnO1xyXG5pbXBvcnQgd2VicCBmcm9tICcuL21vZHVsZXMvd2VicCc7XHJcbiIsImNvbnN0IGlzTW9iaWxlID0ge1xyXG4gIEFuZHJvaWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9BbmRyb2lkL2kpO1xyXG4gIH0sXHJcbiAgQmxhY2tCZXJyeTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0JsYWNrQmVycnkvaSk7XHJcbiAgfSxcclxuICBJT1M6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGhvbmV8aVBhZHxpUG9kL2kpO1xyXG4gIH0sXHJcbiAgT3BlcmE6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9PcGVyYSBNaW4vaSk7XHJcbiAgfSxcclxuICBXaW5kd3M6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9JRU1vYmlsZS9pKTtcclxuICB9LFxyXG4gIGFueTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgaXNNb2JpbGUuQW5kcm9pZCgpIHx8XHJcbiAgICAgIGlzTW9iaWxlLkJsYWNrQmVycnkoKSB8fFxyXG4gICAgICBpc01vYmlsZS5PcGVyYSgpIHx8XHJcbiAgICAgIGlzTW9iaWxlLldpbmR3cygpXHJcbiAgICApO1xyXG4gIH0sXHJcbn07XHJcblxyXG5pZiAoaXNNb2JpbGUuYW55KCkpIHtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJ0b3VjaFNjcmVlblwiKVxyXG59IGVsc2Uge1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcInBjXCIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcEhlaWdodCgpIHtcclxuICBjb25zdCBhcHAgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgY29uc3QgV0lORE9XX0hJR0hUID0gd2luZG93LmlubmVySGVpZ2h0ICogMC4wMTtcclxuXHJcbiAgYXBwLnN0eWxlLnNldFByb3BlcnR5KFwiLS1hcHAtdmhcIiwgYCR7V0lORE9XX0hJR0hUfXB4YCk7XHJcbn07XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGFwcEhlaWdodCk7XHJcbmFwcEhlaWdodCgpXHJcbiIsIi8vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8/IFdFQlAgY29tcGF0aWJpbGl0eSBjaGVja1xyXG5mdW5jdGlvbiB0ZXN0V2ViUChjYWxsYmFjaykge1xyXG4gIHZhciB3ZWJQID0gbmV3IEltYWdlKCk7XHJcbiAgd2ViUC5vbmxvYWQgPSB3ZWJQLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjYWxsYmFjayh3ZWJQLmhlaWdodCA9PSAyKTtcclxuICB9O1xyXG4gIHdlYlAuc3JjID1cclxuICAgIFwiZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCxVa2xHUmpvQUFBQlhSVUpRVmxBNElDNEFBQUN5QWdDZEFTb0NBQUlBTG1rMG1rMGlJaUlpSWdCb1N5Z0FCYzZXV2dBQS92ZWZmLzBQUDhiQS8vTHdZQUFBXCI7XHJcbn1cclxuXHJcbnRlc3RXZWJQKGZ1bmN0aW9uIChzdXBwb3J0KSB7XHJcbiAgaWYgKHN1cHBvcnQgPT0gdHJ1ZSkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuY2xhc3NMaXN0LmFkZChcIndlYnBcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmNsYXNzTGlzdC5hZGQoXCJuby13ZWJwXCIpO1xyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB3ZWJwIGZyb20gXCIuL2ltcG9ydHMvbW9kdWxlc1wiO1xyXG5pbXBvcnQgYmVtIGZyb20gXCIuL2ltcG9ydHMvYmVtXCI7XHJcbiJdfQ==

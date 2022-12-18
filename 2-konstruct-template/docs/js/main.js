(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// import path: "../../bem/components/{}/{}" or "../../bem/modules/{}/{}"
// import header from "../../bem/components/header/header";
"use strict";

},{}],2:[function(require,module,exports){
"use strict";

var _ismobile = _interopRequireDefault(require("./modules/ismobile"));

var _webp = _interopRequireDefault(require("./modules/webp"));

var _nav = _interopRequireDefault(require("./modules/nav"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

},{"./modules/ismobile":3,"./modules/nav":4,"./modules/webp":5}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var body = document.body;
  var burgerBody = document.querySelector(".burger__body");
  var burgerMenuBtn = document.querySelector(".burger__btn");
  var navbar = document.querySelector(".navbar");
  var positionNavBar = document.querySelector(".navbar").offsetTop;
  var ANIMATION_TIME = 0.4;
  burgerMenuBtn.addEventListener("click", onClickBurgerMenuBtn);
  burgerBody.addEventListener("click", onClickBurgerBody);

  function onClickBurgerMenuBtn(event) {
    if (positionNavBar <= window.scrollY) {
      body.classList.toggle("now-scroll");
      burgerBody.style.transition = "all ".concat(ANIMATION_TIME, "s ease-out");
      setTimeout(function () {
        return burgerBody.style.transition = "unset";
      }, ANIMATION_TIME * 1000);
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

  document.addEventListener("scroll", function (e) {
    if (positionNavBar + navbar.offsetHeight <= window.scrollY) navbar.classList.add("fixed");else {
      navbar.classList.remove("fixed");
    }
  });
});

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
"use strict";

var _modules = _interopRequireDefault(require("./imports/modules"));

var _bem = _interopRequireDefault(require("./imports/bem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

},{"./imports/bem":1,"./imports/modules":2}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvaW1wb3J0cy9iZW0uanMiLCJzcmMvanMvaW1wb3J0cy9tb2R1bGVzLmpzIiwic3JjL2pzL2ltcG9ydHMvbW9kdWxlcy9pc21vYmlsZS5qcyIsInNyYy9qcy9pbXBvcnRzL21vZHVsZXMvbmF2LmpzIiwic3JjL2pzL2ltcG9ydHMvbW9kdWxlcy93ZWJwLmpzIiwic3JjL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBOzs7Ozs7QUNEQTs7QUFDQTs7QUFDQTs7Ozs7OztBQ0ZBLElBQU0sUUFBUSxHQUFHO0FBQ2YsRUFBQSxPQUFPLEVBQUUsbUJBQVk7QUFDbkIsV0FBTyxTQUFTLENBQUMsU0FBVixDQUFvQixLQUFwQixDQUEwQixVQUExQixDQUFQO0FBQ0QsR0FIYztBQUlmLEVBQUEsVUFBVSxFQUFFLHNCQUFZO0FBQ3RCLFdBQU8sU0FBUyxDQUFDLFNBQVYsQ0FBb0IsS0FBcEIsQ0FBMEIsYUFBMUIsQ0FBUDtBQUNELEdBTmM7QUFPZixFQUFBLEdBQUcsRUFBRSxlQUFZO0FBQ2YsV0FBTyxTQUFTLENBQUMsU0FBVixDQUFvQixLQUFwQixDQUEwQixtQkFBMUIsQ0FBUDtBQUNELEdBVGM7QUFVZixFQUFBLEtBQUssRUFBRSxpQkFBWTtBQUNqQixXQUFPLFNBQVMsQ0FBQyxTQUFWLENBQW9CLEtBQXBCLENBQTBCLFlBQTFCLENBQVA7QUFDRCxHQVpjO0FBYWYsRUFBQSxNQUFNLEVBQUUsa0JBQVk7QUFDbEIsV0FBTyxTQUFTLENBQUMsU0FBVixDQUFvQixLQUFwQixDQUEwQixXQUExQixDQUFQO0FBQ0QsR0FmYztBQWdCZixFQUFBLEdBQUcsRUFBRSxlQUFZO0FBQ2YsV0FDRSxRQUFRLENBQUMsT0FBVCxNQUNBLFFBQVEsQ0FBQyxVQUFULEVBREEsSUFFQSxRQUFRLENBQUMsS0FBVCxFQUZBLElBR0EsUUFBUSxDQUFDLE1BQVQsRUFK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dUMsSUFBdkM7QUFDRDs7QUFFRCxFQUFBLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixRQUExQixFQUFvQyxVQUFDLENBQUQsRUFBTztBQUN6QyxRQUFJLGNBQWMsR0FBQyxNQUFNLENBQUMsWUFBdEIsSUFBc0MsTUFBTSxDQUFDLE9BQWpELEVBQTBELE1BQU0sQ0FBQyxTQUFQLENBQWlCLEdBQWpCLENBQXFCLE9BQXJCLEVBQTFELEtBQ0s7QUFDSCxNQUFBLE1BQU0sQ0FBQyxTQUFQLENBQWlCLE1BQWpCLENBQXdCLE9BQXhCO0FBQ0Q7QUFDRixHQUxEO0FBTUQsQ0FoREQ7Ozs7O0FDQUE7QUFDQTtBQUNBLFNBQVMsUUFBVCxDQUFrQixRQUFsQixFQUE0QjtBQUMxQixNQUFJLElBQUksR0FBRyxJQUFJLEtBQUosRUFBWDs7QUFDQSxFQUFBLElBQUksQ0FBQyxNQUFMLEdBQWMsSUFBSSxDQUFDLE9BQUwsR0FBZSxZQUFZO0FBQ3ZDLElBQUEsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFMLElBQWUsQ0FBaEIsQ0FBUjtBQUNELEdBRkQ7O0FBR0EsRUFBQSxJQUFJLENBQUMsR0FBTCxHQUNFLGlIQURGO0FBRUQ7O0FBRUQsUUFBUSxDQUFDLFVBQVUsT0FBVixFQUFtQjtBQUMxQixNQUFJLE9BQU8sSUFBSSxJQUFmLEVBQXFCO0FBQ25CLElBQUEsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0IsU0FBL0IsQ0FBeUMsR0FBekMsQ0FBNkMsTUFBN0M7QUFDRCxHQUZELE1BRU87QUFDTCxJQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLE1BQXZCLEVBQStCLFNBQS9CLENBQXlDLEdBQXpDLENBQTZDLFNBQTdDO0FBQ0Q7QUFDRixDQU5PLENBQVI7Ozs7O0FDWEE7O0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBpbXBvcnQgcGF0aDogXCIuLi8uLi9iZW0vY29tcG9uZW50cy97fS97fVwiIG9yIFwiLi4vLi4vYmVtL21vZHVsZXMve30ve31cIlxyXG4vLyBpbXBvcnQgaGVhZGVyIGZyb20gXCIuLi8uLi9iZW0vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyXCI7XHJcbiIsImltcG9ydCBpc21vYmlsZSBmcm9tICcuL21vZHVsZXMvaXNtb2JpbGUnO1xyXG5pbXBvcnQgd2VicCBmcm9tICcuL21vZHVsZXMvd2VicCc7XHJcbmltcG9ydCBuYXYgZnJvbSAnLi9tb2R1bGVzL25hdic7XHJcbiIsImNvbnN0IGlzTW9iaWxlID0ge1xyXG4gIEFuZHJvaWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9BbmRyb2lkL2kpO1xyXG4gIH0sXHJcbiAgQmxhY2tCZXJyeTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0JsYWNrQmVycnkvaSk7XHJcbiAgfSxcclxuICBJT1M6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGhvbmV8aVBhZHxpUG9kL2kpO1xyXG4gIH0sXHJcbiAgT3BlcmE6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9PcGVyYSBNaW4vaSk7XHJcbiAgfSxcclxuICBXaW5kd3M6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9JRU1vYmlsZS9pKTtcclxuICB9LFxyXG4gIGFueTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgaXNNb2JpbGUuQW5kcm9pZCgpIHx8XHJcbiAgICAgIGlzTW9iaWxlLkJsYWNrQmVycnkoKSB8fFxyXG4gICAgICBpc01vYmlsZS5PcGVyYSgpIHx8XHJcbiAgICAgIGlzTW9iaWxlLldpbmR3cygpXHJcbiAgICApO1xyXG4gIH0sXHJcbn07XHJcblxyXG5pZiAoaXNNb2JpbGUuYW55KCkpIHtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJ0b3VjaFNjcmVlblwiKVxyXG59IGVsc2Uge1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcInBjXCIpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcEhlaWdodCgpIHtcclxuICBjb25zdCBhcHAgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgY29uc3QgV0lORE9XX0hJR0hUID0gd2luZG93LmlubmVySGVpZ2h0ICogMC4wMTtcclxuXHJcbiAgYXBwLnN0eWxlLnNldFByb3BlcnR5KFwiLS1hcHAtdmhcIiwgYCR7V0lORE9XX0hJR0hUfXB4YCk7XHJcbn07XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGFwcEhlaWdodCk7XHJcbmFwcEhlaWdodCgpXHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuICBjb25zdCBidXJnZXJCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXJnZXJfX2JvZHlcIik7XHJcbiAgY29uc3QgYnVyZ2VyTWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyX19idG5cIik7XHJcbiAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIik7XHJcbiAgY29uc3QgcG9zaXRpb25OYXZCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKS5vZmZzZXRUb3A7XHJcbiAgY29uc3QgQU5JTUFUSU9OX1RJTUUgPSAwLjQ7XHJcblxyXG4gIGJ1cmdlck1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uQ2xpY2tCdXJnZXJNZW51QnRuKTtcclxuICBidXJnZXJCb2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbkNsaWNrQnVyZ2VyQm9keSk7XHJcblxyXG4gIGZ1bmN0aW9uIG9uQ2xpY2tCdXJnZXJNZW51QnRuKGV2ZW50KSB7XHJcbiAgICBpZiAocG9zaXRpb25OYXZCYXIgPD0gd2luZG93LnNjcm9sbFkpIHtcclxuICAgICAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwibm93LXNjcm9sbFwiKTtcclxuXHJcbiAgICAgIGJ1cmdlckJvZHkuc3R5bGUudHJhbnNpdGlvbiA9IGBhbGwgJHtBTklNQVRJT05fVElNRX1zIGVhc2Utb3V0YDtcclxuICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAoKSA9PiAoYnVyZ2VyQm9keS5zdHlsZS50cmFuc2l0aW9uID0gXCJ1bnNldFwiKSxcclxuICAgICAgICBBTklNQVRJT05fVElNRSAqIDEwMDBcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGJ1cmdlck1lbnVCdG4uY2xhc3NMaXN0LnRvZ2dsZShcImJ1cmdlcl9fYnRuLS1hY3RpdmVcIik7XHJcbiAgICAgIGJ1cmdlckJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImJ1cmdlcl9fYm9keS0tYWN0aXZlXCIpO1xyXG5cclxuICAgICAgaWYgKGJ1cmdlck1lbnVCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnVyZ2VyX19idG4tLWFjdGl2ZVwiKSkge1xyXG4gICAgICAgIGJ1cmdlck1lbnVCdG4uc2V0QXR0cmlidXRlKFwiYXJpYS1leHBlbmRlZFwiLCB0cnVlKTtcclxuICAgICAgICBidXJnZXJCb2R5LnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIGZhbHNlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBidXJnZXJNZW51QnRuLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwZW5kZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgIGJ1cmdlckJvZHkuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG9uQ2xpY2tCdXJnZXJCb2R5KGV2ZW50KSB7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJub3ctc2Nyb2xsXCIpO1xyXG4gICAgYnVyZ2VyTWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYnVyZ2VyX19idG4tLWFjdGl2ZVwiKTtcclxuICAgIGJ1cmdlckJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImJ1cmdlcl9fYm9keS0tYWN0aXZlXCIpO1xyXG4gICAgYnVyZ2VyTWVudUJ0bi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGVuZGVkXCIsIGZhbHNlKTtcclxuICAgIGJ1cmdlckJvZHkuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIChlKSA9PiB7XHJcbiAgICBpZiAocG9zaXRpb25OYXZCYXIrbmF2YmFyLm9mZnNldEhlaWdodCA8PSB3aW5kb3cuc2Nyb2xsWSkgbmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJmaXhlZFwiKTtcclxuICAgIGVsc2Uge1xyXG4gICAgICBuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZShcImZpeGVkXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuIiwiLy8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLz8gV0VCUCBjb21wYXRpYmlsaXR5IGNoZWNrXHJcbmZ1bmN0aW9uIHRlc3RXZWJQKGNhbGxiYWNrKSB7XHJcbiAgdmFyIHdlYlAgPSBuZXcgSW1hZ2UoKTtcclxuICB3ZWJQLm9ubG9hZCA9IHdlYlAub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNhbGxiYWNrKHdlYlAuaGVpZ2h0ID09IDIpO1xyXG4gIH07XHJcbiAgd2ViUC5zcmMgPVxyXG4gICAgXCJkYXRhOmltYWdlL3dlYnA7YmFzZTY0LFVrbEdSam9BQUFCWFJVSlFWbEE0SUM0QUFBQ3lBZ0NkQVNvQ0FBSUFMbWswbWswaUlpSWlJZ0JvU3lnQUJjNldXZ0FBL3ZlZmYvMFBQOGJBLy9Md1lBQUFcIjtcclxufVxyXG5cclxudGVzdFdlYlAoZnVuY3Rpb24gKHN1cHBvcnQpIHtcclxuICBpZiAoc3VwcG9ydCA9PSB0cnVlKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3QuYWRkKFwid2VicFwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuY2xhc3NMaXN0LmFkZChcIm5vLXdlYnBcIik7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHdlYnAgZnJvbSBcIi4vaW1wb3J0cy9tb2R1bGVzXCI7XHJcbmltcG9ydCBiZW0gZnJvbSBcIi4vaW1wb3J0cy9iZW1cIjtcclxuIl19

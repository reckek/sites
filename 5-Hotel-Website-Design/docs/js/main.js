(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// import path: "../../bem/components/{}/{}" or "../../bem/modules/{}/{}"
"use strict";

},{}],2:[function(require,module,exports){
"use strict";

require("./modules/ismobile");

require("./modules/webp");

require("./modules/burger-menu");

},{"./modules/burger-menu":3,"./modules/ismobile":4,"./modules/webp":5}],3:[function(require,module,exports){
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var _document, _document2, _document3;

  var body = document.body;
  var header = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector(".header");
  var burgerBody = (_document2 = document) === null || _document2 === void 0 ? void 0 : _document2.querySelector(".nav__body");
  var burgerBtn = (_document3 = document) === null || _document3 === void 0 ? void 0 : _document3.querySelector(".nav__button");
  var ANIMATION_TIME = 0.6;
  var headerHight = null;
  document.addEventListener("click", onClickBurgerMenuBtn);
  document.addEventListener("click", onClickBurgerBody);
  document.addEventListener('scroll', onScrollBg);
  document.addEventListener('keydown', onKeyDown);

  var addTimer = function addTimer() {
    setTimeout(function () {
      burgerBody.style.transitionDuration = "0s";
    }, ANIMATION_TIME * 1000);
    burgerBody.style.transitionDuration = "".concat(ANIMATION_TIME, "s");
  };

  var setActive = function setActive() {
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
    if (!burgerBtn.classList.contains("nav__button--active")) return;

    if (event.code === "Escape") {
      addTimer();
      setActive();
    }
  }

  function onScrollBg(event) {
    // console.dir(header, {showProxy: true})
    if (headerHight === null) headerHight = header.offsetHeight;

    if (headerHight <= window.scrollY) {
      if (header.classList.contains("header__bg")) return;
      header.classList.toggle("header__bg");
    } else {
      if (!header.classList.contains("header__bg")) return;
      header.classList.toggle("header__bg");
    }
  }
});

},{}],4:[function(require,module,exports){
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
  app.style.setProperty("--vh", "".concat(WINDOW_HIGHT, "px"));
}

;
appHeight();
window.addEventListener("resize", appHeight);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvaW1wb3J0cy9iZW0uanMiLCJzcmMvanMvaW1wb3J0cy9tb2R1bGVzLmpzIiwic3JjL2pzL2ltcG9ydHMvbW9kdWxlcy9idXJnZXItbWVudS5qcyIsInNyYy9qcy9pbXBvcnRzL21vZHVsZXMvaXNtb2JpbGUuanMiLCJzcmMvanMvaW1wb3J0cy9tb2R1bGVzL3dlYnAuanMiLCJzcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7Ozs7QUNBQTs7QUFDQTs7QUFDQTs7Ozs7QUNGQSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFBQTs7QUFDbEQsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQXRCO0FBQ0EsTUFBTSxNQUFNLGdCQUFHLFFBQUgsOENBQUcsVUFBVSxhQUFWLENBQXdCLFNBQXhCLENBQWY7QUFDQSxNQUFNLFVBQVUsaUJBQUcsUUFBSCwrQ0FBRyxXQUFVLGFBQVYsQ0FBd0IsWUFBeEIsQ0FBbkI7QUFDQSxNQUFNLFNBQVMsaUJBQUcsUUFBSCwrQ0FBRyxXQUFVLGFBQVYsQ0FBd0IsY0FBeEIsQ0FBbEI7QUFDQSxNQUFNLGNBQWMsR0FBRyxHQUF2QjtBQUNBLE1BQUksV0FBVyxHQUFHLElBQWxCO0FBRUEsRUFBQSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsb0JBQW5DO0FBQ0EsRUFBQSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsaUJBQW5DO0FBQ0EsRUFBQSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0MsVUFBcEM7QUFDQSxFQUFBLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxTQUFyQzs7QUFFQSxNQUFNLFFBQVEsR0FBRyxTQUFYLFFBQVcsR0FBTTtBQUNyQixJQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2YsTUFBQSxVQUFV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Q0FBaEIsQ0FBUjtBQUNELEdBRkQ7O0FBR0EsRUFBQSxJQUFJLENBQUMsR0FBTCxHQUNFLGlIQURGO0FBRUQ7O0FBRUQsUUFBUSxDQUFDLFVBQVUsT0FBVixFQUFtQjtBQUMxQixNQUFJLE9BQU8sSUFBSSxJQUFmLEVBQXFCO0FBQ25CLElBQUEsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0IsU0FBL0IsQ0FBeUMsR0FBekMsQ0FBNkMsTUFBN0M7QUFDRCxHQUZELE1BRU87QUFDTCxJQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLE1BQXZCLEVBQStCLFNBQS9CLENBQXlDLEdBQXpDLENBQTZDLFNBQTdDO0FBQ0Q7QUFDRixDQU5PLENBQVI7Ozs7O0FDWEE7O0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBpbXBvcnQgcGF0aDogXCIuLi8uLi9iZW0vY29tcG9uZW50cy97fS97fVwiIG9yIFwiLi4vLi4vYmVtL21vZHVsZXMve30ve31cIlxyXG4iLCJpbXBvcnQgJy4vbW9kdWxlcy9pc21vYmlsZSc7XG5pbXBvcnQgJy4vbW9kdWxlcy93ZWJwJztcbmltcG9ydCAnLi9tb2R1bGVzL2J1cmdlci1tZW51JztcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50Py5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcbiAgY29uc3QgYnVyZ2VyQm9keSA9IGRvY3VtZW50Py5xdWVyeVNlbGVjdG9yKFwiLm5hdl9fYm9keVwiKTtcbiAgY29uc3QgYnVyZ2VyQnRuID0gZG9jdW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoXCIubmF2X19idXR0b25cIik7XG4gIGNvbnN0IEFOSU1BVElPTl9USU1FID0gMC42O1xuICBsZXQgaGVhZGVySGlnaHQgPSBudWxsO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbkNsaWNrQnVyZ2VyTWVudUJ0bik7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbkNsaWNrQnVyZ2VyQm9keSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsQmcpXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleURvd24pXG5cbiAgY29uc3QgYWRkVGltZXIgPSAoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBidXJnZXJCb2R5LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IFwiMHNcIjtcbiAgICB9LCBBTklNQVRJT05fVElNRSAqIDEwMDApO1xuXG4gICAgYnVyZ2VyQm9keS5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBgJHtBTklNQVRJT05fVElNRX1zYDtcbiAgfTtcblxuICBjb25zdCBzZXRBY3RpdmUgPSAoKSA9PiB7XG4gICAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwibm93LXNjcm9sbFwiKTtcbiAgICBidXJnZXJCdG4uY2xhc3NMaXN0LnRvZ2dsZShcIm5hdl9fYnV0dG9uLS1hY3RpdmVcIik7XG4gICAgYnVyZ2VyQm9keS5jbGFzc0xpc3QudG9nZ2xlKFwibmF2X19ib2R5LS1hY3RpdmVcIik7XG5cbiAgICBpZiAoYnVyZ2VyQnRuLmNsYXNzTGlzdC5jb250YWlucyhcIm5hdl9fYnV0dG9uLS1hY3RpdmVcIikpIHtcbiAgICAgIGJ1cmdlckJ0bi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGVuZGVkXCIsIHRydWUpO1xuICAgICAgYnVyZ2VyQm9keS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCBmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1cmdlckJ0bi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGVuZGVkXCIsIGZhbHNlKTtcbiAgICAgIGJ1cmdlckJvZHkuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgdHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIG9uQ2xpY2tCdXJnZXJNZW51QnRuKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gYnVyZ2VyQnRuKSByZXR1cm47XG4gICAgYWRkVGltZXIoKTtcbiAgICBzZXRBY3RpdmUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2xpY2tCdXJnZXJCb2R5KGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gYnVyZ2VyQm9keSAmJiAhZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm5hdl9fbGlua1wiKSkgcmV0dXJuO1xuXG4gICAgYWRkVGltZXIoKTtcbiAgICBzZXRBY3RpdmUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uS2V5RG93bihldmVudCkge1xuICAgIGlmICghYnVyZ2VyQnRuLmNsYXNzTGlzdC5jb250YWlucyhcIm5hdl9fYnV0dG9uLS1hY3RpdmVcIikpIHJldHVyblxuICAgIGlmIChldmVudC5jb2RlID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICBhZGRUaW1lcigpO1xuICAgICAgc2V0QWN0aXZlKClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvblNjcm9sbEJnKGV2ZW50KSB7XG4gICAgLy8gY29uc29sZS5kaXIoaGVhZGVyLCB7c2hvd1Byb3h5OiB0cnVlfSlcbiAgICBpZiAoaGVhZGVySGlnaHQgPT09IG51bGwpIGhlYWRlckhpZ2h0ID0gaGVhZGVyLm9mZnNldEhlaWdodFxuXG4gICAgaWYgKGhlYWRlckhpZ2h0IDw9IHdpbmRvdy5zY3JvbGxZKSB7XG4gICAgICBpZiAoaGVhZGVyLmNsYXNzTGlzdC5jb250YWlucyhcImhlYWRlcl9fYmdcIikpIHJldHVyblxuICAgICAgaGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoXCJoZWFkZXJfX2JnXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghaGVhZGVyLmNsYXNzTGlzdC5jb250YWlucyhcImhlYWRlcl9fYmdcIikpIHJldHVyblxuICAgICAgaGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoXCJoZWFkZXJfX2JnXCIpXG4gICAgfVxuICB9XG59KTtcbiIsImNvbnN0IGlzTW9iaWxlID0ge1xuICBBbmRyb2lkOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0FuZHJvaWQvaSk7XG4gIH0sXG4gIEJsYWNrQmVycnk6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQmxhY2tCZXJyeS9pKTtcbiAgfSxcbiAgSU9TOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQaG9uZXxpUGFkfGlQb2QvaSk7XG4gIH0sXG4gIE9wZXJhOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL09wZXJhIE1pbi9pKTtcbiAgfSxcbiAgV2luZHdzOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0lFTW9iaWxlL2kpO1xuICB9LFxuICBhbnk6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgaXNNb2JpbGUuQW5kcm9pZCgpIHx8XG4gICAgICBpc01vYmlsZS5CbGFja0JlcnJ5KCkgfHxcbiAgICAgIGlzTW9iaWxlLk9wZXJhKCkgfHxcbiAgICAgIGlzTW9iaWxlLldpbmR3cygpXG4gICAgKTtcbiAgfSxcbn07XG5cbmlmIChpc01vYmlsZS5hbnkoKSkge1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJ0b3VjaFNjcmVlblwiKVxufSBlbHNlIHtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwicGNcIilcbn1cblxuZnVuY3Rpb24gYXBwSGVpZ2h0KCkge1xuICBjb25zdCBhcHAgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIGNvbnN0IFdJTkRPV19ISUdIVCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMDE7XG5cbiAgYXBwLnN0eWxlLnNldFByb3BlcnR5KFwiLS12aFwiLCBgJHtXSU5ET1dfSElHSFR9cHhgKTtcbn07XG5cbmFwcEhlaWdodCgpXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBhcHBIZWlnaHQpO1xuIiwiLy8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLz8gV0VCUCBjb21wYXRpYmlsaXR5IGNoZWNrXHJcbmZ1bmN0aW9uIHRlc3RXZWJQKGNhbGxiYWNrKSB7XHJcbiAgdmFyIHdlYlAgPSBuZXcgSW1hZ2UoKTtcclxuICB3ZWJQLm9ubG9hZCA9IHdlYlAub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNhbGxiYWNrKHdlYlAuaGVpZ2h0ID09IDIpO1xyXG4gIH07XHJcbiAgd2ViUC5zcmMgPVxyXG4gICAgXCJkYXRhOmltYWdlL3dlYnA7YmFzZTY0LFVrbEdSam9BQUFCWFJVSlFWbEE0SUM0QUFBQ3lBZ0NkQVNvQ0FBSUFMbWswbWswaUlpSWlJZ0JvU3lnQUJjNldXZ0FBL3ZlZmYvMFBQOGJBLy9Md1lBQUFcIjtcclxufVxyXG5cclxudGVzdFdlYlAoZnVuY3Rpb24gKHN1cHBvcnQpIHtcclxuICBpZiAoc3VwcG9ydCA9PSB0cnVlKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3QuYWRkKFwid2VicFwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuY2xhc3NMaXN0LmFkZChcIm5vLXdlYnBcIik7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHdlYnAgZnJvbSBcIi4vaW1wb3J0cy9tb2R1bGVzXCI7XHJcbmltcG9ydCBiZW0gZnJvbSBcIi4vaW1wb3J0cy9iZW1cIjtcclxuIl19

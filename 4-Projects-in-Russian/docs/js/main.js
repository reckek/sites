(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var slider = document.querySelector(".slider");
var sliderViewport = document.querySelector(".slider__viewport");
var sliderList = document.querySelector(".slider__list");
var sliderItems = document.querySelectorAll(".slider__item");
var sliderBtnLeft = document.querySelector(".slider-controlls__btn--left");
var sliderBtnRight = document.querySelector(".slider-controlls__btn--right");
var sliderItemDefaultActive = 0;
var activeSlideIndex = 0;
sliderBtnLeft.addEventListener("click", function () {
  slideMove("back");
});
sliderBtnRight.addEventListener("click", function () {
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

  var width = sliderList.clientWidth;
  sliderList.style.transform = "translateX(-".concat(activeSlideIndex * width, "px)");
}

},{}],2:[function(require,module,exports){
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var accardionItems = document.querySelectorAll(".accardion__item");

  function accardionRemoveClassActive() {
    accardionItems.forEach(function (element) {
      var self = element;
      var control = self.querySelector(".accardion__control");
      var content = self.querySelector(".accardion__content");
      self.classList.remove("accardion__item--active");
      control.setAttribute("aria-expanded", false);
      content.setAttribute("aria-hidden", true);
    });
  }

  accardionItems.forEach(function (element) {
    element.addEventListener("click", function (event) {
      var self = event.currentTarget;
      var control = self.querySelector(".accardion__control");
      var content = self.querySelector(".accardion__content");

      if (!self.classList.contains("accardion__item--active")) {
        accardionRemoveClassActive();
      }

      self.classList.toggle("accardion__item--active");

      if (self.classList.contains("accardion__item--active")) {
        control.setAttribute("aria-expanded", true);
        content.setAttribute("aria-hidden", false);
      } else {
        control.setAttribute("aria-expanded", false);
        content.setAttribute("aria-hidden", true);
      }
    });
  });
});

},{}],3:[function(require,module,exports){
"use strict";

var _projects = _interopRequireDefault(require("../../bem/components/projects/projects"));

var _question = _interopRequireDefault(require("../../bem/components/question/question"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

},{"../../bem/components/projects/projects":1,"../../bem/components/question/question":2}],4:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYmVtL2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdHMuanMiLCJzcmMvYmVtL2NvbXBvbmVudHMvcXVlc3Rpb24vcXVlc3Rpb24uanMiLCJzcmMvanMvaW1wb3J0cy9iZW0uanMiLCJzcmMvanMvaW1wb3J0cy9tb2R1bGVzLmpzIiwic3JjL2pzL2ltcG9ydHMvbW9kdWxlcy9pc21vYmlsZS5qcyIsInNyYy9qcy9pbXBvcnRzL21vZHVsZXMvd2VicC5qcyIsInNyYy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUFmO0FBQ0EsSUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsbUJBQXZCLENBQXZCO0FBQ0EsSUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBbkI7QUFDQSxJQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsZUFBMUIsQ0FBcEI7QUFDQSxJQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1Qiw4QkFBdkIsQ0FBdEI7QUFDQSxJQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QiwrQkFBdkIsQ0FBdkI7QUFDQSxJQUFNLHVCQUF1QixHQUFHLENBQWhDO0FBQ0EsSUFBSSxnQkFBZ0IsR0FBRyxDQUF2QjtBQUVBLGFBQWEsQ0FBQyxnQkFBZCxDQUErQixPQUEvQixFQUF3QyxZQUFNO0FBQzVDLEVBQUEsU0FBUyxDQUFDLE1BQUQsQ0FBVDtBQUNELENBRkQ7QUFHQSxjQUFjLENBQUMsZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBeUMsWUFBTTtBQUM3QyxFQUFBLFNBQVMsQ0FBQyxNQUFELENBQVQ7QUFDRCxDQUZEOztBQUlBLFNBQVMsU0FBVCxDQUFtQixTQUFuQixFQUE4QjtBQUM1QixNQUFJLFNBQVMsS0FBSyxNQUFsQixFQUEwQjtBQUN4QixJQUFBLGdCQUFnQjs7QUFFaEIsUUFBSSxnQkFBZ0IsS0FBSyxXQUFXLENBQUMsTUFBckMsRUFBNkM7QUFDM0MsTUFBQSxnQkFBZ0IsR0FBRyxDQUFuQjtBQUNEO0FBQ0YsR0FORCxNQU1PLElBQUksU0FBUyxLQUFLLE1BQWxCLEVBQTBCO0FBQy9CLElBQUEsZ0JBQWdCOztBQUVoQixRQUFJLGdCQUFnQixHQUFHLENBQXZCLEVBQTBCO0FBQ3hCLE1BQUEsZ0JBQWdCLEdBQUcsV0FBVyxDQUFDLE1BQVosR0FBcUIsQ0FBeEM7QUFDRDtBQUNGOztBQUVELE1BQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQyxXQUF6QjtBQUNBLEVBQUEsVUFBVSxDQUFDLEtBQVgsQ0FBaUIsU0FBakIseUJBQTRDLGdCQUFnQixHQUFHLEtBQS9EO0FBQ0Q7Ozs7O0FDakNELFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNsRCxNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsa0JBQTFCLENBQXZCOztBQUVBLFdBQVMsMEJBQVQsR0FBc0M7QUFDcEMsSUFBQSxjQUFjLENBQUMsT0FBZixDQUF1QixVQUFDLE9BQUQsRUFBYTtBQUNsQyxVQUFNLElBQUksR0FBRyxPQUFiO0FBQ0EsVUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQUwsQ0FBbUIscUJBQW5CLENBQWhCO0FBQ0EsVUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQUwsQ0FBbUIscUJBQW5CLENBQWhCO0FBRUEsTUFBQSxJQUFJLENBQUMsU0FBTCxDQUFlLE1BQWYsQ0FBc0IseUJBQXRCO0FBQ0EsTUFBQSxPQUFPLENBQUMsWUFBUixDQUFxQixlQUFyQixFQUFzQyxLQUF0QztBQUNBLE1BQUEsT0FBTyxDQUFDLFlBQVIsQ0FBcUIsYUFBckIsRUFBb0MsSUFBcEM7QUFDRCxLQVJEO0FBU0Q7O0FBQ0QsRUFBQSxjQUFjLENBQUMsT0FBZixDQUF1QixVQUFDLE9BQUQsRUFBYTtBQUNsQyxJQUFBLE9BQU8sQ0FBQyxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxVQUFDLEtBQUQsRUFBVztBQUMzQyxVQUFNLElBQUksR0FBRyxLQUFLLENBQUMsYUFBbkI7QUFDQSxVQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBTCxDQUFtQixxQkFBbkIsQ0FBaEI7QUFDQSxVQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBTCxDQUFtQixxQkFBbkIsQ0FBaEI7O0FBRUEsVUFBSSxDQUFDLElBQUksQ0FBQyxTQUFMLENBQWUsUUFBZixDQUF3Qix5QkFBeEIsQ0FBTCxFQUF5RDtBQUN2RCxRQUFBLDBCQUEwQjtBQUMzQjs7QUFDRCxNQUFBLElBQUksQ0FBQyxTQUFMLENBQWUsTUFBZixDQUFzQix5QkFBdEI7O0FBRUEsVUFBSSxJQUFJLENBQUMsU0FBTCxDQUFlLFFBQWYsQ0FBd0IseUJBQXhCLENBQUosRUFBd0Q7QUFDdEQsUUFBQSxPQUFPLENBQUMsWUFBUixDQUFxQixlQUFyQixFQUFzQyxJQUF0QztBQUNBLFFBQUEsT0FBTyxDQUFDLFlBQVIsQ0FBcUIsYUFBckIsRUFBb0MsS0FBcEM7QUFDRCxPQUhELE1BR087QUFDTCxRQUFBLE9BQU8sQ0FBQyxZQUFSLENBQXFCLGVBQXJCLEVBQXNDLEtBQXRDO0FBQ0EsUUFBQSxPQUFPLENBQUMsWUFBUixDQUFxQixhQUFyQixFQUFvQyxJQUFwQztBQUNEO0FBQ0YsS0FqQkQ7QUFrQkQsR0FuQkQ7QUFvQkQsQ0FsQ0Q7Ozs7O0FDQUE7O0FBQ0E7Ozs7Ozs7QUNEQTs7QUFDQTs7Ozs7OztBQ0RBLElBQU0sUUFBUSxHQUFHO0FBQ2YsRUFBQSxPQUFPLEVBQUUsbUJBQVk7QUFDbkIsV0FBTyxTQUFTLENBQUMsU0FBVixDQUFvQixLQUFwQixDQUEwQixVQUExQixDQUFQO0FBQ0QsR0FIYztBQUlmLEVBQUEsVUFBVSxFQUFFLHNCQUFZO0FBQ3RCLFdBQU8sU0FBUyxDQUFDLFNBQVYsQ0FBb0IsS0FBcEIsQ0FBMEIsYUFBMUIsQ0FBUDtBQUNELEdBTmM7QUFPZixFQUFBLEdBQUcsRUFBRSxlQUFZO0FBQ2YsV0FBTyxTQUFTLENBQUMsU0FBVixDQUFvQixLQUFwQixDQUEwQixtQkFBMUIsQ0FBUDtBQUNELEdBVGM7QUFVZixFQUFBLEtBQUssRUFBRSxpQkFBWTtBQUNqQixXQUFPLFNBQVMsQ0FBQyxTQUFWLENBQW9CLEtBQXBCLENBQTBCLFlBQTFCLENBQVA7QUFDRCxHQVpjO0FBYWYsRUFBQSxNQUFNLEVBQUUsa0JBQVk7QUFDbEIsV0FBTyxTQUFTLENBQUMsU0FBVixDQUFvQixLQUFwQixDQUEwQixXQUExQixDQUFQO0FBQ0QsR0FmYztBQWdCZixFQUFBLEdBQUcsRUFBRSxlQUFZO0FBQ2YsV0FDRSxRQUFRLENBQUMsT0FBVCxNQUNBLFFBQVEsQ0FBQyxVQUFULEVBREEsSUFFQSxRQUFRLENBQUMsS0FBVCxFQUZBLElBR0EsUUFBUSxDQUFDLE1BQVQsRUFKRjtBQU1EO0FBdkJjLENBQWpCOztBQTBCQSxJQUFJLFFBQVEsQ0FBQyxHQUFULEVBQUosRUFBb0I7QUFDbEIsRUFBQSxRQUFRLENBQUMsSUFBVCxDQUFjLFNBQWQsQ0FBd0IsR0FBeEIsQ0FBNEIsYUFBNUI7QUFDRCxDQUZELE1BRU87QUFDTCxFQUFBLFFBQVEsQ0FBQyxJQUFULENBQWMsU0FBZCxDQUF3QixHQUF4QixDQUE0QixJQUE1QjtBQUNEOzs7OztBQzlCRDtBQUNBO0FBQ0EsU0FBUyxRQUFULENBQWtCLFFBQWxCLEVBQTRCO0FBQzFCLE1BQUksSUFBSSxHQUFHLElBQUksS0FBSixFQUFYOztBQUNBLEVBQUEsSUFBSSxDQUFDLE1BQUwsR0FBYyxJQUFJLENBQUMsT0FBTCxHQUFlLFlBQVk7QUFDdkMsSUFBQSxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQUwsSUFBZSxDQUFoQixDQUFSO0FBQ0QsR0FGRDs7QUFHQSxFQUFBLElBQUksQ0FBQyxHQUFMLEdBQ0UsaUhBREY7QUFFRDs7QUFFRCxRQUFRLENBQUMsVUFBVSxPQUFWLEVBQW1CO0FBQzFCLE1BQUksT0FBTyxJQUFJLElBQWYsRUFBcUI7QUFDbkIsSUFBQSxRQUFRLENBQUMsYUFBVCxDQUF1QixNQUF2QixFQUErQixTQUEvQixDQUF5QyxHQUF6QyxDQUE2QyxNQUE3QztBQUNELEdBRkQsTUFFTztBQUNMLElBQUEsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0IsU0FBL0IsQ0FBeUMsR0FBekMsQ0FBNkMsU0FBN0M7QUFDRDtBQUNGLENBTk8sQ0FBUjs7Ozs7QUNYQTs7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyXCIpO1xyXG5jb25zdCBzbGlkZXJWaWV3cG9ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyX192aWV3cG9ydFwiKTtcclxuY29uc3Qgc2xpZGVyTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyX19saXN0XCIpO1xyXG5jb25zdCBzbGlkZXJJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2xpZGVyX19pdGVtXCIpO1xyXG5jb25zdCBzbGlkZXJCdG5MZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXItY29udHJvbGxzX19idG4tLWxlZnRcIik7XHJcbmNvbnN0IHNsaWRlckJ0blJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXItY29udHJvbGxzX19idG4tLXJpZ2h0XCIpO1xyXG5jb25zdCBzbGlkZXJJdGVtRGVmYXVsdEFjdGl2ZSA9IDA7XHJcbmxldCBhY3RpdmVTbGlkZUluZGV4ID0gMDtcclxuXHJcbnNsaWRlckJ0bkxlZnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBzbGlkZU1vdmUoXCJiYWNrXCIpO1xyXG59KTtcclxuc2xpZGVyQnRuUmlnaHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBzbGlkZU1vdmUoXCJuZXh0XCIpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHNsaWRlTW92ZShkaXJlY3Rpb24pIHtcclxuICBpZiAoZGlyZWN0aW9uID09PSBcIm5leHRcIikge1xyXG4gICAgYWN0aXZlU2xpZGVJbmRleCsrO1xyXG5cclxuICAgIGlmIChhY3RpdmVTbGlkZUluZGV4ID09PSBzbGlkZXJJdGVtcy5sZW5ndGgpIHtcclxuICAgICAgYWN0aXZlU2xpZGVJbmRleCA9IDA7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwiYmFja1wiKSB7XHJcbiAgICBhY3RpdmVTbGlkZUluZGV4LS07XHJcblxyXG4gICAgaWYgKGFjdGl2ZVNsaWRlSW5kZXggPCAwKSB7XHJcbiAgICAgIGFjdGl2ZVNsaWRlSW5kZXggPSBzbGlkZXJJdGVtcy5sZW5ndGggLSAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgd2lkdGggPSBzbGlkZXJMaXN0LmNsaWVudFdpZHRoO1xyXG4gIHNsaWRlckxpc3Quc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7YWN0aXZlU2xpZGVJbmRleCAqIHdpZHRofXB4KWA7XHJcbn1cclxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IGFjY2FyZGlvbkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hY2NhcmRpb25fX2l0ZW1cIik7XHJcblxyXG4gIGZ1bmN0aW9uIGFjY2FyZGlvblJlbW92ZUNsYXNzQWN0aXZlKCkge1xyXG4gICAgYWNjYXJkaW9uSXRlbXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICBjb25zdCBzZWxmID0gZWxlbWVudDtcclxuICAgICAgY29uc3QgY29udHJvbCA9IHNlbGYucXVlcnlTZWxlY3RvcihcIi5hY2NhcmRpb25fX2NvbnRyb2xcIik7XHJcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBzZWxmLnF1ZXJ5U2VsZWN0b3IoXCIuYWNjYXJkaW9uX19jb250ZW50XCIpO1xyXG5cclxuICAgICAgc2VsZi5jbGFzc0xpc3QucmVtb3ZlKFwiYWNjYXJkaW9uX19pdGVtLS1hY3RpdmVcIik7XHJcbiAgICAgIGNvbnRyb2wuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBmYWxzZSk7XHJcbiAgICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgdHJ1ZSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgYWNjYXJkaW9uSXRlbXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IHNlbGYgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICBjb25zdCBjb250cm9sID0gc2VsZi5xdWVyeVNlbGVjdG9yKFwiLmFjY2FyZGlvbl9fY29udHJvbFwiKTtcclxuICAgICAgY29uc3QgY29udGVudCA9IHNlbGYucXVlcnlTZWxlY3RvcihcIi5hY2NhcmRpb25fX2NvbnRlbnRcIik7XHJcblxyXG4gICAgICBpZiAoIXNlbGYuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWNjYXJkaW9uX19pdGVtLS1hY3RpdmVcIikpIHtcclxuICAgICAgICBhY2NhcmRpb25SZW1vdmVDbGFzc0FjdGl2ZSgpXHJcbiAgICAgIH1cclxuICAgICAgc2VsZi5jbGFzc0xpc3QudG9nZ2xlKFwiYWNjYXJkaW9uX19pdGVtLS1hY3RpdmVcIik7XHJcblxyXG4gICAgICBpZiAoc2VsZi5jbGFzc0xpc3QuY29udGFpbnMoXCJhY2NhcmRpb25fX2l0ZW0tLWFjdGl2ZVwiKSkge1xyXG4gICAgICAgIGNvbnRyb2wuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCB0cnVlKTtcclxuICAgICAgICBjb250ZW50LnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIGZhbHNlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb250cm9sLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59KTtcclxuIiwiaW1wb3J0IGhlYWRlciBmcm9tIFwiLi4vLi4vYmVtL2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdHNcIjtcclxuaW1wb3J0IHF1ZXN0aW9uIGZyb20gXCIuLi8uLi9iZW0vY29tcG9uZW50cy9xdWVzdGlvbi9xdWVzdGlvblwiO1xyXG4iLCJpbXBvcnQgaXNtb2JpbGUgZnJvbSAnLi9tb2R1bGVzL2lzbW9iaWxlJztcclxuaW1wb3J0IHdlYnAgZnJvbSAnLi9tb2R1bGVzL3dlYnAnOyIsImNvbnN0IGlzTW9iaWxlID0ge1xyXG4gIEFuZHJvaWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9BbmRyb2lkL2kpO1xyXG4gIH0sXHJcbiAgQmxhY2tCZXJyeTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0JsYWNrQmVycnkvaSk7XHJcbiAgfSxcclxuICBJT1M6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGhvbmV8aVBhZHxpUG9kL2kpO1xyXG4gIH0sXHJcbiAgT3BlcmE6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9PcGVyYSBNaW4vaSk7XHJcbiAgfSxcclxuICBXaW5kd3M6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9JRU1vYmlsZS9pKTtcclxuICB9LFxyXG4gIGFueTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgaXNNb2JpbGUuQW5kcm9pZCgpIHx8XHJcbiAgICAgIGlzTW9iaWxlLkJsYWNrQmVycnkoKSB8fFxyXG4gICAgICBpc01vYmlsZS5PcGVyYSgpIHx8XHJcbiAgICAgIGlzTW9iaWxlLldpbmR3cygpXHJcbiAgICApO1xyXG4gIH0sXHJcbn07XHJcblxyXG5pZiAoaXNNb2JpbGUuYW55KCkpIHtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJ0b3VjaFNjcmVlblwiKVxyXG59IGVsc2Uge1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcInBjXCIpXHJcbn1cclxuIiwiLy8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLz8gV0VCUCBjb21wYXRpYmlsaXR5IGNoZWNrXHJcbmZ1bmN0aW9uIHRlc3RXZWJQKGNhbGxiYWNrKSB7XHJcbiAgdmFyIHdlYlAgPSBuZXcgSW1hZ2UoKTtcclxuICB3ZWJQLm9ubG9hZCA9IHdlYlAub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNhbGxiYWNrKHdlYlAuaGVpZ2h0ID09IDIpO1xyXG4gIH07XHJcbiAgd2ViUC5zcmMgPVxyXG4gICAgXCJkYXRhOmltYWdlL3dlYnA7YmFzZTY0LFVrbEdSam9BQUFCWFJVSlFWbEE0SUM0QUFBQ3lBZ0NkQVNvQ0FBSUFMbWswbWswaUlpSWlJZ0JvU3lnQUJjNldXZ0FBL3ZlZmYvMFBQOGJBLy9Md1lBQUFcIjtcclxufVxyXG5cclxudGVzdFdlYlAoZnVuY3Rpb24gKHN1cHBvcnQpIHtcclxuICBpZiAoc3VwcG9ydCA9PSB0cnVlKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3QuYWRkKFwid2VicFwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuY2xhc3NMaXN0LmFkZChcIm5vLXdlYnBcIik7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHdlYnAgZnJvbSBcIi4vaW1wb3J0cy9tb2R1bGVzXCI7XHJcbmltcG9ydCBiZW0gZnJvbSBcIi4vaW1wb3J0cy9iZW1cIjtcclxuIl19

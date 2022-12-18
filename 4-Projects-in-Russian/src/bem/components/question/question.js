document.addEventListener("DOMContentLoaded", () => {
  const accardionItems = document.querySelectorAll(".accardion__item");

  function accardionRemoveClassActive() {
    accardionItems.forEach((element) => {
      const self = element;
      const control = self.querySelector(".accardion__control");
      const content = self.querySelector(".accardion__content");

      self.classList.remove("accardion__item--active");
      control.setAttribute("aria-expanded", false);
      content.setAttribute("aria-hidden", true);
    });
  }
  accardionItems.forEach((element) => {
    element.addEventListener("click", (event) => {
      const self = event.currentTarget;
      const control = self.querySelector(".accardion__control");
      const content = self.querySelector(".accardion__content");

      if (!self.classList.contains("accardion__item--active")) {
        accardionRemoveClassActive()
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

import { initModal } from "./modules/modal.js";
import "./modules/sliders.js";
import "./modules/reviews.js";
import "./modules/faq.js";
import "./modules/priceTabs.js";
import "./modules/forms.js";
import { initBurger } from "./modules/burger.js"

document.addEventListener("DOMContentLoaded", () => {
  const modal = initModal();
  initBurger();

  const callBtns = document.querySelectorAll(
    ".call-btn, .hero__content button",
  );
  callBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const type = btn.classList.contains("call-btn") ? "call" : "estimate";
      modal.openModal(type);
    });
  });
});

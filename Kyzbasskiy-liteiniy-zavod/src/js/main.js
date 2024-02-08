"use strict"

// Анимация на AOS

AOS.init({
  duration: 900,
});

const menu = document.querySelector(".header__menu");

document.addEventListener("click", function (e) {

  const elementInteractive = e.target;

  if (elementInteractive.closest(".burger")) { // Открытие и закрытие бургера
    menu.classList.add("menu-active")
    document.body.style.overflow = "hidden";
  }
  if (elementInteractive.closest(".header__exit-menu")) { // Открытие и закрытие бургера 
    menu.classList.remove("menu-active")
    document.body.style.overflow = "";
  }
  if (elementInteractive.closest(".nav__link")) { // Открытие и закрытие бургера
    menu.classList.remove("menu-active")
    document.body.style.overflow = "";
  }

});

window.addEventListener("load", windowLoad);

function windowLoad() {
  --include("./modules/document.js")
    --include("./modules/validate.js")
    --include("./modules/yandex-map.js")
    --include("./modules/slider.js")
};
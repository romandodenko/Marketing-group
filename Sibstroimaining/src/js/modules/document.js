document.documentElement.classList.add("loaded");

// Открытие и закрытие бургера

function bodyblock() {
  document.body.style.overflow = "hidden";
}

const menu = document.querySelector(".header-menu");

document.addEventListener("click", function (e) {

  const elementInteractive = e.target;

  if (elementInteractive.closest(".burger")) { // Открытие и закрытие бургера
    menu.classList.add("active");
    setTimeout(bodyblock, 500);
  }
  if (elementInteractive.closest(".header-menu__exit-menu")) { // Открытие и закрытие бургера 
    menu.classList.remove("active");
    document.body.style.overflow = "";
  }
  if (elementInteractive.closest(".header-menu__link")) { // Открытие и закрытие бургера
    menu.classList.remove("active");
    document.body.style.overflow = "";
  }
  if (elementInteractive.closest(".of-kem")) {
    document.querySelector(".of-kem").classList.add("active");
    document.querySelector(".of-nsk").classList.remove("active");
    document.querySelector(".map-kem").classList.add("active");
    document.querySelector(".map-nsk").classList.remove("active");
  }
  if (elementInteractive.closest(".of-nsk")) {
    document.querySelector(".of-kem").classList.remove("active");
    document.querySelector(".of-nsk").classList.add("active");
    document.querySelector(".map-kem").classList.remove("active");
    document.querySelector(".map-nsk").classList.add("active");
  }
  if (elementInteractive.closest(".services__item")) { // Открытие и закрытие псевдо аккордеона

    if (!elementInteractive.closest(".services__item").classList.contains("active")) {

      document.querySelectorAll(".services__item").forEach(function (e) {
        e.classList.remove("first-active")
      })

      document.querySelectorAll(".services__item").forEach(function (e) {
        e.classList.remove("active")
      })

      document.querySelectorAll(".services__init-image").forEach(function (e) {
        e.removeAttribute('style');
      })

      document.querySelectorAll(".services__wrapper-text").forEach(function (e) {
        e.removeAttribute('style');
      })

      elementInteractive.closest(".services__item").classList.add("active");

      elementInteractive.closest(".services__item").querySelector(".services__init-image").style.height = elementInteractive.closest(".services__item").querySelector(".services__wrapper-image").scrollHeight + 'px';

      elementInteractive.closest(".services__item").querySelector(".services__wrapper-text").style.height = elementInteractive.closest(".services__item").querySelector(".services__wrapper-text").scrollHeight + 'px';

    } else {

      document.querySelectorAll(".services__item").forEach(function (e) {
        e.classList.remove("first-active")
      })

      elementInteractive.closest(".services__item").classList.remove("active");

      document.querySelectorAll(".services__item").forEach(function (e) {
        e.classList.remove("active")
      })

      document.querySelectorAll(".services__init-image").forEach(function (e) {
        e.removeAttribute('style');
      })

      document.querySelectorAll(".services__wrapper-text").forEach(function (e) {
        e.removeAttribute('style');
      })
    }
  }
  if (elementInteractive.closest(".contacts-middle__exit")) { // Закрытие и открытие адреса на карте
    elementInteractive.closest(".contacts-middle__wrapper-map").classList.add("active");
  }
  if (elementInteractive.closest(".contacts-middle__button")) { // Закрытие и открытие адреса на карте
    elementInteractive.closest(".contacts-middle__wrapper-map").classList.remove("active");
  }
  if (elementInteractive.closest(".feedback-init")) { // Открытие и закрытие формы
    document.querySelector(".wrapper-form").classList.add("active");
    document.querySelector(".wrapper-form").querySelector(".wrapper-form__title").innerHTML = "Обратная связь";
    menu.classList.remove("active");
    setTimeout(bodyblock, 500);
  }
  if (elementInteractive.closest(".vacancy-init")) { // Открытие и закрытие формы
    document.querySelector(".wrapper-form").classList.add("active");
    document.querySelector(".wrapper-form").querySelector(".wrapper-form__title").innerHTML = "Анкета кандидата";
    setTimeout(bodyblock, 500);
  }
  if (elementInteractive.closest(".wrapper-form__close")) { // Открытие и закрытие формы
    elementInteractive.closest(".wrapper-form").classList.remove("interactive");
    elementInteractive.closest(".wrapper-form").classList.remove("active");
    document.querySelector(".wrapper-form").querySelector(".wrapper-form__title").innerHTML = "";
    document.body.style.overflow = "";
  }
  if (elementInteractive.closest(".wrapper-form__exit")) { // Открытие и закрытие формы
    elementInteractive.closest(".wrapper-form").classList.remove("interactive");
    elementInteractive.closest(".wrapper-form").classList.remove("active");
    document.querySelector(".wrapper-form").querySelector(".wrapper-form__title").innerHTML = "";
    document.body.style.overflow = "";
  }
  if (elementInteractive.closest(".upper")) { // Перемещение к верху страницы
    window.scrollTo({
      top,
      behavior: 'smooth'
    });
  }
  // if (elementInteractive.closest(".accordion-init")) {

  //   const page = document.querySelector(".page");

  //   const heightPage = page.scrollHeight;

  //   const accordionOpen = elementInteractive.closest(".accordion-open");

  //   const accordionOpenBottom = accordionOpen.querySelector(".vacancy-item__bottom-content");

  //   const accordionOpenBottomHeight = accordionOpenBottom.scrollHeight;

  //   //  document.querySelector(".scroll").style.height = heightPage + accordionOpenBottomHeight + "px";
  // }
})

// Скрипт для проверки , поддерживает ли браузер webp 

function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});

// Перемещение к верху страницы

document.addEventListener("scroll", function (e) {

  let scrollY = window.scrollY;

  let headerHeight = document.querySelector(".header").scrollHeight - 50;

  if (scrollY >= headerHeight) {
    document.querySelector(".upper").classList.add("active")
  } else {
    document.querySelector(".upper").classList.remove("active")
  }

})
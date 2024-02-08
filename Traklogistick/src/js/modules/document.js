document.documentElement.classList.add("loaded");

// Открытие и закрытие бургера

function bodyBlock() {
  document.body.style.overflow = "hidden";
}

const menu = document.querySelector(".header__menu");

document.addEventListener("click", function (e) {

  const elementInteractive = e.target;

  if (elementInteractive.closest(".upper")) { // Кнопка подняться вверх
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  if (elementInteractive.closest(".burger")) { // Открытие и закрытие бургера
    menu.classList.add("menu-active")
    setTimeout(bodyBlock, 200)
  }

  if (elementInteractive.closest(".header__exit-menu")) { // Открытие и закрытие бургера 
    menu.classList.remove("menu-active")
    document.body.style.overflow = "";
  }

  if (elementInteractive.closest(".nav__link")) { // Открытие и закрытие бургера
    menu.classList.remove("menu-active")
    document.body.style.overflow = "";
  }

  if (elementInteractive.closest(".faq__top")) { // Аккордеон faq

    let faqItemAll = document.querySelectorAll(".faq__item");

    let faqItem = elementInteractive.closest(".faq__item");

    if (!faqItem.classList.contains("active")) {

      faqItemAll.forEach(function (e) {
        e.classList.remove("active");
        gsap.to(e.querySelector(".faq__bottom"), {
          height: 0,
        });
      })

      faqItem.classList.add("active");

      let faqItemBottom = faqItem.querySelector(".faq__bottom");

      gsap.to(faqItemBottom, {
        height: "auto",
      })

    } else {

      let faqItem = elementInteractive.closest(".faq__item");

      faqItem.classList.remove("active");

      let faqItemBottom = faqItem.querySelector(".faq__bottom");

      gsap.to(faqItemBottom, {
        height: 0,
      })

    }

  }

  if (elementInteractive.closest(".tab-btn")) { // Табы

    document.querySelectorAll(".tab-btn").forEach(function (e) {
      e.classList.remove("active");
    })
    elementInteractive.closest(".tab-btn").classList.add("active");
  }

  if (elementInteractive.closest(".curser-wrapper-form__close")) { 

    let curserWrapperForm = elementInteractive.closest(".curser-wrapper-form");

    let curserWrapperFormItem = curserWrapperForm.querySelector(".curser-wrapper-form__item");

    let curserWrapperFormOkay = curserWrapperForm.querySelector(".okay");

    let curserWrapperFormSpinner = curserWrapperForm.querySelector(".wrapper-spinner-curser");

    let curserWrapperFormError = curserWrapperForm.querySelector(".curse-error");

    curserWrapperForm.classList.remove("active");

    curserWrapperFormItem.classList.remove("disabled");

    curserWrapperFormOkay.classList.remove("active");

    curserWrapperFormSpinner.classList.remove("active");

    curserWrapperFormError.classList.remove("active");

  }

  if (elementInteractive.closest(".curser-wrapper-form__exit")) {

    let curserWrapperForm = elementInteractive.closest(".curser-wrapper-form");

    let curserWrapperFormItem = curserWrapperForm.querySelector(".curser-wrapper-form__item");

    let curserWrapperFormOkay = curserWrapperForm.querySelector(".okay");

    let curserWrapperFormSpinner = curserWrapperForm.querySelector(".wrapper-spinner-curser");

    let curserWrapperFormError = curserWrapperForm.querySelector(".curse-error");

    curserWrapperForm.classList.remove("active");

    curserWrapperFormError.classList.remove("active");

    curserWrapperFormItem.classList.remove("disabled");

    curserWrapperFormOkay.classList.remove("active");

    curserWrapperFormSpinner.classList.remove("active");

  }

  if (elementInteractive.closest(".init-form")) {

    menu.classList.remove("menu-active")

    document.querySelector(".curser-wrapper-form").classList.add("active");

  }

  if (elementInteractive.closest(".wrapper-okay__close")) {

    document.querySelector(".wrapper-okay").classList.remove("active");

  }

  if (elementInteractive.closest(".wrapper-okay__exit")) {

    document.querySelector(".wrapper-okay").classList.remove("active");

  }

  if (elementInteractive.closest(".wrapper-error__close")) {

    document.querySelector(".wrapper-error").classList.remove("active");

  }

  if (elementInteractive.closest(".wrapper-error__exit")) {

    document.querySelector(".wrapper-error").classList.remove("active");

  }

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

document.addEventListener("scroll", function (e) {

  let scrollY = window.scrollY;

  let mapOffset = document.querySelector(".header").clientHeight;

  if (scrollY >= mapOffset) {
    document.querySelector(".upper").classList.add("active")
  } else {
    document.querySelector(".upper").classList.remove("active")
  }
})
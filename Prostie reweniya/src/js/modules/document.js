// Открытие и закрытие бургера

const menu = document.querySelector(".header__menu");

const burger = document.querySelector(".burger");

document.addEventListener("click", function (e) {

  const elementInteractive = e.target;

  if (elementInteractive.closest(".burger")) { // Открытие и закрытие бургера
    menu.classList.add("menu-active")
    document.body.style.overflow = "hidden";
    burger.classList.add("active");
  }

  if (elementInteractive.closest(".header__exit-menu")) { // Открытие и закрытие бургера 
    menu.classList.remove("menu-active")
    document.body.style.overflow = "";
    burger.classList.remove("active");
  }

  if (elementInteractive.closest(".nav__link")) { // Открытие и закрытие бургера
    menu.classList.remove("menu-active")
    document.body.style.overflow = "";
    burger.classList.remove("active");
  }

  if (elementInteractive.closest(".prices__button")) { // Аккордеон

    const pricesItem = elementInteractive.closest(".prices__item");

    const pricesBottom = pricesItem.querySelector(".prices__bottom");

    if (!pricesItem.classList.contains("active")) {

      document.querySelectorAll(".prices__item").forEach(function (e) {
        e.classList.remove("active");
        gsap.to(e.querySelector(".prices__bottom"), {
          height: 0,
        });
      })

      pricesItem.classList.add("active");

      gsap.to(pricesBottom, {
        height: 'auto',
      });

    } else if (pricesItem.classList.contains("active")) {

      pricesItem.classList.remove("active");

      gsap.to(pricesBottom, {
        height: 0,
      });
    }

  }

  if (elementInteractive.closest(".form-init")) { // Вызываем попап с формой
    document.body.style.overflow = "hidden";
    document.querySelector(".popup").classList.add("active");
  }

  if (elementInteractive.closest(".popup__exit")) { // Закрываем попап с формой
    document.body.style.overflow = "";
    document.querySelector(".popup").classList.remove("active");
  }

  if (elementInteractive.closest(".popup__close")) { // Закрываем попап с формой
    document.body.style.overflow = "";
    document.querySelector(".popup").classList.remove("active");
  }

  if (elementInteractive.closest(".error__exit")) { // Закрываем состояние ошибки 
    document.querySelector(".error").classList.remove("active");
  }

  if (elementInteractive.closest(".error__close")) { // Закрываем состояние ошибки 
    document.querySelector(".error").classList.remove("active");
  }

  if (elementInteractive.closest(".error__button")) { // Закрываем состояние ошибки 
    document.querySelector(".error").classList.remove("active");
  }

  if (elementInteractive.closest(".okay__exit")) { // Закрываем состояние успешной отправки 
    document.querySelector(".okay").classList.remove("active");
  }

  if (elementInteractive.closest(".okay__close")) { // Закрываем состояние успешной отправки 
    document.querySelector(".okay").classList.remove("active");
  }

  if (elementInteractive.closest(".okay__button")) { // Закрываем состояние успешной отправки 
    document.querySelector(".okay").classList.remove("active");
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

// Перекидывание элементов из 1 блока в другой

// Hero
const heroMiddleItem = document.querySelector(".hero__middle-item");

const heroTextTwo = document.querySelector(".hero__text_2");

if (heroMiddleItem) {

  if (document.body.clientWidth < 869) {
    heroMiddleItem.append(heroTextTwo);
  }

}

// Слайдеры

// Главная страница - услуги
const servicesSliderInit = document.querySelector(".services-slider");

if (servicesSliderInit) {
  const swiper = new Swiper('.services-slider', {
    loop: true,
    observer: true,
    observeParents: true,
    watchOverflow: true,
    direction: 'horizontal',
    speed: 500,
    pagination: {
      el: '.services-slider-pagination',
      clickable: true,
      type: 'fraction',
    },
    navigation: {
      nextEl: '.services-slider-next',
      prevEl: '.services-slider-prev',
    },
    scrollbar: {
      el: '.hero__scrollbar',
      draggable: true, // позволяет сделать полосу прокрутки перетаскиваемой
    },
    breakpoints: {
      320: {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 24,
      },
      869: {
        spaceBetween: 24,
        centeredSlides: false,
        slidesPerView: 2,
      },
      1221: {
        spaceBetween: 40,
        centeredSlides: false,
        slidesPerView: 3,
      }
    }
  });
}

// Нумерование элементов

// Элементы в pluss
const plussNumInit = document.querySelector(".pluss__num");

const plussNumAll = document.querySelectorAll(".pluss__num");

if (plussNumInit) {
  plussNumAll.forEach(function (plussNum, i) {
    plussNum.innerHTML = i + 1;
  })
}

// Валидация форм

const popup = document.querySelector(".popup");

// Состояния форм
const reload = document.querySelector(".reload");
const error = document.querySelector(".error");
const okay = document.querySelector(".okay");

// Отчёт до закрытия попапа

const chetchikOkay = document.querySelector(".chetchik-okay");

const chetchikError = document.querySelector(".chetchik-error");

function htmlNumInteractiveOkay() {
  chetchikOkay.innerHTML -= 1;
}

function htmlNumInteractiveError() {
  chetchikError.innerHTML -= 1;
}

function showOkay(num) {
  let timeId = setTimeout(showOkay, 1000, --num);
  let htmlNum = setTimeout(htmlNumInteractiveOkay, 500)
  if (num === 0) {
    clearInterval(timeId);
    clearInterval(htmlNum);
    chetchikOkay.innerHTML = 5;
    okay.classList.remove("active");
  }
}

function showError(num) {
  let timeId = setTimeout(showError, 1000, --num);
  let htmlNum = setTimeout(htmlNumInteractiveError, 500)
  if (num === 0) {
    clearInterval(timeId);
    clearInterval(htmlNum);
    chetchikError.innerHTML = 5;
    error.classList.remove("active");
  }
}

const contactsForm = document.querySelector(".contacts-form");
const popupForm = document.querySelector(".popup-form");

// Валидация формы в контактах
if (contactsForm) {
  // Инпут маска в контактах
  const inputTelContactsForm = contactsForm.querySelector("input[type='tel']");
  const inputMaskContactsForm = new Inputmask("+7(999)999-99-99");
  inputMaskContactsForm.mask(inputTelContactsForm);

  const validatorContactsForm = new JustValidate('.contacts-form', {});

  validatorContactsForm
    .addField('#contacts_form_fio', [{ // можно использовать классы вместо ид
      rule: 'required',
      errorMessage: 'Введите ваше имя и фамилию',
    }])
    .addField('#contacts_form_email', [{ // можно использовать классы вместо ид
        rule: 'required',
        value: true,
        errorMessage: 'Введите ваш email',
      },
      {
        rule: 'email',
        errorMessage: 'Введите корректный email',
      },
    ])
    .addField('#contacts_form_phone', [{
        rule: 'required',
        value: true,
        errorMessage: 'Введите ваш телефон',
      },
      {
        rule: 'function',
        validator: function () {
          const phone = inputTelContactsForm.inputmask.unmaskedvalue();
          return phone.length === 10;
        },
        errorMessage: 'Введите корректный телефон',
      },
    ])
    .onSuccess((event) => { // Если форма проходит валидацию то происходит код ниже

      reload.classList.add("active");

      let formData = new FormData(event.target);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            contactsForm.querySelectorAll("input").forEach(function (e) {
              e.value = "";
            })
            reload.classList.remove("active");
            setTimeout(showOkay, 500, 6);
            okay.classList.add("active");
          } else {
            contactsForm.querySelectorAll("input").forEach(function (e) {
              e.value = "";
            })
            error.classList.add("active");
            setTimeout(showError, 500, 6);
            reload.classList.remove("active");
          }
        }
      }

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);

      event.target.reset();
    })
}

// Валидация формы в попапе
if (popupForm) {
  // Инпут маска в попап форм
  const inputTelPopupForm = popupForm.querySelector("input[type='tel']");
  const inputMaskPopupForm = new Inputmask("+7(999)999-99-99");
  inputMaskPopupForm.mask(inputTelPopupForm);

  const validatorContactsForm = new JustValidate('.popup-form', {});

  validatorContactsForm
    .addField('#popup_form_fio', [{ // можно использовать классы вместо ид
      rule: 'required',
      errorMessage: 'Введите ваше имя и фамилию',
    }])
    .addField('#popup_form_email', [{ // можно использовать классы вместо ид
        rule: 'required',
        value: true,
        errorMessage: 'Введите ваш email',
      },
      {
        rule: 'email',
        errorMessage: 'Введите корректный email',
      },
    ])
    .addField('#popup_form_phone', [{
        rule: 'required',
        value: true,
        errorMessage: 'Введите ваш телефон',
      },
      {
        rule: 'function',
        validator: function () {
          const phone = inputTelPopupForm.inputmask.unmaskedvalue();
          return phone.length === 10;
        },
        errorMessage: 'Введите корректный телефон',
      },
    ])
    .onSuccess((event) => { // Если форма проходит валидацию то происходит код ниже

      reload.classList.add("active");

      let formData = new FormData(event.target);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            popupForm.querySelectorAll("input").forEach(function (e) {
              e.value = "";
            })
            popup.classList.remove('active');
            reload.classList.remove("active");
            setTimeout(showOkay, 500, 6);
            okay.classList.add("active");
            document.body.style.overflow = "";
          } else {
            popupForm.querySelectorAll("input").forEach(function (e) {
              e.value = "";
            })
            popup.classList.remove('active');
            error.classList.add("active");
            setTimeout(showError, 500, 6);
            reload.classList.remove("active");
            document.body.style.overflow = "";
          }
        }
      }

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);

      event.target.reset();
    })
}

// Яндекс карта

const mapClass = document.querySelector(".footer__map")

if (mapClass) {
  ymaps.ready(init);

  function init() {
    const myMap = new ymaps.Map(
      "map", {
        center: [55.429450569298226, 86.22214249999989],
        zoom: 17,
      },
    );
    var myPlacemark = new ymaps.Placemark(myMap.getCenter(55.76932, 37.63952), {}, { // Если нужно чтобы точка была слегка смещена 
      iconImageSize: [32, 32],
    });

    myMap.geoObjects.add(myPlacemark);
  }
}

// Плавный скролл на странице
if (document.body.clientWidth >= 1024) {
  SmoothScroll({
    animationTime: 500,
    stepSize: 75,
    accelerationDelta: 30,
    accelerationMax: 2,
    keyboardSupport: true,
    arrowScroll: 50,
    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,
    touchpadSupport: true,
  })
}

// Анимация элементов

let animate = gsap.timeline({});

animate
  .fromTo(".hero__text_anim1", {
    opacity: 0,
    y: 50,
  }, {
    delay: .3,
    duration: .6,
    y: 0,
    opacity: 1,
  })
  .fromTo(".hero__text_anim2", {
    opacity: 0,
    y: 50,
  }, {
    duration: .6,
    y: 0,
    opacity: 1,
  }, "-=.4")
  .fromTo(".hero__title_anim", {
    opacity: 0,
    y: 50,
  }, {
    duration: .6,
    y: 0,
    opacity: 1,
  }, "-=.45")
  .fromTo(".hero__wrapper-button", {
    opacity: 0,
    y: 50,
  }, {
    duration: .6,
    y: 0,
    opacity: 1,
  }, "-=.5")
  .fromTo(".hero__wrapper-video", {
    opacity: 0,
    x: 50,
  }, {
    duration: .6,
    x: 0,
    opacity: 1,
  }, "-=.6")
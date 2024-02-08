document.documentElement.classList.add("loaded"); // когда страница загрузилась

window.addEventListener("DOMContentLoaded", windowLoad); // для анимации для первых экранов, чтобы ничего не дергалось

function windowLoad() {}; // для анимации для первых экранов, чтобы ничего не дергалось


const menu = document.querySelector(".header__menu");

const headerButton = document.querySelector(".header__button");

const partnersItem = document.querySelectorAll('.partners__item');

if (document.body.clientWidth < 601) {
  if (menu) {
    if (headerButton) {
      menu.append(headerButton);
    }
  }
}

const statusSend = document.querySelector(".status-send");

const statusSendStatus = document.querySelectorAll(".status-send__status");

const statusError = document.querySelector(".status-error");

const statusOkay = document.querySelector(".status-okay");

const statusSendler = document.querySelector(".status-sendler");

const hiddenInputPol = document.querySelector("#hidden-input-pol");

const hiddenInputWork = document.querySelector("#hidden-input-work");

function removeStatusActiveClass() {

  statusSendStatus.forEach(function (e) {
    e.classList.remove("active");
  })

  statusSendler.classList.add("active");
}

document.addEventListener("click", function (e) {

  const elementInteractive = e.target;

  if (elementInteractive.closest(".status-send__close")) { // Удаление активного класса у статусов отправки форм
    statusSend.classList.remove("active");
    setInterval(removeStatusActiveClass, 1000)
  }

  if (elementInteractive.closest(".status-send__exit")) { // Удаление активного класса у статусов отправки форм
    statusSend.classList.remove("active");
    setInterval(removeStatusActiveClass, 1000)
  }

  if (elementInteractive.closest(".burger")) { // Открытие и закрытие бургера
    menu.classList.add("active")
    document.body.style.overflow = "hidden";
  }

  if (elementInteractive.closest(".header__exit-menu")) { // Открытие и закрытие бургера 
    menu.classList.remove("active")
    document.body.style.overflow = "";
  }

  if (elementInteractive.closest(".nav__link")) { // Открытие и закрытие бургера
    menu.classList.remove("active")
    document.body.style.overflow = "";
  }

  if (elementInteractive.closest(".nav__item")) { // Открытие навигационного меню в хеадер
    if (elementInteractive.closest(".nav__item").querySelector(".nav-button")) {
      document.querySelectorAll('.nav__item').forEach(function (e) {
        e.classList.remove("active");
      })

      if (elementInteractive.closest(".nav__item").querySelector(".nav-dropdown__list")) {
        elementInteractive.closest(".nav__item").classList.add("active");
      }
    }
  } else {
    document.querySelectorAll('.nav__item').forEach(function (e) {
      e.classList.remove("active");
    })
  }

  if (elementInteractive.closest(".nav-dropdown__exit")) { // Открытие и закрытие бургера 
    elementInteractive.closest(".nav__item").classList.remove('active');
  }

  if (elementInteractive.closest(".input-subscription")) { // Работа с инпутами в форме оплаты 
    document.querySelectorAll(".wrapper-input-subscription").forEach(function (e) {
      e.classList.remove('active');
      e.querySelector(".input-subscription").checked = false;
    })
    elementInteractive.closest(".wrapper-input").classList.add("active");
    elementInteractive.closest(".wrapper-input-subscription").querySelector(".input-subscription").checked = true;
  }

  if (elementInteractive.closest(".input-payment")) { // Работа с инпутами в форме оплаты 
    document.querySelectorAll(".wrapper-input-payment").forEach(function (e) {
      e.classList.remove('active');
      e.querySelector(".input-payment").checked = false;
    })
    elementInteractive.closest(".wrapper-input").classList.add("active");
    elementInteractive.closest(".wrapper-input-payment").querySelector(".input-payment").checked = true;
  }

  if (elementInteractive.closest(".input-price")) { // Работа с инпутами в форме оплаты 
    document.querySelectorAll(".wrapper-input-price").forEach(function (e) {
      e.classList.remove('active');
      e.querySelector(".input-price").checked = false;
    })
    elementInteractive.closest(".wrapper-input").classList.add("active");
    elementInteractive.closest(".wrapper-input-price").querySelector(".input-price").checked = true;
  }

  if (elementInteractive.closest(".partners__button")) { // Открытие и закрытие бургера
    if (partnersItem) {
      partnersItem.forEach(function (e) {
        e.classList.remove("active");
      })
      elementInteractive.closest(".partners__item").classList.add("active")
    }
  }

  if (elementInteractive.closest(".partners__exit")) { // Открытие и закрытие бургера
    if (partnersItem) {
      partnersItem.forEach(function (e) {
        e.classList.remove("active");
      })
    }
  }

})

document.addEventListener("mouseover", function (e) {

  const elementInteractive = e.target;

  if (elementInteractive.closest(".nav__item")) { // Открытие навигационного меню в хеадер
    if (elementInteractive.closest(".nav__item").querySelector(".nav-button")) {
      document.querySelectorAll('.nav__item').forEach(function (e) {
        e.classList.remove("active");
      })

      if (elementInteractive.closest(".nav__item").querySelector(".nav-dropdown__list")) {
        elementInteractive.closest(".nav__item").classList.add("active");
      }
    }
  } else {
    document.querySelectorAll('.nav__item').forEach(function (e) {
      e.classList.remove("active");
    })
  }

  if (elementInteractive.closest(".partners__button")) { // Открытие и закрытие бургера
    if (partnersItem) {
      partnersItem.forEach(function (e) {
        e.classList.remove("active");
      })
      elementInteractive.closest(".partners__item").classList.add("active")
    }
  }
})

document.addEventListener("focusin", function (e) {

  const elementInteractive = e.target;

  if (elementInteractive.closest(".nav__item")) { // Открытие навигационного меню в хеадер
    if (elementInteractive.closest(".nav__item").querySelector(".nav-button")) {
      document.querySelectorAll('.nav__item').forEach(function (e) {
        e.classList.remove("active");
      })

      if (elementInteractive.closest(".nav__item").querySelector(".nav-dropdown__list")) {
        elementInteractive.closest(".nav__item").classList.add("active");
      }
    }
  } else {
    document.querySelectorAll('.nav__item').forEach(function (e) {
      e.classList.remove("active");
    })
  }

  if (elementInteractive.closest(".input-subscription")) { // Работа с инпутами в форме оплаты 
    document.querySelectorAll(".wrapper-input-subscription").forEach(function (e) {
      e.classList.remove('active');
      e.querySelector(".input-subscription").checked = false;
    })
    elementInteractive.closest(".wrapper-input").classList.add("active");
    elementInteractive.closest(".wrapper-input-subscription").querySelector(".input-subscription").checked = true;
  }

  if (elementInteractive.closest(".input-payment")) { // Работа с инпутами в форме оплаты 
    document.querySelectorAll(".wrapper-input-payment").forEach(function (e) {
      e.classList.remove('active');
      e.querySelector(".input-payment").checked = false;
    })
    elementInteractive.closest(".wrapper-input").classList.add("active");
    elementInteractive.closest(".wrapper-input-payment").querySelector(".input-payment").checked = true;
  }

  if (elementInteractive.closest(".input-price")) { // Работа с инпутами в форме оплаты 
    document.querySelectorAll(".wrapper-input-price").forEach(function (e) {
      e.classList.remove('active');
      e.querySelector(".input-price").checked = false;
    })
    elementInteractive.closest(".wrapper-input").classList.add("active");
    elementInteractive.closest(".wrapper-input-price").querySelector(".input-price").checked = true;
  }

  if (elementInteractive.closest(".partners__button")) { // Открытие и закрытие бургера
    if (partnersItem) {
      partnersItem.forEach(function (e) {
        e.classList.remove("active");
      })
      elementInteractive.closest(".partners__item").classList.add("active")
    }
  }
})

// Плагин загрузки изображений и видео

const rdUpload = document.querySelectorAll(".rd-upload");

const body = document.body;

if (rdUpload) {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  }

  const callback = function (entries, observer) {

    entries.forEach(entry => {
      const elementEntry = entry.target;
      if (entry.isIntersecting) {

        if (!elementEntry.classList.contains("rd-load")) {
          elementEntry.classList.add("rd-load");

          let rdUploadBackgroundImage = elementEntry.querySelectorAll(".rd-background");

          let rdUploadImage = elementEntry.querySelectorAll("img");

          let rdUploadVideo = elementEntry.querySelectorAll("video");

          let rdUploadPicture = elementEntry.querySelectorAll("picture");

          if (elementEntry.classList.contains("rd-background")) {

            let elementEntryBackgroundImageDataImage = elementEntry.dataset.rdImage;

            elementEntry.style.backgroundImage = `url(${elementEntryBackgroundImageDataImage})`;
          }

          if (rdUploadBackgroundImage) {
            rdUploadBackgroundImage.forEach(function (rdUploadBackgroundImage) {

              let rdUploadBackgroundImageDataImage = rdUploadBackgroundImage.dataset.rdImage;

              rdUploadBackgroundImage.style.backgroundImage = `url(${rdUploadBackgroundImageDataImage})`;

            })
          }

          if (rdUploadImage) {
            rdUploadImage.forEach(function (rdUploadImage) {

              if (!rdUploadImage.closest("picture")) {
                let rdUploadImageDataImage = rdUploadImage.dataset.rdImage;

                rdUploadImage.setAttribute("src", `${rdUploadImageDataImage}`);
              }

            })
          }

          if (rdUploadPicture) {
            rdUploadPicture.forEach(function (rdUploadPicture) {

              let rdUploadPictureSource = rdUploadPicture.querySelectorAll("source");

              rdUploadPictureSource.forEach(function (rdUploadPictureSource) {

                let rdUploadPictureSourceImage = rdUploadPictureSource.dataset.rdImage;

                rdUploadPictureSource.setAttribute("srcset", `${rdUploadPictureSourceImage}`);

              })

            })
          }

          if (rdUploadVideo) {
            rdUploadVideo.forEach(function (rdUploadVideo) {

              let rdUploadVideoDataVideo = rdUploadVideo.dataset.rdVideo;
              let rdUploadVideoDataImage = rdUploadVideo.dataset.rdImage;

              rdUploadVideo.setAttribute("src", `${rdUploadVideoDataVideo}`);

              rdUploadVideo.setAttribute("poster", `${rdUploadVideoDataImage}`);

            })
          }
        }

      }

    })

  }

  const observer = new IntersectionObserver(callback, options);

  rdUpload.forEach(i => {
    observer.observe(i);
  })
}

// Динамично убираем стрелку у выпадающего списка в header

const navItem = document.querySelectorAll('.nav__item');

if (navItem) {
  navItem.forEach(function (e) {
    if (!e.querySelector(".nav-dropdown__item")) {
      e.classList.add("dropdown-offline");
    }
  });
};

// Форма подписки в футере

const subscribeForm = document.querySelector('.subscribe-form');

if (subscribeForm) {
  const subscribeFormValidator = new JustValidate(subscribeForm, {});

  subscribeFormValidator
    .addField('#subscribe_form_email', [{ // можно использовать классы вместо ид
        rule: 'required',
        value: true,
        errorMessage: 'Введите ваш email',
      },
      {
        rule: 'email',
        errorMessage: 'Введите корректный email',
      },
    ])
    .onSuccess((event) => { // Если форма проходит валидацию то происходит код ниже
      statusSend.classList.add("active");

      let formData = new FormData(event.target);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            statusSendler.classList.remove("active");
            statusOkay.classList.add("active");
          } else {
            statusSendler.classList.remove("active");
            statusError.classList.add("active");
          }
        }
      }

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);

      event.target.reset();
    })
}

// Форма волонтеров на странице волонтеров

const formVolunteer = document.querySelector(".form-volunteer");

if (formVolunteer) {
  const formVolunteerValidator = new JustValidate(formVolunteer, {});

  formVolunteerValidator
    .addField('#form_volunteer_name', [{ // можно использовать классы вместо ид
      rule: 'required',
      value: true,
      errorMessage: 'Введите ваше имя',
    }])
    .addField('#form_volunteer_city', [{ // можно использовать классы вместо ид
      rule: 'required',
      value: true,
      errorMessage: 'Введите ваш email',
    }])
    .addField('#form_volunteer_email', [{ // можно использовать классы вместо ид
        rule: 'required',
        value: true,
        errorMessage: 'Введите ваш email',
      },
      {
        rule: 'email',
        errorMessage: 'Введите корректный email',
      },
    ])
    .onSuccess((event) => { // Если форма проходит валидацию то происходит код ниже
      statusSend.classList.add("active");

      let formData = new FormData(event.target);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            statusSendler.classList.remove("active");
            statusOkay.classList.add("active");
          } else {
            statusSendler.classList.remove("active");
            statusError.classList.add("active");
          }
        }
      }

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);

      event.target.reset();
    })
}

// Работа с компонентом сколько собрали ребенку

const lineCollected = document.querySelectorAll('.line-collected');

if (lineCollected) {
  lineCollected.forEach(function (e) {
    let lineCollectedFrom = e.querySelector('.line-collected-from').innerHTML.trim();
    let lineCollectedBefore = e.querySelector('.line-collected-before').innerHTML.trim();
    let lineCollectedFromPureNumber = lineCollectedFrom.replaceAll(' ', '');
    let lineCollectedBeforePureNumber = lineCollectedBefore.replaceAll(' ', '');
    let lineCollectedFromPureNumber100 = lineCollectedFromPureNumber;
    let lineCollectedBeforePureNumber100 = lineCollectedBeforePureNumber / 100;

    if (Number(lineCollectedFromPureNumber100) <= 0) {
      e.querySelector('span').style.width = 0 + "%";
    } else if (Number(lineCollectedFromPureNumber100) <= Number(lineCollectedBeforePureNumber100 * 5)) {
      e.querySelector('span').style.width = 5 + "%";
    } else if (Number(lineCollectedFromPureNumber100) <= Number(lineCollectedBeforePureNumber100 * 10)) {
      e.querySelector('span').style.width = 10 + "%";
    } else if (Number(lineCollectedFromPureNumber100) <= Number(lineCollectedBeforePureNumber100 * 15)) {
      e.querySelector('span').style.width = 15 + "%";
    } else if (Number(lineCollectedFromPureNumber100) <= Number(lineCollectedBeforePureNumber100 * 20)) {
      e.querySelector('span').style.width = 20 + "%";
    } else if (Number(lineCollectedFromPureNumber100) <= Number(lineCollectedBeforePureNumber100 * 25)) {
      e.querySelector('span').style.width = 25 + "%";
    } else if (Number(lineCollectedFromPureNumber100) <= Number(lineCollectedBeforePureNumber100 * 30)) {
      e.querySelector('span').style.width = 30 + "%";
    } else if (Number(lineCollectedFromPureNumber100) <= Number(lineCollectedBeforePureNumber100 * 35)) {
      e.querySelector('span').style.width = 35 + "%";
    } else if (Number(lineCollectedFromPureNumber100) <= Number(lineCollectedBeforePureNumber100 * 40)) {
      e.querySelector('span').style.width = 40 + "%";
    } else if (Number(lineCollectedFromPureNumber100) <= Number(lineCollectedBeforePureNumber100 * 45)) {
      e.querySelector('span').style.width = 45 + "%";
    } else if (Number(lineCollectedFromPureNumber100) <= Number(lineCollectedBeforePureNumber100 * 50)) {
      e.querySelector('span').style.width = 50 + "%";
    } else if (Number(lineCollectedFromPureNumber100) <= Number(lineCollectedBeforePureNumber100 * 55)) {
      e.querySelector('span').style.width = 55 + "%";
    } else if (Number(lineCollectedFromPureNumber100) <= Number(lineCollectedBeforePureNumber100 * 60)) {
      e.querySelector('span').style.width = 60 + "%";
    } else if (Number(lineCollectedFromPureNumber100) <= Number(lineCollectedBeforePureNumber100 * 65)) {
      e.querySelector('span').style.width = 65 + "%";
    } else if (Number(lineCollectedFromPureNumber100) <= Number(lineCollectedBeforePureNumber100 * 70)) {
      e.querySelector('span').style.width = 70 + "%";
    } else if (Number(lineCollectedFromPureNumber100) <= Number(lineCollectedBeforePureNumber100 * 75)) {
      e.querySelector('span').style.width = 75 + "%";
    } else if (Number(lineCollectedFromPureNumber100) <= Number(lineCollectedBeforePureNumber100 * 80)) {
      e.querySelector('span').style.width = 80 + "%";
    } else if (Number(lineCollectedFromPureNumber100) <= Number(lineCollectedBeforePureNumber100 * 85)) {
      e.querySelector('span').style.width = 85 + "%";
    } else if (Number(lineCollectedFromPureNumber100) <= Number(lineCollectedBeforePureNumber100 * 90)) {
      e.querySelector('span').style.width = 90 + "%";
    } else if (Number(lineCollectedFromPureNumber100) <= Number(lineCollectedBeforePureNumber100 * 95)) {
      e.querySelector('span').style.width = 95 + "%";
    } else if (Number(lineCollectedFromPureNumber100) <= Number(lineCollectedBeforePureNumber100 * 100)) {
      e.querySelector('span').style.width = 100 + "%";
    } else if (Number(lineCollectedFromPureNumber100) >= Number(lineCollectedBeforePureNumber100)) {
      e.querySelector('span').style.width = 100 + "%";
    }
  })
}

// Перекидывание элементов в блоке about

const aboutLeft = document.querySelector(".about__left");

const aboutRight = document.querySelector(".about__right");

if (aboutLeft && aboutRight) {
  if (document.body.clientWidth < 769) {
    aboutLeft.append(aboutRight);
  }
}

// В форме волонтеров убираем или даем класс disabled кнопке

const wrapperCheckboxInputButton = document.querySelector(".wrapper-checkbox__input_button");

const formVolunteerButton = document.querySelector(".form-volunteer__button");

if (wrapperCheckboxInputButton) {
  wrapperCheckboxInputButton.addEventListener("click", function () {
    if (wrapperCheckboxInputButton.checked) {
      formVolunteerButton.classList.remove("disabled");
    } else {
      formVolunteerButton.classList.add("disabled");
    }
  })
}

// Тултип на странице нам помогают

const partnersButton = document.querySelectorAll(".partners__button");

if (partnersButton) {
  tippy(partnersButton, {
    placement: 'top',
    role: 'tooltip',
    trigger: 'mouseenter focus click', // Как срабатывает тултип, при наведение, фокусу и клике
    hideOnClick: true,
    theme: "colorToolp", // Кастомная тема
    maxWidth: 380, // максимальная ширина тултипа
  });
}

// Календарь в форме на странице волонтеры

const formVolunteerDate = document.querySelector("#form_volunteer_date");

if (formVolunteerDate) {
  if (document.body.clientWidth >= 1024) {
    new AirDatepicker(formVolunteerDate, {});
  }
  if (document.body.clientWidth <= 1024) {
    new AirDatepicker(formVolunteerDate, {
      isMobile: true,
      autoClose: true,
    });
  }
}
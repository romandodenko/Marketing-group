document.documentElement.classList.add("loaded");

// Открытие и закрытие бургера

// Блокирует body чтобы не было скролла по У
function bodyBlock() {
  document.body.style.overflow = 'hidden';
}
// Удаляет классы и свойства при закрытии элемент где анимация "расхлоп"
function rebootRemoveClass() {
  document.querySelectorAll(".rewiews-spa-anim-item").forEach(function (e) {
    e.classList.remove("reboot-anim");
  })
  document.querySelectorAll(".rewiews-spa__item").forEach(function (e) {
    e.classList.remove("spa-item-active");
  })
  document.querySelectorAll(".rewiews-spa-init").forEach(function (e) {
    e.classList.remove("interactive");
    e.style.pointerEvents = "";
  })
}

const rewiewsSpaNums = document.querySelector(".rewiews-spa-nums");

const rewiewsSpaNumsActive = document.querySelector(".rewiews-spa-nums__active");

const rewiewsSpaNumsAll = document.querySelector(".rewiews-spa-nums__all");

document.addEventListener("click", function (e) {

  const elementInteractive = e.target;
  // Находим активный элемент у rewiews-spa__item для того чтобы переключать их
  if (elementInteractive.closest(".rewiews-spa-init")) {
    const spaBottomLinks = document.querySelectorAll(".rewiews-spa-init");
    const rewiewsSpaItems = document.querySelectorAll(".rewiews-spa__item");
    const rewiewsSpaItemsLength = document.querySelectorAll(".rewiews-spa__item").length;
    rewiewsSpaNumsAll.innerHTML = rewiewsSpaItemsLength;
    spaBottomLinks.forEach(function (el) {
      el.classList.remove("interactive");
      el.style.pointerEvents = "none";
    })
    elementInteractive.closest(".rewiews-spa-init").classList.add("interactive");

    spaBottomLinks.forEach(function (el, i) {

      if (el.classList.contains("interactive")) {
        let elementIndex = i;

        rewiewsSpaItems.forEach(function (e, i) {
          if (i === elementIndex) {
            e.classList.add("spa-item-active");
              if (e.classList.contains("spa-item-active")) {
                rewiewsSpaNumsActive.innerHTML = i + 1;
              }
            if (e.nextElementSibling) {
              document.querySelector(".rewiews-spa-next").classList.remove("disabled");
            } else {
              document.querySelector(".rewiews-spa-next").classList.add("disabled");
            }

            if (e.previousElementSibling) {
              document.querySelector(".rewiews-spa-prev").classList.remove("disabled");
            } else {
              document.querySelector(".rewiews-spa-prev").classList.add("disabled");
            }
          }
        })

      }
    })
  }
  // Закрывает элемент rewiews-spa__item 
  if (elementInteractive.closest(".rewiews-spa__exit")) {
    document.querySelectorAll(".rewiews-spa-anim-item").forEach(function (e) {
      e.classList.add("reboot-anim");
    })
    setTimeout(rebootRemoveClass, 1000)
  }
  // Переключаем вперед элемент rewiews-spa__item
  if (elementInteractive.closest(".rewiews-spa-next")) {
    const rewiewsSpaItemslength = document.querySelectorAll(".rewiews-spa__item").length;
    const rewiewsSpaItemActive = document.querySelector(".spa-item-active");

    if (rewiewsSpaItemslength != 0) {
      if (rewiewsSpaItemActive.nextElementSibling) {
        rewiewsSpaItemActive.nextElementSibling.classList.add("spa-item-active");
        const rewiewsSpaItemsActive = document.querySelectorAll(".spa-item-active");
        const rewiewsSpaItems = document.querySelectorAll(".rewiews-spa__item");
        rewiewsSpaItemsActive[0].classList.remove("spa-item-active");
        rewiewsSpaItems.forEach(function (e, i) {
          if (e.classList.contains("spa-item-active")) {
            rewiewsSpaNumsActive.innerHTML = i + 1;
          }
        })
        if (rewiewsSpaItemsActive[1].nextElementSibling) {
          document.querySelector(".rewiews-spa-prev").classList.remove("disabled");

        } else {
          elementInteractive.closest(".rewiews-spa-next").classList.add("disabled");
        }
      }
    }

  }
  // Переключаем назад элемент rewiews-spa__item
  if (elementInteractive.closest(".rewiews-spa-prev")) {
    const rewiewsSpaItemslength = document.querySelectorAll(".rewiews-spa__item").length;
    const rewiewsSpaItemActive = document.querySelector(".spa-item-active");

    if (rewiewsSpaItemslength != 0) {
      if (rewiewsSpaItemActive.previousElementSibling) {
        rewiewsSpaItemActive.previousElementSibling.classList.add("spa-item-active");
        const rewiewsSpaItemsActive = document.querySelectorAll(".spa-item-active");
        const rewiewsSpaItems = document.querySelectorAll(".rewiews-spa__item");
        rewiewsSpaItemsActive[1].classList.remove("spa-item-active");
        rewiewsSpaItems.forEach(function (e, i) {
          if (e.classList.contains("spa-item-active")) {
            rewiewsSpaNumsActive.innerHTML = i + 1;
          }
        })
        if (rewiewsSpaItemsActive[0].previousElementSibling) {
          document.querySelector(".rewiews-spa-next").classList.remove("disabled");

        } else {
          elementInteractive.closest(".rewiews-spa-prev").classList.add("disabled");
        }
      }
    }

  }
  // Закрываем предупреждение о тех работе на плагине бронирования
  if (elementInteractive.closest(".pp__button")) {
    document.querySelector(".pp").classList.add("disabled");
  }
  // Закрываем вне клика предупреждение о тех работе на плагине бронирования
  if (elementInteractive.closest(".pp__close")) {
    document.querySelector(".pp").classList.add("disabled");
  }
  // Даем активный класс табам
  if (elementInteractive.closest(".tabber-btn")) {
    let tabberBtn = elementInteractive.closest(".tabber-btn");

    function tabberTim() {
      gsap.to(tabberBtn, {
        onComplete: () => ScrollTrigger.refresh()
      });
    }
    setTimeout(tabberTim, 1000)
    document.querySelectorAll(".tabber-btn").forEach(function (e) {
      e.classList.remove("active");
      if (e.getAttribute("data-path") === tabberBtn.getAttribute("data-path")) {
        e.classList.add("active")
      }
    })
    elementInteractive.closest(".tabber-btn").classList.add("active");
  }
  // Закрываем оболочку ошибки при нажатии вне клика
  if (elementInteractive.closest(".wrapper-error__close")) {
    document.querySelector(".wrapper-error").classList.remove("active");
  }
  // Закрываем оболочку ошибки при нажатии на кнопку
  if (elementInteractive.closest(".wrapper-error__exit")) {
    document.querySelector(".wrapper-error").classList.remove("active");
  }
  // Закрываем общую форму при нажатии вне элемента
  if (elementInteractive.closest(".wrapper-form-all__close")) {
    let wrapperFormAll = elementInteractive.closest(".wrapper-form-all");

    wrapperFormAll.classList.remove("active");

    wrapperFormAll.querySelector(".wrapper-form-all__item").classList.remove("disabled");

    wrapperFormAll.querySelector(".wrapper-form-all-okay").classList.remove("active");

    wrapperFormAll.querySelector(".wrapper-form-all-error").classList.remove("active");

    wrapperFormAll.querySelector(".wrapper-form-all-spinner").classList.remove("active");

    document.body.style.overflow = '';
  }
  // Закрываем общую форму при нажатии на кнопку
  if (elementInteractive.closest(".wrapper-form-all__exit")) {
    let wrapperFormAll = elementInteractive.closest(".wrapper-form-all");

    wrapperFormAll.classList.remove("active");

    wrapperFormAll.querySelector(".wrapper-form-all__item").classList.remove("disabled");

    wrapperFormAll.querySelector(".wrapper-form-all-okay").classList.remove("active");

    wrapperFormAll.querySelector(".wrapper-form-all-error").classList.remove("active");

    wrapperFormAll.querySelector(".wrapper-form-all-spinner").classList.remove("active");

    document.body.style.overflow = '';
  }

  if (elementInteractive.closest(".filter-list__button")) {

    let formFilter = document.querySelector(".form-filter");

    let formInputNameHotel = formFilter.querySelector(".name-hotel");

    let filterItem = elementInteractive.closest(".filter-list__item");

    let filterNameHotel = filterItem.querySelector(".filter-list__title");

    let filterNameHotelValue = filterNameHotel.innerHTML;

    formInputNameHotel.value = filterNameHotelValue;

    document.querySelector(".wrapper-filter-form").classList.add("active");

    setTimeout(bodyBlock, 500);
  }
  // Показываем общую форму
  if (elementInteractive.closest(".form-all-init")) {

    let wrapperValue = elementInteractive.closest(".form-all-wrapper-value");

    let wrapperFormAll = document.querySelector(".wrapper-form-all");

    wrapperFormAll.classList.add("active");

    wrapperFormAll.querySelector(".name-hidden-value").value = wrapperValue.querySelector(".form-all-value").innerHTML;

    console.log(wrapperFormAll.querySelector(".name-hidden-value").value)

  }
  // Показываем общую форму
  if (elementInteractive.closest(".form-init")) {

    let wrapperValue = elementInteractive.closest(".spa-bani__item");

    let wrapperFormAll = document.querySelector(".wrapper-form-all");

    wrapperFormAll.classList.add("active");

    wrapperFormAll.querySelector(".name-hidden-value").value = wrapperValue.querySelector(".form-all-value").innerHTML;

    console.log(wrapperFormAll.querySelector(".name-hidden-value").value)

  }
  // Включаем видео в конференц зале
  if (elementInteractive.closest(".konferenc-zal__image")) {

    elementInteractive.closest(".konferenc-zal__image").classList.add("active");

    let konferencVideo = elementInteractive.closest(".konferenc-zal__image").querySelector("video");

    if (konferencVideo) {
      konferencVideo.setAttribute("controls", "controls");
      konferencVideo.play();
    }

  }
  // Полностью показываем
  if (elementInteractive.closest(".about-reviews-slider__button")) {
    gsap.to(elementInteractive.closest(".about-reviews-slider__button"), {
      onComplete: () => ScrollTrigger.refresh()
    });
    elementInteractive.closest(".about-reviews-slider__slide").classList.toggle("active");
    elementInteractive.closest(".about-reviews-slider__button").classList.toggle("active");
  }
  // Закрываем оболочку о ошибке отправления почты при нажатии на кнопку
  if (elementInteractive.closest(".wrapper-filter-form__exit")) {

    let wrapperFilterForm = elementInteractive.closest(".wrapper-filter-form");

    wrapperFilterForm.classList.remove("active");

    wrapperFilterForm.querySelector(".wrapper-filter-form__item").classList.remove("disabled");

    wrapperFilterForm.querySelector(".filter-okay").classList.remove("active");

    wrapperFilterForm.querySelector(".filter-error").classList.remove("active");

    wrapperFilterForm.querySelector(".filter-spinner").classList.remove("active");

    document.body.style.overflow = '';

  }
  // Закрываем оболочку о ошибке отправления почты при нажатии вне элемента
  if (elementInteractive.closest(".wrapper-filter-form__close")) {

    let wrapperFilterForm = elementInteractive.closest(".wrapper-filter-form");

    wrapperFilterForm.classList.remove("active");

    wrapperFilterForm.querySelector(".wrapper-filter-form__item").classList.remove("disabled");

    wrapperFilterForm.querySelector(".filter-okay").classList.remove("active");

    wrapperFilterForm.querySelector(".filter-error").classList.remove("active");

    wrapperFilterForm.querySelector(".filter-spinner").classList.remove("active");

    document.body.style.overflow = '';

  }
  // Закрываем оболочку о успешном отправление почты при нажатии вне элемента
  if (elementInteractive.closest(".okay__close")) {

    document.querySelector(".okay").classList.remove("active");

    document.body.style.overflow = '';

  }
  // Закрываем оболочку о успешном отправление почты при нажатии на кнопку
  if (elementInteractive.closest(".okay__exit")) {

    document.querySelector(".okay").classList.remove("active");

    document.body.style.overflow = '';

  }
  // Открытие и закрытие аккордеона
  if (elementInteractive.closest(".menu-restaraunt__top")) {

    const menuResItem = elementInteractive.closest(".menu-restaraunt__item");

    const menuResItemBottom = elementInteractive.closest(".menu-restaraunt__item").querySelector(".menu-restaraunt__bottom");

    if (!menuResItem.classList.contains("active")) {

      menuResItem.classList.add("active");

      gsap.to(menuResItemBottom, {
        height: "auto",
        onComplete: () => ScrollTrigger.refresh()
      });

    } else if (menuResItem.classList.contains("active")) {

      menuResItem.classList.remove("active");

      gsap.to(menuResItemBottom, {
        height: 0,
        onComplete: () => ScrollTrigger.refresh()
      });
    }

  }
  // Начинаем анимацию "расхлоп"
  if (elementInteractive.closest(".spa-init-1")) {
    setTimeout(bodyBlock, 500)

    let rewiewsSpaOpen = gsap.timeline({
      paused: true
    })

    rewiewsSpaOpen
      .fromTo(".rewiews-spa", {
        opacity: 0,
        visibility: 'hidden',
      }, {
        duration: .3,
        opacity: 1,
        visibility: 'visible',
      })
      .fromTo(".rewiews-spa__row_1", {
        height: 0,
      }, {
        duration: .4,
        height: '50%',
      }, '-=.3')
      .fromTo(".rewiews-spa__row_2", {
        height: 0,
      }, {
        duration: .4,
        height: '50%',
      }, '-=.4')
      .fromTo(".rewiews-spa", {
        backgroundColor: 'transparent',
      }, {
        duration: .3,
        backgroundColor: '#000000',
      })
      .fromTo(".rewiews-spa__button_1", {
        opacity: 0,
        x: "-100%",
      }, {
        opacity: 1,
        x: "0",
        duration: .3,
        delay: .2,
      })
      .fromTo(".rewiews-spa__button_2", {
        opacity: 0,
        x: "100%",
      }, {
        opacity: 1,
        x: "0",
        duration: .3,
        delay: .2,
      }, '-=.4')
      .fromTo(".rewiews-spa-nums", {
        opacity: 0,
        y: "100%",
      }, {
        opacity: 1,
        y: "0",
        duration: .3,
        delay: .2,
      }, '-=.4')
       
    rewiewsSpaOpen.timeScale(1).play()
  }
  // Начинаем анимацию "расхлоп"
  if (elementInteractive.closest(".spa-init-2")) {
    setTimeout(bodyBlock, 500)

    let rewiewsSpaOpen = gsap.timeline({
      paused: true
    })

    rewiewsSpaOpen
      .fromTo(".rewiews-spa", {
        opacity: 0,
        visibility: 'hidden',
      }, {
        duration: .3,
        opacity: 1,
        visibility: 'visible',
      })
      .fromTo(".rewiews-spa__row_1", {
        height: 0,
      }, {
        duration: .4,
        height: '50%',
      }, '-=.3')
      .fromTo(".rewiews-spa__row_2", {
        height: 0,
      }, {
        duration: .4,
        height: '50%',
      }, '-=.4')
      .fromTo(".rewiews-spa", {
        backgroundColor: 'transparent',
      }, {
        duration: .3,
        backgroundColor: '#000000',
      })
      .fromTo(".rewiews-spa__button_1", {
        opacity: 0,
        x: "-100%",
      }, {
        opacity: 1,
        x: "0",
        duration: .3,
        delay: .2,
      })
      .fromTo(".rewiews-spa__button_2", {
        opacity: 0,
        x: "100%",
      }, {
        opacity: 1,
        x: "0",
        duration: .3,
        delay: .2,
      }, '-=.4')
      .fromTo(".rewiews-spa-nums", {
        opacity: 0,
        y: "100%",
      }, {
        opacity: 1,
        y: "0",
        duration: .3,
        delay: .2,
      }, '-=.4')

    rewiewsSpaOpen.timeScale(1).play()
  }
  // Начинаем анимацию "расхлоп"
  if (elementInteractive.closest(".spa-init-3")) {
    setTimeout(bodyBlock, 500)
    let rewiewsSpaOpen = gsap.timeline({
      paused: true
    })

    rewiewsSpaOpen
      .fromTo(".rewiews-spa", {
        opacity: 0,
        visibility: 'hidden',
      }, {
        duration: .3,
        opacity: 1,
        visibility: 'visible',
      })
      .fromTo(".rewiews-spa__row_1", {
        height: 0,
      }, {
        duration: .4,
        height: '50%',
      }, '-=.3')
      .fromTo(".rewiews-spa__row_2", {
        height: 0,
      }, {
        duration: .4,
        height: '50%',
      }, '-=.4')
      .fromTo(".rewiews-spa", {
        backgroundColor: 'transparent',
      }, {
        duration: .3,
        backgroundColor: '#000000',
      })
      .fromTo(".rewiews-spa__button_1", {
        opacity: 0,
        x: "-100%",
      }, {
        opacity: 1,
        x: "0",
        duration: .3,
        delay: .2,
      })
      .fromTo(".rewiews-spa__button_2", {
        opacity: 0,
        x: "100%",
      }, {
        opacity: 1,
        x: "0",
        duration: .3,
        delay: .2,
      }, '-=.4')
      .fromTo(".rewiews-spa-nums", {
        opacity: 0,
        y: "100%",
      }, {
        opacity: 1,
        y: "0",
        duration: .3,
        delay: .2,
      }, '-=.4')

    rewiewsSpaOpen.timeScale(1).play()
  }
  // Начинаем анимацию "расхлоп"
  if (elementInteractive.closest(".spa-init-4")) {
    setTimeout(bodyBlock, 500)
    let rewiewsSpaOpen = gsap.timeline({
      paused: true
    })

    rewiewsSpaOpen
      .fromTo(".rewiews-spa", {
        opacity: 0,
        visibility: 'hidden',
      }, {
        duration: .3,
        opacity: 1,
        visibility: 'visible',
      })
      .fromTo(".rewiews-spa__row_1", {
        height: 0,
      }, {
        duration: .4,
        height: '50vh',
      }, '-=.3')
      .fromTo(".rewiews-spa__row_2", {
        height: 0,
      }, {
        duration: .4,
        height: '50vh',
      }, '-=.4')
      .fromTo(".rewiews-spa", {
        backgroundColor: 'transparent',
      }, {
        duration: .3,
        backgroundColor: '#000000',
      })
      .fromTo(".rewiews-spa__button_1", {
        opacity: 0,
        x: "-100%",
      }, {
        opacity: 1,
        x: "0",
        duration: .3,
        delay: .2,
      })
      .fromTo(".rewiews-spa__button_2", {
        opacity: 0,
        x: "100%",
      }, {
        opacity: 1,
        x: "0",
        duration: .3,
        delay: .2,
      }, '-=.4')
      .fromTo(".rewiews-spa-nums", {
        opacity: 0,
        y: "100%",
      }, {
        opacity: 1,
        y: "0",
        duration: .3,
        delay: .2,
      }, '-=.4')

    rewiewsSpaOpen.timeScale(1).play()
  }
  // Начинаем анимацию "расхлоп"
  if (elementInteractive.closest(".spa-btn-init-1")) {
    setTimeout(bodyBlock, 500)
    let rewiewsSpaOpen = gsap.timeline({
      paused: true
    })

    rewiewsSpaOpen
      .fromTo(".rewiews-spa", {
        opacity: 0,
        visibility: 'hidden',
      }, {
        duration: .3,
        opacity: 1,
        visibility: 'visible',
      })
      .fromTo(".rewiews-spa__row_1", {
        height: 0,
      }, {
        duration: .4,
        height: '50vh',
      }, '-=.3')
      .fromTo(".rewiews-spa__row_2", {
        height: 0,
      }, {
        duration: .4,
        height: '50vh',
      }, '-=.4')
      .fromTo(".rewiews-spa", {
        backgroundColor: 'transparent',
      }, {
        duration: .3,
        backgroundColor: '#000000',
      })
      .fromTo(".rewiews-spa__button_1", {
        opacity: 0,
        x: "-100%",
      }, {
        opacity: 1,
        x: "0",
        duration: .3,
        delay: .2,
      })
      .fromTo(".rewiews-spa__button_2", {
        opacity: 0,
        x: "100%",
      }, {
        opacity: 1,
        x: "0",
        duration: .3,
        delay: .2,
      }, '-=.4')
      .fromTo(".rewiews-spa-nums", {
        opacity: 0,
        y: "100%",
      }, {
        opacity: 1,
        y: "0",
        duration: .3,
        delay: .2,
      }, '-=.4')

    rewiewsSpaOpen.timeScale(1).play()
  }
  // Начинаем анимацию "расхлоп"
  if (elementInteractive.closest(".spa-btn-init-2")) {
    setTimeout(bodyBlock, 500)
    let rewiewsSpaOpen = gsap.timeline({
      paused: true
    })

    rewiewsSpaOpen
      .fromTo(".rewiews-spa", {
        opacity: 0,
        visibility: 'hidden',
      }, {
        duration: .3,
        opacity: 1,
        visibility: 'visible',
      })
      .fromTo(".rewiews-spa__row_1", {
        height: 0,
      }, {
        duration: .4,
        height: '50vh',
      }, '-=.3')
      .fromTo(".rewiews-spa__row_2", {
        height: 0,
      }, {
        duration: .4,
        height: '50vh',
      }, '-=.4')
      .fromTo(".rewiews-spa", {
        backgroundColor: 'transparent',
      }, {
        duration: .3,
        backgroundColor: '#000000',
      })
      .fromTo(".rewiews-spa__button_1", {
        opacity: 0,
        x: "-100%",
      }, {
        opacity: 1,
        x: "0",
        duration: .3,
        delay: .2,
      })
      .fromTo(".rewiews-spa__button_2", {
        opacity: 0,
        x: "100%",
      }, {
        opacity: 1,
        x: "0",
        duration: .3,
        delay: .2,
      }, '-=.4')
      .fromTo(".rewiews-spa-nums", {
        opacity: 0,
        y: "100%",
      }, {
        opacity: 1,
        y: "0",
        duration: .3,
        delay: .2,
      }, '-=.4')

    rewiewsSpaOpen.timeScale(1).play()
  }
  // Начинаем анимацию "расхлоп"
  if (elementInteractive.closest(".spa-btn-init-3")) {
    setTimeout(bodyBlock, 500)
    let rewiewsSpaOpen = gsap.timeline({
      paused: true
    })

    rewiewsSpaOpen
      .fromTo(".rewiews-spa", {
        opacity: 0,
        visibility: 'hidden',
      }, {
        duration: .3,
        opacity: 1,
        visibility: 'visible',
      })
      .fromTo(".rewiews-spa__row_1", {
        height: 0,
      }, {
        duration: .4,
        height: '50vh',
      }, '-=.3')
      .fromTo(".rewiews-spa__row_2", {
        height: 0,
      }, {
        duration: .4,
        height: '50vh',
      }, '-=.4')
      .fromTo(".rewiews-spa", {
        backgroundColor: 'transparent',
      }, {
        duration: .3,
        backgroundColor: '#000000',
      })
      .fromTo(".rewiews-spa__button_1", {
        opacity: 0,
        x: "-100%",
      }, {
        opacity: 1,
        x: "0",
        duration: .3,
        delay: .2,
      })
      .fromTo(".rewiews-spa__button_2", {
        opacity: 0,
        x: "100%",
      }, {
        opacity: 1,
        x: "0",
        duration: .3,
        delay: .2,
      }, '-=.4')
      .fromTo(".rewiews-spa-nums", {
        opacity: 0,
        y: "100%",
      }, {
        opacity: 1,
        y: "0",
        duration: .3,
        delay: .2,
      }, '-=.4')

    rewiewsSpaOpen.timeScale(1).play()
  }
  // Начинаем анимацию "расхлоп"
  if (elementInteractive.closest(".spa-btn-init-4")) {
    setTimeout(bodyBlock, 500)
    let rewiewsSpaOpen = gsap.timeline({
      paused: true
    })

    rewiewsSpaOpen
      .fromTo(".rewiews-spa", {
        opacity: 0,
        visibility: 'hidden',
      }, {
        duration: .3,
        opacity: 1,
        visibility: 'visible',
      })
      .fromTo(".rewiews-spa__row_1", {
        height: 0,
      }, {
        duration: .4,
        height: '50vh',
      }, '-=.3')
      .fromTo(".rewiews-spa__row_2", {
        height: 0,
      }, {
        duration: .4,
        height: '50vh',
      }, '-=.4')
      .fromTo(".rewiews-spa", {
        backgroundColor: 'transparent',
      }, {
        duration: .3,
        backgroundColor: '#000000',
      })
      .fromTo(".rewiews-spa__button_1", {
        opacity: 0,
        x: "-100%",
      }, {
        opacity: 1,
        x: "0",
        duration: .3,
        delay: .2,
      })
      .fromTo(".rewiews-spa__button_2", {
        opacity: 0,
        x: "100%",
      }, {
        opacity: 1,
        x: "0",
        duration: .3,
        delay: .2,
      }, '-=.4')
      .fromTo(".rewiews-spa-nums", {
        opacity: 0,
        y: "100%",
      }, {
        opacity: 1,
        y: "0",
        duration: .3,
        delay: .2,
      }, '-=.4')

    rewiewsSpaOpen.timeScale(1).play()
  }
  // Закрываем анимацию "расхлоп"
  if (elementInteractive.closest(".rewiews-spa__exit_1")) {
    document.body.style.overflow = '';
    let rewiewsSpaClose = gsap.timeline({
      paused: true
    })

    rewiewsSpaClose
      .fromTo(".rewiews-spa", {
        backgroundColor: '#000000',
      }, {
        duration: .6,
        backgroundColor: 'transparent',
      }, '-=.1')
      .fromTo(".rewiews-spa__row_1", {
        height: '50%',
      }, {
        duration: .5,
        height: 0,
      }, '-=.3')
      .fromTo(".rewiews-spa__row_2", {
        height: '50%',
      }, {
        duration: .5,
        height: 0,
      }, '-=.5')
      .fromTo(".rewiews-spa", {
        opacity: 1,
        visibility: 'visible',
      }, {
        duration: .3,
        opacity: 0,
        visibility: 'hidden',
      })
      .fromTo(".rewiews-spa__button_1", {
        opacity: 1,
        x: "0",
      }, {
        opacity: 0,
        x: "-100%",
        duration: .3,
      }, '-=1')
      .fromTo(".rewiews-spa__button_2", {
        opacity: 1,
        x: "0",
      }, {
        opacity: 0,
        x: "100%",
        duration: .3,
      }, '-=1')
      .fromTo(".rewiews-spa-nums", {
        opacity: 1,
        y: "0",
      }, {
        opacity: 0,
        y: "100%",
        duration: .3,
      }, '-=.8')

    rewiewsSpaClose.timeScale(1).play()
  }
  // Закрываем анимацию "расхлоп"
  if (elementInteractive.closest(".rewiews-spa__exit_2")) {
    document.body.style.overflow = '';
    let rewiewsSpaClose = gsap.timeline({
      paused: true
    })

    rewiewsSpaClose

      .fromTo(".rewiews-spa", {
        backgroundColor: '#000000',
      }, {
        duration: .6,
        backgroundColor: 'transparent',
      }, '-=.1')
      .fromTo(".rewiews-spa__row_1", {
        height: '50%',
      }, {
        duration: .5,
        height: 0,
      }, '-=.3')
      .fromTo(".rewiews-spa__row_2", {
        height: '50%',
      }, {
        duration: .5,
        height: 0,
      }, '-=.5')
      .fromTo(".rewiews-spa", {
        opacity: 1,
        visibility: 'visible',
      }, {
        duration: .3,
        opacity: 0,
        visibility: 'hidden',
      })
      .fromTo(".rewiews-spa__button_1", {
        opacity: 1,
        x: "0",
      }, {
        opacity: 0,
        x: "-100%",
        duration: .3,
      }, '-=1')
      .fromTo(".rewiews-spa__button_2", {
        opacity: 1,
        x: "0",
      }, {
        opacity: 0,
        x: "100%",
        duration: .3,
      }, '-=1')
      .fromTo(".rewiews-spa-nums", {
        opacity: 1,
        y: "0",
      }, {
        opacity: 0,
        y: "100%",
        duration: .3,
      }, '-=.8')

    rewiewsSpaClose.timeScale(1).play()
  }
  // Закрываем анимацию "расхлоп"
  if (elementInteractive.closest(".rewiews-spa__exit_3")) {
    document.body.style.overflow = '';
    let rewiewsSpaClose = gsap.timeline({
      paused: true
    })

    rewiewsSpaClose
      .fromTo(".rewiews-spa", {
        backgroundColor: '#000000',
      }, {
        duration: .6,
        backgroundColor: 'transparent',
      }, '-=.1')
      .fromTo(".rewiews-spa__row_1", {
        height: '50%',
      }, {
        duration: .5,
        height: 0,
      }, '-=.3')
      .fromTo(".rewiews-spa__row_2", {
        height: '50%',
      }, {
        duration: .5,
        height: 0,
      }, '-=.5')
      .fromTo(".rewiews-spa", {
        opacity: 1,
        visibility: 'visible',
      }, {
        duration: .3,
        opacity: 0,
        visibility: 'hidden',
      })
      .fromTo(".rewiews-spa__button_1", {
        opacity: 1,
        x: "0",
      }, {
        opacity: 0,
        x: "-100%",
        duration: .3,
      }, '-=1')
      .fromTo(".rewiews-spa__button_2", {
        opacity: 1,
        x: "0",
      }, {
        opacity: 0,
        x: "100%",
        duration: .3,
      }, '-=1')
      .fromTo(".rewiews-spa-nums", {
        opacity: 1,
        y: "0",
      }, {
        opacity: 0,
        y: "100%",
        duration: .3,
      }, '-=.8')

    rewiewsSpaClose.timeScale(1).play()
  }
  // Закрываем анимацию "расхлоп"
  if (elementInteractive.closest(".rewiews-spa__exit_4")) {
    document.body.style.overflow = '';
    let rewiewsSpaClose = gsap.timeline({
      paused: true
    })

    rewiewsSpaClose
      .fromTo(".rewiews-spa", {
        backgroundColor: '#000000',
      }, {
        duration: .6,
        backgroundColor: 'transparent',
      }, '-=.1')
      .fromTo(".rewiews-spa__row_1", {
        height: '50vh',
      }, {
        duration: .5,
        height: 0,
      }, '-=.3')
      .fromTo(".rewiews-spa__row_2", {
        height: '50vh',
      }, {
        duration: .5,
        height: 0,
      }, '-=.5')
      .fromTo(".rewiews-spa", {
        opacity: 1,
        visibility: 'visible',
      }, {
        duration: .3,
        opacity: 0,
        visibility: 'hidden',
      })
      .fromTo(".rewiews-spa__button_1", {
        opacity: 1,
        x: "0",
      }, {
        opacity: 0,
        x: "-100%",
        duration: .3,
      }, '-=1')
      .fromTo(".rewiews-spa__button_2", {
        opacity: 1,
        x: "0",
      }, {
        opacity: 0,
        x: "100%",
        duration: .3,
      }, '-=1')
      .fromTo(".rewiews-spa-nums", {
        opacity: 1,
        y: "0",
      }, {
        opacity: 0,
        y: "100%",
        duration: .3,
      }, '-=.8')

    rewiewsSpaClose.timeScale(1).play()
  }
  // Закрываем анимацию "расхлоп"
  if (elementInteractive.closest(".rewiews-spa__exit_5")) {
    document.body.style.overflow = '';
    let rewiewsSpaClose = gsap.timeline({
      paused: true
    })

    rewiewsSpaClose
      .fromTo(".rewiews-spa", {
        backgroundColor: '#000000',
      }, {
        duration: .6,
        backgroundColor: 'transparent',
      }, '-=.1')
      .fromTo(".rewiews-spa__row_1", {
        height: '50vh',
      }, {
        duration: .5,
        height: 0,
      }, '-=.3')
      .fromTo(".rewiews-spa__row_2", {
        height: '50vh',
      }, {
        duration: .5,
        height: 0,
      }, '-=.5')
      .fromTo(".rewiews-spa", {
        opacity: 1,
        visibility: 'visible',
      }, {
        duration: .3,
        opacity: 0,
        visibility: 'hidden',
      })
      .fromTo(".rewiews-spa__button_1", {
        opacity: 1,
        x: "0",
      }, {
        opacity: 0,
        x: "-100%",
        duration: .3,
      }, '-=1')
      .fromTo(".rewiews-spa__button_2", {
        opacity: 1,
        x: "0",
      }, {
        opacity: 0,
        x: "100%",
        duration: .3,
      }, '-=1')
      .fromTo(".rewiews-spa-nums", {
        opacity: 1,
        y: "0",
      }, {
        opacity: 0,
        y: "100%",
        duration: .3,
      }, '-=.8')

    rewiewsSpaClose.timeScale(1).play()
  }
  // Закрываем анимацию "расхлоп"
  if (elementInteractive.closest(".rewiews-spa__exit_6")) {
    document.body.style.overflow = '';
    let rewiewsSpaClose = gsap.timeline({
      paused: true
    })

    rewiewsSpaClose
      .fromTo(".rewiews-spa", {
        backgroundColor: '#000000',
      }, {
        duration: .6,
        backgroundColor: 'transparent',
      }, '-=.1')
      .fromTo(".rewiews-spa__row_1", {
        height: '50vh',
      }, {
        duration: .5,
        height: 0,
      }, '-=.3')
      .fromTo(".rewiews-spa__row_2", {
        height: '50vh',
      }, {
        duration: .5,
        height: 0,
      }, '-=.5')
      .fromTo(".rewiews-spa", {
        opacity: 1,
        visibility: 'visible',
      }, {
        duration: .3,
        opacity: 0,
        visibility: 'hidden',
      })
      .fromTo(".rewiews-spa__button_1", {
        opacity: 1,
        x: "0",
      }, {
        opacity: 0,
        x: "-100%",
        duration: .3,
      }, '-=1')
      .fromTo(".rewiews-spa__button_2", {
        opacity: 1,
        x: "0",
      }, {
        opacity: 0,
        x: "100%",
        duration: .3,
      }, '-=1')
      .fromTo(".rewiews-spa-nums", {
        opacity: 1,
        y: "0",
      }, {
        opacity: 0,
        y: "100%",
        duration: .3,
      }, '-=.8')

    rewiewsSpaClose.timeScale(1).play()
  }
  // Закрываем анимацию "расхлоп"
  if (elementInteractive.closest(".rewiews-spa__exit_7")) {
    document.body.style.overflow = '';
    let rewiewsSpaClose = gsap.timeline({
      paused: true
    })

    rewiewsSpaClose
      .fromTo(".rewiews-spa", {
        backgroundColor: '#000000',
      }, {
        duration: .6,
        backgroundColor: 'transparent',
      }, '-=.1')
      .fromTo(".rewiews-spa__row_1", {
        height: '50vh',
      }, {
        duration: .5,
        height: 0,
      }, '-=.3')
      .fromTo(".rewiews-spa__row_2", {
        height: '50vh',
      }, {
        duration: .5,
        height: 0,
      }, '-=.5')
      .fromTo(".rewiews-spa", {
        opacity: 1,
        visibility: 'visible',
      }, {
        duration: .3,
        opacity: 0,
        visibility: 'hidden',
      })
      .fromTo(".rewiews-spa__button_1", {
        opacity: 1,
        x: "0",
      }, {
        opacity: 0,
        x: "-100%",
        duration: .3,
      }, '-=1')
      .fromTo(".rewiews-spa__button_2", {
        opacity: 1,
        x: "0",
      }, {
        opacity: 0,
        x: "100%",
        duration: .3,
      }, '-=1')
      .fromTo(".rewiews-spa-nums", {
        opacity: 1,
        y: "0",
      }, {
        opacity: 0,
        y: "100%",
        duration: .3,
      }, '-=.8')

    rewiewsSpaClose.timeScale(1).play()
  }
  // Закрываем анимацию "расхлоп"
  if (elementInteractive.closest(".rewiews-spa__exit_8")) {
    document.body.style.overflow = '';
    let rewiewsSpaClose = gsap.timeline({
      paused: true
    })

    rewiewsSpaClose
      .fromTo(".rewiews-spa", {
        backgroundColor: '#000000',
      }, {
        duration: .6,
        backgroundColor: 'transparent',
      }, '-=.1')
      .fromTo(".rewiews-spa__row_1", {
        height: '50vh',
      }, {
        duration: .5,
        height: 0,
      }, '-=.3')
      .fromTo(".rewiews-spa__row_2", {
        height: '50vh',
      }, {
        duration: .5,
        height: 0,
      }, '-=.5')
      .fromTo(".rewiews-spa", {
        opacity: 1,
        visibility: 'visible',
      }, {
        duration: .3,
        opacity: 0,
        visibility: 'hidden',
      })
      .fromTo(".rewiews-spa__button_1", {
        opacity: 1,
        x: "0",
      }, {
        opacity: 0,
        x: "-100%",
        duration: .3,
      }, '-=1')
      .fromTo(".rewiews-spa__button_2", {
        opacity: 1,
        x: "0",
      }, {
        opacity: 0,
        x: "100%",
        duration: .3,
      }, '-=1')
      .fromTo(".rewiews-spa-nums", {
        opacity: 1,
        y: "0",
      }, {
        opacity: 0,
        y: "100%",
        duration: .3,
      }, '-=.8')

    rewiewsSpaClose.timeScale(1).play()
  }
  // Открываем аккордеон на странице напитков
  if (elementInteractive.closest(".napitki-content__head")) {

    const napitkiItem = elementInteractive.closest(".napitki-content__item");

    const napitkiItemBottom = napitkiItem.querySelector(".napitki-content__bottom");

    if (!elementInteractive.closest(".napitki-content__head").classList.contains("active")) {

      elementInteractive.closest(".napitki-content__head").classList.add("active");

      gsap.to(napitkiItemBottom, {
        height: "auto",
        onUpdate: () => ScrollTrigger.refresh()
      });
    } else {
      elementInteractive.closest(".napitki-content__head").classList.remove("active");

      gsap.to(napitkiItemBottom, {
        height: 0,
        onUpdate: () => ScrollTrigger.refresh()
      });
    }

  }
  // Обновляем высоту scroll trigger
  if (elementInteractive.closest("button")) {

    if (!elementInteractive.closest("button").classList.contains("no-gsap-btn")) {
      gsap.to("button", {
        onUpdate: () => ScrollTrigger.refresh()
      });
    } else {
      console.log("БАН КАЙ")
    }

  }
})

document.addEventListener("mouseover", function (e) {

  const elementInteractive = e.target;
  // Выпадашка в хеадере
  if (elementInteractive.closest(".nav__item")) {
    document.querySelectorAll(".nav__item").forEach(function (e) {
      e.classList.remove("active")
    })
    elementInteractive.closest(".nav__item").classList.add("active")
  } else if (!elementInteractive.closest(".nav__item")) {
    document.querySelectorAll(".nav__item").forEach(function (e) {
      e.classList.remove("active")
    })
  }
  // ховер у карточек в блоке spa
  if (elementInteractive.closest(".spa-bottom__link")) {
    document.querySelectorAll(".spa-bottom__item").forEach(function (e) {
      e.classList.remove("active")
    })
    elementInteractive.closest(".spa-bottom__item").classList.add("active");
  } else {
    document.querySelectorAll(".spa-bottom__item").forEach(function (e) {
      e.classList.remove("active")
    })
  }

})

// Событие скролла

document.addEventListener("scroll", function (e) {
  // дает активный класс кнопке которая поднимает к верху страницы
  let scrollY = window.scrollY;

  let mapOffset = document.querySelector(".header").clientHeight;

  if (scrollY >= mapOffset) {
    document.querySelector(".upper").classList.add("active")
  } else {
    document.querySelector(".upper").classList.remove("active")
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

// Пагинация на странице видео / фото

const photoVideoInit = document.querySelector(".photo-video");

if (photoVideoInit) {

  const dataVideoPhoto = '../../json/photo-video.json';

  fetch(dataVideoPhoto) // вызываем метод fetch
    .then((resp) => resp.json())
    .then(function (dataVideoPhoto) {

      let currentPage = 1;
      let rows = 6;

      function displayList(arrData, rowPerPage, page) {
        const postsEl = document.querySelector('.photo-video__list');
        postsEl.querySelectorAll("li").forEach(function (e) {
          e.remove()
        })
        page--;

        const start = rowPerPage * page;
        const end = start + rowPerPage;
        const paginatedData = arrData.slice(start, end);

        paginatedData.forEach((el) => {
          if (el.video) {
            let template = `
          <li class="photo-video__wrapper-el">
            <div class="photo-video__el">
              <video src=${el.video} preload="none" poster="./img/hero-x2.jpg" muted playsinline width="100"
                height="100"></video>
            </div>
            <strong class="photo-video__subtitle title-v13">
                ${el.name}
            </strong>
          </li>
          `;
            postsEl.insertAdjacentHTML("beforeend", template);
          }
          if (el.image) {
            let template = `
          <li class="photo-video__wrapper-el">
            <div class="photo-video__el gallery-wrapper-init">
                <picture>
                <source media="(min-width: 320px)"
                  srcset=${el.imageWebp} type="image/webp">
                <img src=${el.image} loading="lazy"
                  width="300" height="300" alt="Картинка">
              </picture>
              <a class="photo-video__see gallery-init" aria-label="Смотреть фото"><span>Посмотреть</span></a>
            </div>
          </li>
          `;
            postsEl.insertAdjacentHTML("beforeend", template);
          }
          if (el.images) {
            let template = `
            <li class="photo-video__wrapper-el">
              <div class="photo-video__el gallery-wrapper-init">
                  <picture>
                    <source media="(min-width: 320px)"
                      srcset=${el.images.imageWebp} type="image/webp">
                    <img src=${el.images.image} loading="lazy"
                      width="300" height="300" alt="Картинка">
                  </picture>
                  <picture>
                  <source media="(min-width: 320px)"
                    srcset=${el.images.imageWebp2} type="image/webp">
                  <img src=${el.images.image2} loading="lazy"
                    width="300" height="300" alt="Картинка">
                </picture>
                  <a class="photo-video__see gallery-init" aria-label="Смотреть фото"><span>Посмотреть</span></a>
              </div>
              <strong class="photo-video__subtitle title-v13">
                ${el.name}
              </strong>
            </li>
            `;
            postsEl.insertAdjacentHTML("beforeend", template);
          }

          // document.querySelectorAll(".photo-video-fslightbox").forEach(function(e) {
          //   e.setAttribute("data-fslightbox","gallery-events")
          // })

          let observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                entry.target.classList.add("active")
              }
            })
          }, {
            threshold: 0,
          })

          document.querySelectorAll(".photo-video__wrapper-el").forEach(function (e) {
            observer.observe(e)
          })
        })
      }

      function displayPagination(arrData, rowPerPage) {
        const paginationEl = document.querySelector('.photo-video-pagination');
        const pagesCount = Math.ceil(arrData.length / rowPerPage);
        const ulEl = document.createElement("div");
        ulEl.classList.add('photo-video-pagination__list');

        for (let i = 0; i < pagesCount; i++) {
          const liEl = displayPaginationBtn(i + 1);
          ulEl.appendChild(liEl)
        }
        paginationEl.appendChild(ulEl)
      }

      function displayPaginationBtn(page) {
        const liEl = document.createElement("a");
        liEl.classList.add('photo-video-pagination__item');
        liEl.classList.add('link-pagination');
        liEl.setAttribute("href", "#photoVideo");
        liEl.setAttribute("arial-label", "Показать другие картинки и видео");
        liEl.innerText = page;

        if (currentPage == page) liEl.classList.add('active-pagination');

        liEl.addEventListener('click', () => {
          currentPage = page
          displayList(dataVideoPhoto, rows, currentPage)

          let currentItemLi = document.querySelector('a.active-pagination');
          currentItemLi.classList.remove('active-pagination');

          liEl.classList.add('active-pagination');

          const linksPagination = document.querySelectorAll('.link-pagination');

          // добавляем обработчик события на каждую ссылку
          linksPagination.forEach(link => {
            link.addEventListener('click', function (event) {
              // отменяем стандартное поведение ссылки
              event.preventDefault();

              // получаем id элемента, на который ссылается якорь
              const id = this.getAttribute('href').substring(1);

              // находим элемент на странице по id
              const element = document.getElementById(id);

              // вычисляем координаты элемента на странице
              const top = element.getBoundingClientRect().top + window.pageYOffset;

              // запускаем анимацию скролла к элементу
              window.scrollTo({
                top,
                behavior: 'smooth'
              });
            });
          });

          window.scrollTo({
            top,
            behavior: 'smooth'
          });

          function gsapTopper() {
            gsap.to(photoVideoInit, {
              onComplete: () => ScrollTrigger.refresh()
            });
          }

          setTimeout(gsapTopper, 700)

        })

        return liEl;
      }

      displayList(dataVideoPhoto, rows, currentPage);
      displayPagination(dataVideoPhoto, rows);

      gsap.to(photoVideoInit, {
        onComplete: () => ScrollTrigger.refresh()
      });
    })
    .catch(function (error) {
      console.log(error);
    });

}

// Плагин галереи

const innerGalleryInit = document.querySelector(".gal-init");

const innerGallery = document.querySelector(".wrapper-gallery"); // Оболочка самой галереи

const wrapperGalleryContent = document.querySelector(".wrapper-gallery__content"); // Оболочка галереи где лежат все картинки

const wrapperGalleryButtons = document.querySelectorAll(".wrapper-gallery__button"); // Общий класс кнопок

const wrapperGalleryNext = document.querySelector(".wrapper-gallery-next"); // Кнопка листающая фотографии вперед

const wrapperGalleryPrev = document.querySelector(".wrapper-gallery-prev"); // Кнопка листающая фотографии назад

const wrapperGalleryNums = document.querySelector(".wrapper-gallery-nums");

const wrapperGalleryNumsActive = document.querySelector(".wrapper-gallery-nums__active");

const wrapperGalleryNumsAll = document.querySelector(".wrapper-gallery-nums__all");

const wrapperGallery = document.querySelector(".gal-init");

if (innerGalleryInit) {
  window.addEventListener("click", function (e) {

    const elementInteractive = e.target;

    if (elementInteractive.closest(".gallery-init")) { // Клик на кнопку которая инициализирует галерею

      setTimeout(bodyBlock, 300);

      const galleryInitWrapper = elementInteractive.closest(".gallery-wrapper-init");

      const galleryInitImgSrc = galleryInitWrapper.querySelector("img").getAttribute("src");

      const wrapperGalleryLength = wrapperGallery.querySelectorAll("img").length;

      const wrapperGalleryImg = wrapperGallery.querySelectorAll("img");

      const wrapperGalleryImgLength = wrapperGallery.querySelectorAll("img").length;

      wrapperGalleryNumsAll.innerHTML = wrapperGalleryImgLength;

      if (wrapperGalleryLength != 0) { // Проверяем есть ли картинки, если они есть, то галерея инициализируется

        innerGallery.classList.add("active"); // Даем активный класс для оболочки галереи

        wrapperGalleryPrev.classList.add("disabled");

        if (wrapperGalleryLength > 1) { // Если картинок больше чем 1, то кнопкам дается активный класс
          wrapperGalleryButtons.forEach(function (e) {
            e.classList.add("active");
          })
        }

        wrapperGalleryImg.forEach(function (e) {
          let galleryImg = document.createElement("img"); // Создаем элемент img
          galleryImg.setAttribute("src", `${e.getAttribute("src")}`); // Добавляем атрибут src с картинкой
          galleryImg.setAttribute("width", "300"); // Добавляем атрибут ширины
          galleryImg.setAttribute("height", "300"); // Добавляем атрибут высоты
          galleryImg.setAttribute("loading", "lazy"); // Добавляем атрибут loading с медленной загрузкой
          galleryImg.setAttribute("alt", "Фотография из галереи"); // Добавляем атрибут alt с описанием
          wrapperGalleryContent.append(galleryImg); // Добавляем картинку в оболочку галереи где лежат картинки
        })

        wrapperGalleryContent.querySelectorAll("img").forEach(function (e, i) {
          let src = e.getAttribute("src");
          if (src === galleryInitImgSrc) {
            e.classList.add("gallery-active-photo");
            if (e.classList.contains("gallery-active-photo")) {
              wrapperGalleryNumsActive.innerHTML = i + 1;
            }
            let galleryItemActive = document.querySelectorAll(".gallery-active-photo");
            if (galleryItemActive[0].previousElementSibling) {
              wrapperGalleryPrev.classList.remove("disabled");
            } else {
              wrapperGalleryPrev.classList.add("disabled");
            }
            if (galleryItemActive[0].nextElementSibling) {
              wrapperGalleryNext.classList.remove("disabled");
            } else {
              wrapperGalleryNext.classList.add("disabled");
            }
          }
        })

      }

    }

    if (elementInteractive.closest(".wrapper-gallery__exit")) { // Закрывает галерею по крестику

      document.body.style.overflow = "";

      innerGallery.classList.remove("active"); // Удаляет активный класс у галереи

      wrapperGalleryContent.querySelectorAll("img").forEach(function (e) { // Удаляем все картинки, тем самым очищаем галерею
        e.classList.remove("gallery-active-photo");
        e.remove();
      })

      wrapperGalleryButtons.forEach(function (e) { // Проходимся по кнопкам
        e.classList.remove("active"); // Удаляем класс у кнопок
        e.classList.remove("disabled"); // Удаляем класс у кнопок
      })
    }

    if (elementInteractive.closest(".wrapper-gallery__close")) { // Закрывает галерею при нажатии вне крестика

      document.body.style.overflow = "";

      innerGallery.classList.remove("active"); // Удаляет активный класс у галереи

      wrapperGalleryContent.querySelectorAll("img").forEach(function (e) { // Удаляем все картинки, тем самым очищаем галерею
        e.classList.remove("gallery-active-photo");
        e.remove();
      })

      wrapperGalleryButtons.forEach(function (e) { // Проходимся по кнопкам
        e.classList.remove("active"); // Удаляем класс у кнопок
        e.classList.remove("disabled"); // Удаляем класс у кнопок
      })
    }
  })

  wrapperGalleryNext.addEventListener("click", function () { // Листаем картинки вперед
    if (document.querySelector(".gallery-active-photo").nextElementSibling) { // Проверяем есть ли перед активным классом ещё элементы
      document.querySelector(".gallery-active-photo").nextElementSibling.classList.add("gallery-active-photo"); // Если есть, то даем этому элементу активный класс
      let galleryActivePhotoLength = document.querySelectorAll(".gallery-active-photo").length;
      let galleryActivePhotos = document.querySelectorAll(".gallery-active-photo");
      if (galleryActivePhotoLength > 1) {
        if (galleryActivePhotos[1].previousElementSibling) {
          galleryActivePhotos[1].previousElementSibling.classList.remove("gallery-active-photo");
          wrapperGalleryContent.querySelectorAll("img").forEach(function (e, i) {
            if (e.classList.contains("gallery-active-photo")) {
              wrapperGalleryNumsActive.innerHTML = i + 1;
            }
          })
          if (galleryActivePhotos[1].nextElementSibling) {
            wrapperGalleryPrev.classList.remove("disabled");
          } else {
            wrapperGalleryNext.classList.add("disabled");
          }
        }
      }
    }
  })

  wrapperGalleryPrev.addEventListener("click", function () { // Листаем картинки назад
    if (document.querySelector(".gallery-active-photo").previousElementSibling) { // Проверяем есть ли перед активным классом ещё элементы
      document.querySelector(".gallery-active-photo").previousElementSibling.classList.add("gallery-active-photo"); // Если есть, то даем этому элементу активный класс
      let galleryActivePhotoLength = document.querySelectorAll(".gallery-active-photo").length;
      let galleryActivePhotos = document.querySelectorAll(".gallery-active-photo");
      if (galleryActivePhotoLength > 1) {
        if (galleryActivePhotos[0].nextElementSibling) {
          galleryActivePhotos[0].nextElementSibling.classList.remove("gallery-active-photo");
          wrapperGalleryContent.querySelectorAll("img").forEach(function (e, i) {
            if (e.classList.contains("gallery-active-photo")) {
              wrapperGalleryNumsActive.innerHTML = i + 1;
            }
          })
          wrapperGalleryNext.classList.remove("disabled");
          if (galleryActivePhotos[0].previousElementSibling) {
            wrapperGalleryNext.classList.remove("disabled");
          } else {
            wrapperGalleryPrev.classList.add("disabled");
          }
        }
      }

    }
  })
}

// Плавный скролл по якорям

const links = document.querySelectorAll('.link-anchor');

// добавляем обработчик события на каждую ссылку
links.forEach(link => {
  link.addEventListener('click', function (event) {
    // отменяем стандартное поведение ссылки
    event.preventDefault();

    // получаем id элемента, на который ссылается якорь
    const id = this.getAttribute('href').substring(1);

    // находим элемент на странице по id
    const element = document.getElementById(id);

    // вычисляем координаты элемента на странице
    const top = element.getBoundingClientRect().top + window.pageYOffset;

    // запускаем анимацию скролла к элементу
    window.scrollTo({
      top,
      behavior: 'smooth'
    });
  });
});

const napitkiInit = document.querySelector(".napitki");

if (napitkiInit) {
  let observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("active")
      }
    })
  }, {
    threshold: 0,
  })

  document.querySelectorAll(".napitki-content__item").forEach(function (e) {
    observer.observe(e)
  })
}

const heroPrecetItem = document.querySelector(".hero__precet-item");
const heroPrecentVideo = document.querySelector(".hero__precet-video");

if (heroPrecetItem) {
  if (document.body.clientWidth >= 1024) {
    let template = `
      <video class="hero__precet-video" src="./video/video-decstop.mp4" autoplay loop preload="none" muted playsinline width="100" height="100"></video>
      `;
    heroPrecetItem.insertAdjacentHTML("beforeend", template);
  } else if (document.body.clientWidth <= 600) {
    let template = `
      <video class="hero__precet-video" src="./video/video-mobile.mp4" autoplay loop preload="none" muted playsinline width="100" height="100"></video>
      `;
    heroPrecetItem.insertAdjacentHTML("beforeend", template);
  } else if (document.body.clientWidth <= 1024) {
    let template = `
      <video class="hero__precet-video" src="./video/video-tablet.mp4" autoplay loop preload="none" muted playsinline width="100" height="100"></video>
      `;
    heroPrecetItem.insertAdjacentHTML("beforeend", template);
  }
}
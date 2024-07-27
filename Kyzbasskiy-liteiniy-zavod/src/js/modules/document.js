document.documentElement.classList.add("loaded");

// Интерактив с элементами - событие клик
  
document.addEventListener("click", function (e) {

  const elementInteractive = e.target; 

  if (elementInteractive.closest(".all-form-init")) { // Открытие и закрытие формы обратной связи
    document.querySelector(".all-form-wrapper").classList.add("active");
    menu.classList.remove("menu-active");
    document.body.style.overflow = "";
  }
  if (elementInteractive.closest(".all-form-wrapper__close")) { // Открытие и закрытие формы обратной связи 
    document.querySelector(".all-form-wrapper").classList.remove("active");
  }
  if (elementInteractive.closest(".all-form-wrapper__exit")) { // Открытие и закрытие формы обратной связи
    document.querySelector(".all-form-wrapper").classList.remove("active");
  }

  if (elementInteractive.closest(".video-init")) { // Открытие и закрытие формы обратной связи
    document.querySelector(".wrapper-video").classList.add("active");
  }
  if (elementInteractive.closest(".wrapper-video__close")) { // Открытие и закрытие формы обратной связи 
    document.querySelector(".wrapper-video").classList.remove("active");
  }
  if (elementInteractive.closest(".wrapper-video__exit")) { // Открытие и закрытие формы обратной связи
    document.querySelector(".wrapper-video").classList.remove("active");
  }

  if (elementInteractive.closest(".wrapper-states__close")) { // Открытие и закрытие попапа удачной отправки
    document.querySelector(".wrapper-send").classList.remove("active");
    document.querySelector(".wrapper-okay").classList.remove("active");
    document.querySelector(".wrapper-error").classList.remove("active");
  }

  if (elementInteractive.closest(".accordeon-init")) { // Аккордеон
    const accordeonFather = elementInteractive.closest(".accordeon-father");
    const accordeonFatherAll = document.querySelectorAll(".accordeon-father");
    const accordeonFatherContent = accordeonFather.querySelector(".accordeon-content");
    const accordeonFatherContentO = accordeonFather.querySelector(".accordeon-overflow"); // для того чтобы была видна картинка при ховере в аккордеоне на странице продукция

    function overflowVisible() { // для того чтобы была видна картинка при ховере в аккордеоне на странице продукция
      accordeonFatherContentO.style.overflow = "visible";
    }

    if (accordeonFatherContentO) {
      if (!accordeonFather.classList.contains("active")) {
        accordeonFatherAll.forEach(function (e) {
          e.classList.remove("active");
          e.querySelector(".accordeon-overflow").style.overflow = "hidden"; // для того чтобы была видна картинка при ховере в аккордеоне на странице продукция
          gsap.to(e.querySelector(".accordeon-content"), {
            height: 0,
          });
        })
        setTimeout(overflowVisible, 500); // для того чтобы была видна картинка при ховере в аккордеоне на странице продукция
        accordeonFather.classList.add("active");

        gsap.to(accordeonFatherContent, {
          height: "auto",
        });

      } else {
        accordeonFatherContentO.style.overflow = "hidden"; // для того чтобы была видна картинка при ховере в аккордеоне на странице продукция
        gsap.to(accordeonFatherContent, {
          height: 0,
        });
        accordeonFather.classList.remove("active");
      }
    } else {
      if (!accordeonFather.classList.contains("active")) {
        accordeonFatherAll.forEach(function (e) {
          e.classList.remove("active");
          gsap.to(e.querySelector(".accordeon-content"), {
            height: 0,
          });
        })
        accordeonFather.classList.add("active");

        gsap.to(accordeonFatherContent, {
          height: "auto",
        });

      } else {
        gsap.to(accordeonFatherContent, {
          height: 0,
        });
        accordeonFather.classList.remove("active");
      }
    }
  }

  if (elementInteractive.closest(".vakancy__video")) { // Включение видео на странице продукция
    const vakancyVideo = elementInteractive.closest(".vakancy__video");
    vakancyVideo.classList.add("active");
    vakancyVideo.querySelector("video").setAttribute("controls", "controls");
    vakancyVideo.querySelector("video").play();
  }

  if (elementInteractive.closest(".vakancy__icon")) { // Включение видео на странице продукция
    const vakancyVideo = elementInteractive.closest(".vakancy__video");
    vakancyVideo.classList.add("active");
    vakancyVideo.querySelector("video").setAttribute("controls", "controls");
    vakancyVideo.querySelector("video").play();
  }

});

// Интерактив с элементами - событие ховер

document.addEventListener("mouseover", function (e) {

  const elementInteractive = e.target;

  if (elementInteractive.closest(".prodykcia-list__subitem")) { // Открытие и закрытие бургера
    const prodykciaListSubitemAll = document.querySelectorAll(".prodykcia-list__subitem");

    prodykciaListSubitemAll.forEach(function (e) {
      e.classList.remove("active");
    })

    elementInteractive.closest(".prodykcia-list__subitem").classList.add("active");
  }

  if (!elementInteractive.closest(".prodykcia-list__subitem")) { // Открытие и закрытие бургера
    const prodykciaListSubitemAll = document.querySelectorAll(".prodykcia-list__subitem");

    prodykciaListSubitemAll.forEach(function (e) {
      e.classList.remove("active");
    })
  }

});

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

// Безопасный падинг для блока hero, чтобы хеадер не наехал на него

const header = document.querySelector(".header");

const heroContainer = document.querySelector(".hero__container");

if (heroContainer) {
  heroContainer.style.paddingTop = header.scrollHeight + 30 + "px";
}

// Перекидывание элемента на странице about в блоке about-top

const aboutTopLeftTop = document.querySelector(".about-top__left-top");

if (aboutTopLeftTop) {

  let aboutTopItemOne = document.querySelector(".about-top__item_2");

  if (document.body.clientWidth < 1441) {
    aboutTopLeftTop.append(aboutTopItemOne);
  }

}

// Транзишен для элементов vakancy-list__item

const vakancyListItem = document.querySelector(".vakancy-list__item");

if (vakancyListItem) {
  const vakancyListItemAll = document.querySelectorAll(".vakancy-list__item");
  let transDelayW = 0.03;
  vakancyListItemAll.forEach(function (e) {
    let transDelay = 0.03;
    let transDelayQ = transDelayW + transDelay;
    transDelayW = transDelayQ;

    e.style.transitionDelay = transDelayW + "s";
  })
}

// Транзишен для элементов prodykcia-list__item

const prodykciaListItem = document.querySelector(".prodykcia-list__item");

if (prodykciaListItem) {
  const prodykciaListItemAll = document.querySelectorAll(".prodykcia-list__item");
  let transDelayW = 0.03;
  prodykciaListItemAll.forEach(function (e) {
    let transDelay = 0.03;
    let transDelayQ = transDelayW + transDelay;
    transDelayW = transDelayQ;

    e.style.transitionDelay = transDelayW + "s";
  })
}

// Транзишен для элементов nav__item

// const navItem = document.querySelector(".nav__item");

// if (navItem) {
//   const navItemAll = document.querySelectorAll(".nav__item");
//   let transDelayW = 0.03;
//   navItemAll.forEach(function (e) {
//     let transDelay = 0.03;
//     let transDelayQ = transDelayW + transDelay;
//     transDelayW = transDelayQ;

//     e.style.transitionDelay = transDelayW + "s";
//   })
// }

// Транзишен для элементов hero-slider__slide

// const heroItemItem = document.querySelector(".hero-slider__slide");

// if (heroItemItem) {
//   const heroItemItemAll = document.querySelectorAll(".hero-slider__slide");
//   let transDelayW = 0.05;
//   heroItemItemAll.forEach(function (e) {
//     let transDelay = 0.05;
//     let transDelayQ = transDelayW + transDelay;
//     transDelayW = transDelayQ;

//     e.style.transitionDelay = transDelayW + "s";
//   })
// }

// Транзишен для элементов benefits__item

const benefitsItem = document.querySelector(".benefits__item");

if (benefitsItem) {
  const benefitsItemAll = document.querySelectorAll(".benefits__item");
  let transDelayW = 0.10;
  benefitsItemAll.forEach(function (e) {
    let transDelay = 0.05;
    let transDelayQ = transDelayW + transDelay;
    transDelayW = transDelayQ;

    e.style.transitionDelay = transDelayW + "s";
  })
}

// Транзишен для элементов benefits-downloads__item

const benefitsDownloadsItem = document.querySelector(".benefits-downloads__item");

if (benefitsDownloadsItem) {
  const benefitsDownloadsItemAll = document.querySelectorAll(".benefits-downloads__item");
  let transDelayW = 0.10;
  benefitsDownloadsItemAll.forEach(function (e) {
    let transDelay = 0.05;
    let transDelayQ = transDelayW + transDelay;
    transDelayW = transDelayQ;

    e.style.transitionDelay = transDelayW + "s";
  })
}

// Транзишен для элементов partners__item

const partnersItem = document.querySelector(".partners__item");

if (partnersItem) {
  const partnersItemAll = document.querySelectorAll(".partners__item");
  let transDelayW = 0.10;
  partnersItemAll.forEach(function (e) {
    let transDelay = 0.05;
    let transDelayQ = transDelayW + transDelay;
    transDelayW = transDelayQ;

    e.style.transitionDelay = transDelayW + "s";
  })
}

// Вырубаем aos у оболочек кнопок слайдера

if (document.body.clientWidth <= 992) {
  document.querySelectorAll(".prodykcia__wrapper-button").forEach(function (e) {
    e.dataset.aos = "";
  })
};

const prodykciaListItemInit = document.querySelector(".prodykcia-list__item");

if(prodykciaListItemInit) {
  let observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
        console.log(entry)
      } else {
        entry.target.classList.remove("visible")
      }
    })
  }, {
    threshold: 0,
  })
  
  document.querySelectorAll(".prodykcia-list__item").forEach(function (e) {
    observer.observe(e)
  })
}
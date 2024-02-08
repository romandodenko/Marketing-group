document.documentElement.classList.add("loaded");

const preload = document.querySelector(".preload");

const preloadScrollbarItem = document.querySelector(".preload__scrollbar-item");

let preloadScrollbarItemWidth = 0;

// Прелоад

if (preload) {
  function preloadItemScrollbar() {
    if (preloadScrollbarItemWidth !== 100) {
      document.body.style.overflow = "hidden";
      preloadScrollbarItemWidth += 20;
      preloadScrollbarItem.style.width = preloadScrollbarItemWidth + "%"
    } else {
      document.body.style.overflow = "";
      preload.classList.add("disabled");
    }
  }
  setInterval(preloadItemScrollbar, 100)
}


const menu = document.querySelector(".header-menu");

const burger = document.querySelector(".burger");

const headerMenuExit = document.querySelector(".header-menu__exit");

const wrapperAllForm = document.querySelector(".wrapper-all-form");

document.addEventListener("click", function (e) {

  const elementInteractive = e.target;
  // Открытие и закрытие бургера
  if (elementInteractive.closest(".burger")) {
    menu.classList.add("active");
    burger.classList.add("active");
    headerMenuExit.classList.add("active");
  }

  if (elementInteractive.closest(".header-menu__exit")) {
    menu.classList.remove("active");
    burger.classList.remove("active");
    headerMenuExit.classList.remove("active");
  }

  if (elementInteractive.closest(".header-menu__close")) {
    menu.classList.remove("active");
    burger.classList.remove("active");
    headerMenuExit.classList.remove("active");
  }

  if (elementInteractive.closest(".header-menu__element")) {
    menu.classList.remove("active");
    burger.classList.remove("active");
    headerMenuExit.classList.remove("active");
  }

  // Аккордеон в хеадер меню
  if (elementInteractive.closest(".header-menu__item-top")) {

    const headerMenuItem = elementInteractive.closest(".header-menu__item");

    const headerMenuBottom = headerMenuItem.querySelector(".header-menu__bottom");

    if (!headerMenuItem.classList.contains("active")) {

      document.querySelectorAll(".header-menu__item").forEach(function (e) {
        e.classList.remove("active");
        let headerMenuBottom = e.querySelector(".header-menu__bottom");
        gsap.to(headerMenuBottom, {
          height: 0,
          duration: .3,
        });
      })

      headerMenuItem.classList.add("active");

      gsap.to(headerMenuBottom, {
        height: "auto",
        duration: .3,
      });

    } else {

      headerMenuItem.classList.remove("active");

      gsap.to(headerMenuBottom, {
        height: 0,
        duration: .3,
      });
    }
  }

  // Аккордеон на странице охрана труда, документы
  if (elementInteractive.closest(".documents__item-top")) {

    const headerMenuItem = elementInteractive.closest(".documents__item");

    const headerMenuBottom = headerMenuItem.querySelector(".documents__bottom");

    if (!headerMenuItem.classList.contains("active")) {

      document.querySelectorAll(".documents__item").forEach(function (e) {
        e.classList.remove("active");
        let headerMenuBottom = e.querySelector(".documents__bottom");
        gsap.to(headerMenuBottom, {
          height: 0,
          duration: .3,
        });
      })

      headerMenuItem.classList.add("active");

      gsap.to(headerMenuBottom, {
        height: "auto",
        duration: .3,
      });

    } else {

      headerMenuItem.classList.remove("active");

      gsap.to(headerMenuBottom, {
        height: 0,
        duration: .3,
      });
    }
  }

  // Аккордеон на странице извещение
  if (elementInteractive.closest(".accordeon-init")) {

    const accordeonItem = elementInteractive.closest(".accordeon-father");

    const accordeonItemBottom = accordeonItem.querySelector(".accordeon-bottom");

    if (!accordeonItem.classList.contains("active")) {

      document.querySelectorAll(".accordeon-father").forEach(function (e) {
        e.classList.remove("active");
        let accordeonItemBottom = e.querySelector(".accordeon-bottom");
        gsap.to(accordeonItemBottom, {
          height: 0,
          duration: .3,
        });
      })

      accordeonItem.classList.add("active");

      gsap.to(accordeonItemBottom, {
        height: "auto",
        duration: .3,
      });

    } else {

      accordeonItem.classList.remove("active");

      gsap.to(accordeonItemBottom, {
        height: 0,
        duration: .3,
      });
    }
  }

  // Аккордеон на странице тендеры при адаптиве
  if (elementInteractive.closest(".tenderi__button")) {

    const tenderiRow = elementInteractive.closest(".tenderi__row");

    const tenderiTrBottom = tenderiRow.querySelector(".tenderi__tr_bottom");

    if (!tenderiRow.classList.contains("active")) {

      document.querySelectorAll(".tenderi__row").forEach(function (e) {
        e.classList.remove("active");
        let tenderiTrBottom = e.querySelector(".tenderi__tr_bottom");
        gsap.to(tenderiTrBottom, {
          height: 0,
          duration: .3,
        });
      })

      tenderiRow.classList.add("active");

      gsap.to(tenderiTrBottom, {
        height: "auto",
        duration: .3,
      });

    } else {

      tenderiRow.classList.remove("active");

      gsap.to(tenderiTrBottom, {
        height: 0,
        duration: .3,
      });
    }
  }

  // Раскрытие текста в карточках новостей
  if (elementInteractive.closest(".news-init")) {
    const newsInit = elementInteractive.closest(".news-init");
    const newsFather = elementInteractive.closest(".news-father");
    newsFather.classList.toggle("active")
    newsInit.classList.toggle("active")
  }

  // Открытие общей формы через кнопку Обратная связь 
  if (elementInteractive.closest(".header__button")) {
    wrapperAllForm.classList.add("active");
  }
   // Закрытие общей формы которая открывается через кнопку обратная связь
   if (elementInteractive.closest(".wrapper-all-form__close")) {
    wrapperAllForm.classList.remove("active");
  }
   // Закрытие общей формы которая открывается через кнопку обратная связь
   if (elementInteractive.closest(".wrapper-all-form__exit")) {
    wrapperAllForm.classList.remove("active");
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

// Перекидывание элементов в таблице на странице тендеры, раздел поставщикам и подрядчикам

const tenderi = document.querySelector(".tenderi");

const tenderiRow = document.querySelectorAll(".tenderi__row");

if (tenderi) {

  tenderiRow.forEach(function (e) {
    let tenderiTrTop = e.querySelector(".tenderi__tr_top");
    let tenderiTrBottom = e.querySelector(".tenderi__tr_bottom");
    let tenderiTdOtkrita = e.querySelector(".tenderi__td_otkrita");
    let tenderiTdOtkritapo = e.querySelector(".tenderi__td_otkritapo");
    let tenderiTdPostavkapo = e.querySelector(".tenderi__td_postavkapo");
    let tenderiTdStatus = e.querySelector(".tenderi__td_status");

    if (document.body.clientWidth < 992) {
      tenderiTrBottom.append(tenderiTdPostavkapo);
      tenderiTrBottom.append(tenderiTdStatus);
    }

    if (document.body.clientWidth < 768) {
      tenderiTrBottom.append(tenderiTdOtkritapo);
      tenderiTrBottom.append(tenderiTdOtkrita);
    }
  })

}

const pageVideo = document.querySelector(".page-video");

if (pageVideo) {
  if (document.body.clientWidth >= 1024) {
    let template = `
      <video class="page-video__video" src="./video/hero/video-main-decstop.mp4" autoplay loop preload="none" muted playsinline width="100" height="100"></video>
      `;
      pageVideo.insertAdjacentHTML("beforeend", template);
  } else if (document.body.clientWidth <= 600) {
    let template = `
      <video class="page-video__video" src="./video/hero/video-main-mobile.mp4" autoplay loop preload="none" muted playsinline width="100" height="100"></video>
      `;
      pageVideo.insertAdjacentHTML("beforeend", template);
  } else if (document.body.clientWidth <= 1024) {
    let template = `
      <video class="page-video__video" src="./video/hero/video-main-tablet.mp4" autoplay loop preload="none" muted playsinline width="100" height="100"></video>
      `;
      pageVideo.insertAdjacentHTML("beforeend", template);
  }
}
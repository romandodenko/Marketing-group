// Слайдер

const restoransSliderInit = document.querySelector(".restorans-slider");

if (document.body.clientWidth >= 1024) {
  if (restoransSliderInit) {
    const restoransSlider = new Swiper('.restorans-slider', {
      loop: true,
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: 'auto',
      centeredSlides: true, // активный слайд будет в центре
      direction: 'horizontal',
      speed: 600, // Автовоспроизведение
      parallax: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        waitForTransition: false,
        },
      scrollbar: {
        el: '.restorans-slider-scrollbar',
        draggable: true, // позволяет сделать полосу прокрутки перетаскиваемой
      },
      breakpoints: {
        320: {
          spaceBetween: 0
        },
        501: {
          spaceBetween: 20
        },
        992: {
          spaceBetween: 40
        }
      },
    });
  }
}

if (document.body.clientWidth <= 1024) {
  if (restoransSliderInit) {
    const restoransSlider = new Swiper('.restorans-slider', {
      loop: true,
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: 'auto',
      centeredSlides: true, // активный слайд будет в центре
      direction: 'horizontal',
      speed: 600, // Автовоспроизведение
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        waitForTransition: false,
        },
      scrollbar: {
        el: '.restorans-slider-scrollbar',
        draggable: true, // позволяет сделать полосу прокрутки перетаскиваемой
      },
      breakpoints: {
        320: {
          spaceBetween: 0
        },
        501: {
          spaceBetween: 20
        },
        992: {
          spaceBetween: 40
        }
      },
    });
  }
}

const photoSliderInit = document.querySelector(".photo-slider");

if (photoSliderInit) {
  const restoransSlider = new Swiper('.photo-slider', {
    observer: true,
    observeParents: true,
    watchOverflow: true,
    slidesPerView: 1,
    centeredSlides: true, // активный слайд будет в центре
    direction: 'horizontal',
    parallax: true,
    speed: 600, // Автовоспроизведение
    navigation: {
      nextEl: '.photo-slider-button-next',
      prevEl: '.photo-slider-button-prev',
    },
  });
}

const menuRestarauntSliderinit = document.querySelector(".menu-restaraunt-slider");

if (document.body.clientWidth <= 1024) {
  if (menuRestarauntSliderinit) {
    const menuRestarauntSlider = new Swiper('.menu-restaraunt-slider', {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: 'auto',
      speed: 600,
      direction: 'horizontal',
      navigation: {
        nextEl: '.menu-restaraunt-button-next',
        prevEl: '.menu-restaraunt-button-prev',
      },
      breakpoints: {
        320: {
          spaceBetween: 10
        },
        601: {
          spaceBetween: 20
        },
        1025: {
          spaceBetween: 30,
        }
      },
    });
  }
}

const likesSliderInit = document.querySelector(".likes-slider");

if (likesSliderInit) {
  const likesSlider = new Swiper('.likes-slider', {
    observer: true,
    observeParents: true,
    watchOverflow: true,
    speed: 600,
    slidesPerView: 'auto',
    direction: 'horizontal',
    navigation: {
      nextEl: '.like-button-next',
      prevEl: '.like-button-prev',
    },
    breakpoints: {
      320: {
        spaceBetween: 10
      },
      601: {
        spaceBetween: 20
      },
      992: {
        spaceBetween: 40
      }
    },
  });
}

const blockHotelSliderInit = document.querySelector(".block-hotel-slider");

if (document.body.clientWidth <= 992) {
  if (blockHotelSliderInit) {
    const blockHotelSlider = new Swiper('.block-hotel-slider', {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: 'auto',
      direction: 'horizontal',
      speed: 600, // Автовоспроизведение
      pagination: {
        el: '.block-hotel-pagination',
        clickable: true,
      },
      breakpoints: {
        320: {
          spaceBetween: 10
        },
        501: {
          spaceBetween: 20
        },
        992: {
          spaceBetween: 40
        }
      },
    });
  }
}

const aboutReviewsSliderInit = document.querySelector(".about-reviews-slider");

if (aboutReviewsSliderInit) {
  const aboutReviewsSlider = new Swiper('.about-reviews-slider', {
    observer: true,
    observeParents: true,
    watchOverflow: true,
    slidesPerView: "auto",
    direction: 'horizontal',
    speed: 600,
    navigation: {
      nextEl: '.about-reviews-slider-button-next',
      prevEl: '.about-reviews-slider-button-prev',
    },
    breakpoints: {
      320: {
        spaceBetween: 10
      },
      601: {
        spaceBetween: 20
      },
      992: {
        spaceBetween: 40
      }
    },
  });
}

const infoHotelSliderInit = document.querySelector(".info-hotel-slider");

if (infoHotelSliderInit) {
  if (document.body.clientWidth <= 601) {
    const infoHotelSliderOne = new Swiper('.info-hotel-slider-1', {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: "auto",
      direction: 'horizontal',
      speed: 400,
      spaceBetween: 0,
      navigation: {
        nextEl: '.info-hotel-slider-1-next',
        prevEl: '.info-hotel-slider-1-prev',
      },
    });

    const infoHotelSliderTwo = new Swiper('.info-hotel-slider-2', {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: "auto",
      direction: 'horizontal',
      speed: 400,
      spaceBetween: 0,
      navigation: {
        nextEl: '.info-hotel-slider-2-next',
        prevEl: '.info-hotel-slider-2-prev',
      },
    });
  }
}


const edaSliderInit = document.querySelector(".eda-slider");

if (edaSliderInit) {
  if (document.body.clientWidth <= 991) {
    const edaSliderSpa = new Swiper('.eda-slider', {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: "auto",
      direction: 'horizontal',
      speed: 400,
      navigation: {
        nextEl: '.eda-slider-button-next',
        prevEl: '.eda-slider-button-prev',
      },
      breakpoints: {
        320: {
          spaceBetween: 20
        },
        601: {
          spaceBetween: 40
        }
      },
    });
  }
  if (document.body.clientWidth <= 991) {
    const edaSliderSpa1 = new Swiper('.eda-slider_spa-1', {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: "auto",
      direction: 'horizontal',
      speed: 400,
      navigation: {
        nextEl: '.eda-slider-spa-1-next',
        prevEl: '.eda-slider-spa-1-prev',
      },
      breakpoints: {
        320: {
          spaceBetween: 20
        },
        601: {
          spaceBetween: 40
        }
      },
    });
    const edaSliderSpa2 = new Swiper('.eda-slider_spa-2', {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: "auto",
      direction: 'horizontal',
      speed: 400,
      navigation: {
        nextEl: '.eda-slider-spa-2-next',
        prevEl: '.eda-slider-spa-2-prev',
      },
      breakpoints: {
        320: {
          spaceBetween: 20
        },
        601: {
          spaceBetween: 40
        }
      },
    });
  }
  if (document.body.clientWidth <= 991) {
    const edaSliderBanniy = new Swiper('.eda-slider_banniy', {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: "auto",
      direction: 'horizontal',
      speed: 400,
      navigation: {
        nextEl: '.eda-slider-banniy-next',
        prevEl: '.eda-slider-banniy-prev',
      },
      breakpoints: {
        320: {
          spaceBetween: 20
        },
        601: {
          spaceBetween: 40
        }
      },
    });
  }
}

const restarauntSliderInit = document.querySelector(".restoraunt-gallery-slider");

if (document.body.clientWidth <= 992) {
  if (restarauntSliderInit) {
    const blockHotelSlider = new Swiper('.restoraunt-gallery-slider', {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: 'auto',
      direction: 'horizontal',
      speed: 600, // Автовоспроизведение
      pagination: {
        el: '.restoraunt-gallery-pagination',
        clickable: true,
      },
      breakpoints: {
        320: {
          spaceBetween: 10
        },
        501: {
          spaceBetween: 20
        },
        992: {
          spaceBetween: 40
        }
      },
    });
  }
}
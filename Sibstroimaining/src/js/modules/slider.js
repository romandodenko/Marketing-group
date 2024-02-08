// Слайдеры

const heroSliderInit = document.querySelector(".hero-bottom-slider");

if (heroSliderInit) {
  const heroSlider = new Swiper('.hero-bottom-slider', {
    loop: true,
    observer: true,
    observeParents: true,
    watchOverflow: true,
    slidesPerView: 1,
    spaceBetween: 32,
    speed: 500, // Автовоспроизведение
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.hero-bottom-slider-pagination',
      clickable: true,
    },
    breakpoints: {
      320: {
        direction: 'horizontal',
      },
      1024: {
        direction: 'vertical',
      },
    },
  });

}

const rewievsSliderInit = document.querySelector(".rewievs-slider");

if (rewievsSliderInit) {
  const rewievsSlider = new Swiper('.rewievs-slider', {
    observer: true,
    observeParents: true,
    watchOverflow: true,
    slidesPerView: 1,
    spaceBetween: 0,
    direction: 'horizontal',
    navigation: {
      nextEl: '.rewievs-button-next',
      prevEl: '.rewievs-button-prev',
    },
  });
}

const documentsSliderInit = document.querySelector(".documents-slider");

if (documentsSliderInit) {
  if (document.body.clientWidth <= 991) {
    const documentsSlider = new Swiper('.documents-slider', {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: "auto",
      spaceBetween: 10,
      direction: 'horizontal',
      navigation: {
        nextEl: '.documents-slider-button-next',
        prevEl: '.documents-slider-button-prev',
      },
    });
  }
}

const projectSliderInit = document.querySelector(".project-slider");

if (projectSliderInit) {
  if (document.body.clientWidth <= 992) {
    const projectSlider = new Swiper('.project-slider', {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: 1,
      spaceBetween: 0,
      direction: 'horizontal',
      navigation: {
        nextEl: '.project-slider-button-next',
        prevEl: '.project-slider-button-prev',
      },
    });
  }
}
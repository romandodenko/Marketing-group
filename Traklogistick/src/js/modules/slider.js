// Слайдер

const parkSliderInit = document.querySelector(".park-slider");

if (parkSliderInit) {
  const parkSlider = new Swiper('.park-slider', {
    observer: true,
    observeParents: true,
    watchOverflow: true,
    slidesPerView: 1,
    speed: 600,
    allowTouchMove: false,
    direction: 'horizontal',
    navigation: {
      nextEl: '.park-slider-button-next',
      prevEl: '.park-slider-button-prev',
    },
    breakpoints: {
      320: {
        spaceBetween: 10,
      },
      480: {
        spaceBetween: 15,
      },
      640: {
        spaceBetween: 20,
      }
    },
  });
}
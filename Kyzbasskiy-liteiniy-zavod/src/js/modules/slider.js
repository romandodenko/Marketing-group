// Слайдер

const prodykciaSliderInit = document.querySelector(".prodykcia-slider");

if (prodykciaSliderInit) {
  const prodykciaSlider = new Swiper('.prodykcia-slider', {
    observer: true,
    observeParents: true,
    watchOverflow: true,
    slidesPerView: 1,
    spaceBetween: 32,
    direction: 'horizontal',
    speed: 700,
    navigation: {
      nextEl: '.prodykcia-slider-next',
      prevEl: '.prodykcia-slider-prev',
    },
  });
}

const heroSliderInit = document.querySelector(".hero-slider");

if (document.body.clientWidth <= 868) {
  if (heroSliderInit) {
    const heroSlider = new Swiper('.hero-slider', {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      direction: 'horizontal',
      speed: 700,
      pagination: {
        el: '.hero-slider-pagination',
        clickable: true,
        // dynamicBullets: true, // Если много кружков пагинации
        // dynamicMainBullets: 3, // Показывает количество отображаемых кружков пагинаии при включеном dynamicBullets
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 32,
        },
        601: {
          slidesPerView: 2,
          spaceBetween: 32,
        }
      },
    });
  }
};
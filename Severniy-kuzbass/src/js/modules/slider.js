// Слайдер

const heroSliderInit = document.querySelector(".hero-slider");

if (heroSliderInit) {
  const heroSlider = new Swiper('.hero-slider', {
    slidesPerView: 1,
    spaceBetween: 15,
    direction: 'horizontal',
    scrollbar: {
      el: '.hero-slider-scrollbar',
      draggable: true,
    },
    speed: 500,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
}

// const swiper = new Swiper('.hero__swiper', {
//   loop: true,
//   // loopAdditionalSlides: 3, // Добавляет количество слайдов которые будут склонированы после создания цикла
//   // centeredSlides: true, // центрирует активный слайд по центру а не слева
//   observer: true,
//   observeParents: true,
//   watchOverflow: true,
//   slidesPerView: 1,
//   spaceBetween: 32,
//   // effect: "fade", анимация перелистывания слайдера
//   // slidesPerGroup: 1, 
//   // centeredSlides: true, // активный слайд будет в центре
//   // autoHeight: true,
//   direction: 'horizontal',
//   // speed: 500, // Автовоспроизведение
//   // autoplay: {
//   // delay: 5000,
//   // disableOnInteraction: false,
//   // waitForTransition: false, если нужно чтобы слайды листались когда пользователь уходит со страницы
//   // },
//   // grid: { // если нужно сделать слайдер не в 1 строку
//   //   rows: 2,
//   // },
//   // thumbs: { // Читаем ниже что даёт эта настройка
//   //   swiper: thumbsSwiper,
//   // },
//   pagination: {
//     el: '.hero__pagination',
//     clickable: true,
//     // dynamicBullets: true, // Если много кружков пагинации
//     // dynamicMainBullets: 3, // Показывает количество отображаемых кружков пагинаии при включеном dynamicBullets
//   },
//   navigation: {
//     nextEl: '.hero__button-next',
//     prevEl: '.hero__button-prev',
//   },
//   // scrollbar: {
//   //   el: '.hero__scrollbar',
//   //   draggable: true, // позволяет сделать полосу прокрутки перетаскиваемой
//   // },
//   // breakpoints: {
//   //   320: {
//   //     slidesPerView: 2,
//   //     spaceBetween: 20
//   //   },
//   //   480: {
//   //     slidesPerView: 3,
//   //     spaceBetween: 30
//   //   },
//   //   640: {
//   //     slidesPerView: 4,
//   //     spaceBetween: 40
//   //   }
//   // },
//   // on: {
//   // slideChange () {
//   // Событие будет запущено при изменении текущего активного слайда
//   // },
//   // slideChangeTransitionEnd () {
//   // Событие будет запущено после анимации другого слайда (следующего или предыдущего).
//   // },
//   // slideChangeTransitionStart() {
//   // Событие будет запущено в начале анимации для другого слайда (следующего или предыдущего). Т.е при клике на кнопку или пагинацию или перелистывание
//   // },
//   //   slideNextTransitionStart() {
//   // То же, что и "slideChangeTransitionStart", но только для направления "вперед"
//   //   },
//   //   slidePrevTransitionStart() {
//   // То же, что и "slideChangeTransitionStart", но только для направления "назад"
//   //   },
//   //   afterInit() {
//   // Событие будет запущено сразу после инициализации т.е при загрузке страницы сразу все заработает
//   //   }
//   // }
// });
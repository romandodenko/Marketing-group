// Гриншок 

const parallaxInit = document.querySelector(".parallax-init");

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (document.body.clientWidth >= 1024) {

  // Плавный скролл

  SmoothScroll({
    animationTime: 800, // [ms]
    stepSize: 100, // [px]

    // Acceleration
    accelerationDelta: 50, // 50
    accelerationMax: 3, // 3

    // Keyboard Settings
    keyboardSupport: true, // option
    arrowScroll: 50, // [px]

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,

    // Other
    touchpadSupport: false, // ignore touchpad by default
    fixedBackground: true,
    excluded: ''
  })

  gsap.fromTo('.history-middle__wrapper-text', {
    yPercent: -50,
  }, {
    yPercent: -30,
    scrollTrigger: {
      trigger: '.history__container', // когда в поле зрения появляется этот элемент, начинается анимация
      start: 'bottom bottom', // когда начинается анимация( в данном примере анимация начинается когда достигает половины блока trigger)
      scrub: 1.5, // чтобы анимация возвращалась к значениям до анимации
    }
  })

  gsap.fromTo('.history-middle__image_1', {
    x: -50,
  }, {
    x: 50,
    scrollTrigger: {
      trigger: '.history', // когда в поле зрения появляется этот элемент, начинается анимация
      start: 'top center', // когда начинается анимация( в данном примере анимация начинается когда достигает половины блока trigger)
      scrub: 1.5, // чтобы анимация возвращалась к значениям до анимации
    }
  })

  gsap.fromTo('.history-middle__image_2', {
    x: 50,
  }, {
    x: -50,
    scrollTrigger: {
      trigger: '.history', // когда в поле зрения появляется этот элемент, начинается анимация
      start: 'top center', // когда начинается анимация( в данном примере анимация начинается когда достигает половины блока trigger)
      scrub: 1.5, // чтобы анимация возвращалась к значениям до анимации
    }
  })

  gsap.fromTo('.history-middle__image_3', {
    y: -100,
  }, {
    y: 50,
    scrollTrigger: {
      trigger: '.history', // когда в поле зрения появляется этот элемент, начинается анимация
      start: 'top center', // когда начинается анимация( в данном примере анимация начинается когда достигает половины блока trigger)
      scrub: 1.5, // чтобы анимация возвращалась к значениям до анимации
    }
  })

  gsap.fromTo('.history-middle__image_4', {
    y: -100,
  }, {
    y: 0,
    scrollTrigger: {
      trigger: '.history', // когда в поле зрения появляется этот элемент, начинается анимация
      start: 'top center', // когда начинается анимация( в данном примере анимация начинается когда достигает половины блока trigger)
      scrub: 1.5, // чтобы анимация возвращалась к значениям до анимации
    }
  })

} else {

  document.querySelector(".page").classList.add("mob");

}
// Анимация гриншок 

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (document.body.clientWidth >= 1024) {
	ScrollSmoother.create({
		wrapper: '.page',
		content: '.scroll',
		smooth: 1.2,
		effects: true
	})
	gsap.fromTo('.hotel__title', {
		opacity: 0,
		y: '-150px',
	}, {
		y: 0,
		opacity: 1,
		scrollTrigger: {
			trigger: '.hero__precet',
			start: 'bottom bottom',
			scrub: true
		}
	})
	gsap.fromTo('.restorans__title', {
		opacity: 0,
		y: '-150px',
	}, {
		y: 0,
		opacity: 1,
		scrollTrigger: {
			trigger: '.hotel',
			start: 'bottom bottom',
			scrub: true
		}
	})
	gsap.fromTo('.spa__title', {
		opacity: 0,
		y: '-150px',
	}, {
		y: 0,
		opacity: 1,
		scrollTrigger: {
			trigger: '.restorans',
			start: 'bottom bottom',
			scrub: true
		}
	})
	gsap.fromTo('.wedding__title', {
		opacity: 0,
		y: '-150px',
	}, {
		y: 0,
		opacity: 1,
		scrollTrigger: {
			trigger: '.like',
			start: 'bottom bottom',
			scrub: true
		}
	})
	gsap.fromTo('.events__wrapper-form', {
		opacity: 0,
		y: '-150px',
	}, {
		y: 0,
		opacity: 1,
		scrollTrigger: {
			trigger: '.events-init',
			start: 'bottom bottom',
			scrub: true
		}
	})
	gsap.fromTo('.spa-top__content', {
		opacity: 0,
		y: '150px',
	}, {
		y: 0,
		opacity: 1,
		scrollTrigger: {
			trigger: '.restorans',
			start: 'bottom bottom',
			scrub: true
		}
	})
	gsap.fromTo('.spa-bottom__top', {
		opacity: 0,
		x: '-150px',
	}, {
		x: 0,
		opacity: 1,
		scrollTrigger: {
			trigger: '.restorans',
			start: 'top top',
			scrub: 1.2
		}
	})
	gsap.fromTo('.spa-bottom__item', {
		opacity: 0,
		x: '150px',
	}, {
		x: 0,
		opacity: 1,
		scrollTrigger: {
			trigger: '.spa-bottom__top',
			start: 'bottom bottom',
			scrub: 1.2
		}
	})
	gsap.fromTo('.wedding__image', {
		opacity: 0,
		scale: 0,
	}, {
		opacity: 1,
		scale: 1,
		scrollTrigger: {
			trigger: '.spa',
			start: 'bottom bottom',
			scrub: 1.2
		}
	})
	gsap.fromTo('.photo-slider__descr', {
		x: -100,
	}, {
		x: 0,
		scrollTrigger: {
			trigger: '.photo-init',
			start: 'bottom bottom',
			scrub: 1.2
		}
	})
	gsap.fromTo('.menu-restaraunt__title', {
		opacity: 0,
		y: '-150px',
		color: '#fff',
	}, {
		y: 0,
		opacity: 1,
		color: '#4A505A',
		scrollTrigger: {
			trigger: '.menu-restaraunt-init',
			start: 'bottom bottom',
			scrub: 2
		}
	})
	gsap.fromTo('.menu-restaraunt-wrapper-slider', {
		opacity: 0,
		x: '-150px',
	}, {
		x: 0,
		opacity: 1,
		scrollTrigger: {
			trigger: '.menu-restaraunt-init',
			start: 'bottom bottom',
			scrub: 2
		}
	})
	gsap.fromTo('.like__title', {
		opacity: 0,
		x: '-100',
	}, {
		x: 0,
		opacity: 1,
		scrollTrigger: {
			trigger: '.like-init',
			start: 'bottom bottom',
			scrub: 1.5
		}
	})
	gsap.fromTo('.likes-wrapper-slider', {
		x: -70,
		opacity: 0,
	}, {
		x: 0,
		opacity: 1,
		scrollTrigger: {
			trigger: '.like-init',
			start: 'bottom bottom',
			scrub: 1.2
		}
	})
	gsap.fromTo('.events', {
		background: '#4A505A',
	}, {
		background: '#A3ACAB',
		scrollTrigger: {
			trigger: '.events-init',
			start: 'bottom bottom',
			scrub: 1.2
		}
	})
	gsap.fromTo('.about-top', {
		background: '#918e8e',
	}, {
		background: '#F4F4F4',
		scrollTrigger: {
			trigger: '.hero',
			start: 'bottom bottom',
			scrub: 1.5
		}
	})
	gsap.fromTo('.about-benefits__title', {
		x: '100',
	}, {
		x: 0,
		scrollTrigger: {
			trigger: '.about-middle',
			start: 'bottom bottom',
			scrub: 1.5
		}
	})
	gsap.fromTo('.about-benefits__list', {
		x: '-100',
	}, {
		x: 0,
		scrollTrigger: {
			trigger: '.about-middle',
			start: 'bottom bottom',
			scrub: 1.5
		}
	})
	gsap.fromTo('.about-reviews__title', {
		x: '100',
	}, {
		x: 0,
		scrollTrigger: {
			trigger: '.about-benefits',
			start: 'bottom bottom',
			scrub: 1.5
		}
	})
	gsap.fromTo('.about-reviews__wrapper-slider', {
		x: '-100',
	}, {
		x: 0,
		scrollTrigger: {
			trigger: '.about-benefits',
			start: 'bottom bottom',
			scrub: 1.5
		}
	})
	gsap.fromTo('.adults__titles', {
		x: '-100',
	}, {
		x: 0,
		scrollTrigger: {
			trigger: '.adults__lists_2',
			start: 'bottom bottom',
			scrub: 1.5
		}
	})   

	let itemsL = gsap.utils.toArray('.item-anim');

	itemsL.forEach(item => {
		gsap.fromTo(item, {
			x: -60
		}, {
			x: 0,
			scrollTrigger: {
				trigger: item,
				start: 'top bottom',
				end: 'bottom center',
				scrub: 1
			}
		})
	});
}

const openHeaderAnimate = document.querySelector(".burger");

const exitHeaderAnimate = document.querySelector(".header-menu__exit");

const closeHeaderAnimate = document.querySelector(".header-menu__close");

// анимация в хеадер меню

let headerMenu = gsap.timeline({
	paused: true
})

headerMenu
	.fromTo(".header-menu", {
		opacity: 0,
		visibility: "hidden",
	}, {
		duration: .4,
		display: "flex",
		opacity: 1,
		visibility: "visible",
	})
	.fromTo(".header-menu__back", {
		height: 0,
		backgroundColor: "transparent",
	}, {
		duration: .4,
		backgroundColor: "#A3ACAB",
		height: "100vh",
	}, '-=.5')
	.fromTo(".header-menu__logo", {
		y: "-30px",
		opacity: 0,
	}, {
		duration: .4,
		y: 0,
		opacity: 1,
	})
	.fromTo(".header-menu__title_1", {
		y: "30px",
		opacity: 0,
	}, {
		duration: .4,
		y: 0,
		opacity: 1,
	}, '-=.3')
	.fromTo(".header-menu__item_1", {
		y: "30px",
		opacity: 0,
	}, {
		duration: .4,
		y: 0,
		opacity: 1,
	}, '-=.3')
	.fromTo(".header-menu__item_2", {
		y: "30px",
		opacity: 0,
	}, {
		duration: .4,
		y: 0,
		opacity: 1,
	}, '-=.3')
	.fromTo(".header-menu__item_3", {
		y: "30px",
		opacity: 0,
	}, {
		duration: .4,
		y: 0,
		opacity: 1,
	}, '-=.3')
	.fromTo(".header-menu__item_4", {
		y: "30px",
		opacity: 0,
	}, {
		duration: .4,
		y: 0,
		opacity: 1,
	}, '-=.3')
	.fromTo(".header-menu__exit", {
		opacity: 0,
	}, {
		duration: .4,
		opacity: 1,
	}, '-=.2')
	.fromTo(".header-menu", {
		backgroundColor: 'transparent',
	}, {
		duration: .4,
		backgroundColor: '#A3ACAB',
	})

// открытие бургер меню

openHeaderAnimate.addEventListener("click", () => {
	setTimeout(bodyBlock, 500)
	headerMenu.timeScale(1).play()
})
 
exitHeaderAnimate.addEventListener("click", () => {
	document.body.style.overflow = '';
	headerMenu.timeScale(2).reverse()
})

closeHeaderAnimate.addEventListener("click", () => {
	document.body.style.overflow = '';
	headerMenu.timeScale(2).reverse()
})

// анимация в херо

let heroAnim = gsap.timeline({});

heroAnim
	.fromTo(".stars__star_1", {
		opacity: 0,
	}, {
		duration: .4,
		opacity: 1,
	})

	.fromTo(".stars__star_2", {
		opacity: 0,
	}, {
		duration: .4,
		opacity: 1,
	}, '-=.2')

	.fromTo(".stars__star_3", {
		opacity: 0,
	}, {
		duration: .4,
		opacity: 1,
	}, '-=.2')

	.fromTo(".stars__star_4", {
		opacity: 0,
	}, {
		duration: .4,
		opacity: 1,
	}, '-=.2')

	.fromTo(".stars__star_5", {
		opacity: 0,
	}, {
		duration: .4,
		opacity: 1,
	}, '-=.2')

	.fromTo(".title-span_1", {
		x: '-20px',
		opacity: 0,
	}, {
		duration: .6,
		x: 0,
		opacity: 1,
	}, '-=.8')

	.fromTo(".title-span_2", {
		x: '20px',
		opacity: 0,
	}, {
		duration: .6,
		x: 0,
		opacity: 1,
	}, '-=.8')

	.fromTo(".cl-anim-1", {
		x: -60,
		opacity: 0,
	}, {
		duration: .4,
		x: 0,
		opacity: 1,
	}, '-=.8')

	.fromTo(".cl-anim-2", {
		x: 60,
		opacity: 0,
	}, {
		duration: .4,
		x: 0,
		opacity: 1,
	}, '-=.8')

	.fromTo(".cl-anim-3", {
		x: -60,
		opacity: 0,
	}, {
		duration: .4,
		x: 0,
		opacity: 1,
	}, '-=1')

let restarauntAnim = gsap.timeline({});

restarauntAnim
	.fromTo(".block-restaraunt__title", {
		opacity: 0,
		y: 30,
	}, {
		duration: .6,
		y: 0,
		opacity: 1,
	})
	.fromTo(".block-restaraunt__text_1", {
		opacity: 0,
		y: 30,
	}, {
		duration: .6,
		y: 0,
		opacity: 1,
	}, '-=.4')
	.fromTo(".block-restaraunt__text_2", {
		opacity: 0,
		y: 30,
	}, {
		duration: .6,
		y: 0,
		opacity: 1,
	}, '-=.5')
	.fromTo(".block-restaraunt__text_3", {
		opacity: 0,
		y: 30,
	}, {
		duration: .6,
		y: 0,
		opacity: 1,
	}, '-=.5')

// ------------------------------------------------------------------------------------------------------------------------------------------------
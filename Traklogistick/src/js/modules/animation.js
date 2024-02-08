const aosInit = document.querySelector(".aos-init");

if (aosInit) {

	AOS.init();

}

if (document.body.clientWidth >= 1024) {

	SmoothScroll({
			animationTime: 1000,
			stepSize: 170,

			accelerationDelta: 50,
			accelerationMax: 1,

			keyboardSupport: true,
			arrowScroll: 50,

			pulseAlgorithm: true,
			pulseScale: 4,
			pulseNormalize: 1,

			touchpadSupport: false,
			fixedBackground: true,
			excluded: ''
		})
	}
$(document).ready(function () {
	function showModal(modalId) {
		$(".close-bg").addClass("active");
		$("#" + modalId).addClass("active");
	}

	function closeAllModals() {
		$(".close-bg").removeClass("active");
		$(".modal").removeClass("active");
	}

	$(document).on("click", "[data-modal]", function (e) {
		const modalId = $(this).data("modal");
		closeAllModals();
		showModal(modalId);
	});

	$(document).on("submit", "form[data-success-modal]", function (e) {
		e.preventDefault();

		if (this.checkValidity && !this.checkValidity()) {
			this.reportValidity && this.reportValidity();
			return;
		}

		const successModalId = $(this).data("success-modal");
		if (!successModalId) {
			return;
		}

		closeAllModals();
		showModal(successModalId);
	});

	$(document).on("click", "[data-close]", function (e) {
		e.preventDefault();
		closeAllModals();
	});

	$(document).on("click", ".close-bg", function (e) {
		if (e.target === this) {
			closeAllModals();
		}
	});

	$(document).on("keydown", function (e) {
		if (e.key === "Escape") {
			closeAllModals();
		}
	});

	var galleryLoopSlider = new Swiper(".gallery-loop", {
		slidesPerView: "auto",
		loop: true,
		freeMode: true,
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
		},
		spaceBetween: 17,
		speed: 5000,
		on: {
			beforeTransitionStart: function (s) {
				const msPerPixel = 20;

				const currentSlideWidth = s.slides[s.activeIndex].offsetWidth;

				s.params.speed = currentSlideWidth * msPerPixel;
			},
		},
		breakpoints: {
			501: {
				spaceBetween: 60,
			},
		},
	});

	var areasSlider = new Swiper(".areas-slider .swiper", {
		slidesPerView: 1,
		speed: 1000,
		pagination: {
			el: ".areas-slider .nav-container__progressbar",
			type: "progressbar",
		},
		navigation: {
			nextEl: ".areas-slider .this-slider-arrow--next",
			prevEl: ".areas-slider .this-slider-arrow--prev",
		},
		spaceBetween: 10,

		breakpoints: {
			501: {
				slidesPerView: "auto",
				spaceBetween: 0,
			},
		},
	});

	var logoLoopSlider = new Swiper(".logo-loop", {
		slidesPerView: "auto",
		loop: true,
		freeMode: true,
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
		},
		spaceBetween: 30,
		speed: 5000,
	});

	var stepsSlider = new Swiper(".steps-slider .swiper", {
		slidesPerView: "auto",
		speed: 1000,
		grid: {
			rows: 2,
		},
		navigation: {
			nextEl: ".steps-slider .this-slider-arrow--next",
			prevEl: ".steps-slider .this-slider-arrow--prev",
		},
		spaceBetween: 0,
	});

	function updateStepsSliderHeight() {
		var $slides = $(".steps-slider .swiper-slide");
		if ($slides.length === 0) return;

		$slides.css("height", "auto");

		var maxGroupHeight = 0;
		for (var i = 0; i < $slides.length; i += 2) {
			var h1 = $slides.eq(i).outerHeight() || 0;
			var h2 = i + 1 < $slides.length ? $slides.eq(i + 1).outerHeight() || 0 : 0;
			var groupH = h1 + h2;
			if (groupH > maxGroupHeight) {
				maxGroupHeight = groupH;
			}
		}

		if (maxGroupHeight > 0) {
			$(".steps-slider .swiper").css("height", maxGroupHeight + "px");
		}
	}

	setTimeout(updateStepsSliderHeight, 100);

	$(window).on("resize", updateStepsSliderHeight);

	var showsSlider = new Swiper(".shows-slider .swiper", {
		slidesPerView: 1,
		speed: 1000,
		pagination: {
			el: ".shows-slider .nav-container__progressbar",
			type: "progressbar",
		},
		navigation: {
			nextEl: ".shows-slider .this-slider-arrow--next",
			prevEl: ".shows-slider .this-slider-arrow--prev",
		},
		spaceBetween: 10,

		breakpoints: {
			501: {
				spaceBetween: 20,
			},
			801: {
				slidesPerView: "auto",
				spaceBetween: 20,
			},
		},
	});

	var brandsLeftRightLoopSlider = new Swiper(".brands-loop-slider--left-right", {
		slidesPerView: "auto",
		loop: true,
		freeMode: true,
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
		},
		speed: 2000,
	});

	var brandsRightLeftLoopSlider = new Swiper(".brands-loop-slider--right-left", {
		slidesPerView: "auto",
		loop: true,
		freeMode: true,
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
			reverseDirection: true,
		},
		speed: 2000,
	});

	var showsSlider = new Swiper(".reviews-slider .swiper", {
		slidesPerView: 1,
		speed: 1000,
		pagination: {
			el: ".reviews-slider .nav-container__progressbar",
			type: "progressbar",
		},
		navigation: {
			nextEl: ".reviews-slider .this-slider-arrow--next",
			prevEl: ".reviews-slider .this-slider-arrow--prev",
		},
		spaceBetween: 10,

		breakpoints: {
			501: {
				spaceBetween: 10,
				slidesPerView: 2,
			},
			801: {
				slidesPerView: "auto",
				spaceBetween: 20,
			},
		},
	});

	var wantmoreSlider = new Swiper(".want-more-slider .swiper", {
		slidesPerView: 1,
		speed: 1000,
		pagination: {
			el: ".want-more-slider .nav-container__progressbar",
			type: "progressbar",
		},
		navigation: {
			nextEl: ".want-more-slider .this-slider-arrow--next",
			prevEl: ".want-more-slider .this-slider-arrow--prev",
		},
		spaceBetween: 10,

		breakpoints: {
			501: {
				spaceBetween: 10,
				slidesPerView: 2,
			},
			801: {
				slidesPerView: "auto",
				spaceBetween: 20,
			},
		},
	});

	var priceSlider = new Swiper(".price-slider .swiper", {
		slidesPerView: 1,
		speed: 1000,
		pagination: {
			el: ".price-slider .nav-container__progressbar",
			type: "progressbar",
		},
		navigation: {
			nextEl: ".price-slider .this-slider-arrow--next",
			prevEl: ".price-slider .this-slider-arrow--prev",
		},
		spaceBetween: 10,

		breakpoints: {
			501: {
				spaceBetween: 20,
				slidesPerView: 2,
			},
			801: {
				slidesPerView: "auto",
				spaceBetween: 20,
			},
		},
	});

	//location slider

	var locationSlider;

	var swiperParams = {
	    slidesPerView: 1,
	    speed: 1000,
	    pagination: {
	        el: ".location-slider .nav-container__progressbar",
	        type: "progressbar",
	    },
	    navigation: {
	        nextEl: ".location-slider .this-slider-arrow--next",
	        prevEl: ".location-slider .this-slider-arrow--prev",
	    },
	    spaceBetween: 10,
	    breakpoints: {
	        801: {
	            slidesPerView: 1,
	            spaceBetween: 20,
	        },
	    },
	};

	function initSlider() {
	    var isDesktop = $(window).width() > 800;
	    var $swiper = $('.location-slider .swiper');

	    if (locationSlider) {
	        locationSlider.destroy(true, true);
	    }

	    if (isDesktop) {
	        $swiper.attr('dir', 'rtl');
	    } else {
	        $swiper.removeAttr('dir');
	    }

	    locationSlider = new Swiper(".location-slider .swiper", swiperParams);
	}

	initSlider();
	$(window).on('resize', initSlider);

	//other scripts

	$('.hide-text').each(function() {
		
	  if (this.scrollHeight <= this.clientHeight) {

	    $(this).siblings('.more-button').hide();
	  }
	});

  	$('.more-button').on('click', function(e) {
		e.preventDefault();

		const $textBlock = $(this).siblings('.hide-text');
		
		$textBlock.toggleClass('active');
		
		$(this).toggleClass('active');

		if ($textBlock.hasClass('active')) {
		  	$(this).find('.more-button__text').text('Згорнути');
		} else {
		  	$(this).find('.more-button__text').text('Дивитись більше');
		}
	});

	$('.reason-text-more-button').on('click', function(e) {
		e.preventDefault();

		const $container = $(this).siblings('.reason-text-container');
		const $btn = $(this);
		
		const $hiddenItems = $container.children(':nth-child(n + 5)');

		$hiddenItems.stop(true, true).slideToggle(300, function() {

			const isVisible = $hiddenItems.first().is(':visible');
			$btn.toggleClass('active', isVisible);
			$btn.find('.reason-text-more-button__text').text(isVisible ? 'Згорнути' : 'Показати все');
		});
	});

	$(".faq-item__header").on("click", function () {
		const $parent = $(this).parent();
		const $content = $parent.find(".faq-item__text");

		$parent.toggleClass("active");
		$content.stop(true, true).slideToggle(300);
	});

	$(".formats-accordion-item-headline").on("click", function () {
		const $parent = $(this).parent();
		const $content = $parent.find(".formats-accordion-item-content-wrap");

		$parent.toggleClass("open");
		$content.stop(true, true).slideToggle(300);
	});
});
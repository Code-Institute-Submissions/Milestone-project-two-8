 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};


	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();

	var carousel = function() {
		$('.carousel-testimony').owlCarousel({
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});

	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	// navigation
	var OnePageNav = function() {
		$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
		 	e.preventDefault();

		 	var hash = this.hash,
		 			navToggler = $('.navbar-toggler');
		 	$('html, body').animate({
		    scrollTop: $(hash).offset().top
		  }, 700, 'easeInOutExpo', function(){
		    window.location.hash = hash;
		  });


		  if ( navToggler.is(':visible') ) {
		  	navToggler.click();
		  }
		});
		$('body').on('activate.bs.scrollspy', function () {
		  console.log('nice');
		})
	};
	OnePageNav();


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


  $('.checkin_date, .checkout_date').datepicker({
	  'format': 'm/d/yyyy',
	  'autoclose': true
	});




})(jQuery);
$(document).ready(function() {
	const $cont = $('.cont');
	const $slider = $('.slider');
	const $nav = $('.nav');
	const winW = $(window).width();
	const animSpd = 750; // Change also in CSS
	const distOfLetGo = winW * 0.2;
	let curSlide = 1;
	let animation = false;
	let autoScrollVar = true;
	let diff = 0;
	
	// Generating slides
	let arrCities = ['Amsterdam', 'Rome', 'New—York', 'Singapore', 'Prague']; // Change number of slides in CSS also
	let numOfCities = arrCities.length;
	let arrCitiesDivided = [];

	arrCities.map((city) => {
		let length = city.length;
		let letters = Math.floor(length / 4);
		let exp = new RegExp(".{1," + letters + "}", "g");
		
		arrCitiesDivided.push(city.match(exp));
	});
	
	let generateSlide = function(city) {
		let frag1 = $(document.createDocumentFragment());
		let frag2 = $(document.createDocumentFragment());
		const numSlide = arrCities.indexOf(arrCities[city]) + 1;
		const firstLetter = arrCitiesDivided[city][0].charAt(0);

		const $slide =
					$(`<div data-target="${numSlide}" class="slide slide--${numSlide}">
							<div class="slide__darkbg slide--${numSlide}__darkbg"></div>
							<div class="slide__text-wrapper slide--${numSlide}__text-wrapper"></div>
						</div>`);

		const letter = 
					$(`<div class="slide__letter slide--${numSlide}__letter">
							${firstLetter}
						</div>`);

		for (let i = 0, length = arrCitiesDivided[city].length; i < length; i++) {
			const text = 
						$(`<div class="slide__text slide__text--${i + 1}">
								${arrCitiesDivided[city][i]}
							</div>`);
			frag1.append(text);
		}

		const navSlide = $(`<li data-target="${numSlide}" class="nav__slide nav__slide--${numSlide}"></li>`);
		frag2.append(navSlide);
		$nav.append(frag2);

		$slide.find(`.slide--${numSlide}__text-wrapper`).append(letter).append(frag1);
		$slider.append($slide);

		if (arrCities[city].length <= 4) {
			$('.slide--'+ numSlide).find('.slide__text').css("font-size", "12vw");
		}
	};

	for (let i = 0, length = numOfCities; i < length; i++) {
		generateSlide(i);
	}

	$('.nav__slide--1').addClass('nav-active');

	// Navigation
	function bullets(dir) {
		$('.nav__slide--' + curSlide).removeClass('nav-active');
		$('.nav__slide--' + dir).addClass('nav-active');
	}
	
	function timeout() {
		animation = false;
	}
	
	function pagination(direction) {
		animation = true;
		diff = 0;
		$slider.addClass('animation');
		$slider.css({
			'transform': 'translate3d(-' + ((curSlide - direction) * 100) + '%, 0, 0)'
		});
		
		$slider.find('.slide__darkbg').css({
				'transform': 'translate3d(' + ((curSlide - direction) * 50) + '%, 0, 0)'
		});
		
		$slider.find('.slide__letter').css({
				'transform': 'translate3d(0, 0, 0)',
		});
		
		$slider.find('.slide__text').css({
			'transform': 'translate3d(0, 0, 0)'
		});
	}
	
	function navigateRight() {
		if (!autoScrollVar) return;
		if (curSlide >= numOfCities) return;
		pagination(0);
		setTimeout(timeout, animSpd);
		bullets(curSlide + 1);
		curSlide++;
	}
	
	function navigateLeft() {
		if (curSlide <= 1) return;
		pagination(2);
		setTimeout(timeout, animSpd);
		bullets(curSlide - 1);
		curSlide--;
	}

	function toDefault() {
		pagination(1);
		setTimeout(timeout, animSpd);
	}
	
	// Events
	$(document).on('mousedown touchstart', '.slide', function(e) {
		if (animation) return;
		let target = +$(this).attr('data-target');
		let startX = e.pageX || e.originalEvent.touches[0].pageX;
		$slider.removeClass('animation');
		
		$(document).on('mousemove touchmove', function(e) {
			let x = e.pageX || e.originalEvent.touches[0].pageX;
			diff = startX - x;
			if (target === 1 && diff < 0 || target === numOfCities && diff > 0) return;
			
			$slider.css({
				'transform': 'translate3d(-' + ((curSlide - 1) * 100 + (diff / 30)) + '%, 0, 0)'
			});
			
			$slider.find('.slide__darkbg').css({
				'transform': 'translate3d(' + ((curSlide - 1) * 50 + (diff / 60)) + '%, 0, 0)'
			});
			
			$slider.find('.slide__letter').css({
				'transform': 'translate3d(' +  (diff / 60) + 'vw, 0, 0)',
			});
			
			$slider.find('.slide__text').css({
				'transform': 'translate3d(' + (diff / 15) + 'px, 0, 0)'
			});
		})	
	})
	
	$(document).on('mouseup touchend', function(e) {
		$(document).off('mousemove touchmove');
		
		if (animation) return;
		
		if (diff >= distOfLetGo) {
			navigateRight();
		} else if (diff <= -distOfLetGo) {
			navigateLeft();
		} else {
			toDefault();
		}
	});
	
	$(document).on('click', '.nav__slide:not(.nav-active)', function() {
		let target = +$(this).attr('data-target');
		bullets(target);
		curSlide = target;
		pagination(1);
	});	
	
	$(document).on('click', '.side-nav', function() {
		let target = $(this).attr('data-target');
		
		if (target === 'right') navigateRight();
		if (target === 'left') navigateLeft();
	});
	
	$(document).on('keydown', function(e) {
		if (e.which === 39) navigateRight();
		if (e.which === 37) navigateLeft();
	});
	
	$(document).on('mousewheel DOMMouseScroll', function(e) {
		if (animation) return;
    let delta = e.originalEvent.wheelDelta;
		
    if (delta > 0 || e.originalEvent.detail < 0) navigateLeft();
	 	if (delta < 0 || e.originalEvent.detail > 0) navigateRight();
  });
});
//parallax
(function() {
  var rotatingSlider = function(selector, options) {

    function initSingleSlider($el, options) {
      var $slider, $rotaters,
          $handle, $handleItems,
          numOfItems,
          angle, currentAngle = 0,
          prefix = ".slider3d__", 
          handlePrefix = prefix + "handle__",
          rotating = false;

      var defaultOptions = {
        xRotation: false,
        speed: 1100,
        dragSpeedCoef: 0.7,
        handleSpeedCoef: 6,
        easing: "ease",
        persMult: 1.6,
        handlePersMult: 3,
        scrollRotation: true,
        keysRotation: true,
        globalDragRotation: false,
        withControls: true,
        handleAndGlobalDrag: false,
        allowDragDuringAnim: false,
        allowScrollDuringAnim: false,
        allowKeysDuringAnim: false,
        allowControlsDuringAnim: false
      };

      var __opts = $.extend(defaultOptions, options);
      
      var axis = (__opts.xRotation) ? "Y" : "X";
      var angleMult = (__opts.xRotation) ? 1 : -1;

      function handleActiveItem() {
        if (!__opts.withControls) return;
        $handleItems.removeClass("active");
        var a = currentAngle % 360 / angle;
        if (a < 0) a = numOfItems + a;
        if (a > 0) a = a + 1;
        if (!a) a = 1;
        $handleItems.eq(a - 1).addClass("active");
      };

      function rotateSlider(delta) {
        var newAngle = currentAngle + delta * angle;

        $rotaters.css({"transform": "rotate"+axis+"("+ (newAngle * angleMult * -1) +"deg)",
                       "transition": "transform " + __opts.speed / 1000 + "s " + __opts.easing});
        currentAngle = newAngle;

        setTimeout(function() {
          $rotaters.css("transition", "transform 0s");
          handleActiveItem();
          rotating = false;
        }, __opts.speed);
      };
      
      function navigateUp() {
        rotateSlider(-1);
      };
      
      function navigateDown() {
        rotateSlider(1);
      };

      function scrollHandler(e) {
        if (rotating && !__opts.allowScrolluringAnim) return;
        rotating = true;
        var delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;
        if (delta > 0) {
          navigateUp();
        } else if (delta < 0) {
          navigateDown();
        }
      };
      
      function keydownHandler(e) {
        if (rotating && !__opts.allowKeysDuringAnim) return;
        rotating = true;
        if (e.which === 38) {
          navigateUp();
        } else if (e.which === 40) {
          navigateDown();
        }
      }

      function dragRotationHandler(e) {
        if (rotating && !__opts.allowDragDuringAnim) return;
        rotating = true;
        $slider.addClass("no-select");
        
        var startVal;
        if (__opts.xRotation) {
          startVal = e.pageX || e.originalEvent.touches[0].pageX;
        } else {
          startVal = e.pageY || e.originalEvent.touches[0].pageY;
        }
        var sliderS = (__opts.xRotation) ? $slider.width() : $slider.height();
        var deltaVal = 0;
        var newAngle;
        var angleDelta;
        var isHandle = $(this).hasClass("js-handle");
        var rotationCoef;
        if (isHandle) {
          rotationCoef = __opts.handleSpeedCoef;
        } else {
          rotationCoef = __opts.dragSpeedCoef;
        }
        
        if (__opts.scrollRotation) {
          $slider.off("mousewheel DOMMouseScroll", scrollHandler);
        }

        $(document).on("mousemove touchmove", function(e) {
          var val;
          if (__opts.xRotation) {
            val = e.pageX || e.originalEvent.touches[0].pageX;
          } else {
            val = e.pageY || e.originalEvent.touches[0].pageY;
          }
          deltaVal = (startVal - val) / sliderS * rotationCoef;
          newAngle = currentAngle + deltaVal * angle;
          angleDelta = newAngle - currentAngle;

          $rotaters.css("transform", "rotate"+axis+"("+ (newAngle * angleMult * -1) +"deg)");
        });

        $(document).on("mouseup touchend", function(e) {
          $(document).off("mousemove touchmove mouseup touchend");
          $slider.removeClass("no-select");

          if (!deltaVal) {
            rotating = false;
            if (__opts.scrollRotation) {
              $slider.on("mousewheel DOMMouseScroll", scrollHandler);
            }
            return;
          }
          
          var slidesRotated = Math.round(angleDelta / angle);
          rotateSlider(slidesRotated);
          deltaVal = 0;

          setTimeout(function() {
            if (__opts.scrollRotation) {
              $slider.on("mousewheel DOMMouseScroll", scrollHandler);
            }
          }, __opts.speed);
        });

      };

      function initControls() {
        var $controls = $(prefix + "controls");
        $handle = $(prefix + "handle", $slider);
        var $handleInner = $(handlePrefix + "inner", $handle);
        $handleItems = $(handlePrefix + "item", $handle);
        var s = (__opts.xRotation) ? $handle.width() : $handle.height();
        var pers = s * __opts.handlePersMult;
        var depth = s / 2 / Math.tan(angle / 2 * Math.PI/180);
        
        $slider.addClass("with-controls");
        $handle.css({"-webkit-perspective": pers + "px",
                     "perspective": pers + "px"})
          .addClass("js-handle");
        $handleInner.css("transform", "translateZ(-"+ depth +"px)");
        
        if (__opts.xRotation) $controls.addClass("m--xAxis");

        $handleItems.each(function(index) {
          $(this).css("transform", "rotate"+axis+"("+ (index * angle * angleMult) +"deg) translateZ("+ depth +"px)");
        });

        $rotaters = $(prefix + "rotater, "+ handlePrefix + "rotater", $slider);
        
        $handle.on("mousedown touchstart", dragRotationHandler);
        
        $(document).on("click", ".slider3d__control", function() {
          if (rotating && !__opts.allowControlsDuringAnim) return;
          rotating = true;
          if ($(this).hasClass("m--up")) {
            navigateUp();
          } else {
            navigateDown();
          }
        });
      };

      function initSlider($el) {
        $slider = $el;
        var $wrapper = $(prefix + "wrapper", $slider);
        var $inner = $(prefix + "inner", $slider);
        var $items = $(prefix + "item", $slider);
        numOfItems = $items.length;
        angle = 360 / numOfItems;
        var s = (__opts.xRotation) ? $slider.width() : $slider.height();
        var pers = s * __opts.persMult;
        var depth = s / 2 / Math.tan(angle / 2 * Math.PI/180);

        $wrapper.css({"-webkit-perspective": pers + "px",
                      "perspective": pers + "px"});
        $inner.css("transform", "translateZ(-"+ depth +"px)");

        $items.each(function(index) {
          $(this).css("transform", "rotate"+axis+"("+ (index * angle * angleMult) +"deg) translateZ("+ depth +"px)");
        });

        $slider.addClass("slider-ready");

        $rotaters = $(prefix + "rotater", $slider);
        
        if (__opts.scrollRotation) {
          $slider.on("mousewheel DOMMouseScroll", scrollHandler);
        }
        if (__opts.keysRotation) {
          if (!$slider.attr("tabindex")) {
            $slider.attr("tabindex", 1);
          }
          $slider.on("keydown", keydownHandler);
        }
        if (__opts.globalDragRotation) {
          $slider.on("mousedown touchstart", dragRotationHandler);
        }
        if (__opts.withControls) {
          initControls();
        }
      };
      
      initSlider($el);
      
    }

    function globalInit() {
      $(selector).each(function() {
        initSingleSlider($(this), options);
      });
    };

    function debounce(func, wait, immediate) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };

    var resizeFn = debounce(function() {
      globalInit();
    }, 100);

    $(window).on("resize", resizeFn);

    globalInit();

  };

  window.rotatingSlider = rotatingSlider;
}());

$(document).ready(function() {

  rotatingSlider(".slider3d", {xRotation: false, globalDragRotation: true});

});
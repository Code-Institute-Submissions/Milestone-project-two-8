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
// about 
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
    mainClass: 'mfp-no-margins mfp-with-zoom', 
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] 
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 
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

//parallax 3D slider
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

//end of 3d slider



// Countdown timer ,discount offer
        
        function makeTimer() {

                var endTime = new Date("December 23, 2020 12:00:00 GMT");            
                var endTime = (Date.parse(endTime)) / 1000;

                var now = new Date();
                var now = (Date.parse(now) / 1000);

                var timeLeft = endTime - now;

                var days = Math.floor(timeLeft / 86400); 
                var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
                var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
                var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

                if (hours < "10") { hours = "0" + hours; }
                if (minutes < "10") { minutes = "0" + minutes; }
                if (seconds < "10") { seconds = "0" + seconds; }

                $("#days").html(days + '<span class="camp">Days</span>');
                $("#hours").html(hours + '<span class="camp">Hour</span>');
                $("#minutes").html(minutes + '<span class="camp">Minute</span>');
                $("#seconds").html(seconds + '<span class="camp">Second</span>');       

        }
        
        setInterval(function() { makeTimer(); }, 1000);


//testimony
$('.testimonial-pics img').hover(function(){
        $(".testimonial-pics img").removeClass("active");
        $(this).addClass("active");

        $(".testimonial").removeClass("active");
        $("#"+$(this).attr("alt")).addClass("active");
      });

//end of testimony

//maps

var google;

   function initMap() {

  var Stockholm = {lat: 59.334591, lng: 18.063240};

  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 8, center: Stockholm});

  var marker = new google.maps.Marker({position: Stockholm, map: map});
}
// end of maps 

//slider
var slider = document.getElementById("myRange");
var output = document.getElementById("price");

// Display the default slider value
output.innerHTML = slider.value; 

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
}



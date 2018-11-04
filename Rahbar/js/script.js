$(document).ready(function(){

	"use strict";

	/*-------------------------------------
		Animations
	-------------------------------------*/
    $('[data-vp-animate]').each(function() {
        var classToAdd = 'visible-o animated '+($(this).data('vp-animate') ? $(this).data('vp-animate') : 'fadeIn');
        
        var delay = ($(this).data('vp-delay') ? $(this).data('vp-delay') : 0)+'ms';
        
        $(this).css({'animation-delay': delay}); 
        
        $(this).addClass('hidden-o').viewportChecker({
            classToAdd: classToAdd,
       });
    });

	/* =================================
	LOADER 
	=================================== */
	$(".loader").delay(1200).fadeOut();
    $(".animationload").delay(1200).fadeOut("slow");
	

	/* =================================
	NAVBAR 
	=================================== */
	jQuery(window).scroll(function () {
		var top = jQuery(document).scrollTop();
		var batas = jQuery(window).height();
		var header = jQuery('#header');

		if ( top > 0 ) {
			$('.navbar-main').addClass('stiky');
		}else {
			$('.navbar-main').removeClass('stiky'); 
		}
	});
	

	/* =================================
	BANNER ROTATOR IMAGE 
	=================================== */
	var owl = $(".owl-slides-container");
	owl.owlCarousel({
		items: 1,
		autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 600,
        mouseDrag: false,
		autoplayHoverPause: true,
		loop: true,	
        animateIn: 'fadeIn'		
	});

	var owl = $(".owl-slides-gallery");
	owl.owlCarousel({
		items: 1,
		autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 600,
		autoplayHoverPause: true,
		loop: true,
		nav: true,
		dots: false,
		navText: ["<i class='fa fa-chevron-left' aria-hidden='true'></i>", "<i class='fa fa-chevron-right' aria-hidden='true'></i>"],
		navClass: ['owl-prev', 'owl-next'],		
	});

	 // add animate.css class(es) to the elements to be animated
	  function setAnimation ( _elem, _InOut ) {
	    // Store all animationend event name in a string.
	    // cf animate.css documentation
	    var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

	    _elem.each ( function () {
	      var $elem = $(this);
	      var $animationType = 'animated ' + $elem.data( 'animation-' + _InOut );

	      $elem.addClass($animationType).one(animationEndEvent, function () {
	        $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
	      });
	    });
	  }

	// Fired before current slide change
	  owl.on('change.owl.carousel', function(event) {
	      var $currentItem = $('.owl-item', owl).eq(event.item.index);
	      var $elemsToanim = $currentItem.find("[data-animation-out]");
	      setAnimation ($elemsToanim, 'out');
	  });

	// Fired after current slide has been changed
	  var round = 0;
	  owl.on('changed.owl.carousel', function(event) {

	      var $currentItem = $('.owl-item', owl).eq(event.item.index);
	      var $elemsToanim = $currentItem.find("[data-animation-in]");
	    
	      setAnimation ($elemsToanim, 'in');
	  })
	  
	  owl.on('translated.owl.carousel', function(event) {
	    
	      if (event.item.index == (event.page.count - 1))  {
	        if (round < 1) {
	          round++
	          console.log (round);
	        } else {
	          owl.trigger('stop.owl.autoplay');
	          var owlData = owl.data('owl.carousel');
	          owl.trigger('refresh.owl.carousel');
	        }
	      }
	  });


	/* =================================
	COUNTER
	=================================== */
	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });


	/* =================================
	VIDEO
	=================================== */
    var video = $('.video-wrap');
    if (video.length) {
      $(".overlay-image").on("click", function(){
        $(this).addClass("hide");
        $("#video-frame")[0].src += "&autoplay=1";
      });
    }


	/* =================================
	OWL
	=================================== */
	var banner = $("#banner-slides");
	banner.owlCarousel({
		items: 1,
		autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 600,
		autoplayHoverPause: true,
		loop: true,
	});

	var info = $("#info-slides");
	info.owlCarousel({
		items: 1,
		autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 600,
		autoplayHoverPause: true,
		loop: true,
		margin: 30,
	});		
	
	var screenshots = $("#owl-screenshots");
	screenshots.owlCarousel({
		items: 4,
		autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 600,
		autoplayHoverPause: true,
		loop: true,
		margin: 30,
		nav: false,
		navText: ["<span class='fa fa-chevron-left'></span>", "<span class='fa fa-chevron-right'></span>"],		
		dots: true,	
		responsive:{
			0:{
				items:1,
				margin: 15
			},
			480:{
				items:2,
				margin: 15
			},			
			1000:{
				items:4
			}
		},		
	});	

	var slide = $("#slide-image");
	slide.owlCarousel({
		items: 1,
		autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 600,
		autoplayHoverPause: true,
		loop: true,
	});
	
	var testimony2 = $("#testimony2");
	testimony2.owlCarousel({
		autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 600,
		autoplayHoverPause: true,
		loop: true,
		items : 2,
		//nav: true,
		//navText: ["<span class='fa fa-chevron-left'></span>", "<span class='fa fa-chevron-right'></span>"],
		dots: true,
		responsive:{
			0:{
				items:1
			},
			1000:{
				items:2
			}
		},		
	});

	var popularPost = $("#popular-post");
	popularPost.owlCarousel({
		items: 1,
		autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 600,
		autoplayHoverPause: true,
		loop: true,
		margin: 10,
	});


	/* =================================
	FAQ
	=================================== */	
	$(".panel").on("show.bs.collapse hide.bs.collapse", function(e) {
	    if (e.type=='show'){
	      $(this).addClass('active');
	    }else{
	      $(this).removeClass('active');
	    }
  	});  
	
	/* =================================
	SCROLL TO
	=================================== */
	$('a[href^="#"]').on('click', function(event) {
	    var target = $(this.getAttribute('href'));
	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top
	        }, 1000);
	    }
	});


	/* =================================
	MAGNIFIC POPUP
	=================================== */
	 $('.popup-with-zoom-anim').magnificPopup({
		type:'inline',
		fixedContentPos: false,
		removalDelay: 100,
		preloader: true,
		 mainClass: 'my-mfp-zoom-in'
	 });

	  $('.popup-image-zoom').magnificPopup({ 
	    removalDelay: 300,
	    type: 'image',
	    callbacks: {
		    beforeOpen: function() {
		       this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated ' + this.st.el.attr('data-effect'));
		    }
	  	},
	  });

	  $('.popup-youtube').magnificPopup({
        type: 'iframe',
        callbacks: {
          	beforeOpen: function() {
       			this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated ' + this.st.el.attr('data-effect'));
    		}
  		},
    });


	/* =================================
	INFO DOTS
	=================================== */
  	$('.info-1').on("mouseenter", function(e){
        $('.info-image .circle-1').addClass('circle-animation')
    });
    $('.info-1').on("mouseleave", function(e){
        $('.info-image .circle-1').removeClass('circle-animation')
    });
    $('.info-2').on("mouseenter", function(e){
        $('.info-image .circle-2').addClass('circle-animation')
    });
    $('.info-2').on("mouseleave", function(e){
        $('.info-image .circle-2').removeClass('circle-animation')
    });
    $('.info-3').on("mouseenter", function(e){
        $('.info-image .circle-3').addClass('circle-animation')
    });
    $('.info-3').on("mouseleave", function(e){
        $('.info-image .circle-3').removeClass('circle-animation')
    });
    $('.info-4').on("mouseenter", function(e){
        $('.info-image .circle-4').addClass('circle-animation')
    });
    $('.info-4').on("mouseleave", function(e){
        $('.info-image .circle-4').removeClass('circle-animation')
    });

	/* =================================
	WORDS ANIMATIONS
	=================================== */
	if ($(".tlt").length){
		$('.tlt').textillate({
		    minDisplayTime: 1000, 
		    loop: true
		});
	}

	/* =================================
	PARALLAX
	=================================== */
    if($('body').outerWidth()>480){
			
    	$('.banner.parallax').parallax("50%", 0.2);
    }	

	/* =================================
	ISOTOP
	=================================== */
	var $blogMas = $('.masonry-container');
	$blogMas.isotope({
		itemSelector: '.masonry-item',
		isFitWidth: true,
		masonry: {
			columnWidth: '.masonry-item'
		}
	});

	/* =================================
	PARTICLES
	=================================== */
	$(window).load(function() {
		'use strict';
		var ini =  $(this);
		var currentheight =  ini.height();
		if(currentheight >= 600){
			/*banner*/
			if ($("#particles-banner-js").length){
				particlesJS("particles-banner-js", {
				  particles: {
				    number: {
				      value: 140,
				      density: { enable: true, value_area: 1000 }
				    },
				    color: { value: "#ffffff" },
				    shape: {
				      type: "circle",
				      stroke: { width: 0, color: "#000000" },
				      polygon: { nb_sides: 4 },
				      image: { src: "img/github.svg", width: 100, height: 100 }
				    },
				    opacity: {
				      value: 0.4,
				      random: true,
				      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
				    },
				    size: {
				      value: 3,
				      random: true,
				      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
				    },
				    line_linked: {
				      enable: true,
				      distance: 120,
				      color: "#ffffff",
				      opacity: 0.1,
				      width: 1
				    },
				    move: {
				      enable: true,
				      speed: 4,
				      direction: "none",
				      random: false,
				      straight: false,
				      out_mode: "out",
				      bounce: false,
				      attract: { enable: false, rotateX: 600, rotateY: 1200 }
				    }
				  },
				  interactivity: {
				    detect_on: "canvas",
				    events: {
				      onhover: { enable: true, mode: "repulse" },
				      onclick: { enable: true, mode: "push" },
				      resize: true
				    },
				    modes: {
				      grab: { distance: 400, line_linked: { opacity: 1 } },
				      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
				      repulse: { distance: 200, duration: 0.4 },
				      push: { particles_nb: 4 },
				      remove: { particles_nb: 2 }
				    }
				  },
				  retina_detect: true
				});
		  	}
		}
	});       

});
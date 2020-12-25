'use strict';



function initMap() {
	let map, coords, styles, marker, info, content;

	coords = {
		lat: 49.5822759626389, 
		lng: 34.56935372219668
	}

	styles = [
		{
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#242f3e"
			}
		  ]
		},
		{
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#746855"
			}
		  ]
		},
		{
		  "elementType": "labels.text.stroke",
		  "stylers": [
			{
			  "color": "#242f3e"
			}
		  ]
		},
		{
		  "featureType": "administrative.locality",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#d59563"
			}
		  ]
		},
		{
		  "featureType": "poi",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#d59563"
			}
		  ]
		},
		{
		  "featureType": "poi.park",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#263c3f"
			}
		  ]
		},
		{
		  "featureType": "poi.park",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#6b9a76"
			}
		  ]
		},
		{
		  "featureType": "road",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#38414e"
			}
		  ]
		},
		{
		  "featureType": "road",
		  "elementType": "geometry.stroke",
		  "stylers": [
			{
			  "color": "#212a37"
			}
		  ]
		},
		{
		  "featureType": "road",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#9ca5b3"
			}
		  ]
		},
		{
		  "featureType": "road.highway",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#746855"
			}
		  ]
		},
		{
		  "featureType": "road.highway",
		  "elementType": "geometry.stroke",
		  "stylers": [
			{
			  "color": "#1f2835"
			},
			{
			  "weight": 1
			}
		  ]
		},
		{
		  "featureType": "road.highway",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#f3d19c"
			}
		  ]
		},
		{
		  "featureType": "transit",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#2f3948"
			}
		  ]
		},
		{
		  "featureType": "transit.station",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#d59563"
			}
		  ]
		},
		{
		  "featureType": "water",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#17263c"
			}
		  ]
		},
		{
		  "featureType": "water",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#515c6d"
			}
		  ]
		},
		{
		  "featureType": "water",
		  "elementType": "labels.text.stroke",
		  "stylers": [
			{
			  "color": "#17263c"
			}
		  ]
		}
	]

	map = new google.maps.Map(document.getElementById("map"), {
		center: coords,
		zoom: 15,
		styles: styles,
		disableDefaultUI: true,
		zoomControl: true,
		zoomControlOptions: {
			position: google.maps.ControlPosition.LEFT_BOTTOM,
		},
		streetViewControl: true,
		mapTypeControl: true,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
			mapTypeIds: ["roadmap", "satellite"],
		},
		
	});

	marker = new google.maps.Marker({
		position: coords,
		map: map,
		title: "Hello World!",
		animation: google.maps.Animation.DROP,
		// draggable: true
		icon: 'images/marker.png'
	});

	content = `<h1 class="map__title">Hello!</h1>
			   <p class="map__txt">My name is ...?</p>`;

	info = new google.maps.InfoWindow({
		content: content,
	});

	marker.addListener("click", () => {
		info.open(map, marker);
	});
}


(function($){
	$(document).ready(function() {
		// Top Slider
		$('.top').slick({
			dots: true,
			arrows: false,
			infinite: true,
			speed: 1000,
			appendDots: $('.top__pages'),
			accessibility: true
		  });

		// Fancybox
		$('.photo').fancybox({
			buttons: [
				"fullScreen",
				"download",
				"thumbs",
				"close"
			],
			animationEffect: 'zoom-in-out',
			animationDuration: 800,
			transitionEffect: 'tube',
			transitionDuration: 1000,
			// fullScreen: {
			// 	autoStart: true
			// },
			loop: true
		});

		$('.modal').fancybox({
			afterClose: () => {
				alert('Window is closed, da Vlad?');
			}
		});

		// Slick Slider
		$('.slider').slick({
			dots: false,
			arrows: true,
			prevArrow: '<div class="slider-prev"></div>',
			nextArrow: '<div class="slider-next"></div>',
			appendArrows: $('.slider-arrows'),
			slidesToShow: 3,
			slidesToScroll: 2,
			// infinite: false,
			speed: 1500,
			// centerMode: true,
			// initialSlide: 4,
			// autoplay: true,
			// autoplaySpeed: 500,
			// pauseOnHover: false,
			// fade: true,
			swipe: false,
			responsive: [
				{
					breakpoint: 560,
					settings: {
						slidesToShow: 1,
						dots: false,
						speed: 500,
						swipe: true
					}
				}
			]
		});

		// Events slider
		$('.event').slick({
			slidesToShow: 5,
			slidesToScroll: 1
		});

		// Menu
		let sections = {
			home: $('#header').offset().top,
			works: $('#works').offset().top,
			services: $('#services').offset().top,
			events: $('#events').offset().top,
			contact: $('#contact').offset().top
		};
		console.log(sections);

		$(window).scroll(() => {
			let scrTop = $(document).scrollTop() + ($(window).height() / 3),
				position = '';

			if (scrTop < sections.works) {
				position = 'header';
			} else if (scrTop >= sections.works && scrTop < sections.services) {
				position = 'works';
			} else if (scrTop >= sections.services && scrTop < sections.events) {
				position = 'services';
			} else if (scrTop >= sections.events && scrTop < sections.contact) {
				position = 'events';
			} else {
				position = 'contact';
			}

			$('.menu__link').removeClass('menu__active');
			$('.menu').find(`[href="#${position}"]`).addClass('menu__active');
			
		});
		
	});
})(jQuery);

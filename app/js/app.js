// import $ from 'jquery'; window.jQuery = $; window.$ = $ // import module example (npm i -D jquery)
//import slick from 'slick-carousel'
//import owl from 'owl.carousel'
//import magnificpopup from 'magnific-popup'
// require('./other_script.js') // Require Other Script(s) from app/js folder Example
import { Swiper, Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation } from 'swiper'
Swiper.use([Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation])

//import { gsap, Power2 } from 'gsap'
//import MicroModal from 'micromodal'
//import { Fancybox } from "@fancyapps/ui/src/Fancybox/Fancybox.js"

document.addEventListener('DOMContentLoaded', () => {

	const cardSlider = new Swiper('.card-slider', {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 0,
		navigation: {
			nextEl: '.card-slider__next',
			prevEl: '.card-slider__prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			993: {
				slidesPerView: 3,
			}
		}
	});

	$(document).ready(function () {
    $('.btn-scroll-up').click(function ()
    {
      $("html, body").animate({
        scrollTop : 0
      }, 300);
      return false;
    });
  });

})

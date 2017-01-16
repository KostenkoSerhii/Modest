// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js
//=include lib/jquery.magnific-popup.min.js

sayHello();

$(document).ready(function(){
	/*begin ready*/

	/*slick*/
	$('.fs-slider').slick({
		autoplay: true,
		autoplaySpeed: 4000,
		arrows : false,
		dots: true,
		draggable: false,
		pauseOnHover: false
	});
	/*slick*/



	$('.header__menu').each(function(index, el) {
		$(el).find('.menu__item').click(function(event) {
			$(this).addClass('menu__item-active');
			$(".menu__item").not(this).removeClass("menu__item-active");
		});
	});

	var cloneMenu = $(".header__menu").clone(true);
	cloneMenu.attr("class", "header__menu-clone");
	$(".header__menu-btn").after(cloneMenu);

	$(".header__menu-btn").on("click", function(){
		$(".header__menu-clone").slideToggle();
	});

	$(".header__menu-clone .menu__item").on("click", function(){
		$(".header__menu-clone").slideUp();
	});

	/*begin galery*/

		$(".gallery__item a").magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300
		}
	});


	/*end galery*/

	/*end ready*/
});
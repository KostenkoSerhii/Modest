// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js
//=include lib/jquery.magnific-popup.min.js
//=include lib/scrollto.min.js

sayHello();

$(document).ready(function(){
	/*begin ready*/

	/*begin menu scroll*/

	var $menu = $(".wrapper-scroll");

	$(window).scroll(function(){
		if ( $(this).scrollTop() > 80 && $menu.hasClass("default") ){
			$menu.removeClass("default").addClass("wrapper-fixed");
		} else if($(this).scrollTop() <= 80 && $menu.hasClass("wrapper-fixed")) {
			$menu.removeClass("wrapper-fixed").addClass("default");
		}
	});
	/*end menu scroll*/

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

	$('.menu__item').on("click", function(){
		$(this).addClass('menu__item-active');
		$(".menu__item").not(this).removeClass("menu__item-active");
		var a=$(this).children("a").attr("href");
		return $.scrollTo(a,500),!1
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

	/*begin first galery */
	$(".gallery__item ").magnificPopup({
		delegate: 'a',
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


	/*end first galery*/

	/*begin second popup galery*/
	$('.more-galery').on('click', function () {
		$(".popup-galery").magnificPopup('open');
	});

	$('.popup-galery').each(function () {
		$(this).magnificPopup({
			delegate: 'a',
			type: 'image',
			gallery: {
				enabled: true
			}
		});
	});
	/*end second popup galery*/

	/*send email */
	$('form').submit(function(e) {
		e.preventDefault();
		var name=$(this).find("input[name=name]").val();
		var email=$(this).find("input[name=email]").val();
		var message=$(this).find("textarea[name=message]").val();
		var status=1;

		if(isValidEmailAddress(email)){
			$("form input[name=email]").removeClass('error_form');
			$("form input[name=email]").addClass('valid_form');
		}else {
			$("form input[name=email]").addClass('error_form');
			$("form input[name=email]").removeClass('valid_form');
			status=0;
		}
		if(name!=''){
			$("form input[name=name]").addClass('valid_form');
			$("form input[name=name]").removeClass('error_form');
		}
		else
		{
			$("form input[name=name]").addClass('error_form');
			$("form input[name=name]").removeClass('valid_form');
			status=0;
		}
		if(message!=''){
			$("form textarea[name=message]").addClass('valid_form');
			$("form textarea[name=message]").removeClass('error_form');
		}
		else
		{
			$("form textarea[name=message]").addClass('error_form');
			$("form textarea[name=message]").removeClass('valid_form');
			status=0;
		}

		if(status==1) {
			$.ajax({
				url: 'mail.php',
				type: 'POST',
				data: $(this).serialize()
			}).done(function() {
				/*$(this).find("input").val("");*/
				$("form").trigger("reset");
				$("form input").removeClass('valid_form');
			});
		}
	});

	function isValidEmailAddress(emailAddress) {
		var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
		return pattern.test(emailAddress);
	};
	/*send email */



	/*begin greensock*/
/*	$(".list__item").hover(function(){
		var itemNumber	=	$(this).children(".item-number");
		TweenMax.to(itemNumber, 1, {width: 70});
	},function(){
		TweenMax.to(itemNumber, 1, {width: 50});
	});*/

	/*end greensock*/
	/*end ready*/
});

/*begin map*/
var map;
var initMap =  function () {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 23.022505, lng: 72.5713621},
		zoom: 12,
		scrollwheel: false
	});

}
/*end map*/

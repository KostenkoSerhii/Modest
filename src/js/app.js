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

	$(".more-galery")
	/*end galery*/

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


	/*end ready*/
});

/*begin map*/
var map;
var initMap =  function () {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 55.524963, lng: 37.478325},
		zoom: 15,
		scrollwheel: false
	});

}
/*end map*/

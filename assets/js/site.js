$(function() {"use strict";

	$('.close-btn').on('click', function() {
		$(this).toggleClass('active');
		$('.nav-wrapper').toggleClass('open');
	});


	$('.btn[data-form="form-cost-request"]').click(function() {
		$('.form-cost-request').fadeIn(0);
	});

	function closeModals (modal) {
		var modWindow = $(modal);
		var clsBtn = $(modal+' .close-btn');
		clsBtn.click(function() {
			modWindow.fadeOut(0);
		});
	}

	closeModals('.form-cost-request');

	$('#overlay-btn').on('click', function() {
		$(this).toggleClass('active');
		$('.overlay-menu').toggleClass("open");
	});

	$('.overlay-menu ul li a').on('click', function() {
		$(this).toggleClass("active");
		$("#overlay-btn").removeClass('active');
		$('.overlay-menu').removeClass("open");
	});


});

$(window).scroll(function() {
	if($(this).scrollTop() > 50) { $('.header').addClass('bg'); }
	else { $('.header').removeClass('bg'); }
});
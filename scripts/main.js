$(function() {
	var toggle = $('.sliding-navbar-toggle');
	var main = $('.sliding-navbar-main');

	toggle.click(function() {
		main.toggleClass('sliding-navbar-active');
		$('.main-content').toggleClass('main-content-active');
		$('.hamburger').toggleClass('active');
	});

	$('.menu-btn').click(function() {
		main.toggleClass('sliding-navbar-active');
		$('.main-content').toggleClass('main-content-active');
		$('.menu-btn span').toggleClass('active');
	});
});
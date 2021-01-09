$(window).on('scroll', function() {
	var scrollCoef = 0.000215;

   $('#container').css({
		opacity: 1 - $(window).scrollTop() * scrollCoef
	})
});
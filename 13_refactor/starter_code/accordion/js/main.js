$('dt').on('click', function() {
	$('dd').slideUp(350);
	$('dt').removeClass('active');
	$(this).addClass('active');
	$('dt.active').next().slideDown(350); 

}); 

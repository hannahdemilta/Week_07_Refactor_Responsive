//Click primary menu item and apply active class and remove active class from others menu items
//Click on menu item and show corresponding second menu bar and remove other secondary menu options


$('#main-nav a').on('click,' function () {
	$('nav.active a').removeClass('active'); 
	$(this).addClass('active');

}); 
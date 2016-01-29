//When I click a panel change the class of that panel to active 
//When I click a panel display the info for that corresponding panel 
//and fade out article that is visable 


$('.panel').hide(); 
$('#home').show();

$('nav li').on('click', function () {
	$('li.active').removeClass('active'); 
	$(this).addClass('active'); 
	$('.panel').hide();

	var correspondingContent = $(this).children().data('panel'); 
	$("#" + correspondingContent).fadeIn(500);
}); 


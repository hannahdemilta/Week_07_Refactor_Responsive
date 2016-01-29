
// -------------------------------------------------------------------------------
// Part 1 - Click a box! Get them all!
// -------------------------------------------------------------------------------

// 1. When an element with the class .box is clicked on, fade that .box out.

// 2. When an element with the class .slide-me is clicked on, slide that .slide-me up.

$('.box').on('click', function() {
	$(this).fadeOut(350); 

}); 

$('.slide-me').on('click', function() {
	$(this).slideUp(500); 
}); 

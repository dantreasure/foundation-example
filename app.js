$(document).ready(function(){
	$(".hidden").hide();
	$(".panel").hover(function(){
		$(".hidden", this).slideToggle();
	})

})

function jqUpdateSize(){
    // Get the dimensions of the viewport
    var width = $(window).width();
    var height = $(window).height();

  	if(width < 642){
  		$(".icon-bar").show();
  	} else{
  		$(".icon-bar").hide();
  	}
};
$(document).ready(jqUpdateSize);    // When the page first loads
$(window).resize(jqUpdateSize);




$(document).ready(function(){
	$(".hidden").hide();
	$(".panel").hover(function(){
		$(".hidden", this).slideToggle();
	})

})

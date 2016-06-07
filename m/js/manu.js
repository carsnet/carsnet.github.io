$(document).ready(function(){

		$("#manu>div.comb").click(function(event){
		event.stopPropagation();
		$("#manu").fadeOut('fast');
		var ind= $(".comb").index(this);
		$(".honeycombs.h").eq(ind).fadeIn();
		});
			
	
		


		
});
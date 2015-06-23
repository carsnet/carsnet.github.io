$(document).ready(function(){
	$(".manu>a").click(function(){
		$(".pop").hide().css("width","10px").find("*").css("opacity","0");
		$(this).next().animate({height:"show"},"fast");
		$(this).next().animate({width:"525px"},"fast",function(){$(".pop").find("*").animate({opacity:"1"});});
		var index= $(".manu").index($(this).parent());
		//var litem= $(this).parent();
		//var ind= $(".manu").index(litem);
		if (index>=3)
		{
			$('html, body').animate({scrollTop: $(this).next().offset().top}, 2000);
		}
	});
	$(".pop>a").click(function(event){
		event.stopPropagation();
		$(this).parent().hide('slow');
	});
});
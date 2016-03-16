$(document).ready(function(){
	for (var i=0; i<=11;i++)
		$(".manu").eq(i).append($(".pop").eq(i));
		
	$(".manu>a").click(function(){
		$(".pop").hide().css("width","10px").find("*").css("display","none");
		$(this).next().animate({height:"show"},"fast")
		.animate({width:"525px"},"fast",function(){$(".pop").find("*").fadeIn();});
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
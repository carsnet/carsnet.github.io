$(document).ready(function(){


	$("img.side").click(function(){
		$("div.side").animate({width: ['toggle', 'swing']},"fast");
	});
		
		if($("#s").css("display")=="none"){
	$("#bsearchsubmit").click(function(){
		$("#s").animate({width: "show"},"fast");
		$("#bsearchsubmit").css("display","none");
		$("#searchsubmit").css("display","block");
	});
		}
		
		

});
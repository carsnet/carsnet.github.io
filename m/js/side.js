$(document).ready(function(){


	$(".ham").click(function(){
		$("div.side").animate({width: ['toggle', 'swing']},"fast");	
	});
	
	
		
		
		var wid=$(window).width(); 
		
		if($("#s").css("display")=="none"){
	$("#bsearchsubmit").click(function(){
		$("#s").animate({width: "show"},"fast");
		$("#bsearchsubmit").css("display","none");
		$("#searchsubmit").css("display","block");
		$("#clear").fadeIn("fast");
		if(wid<650){
			$("#newlogo").fadeOut('fast');
		}
	});
		}
		
		var inp;
		$("form").submit(function(e){
				inp= $("#s").val();
				if(!inp){
                e.preventDefault(e);
				$("#searchsubmit").css("display","none");
				$("#bsearchsubmit").css("display","block");
				$("#s").animate({width: "hide"},"fast");
				$("#clear").fadeOut("fast");
				if(wid<650){
			$("#newlogo").fadeIn('fast');
		}}

		});
		


		
});
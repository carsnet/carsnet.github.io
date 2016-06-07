$(document).ready(function(){
		
		var logos=12
		var nos=logos;
		var sels=$("#manu");  
var i=0;
var speed=150;
function myLoop (sel,no) {           //  create a loop function
   setTimeout(function () {    //  call a 3s setTimeout when the loop is called
      sel.find(".hex_inner").eq(i).fadeIn(speed);          //  your code here
      i++;                     //  increment the counter
      if (i < no) {            //  if the counter < 10, call the loop function
         myLoop(sel,no);             //  ..  again which will trigger another 
      }                        //  ..  setTimeout()
   }, speed)
}
           
myLoop(sels,nos);   
		

$("#manu>div.comb").click(function(event){
		event.stopPropagation();
		$("#manu").fadeOut('fast', function(){
		$("#manu").find(".hex_inner").hide()});
		var ind= $(".comb").index(this);
		sels= $(".honeycombs.h").eq(ind);
		sels.show();
		nos= sels.find("div.comb").length;
		i=0;
		myLoop(sels,nos);
		});
			
$(".comb.b").click(function(){
		$(".honeycombs.h").fadeOut('fast', function(){ $(".honeycombs.h").find(".hex_inner").hide()});
		i=0;
		nos=logos;
		sels=$("#manu");
		sels.show();  
		myLoop(sels,nos); 
});


		
});
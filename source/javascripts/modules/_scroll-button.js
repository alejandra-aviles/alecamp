var scrolled=0;

$(document).ready(function(){

    	
    $("#downClick").on("click" ,function(){
                scrolled=scrolled+300;
        
				$(".cover").animate({
				        scrollTop:  scrolled
				   });

			});

    
    $("#upClick").on("click" ,function(){
				scrolled=scrolled-300;
				
				$(".cover").animate({
				        scrollBottom:  scrolled
				   });

			});


$(".clearValue").on("click" ,function(){
				scrolled=0;
		});


});



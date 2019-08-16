$(document).ready(function(){
	//Required for strict JS code
   'use strict';

	//Mobile header menu function
	$("#menu-btn").click(function(){
		if($(".menu-list").is(':visible')){
			//Important! Fade animation has to super fast in order to create smooth slide transition
			$(".menu-list").fadeOut(100);
            $(".menu-list").removeClass("active");
            $("body, main, .main-container, header, footer").removeClass("active");
	   } else {
		   //Important! Fade animation has to super fast in order to create smooth slide transition
			$(".menu-list").fadeIn(100);
               $(".menu-list").addClass("active");
               $("body, main, .main-container, header, footer").addClass("active");
	   }
    });

    $(".top i").click(function(){
        if($(this).parent().parent().find(".more").is(':visible')){
            $(this).removeClass("fa-minus");
            $(this).addClass("fa-plus");
            $(this).parent().parent().find(".more").slideUp();
        }else{
            $(this).removeClass("fa-plus");
            $(this).addClass("fa-minus");
            $(this).parent().parent().find(".more").slideDown();
        }
    });
})
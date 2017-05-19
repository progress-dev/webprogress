
console.log($(window).width());
if ($(window).width() >767) {
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();


	    if (scroll >= 100) {
	        $(".nav").addClass("nav-righttop");
	        $("#img-head").addClass("img-head");
	        $(".nav").removeClass("nav-rightbot");
	        $(".nav-top").addClass("dark-header fix-header");
	        $(".navbar-inner").css('margin-top','0px');
	        $('nav').addClass("dark-header")
	    } else {
	    	$("#img-head").removeClass("img-head");
	    	$(".nav").removeClass("nav-righttop");
	        $(".nav").addClass("nav-rightbot");
	        $(".navbar-inner").css('margin-top','80px');
	        $(".nav-top").removeClass("dark-header fix-header");
	        $('nav').removeClass("dark-header")

	    }
});
    }
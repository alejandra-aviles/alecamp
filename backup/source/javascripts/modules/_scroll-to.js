jQuery(".scroll-to").click(function(e){
	e.preventDefault();
	var element = this;
	var targetHref = $(element).attr("href");
	var navHeight = $('.nav').height();
	jQuery("body").animate({ scrollTop: $(targetHref).offset().top - navHeight }, 500, 'swing');
});

jQuery(".scroll-to").click(function(e){
	e.preventDefault();
	var element = this;
	var targetHref = $(element).attr("href");
	jQuery("body").animate({ scrollTop: $(targetHref).offset().top }, 500, 'swing');
});

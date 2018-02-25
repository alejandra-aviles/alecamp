$(document).ready(function(){
	$('.slider-wrapper').each(function(index, sliderWrapperEl){
		var sliderWrapperEl = $(sliderWrapperEl);
		var sliderEl = $('.slider', sliderWrapperEl);
		var sliderId = sliderEl.attr("id");
		var sliderControlsEl = $(".slider-controls[data-slider='" + sliderId + "']");

		var slides = sliderEl.children().map(function(index, element){
			return $(element);
		});

		var sliderIndexesEl = $("[data-slider-index][data-slider='" + sliderId + "']");

		var sliderIndex = 0;
		var sliderTotal = slides.length;
		console.log(sliderId, sliderIndexesEl, sliderTotal);
		var isTransitioning = false;

		sliderControlsEl.find("[data-slider-action='next']").click(function(e){ 
			e.preventDefault();			
			next(); 
		});
		sliderControlsEl.find("[data-slider-action='previous']").click(function(e){ 
			e.preventDefault();			
			previous(); 
		});

		function isRightSide(event) {
			var width = sliderWrapperEl.width();
			var sliderElX = sliderWrapperEl.position().left;
			var xPosition = event.pageX - sliderElX;

			return xPosition > width / 2;
		}

		function preferNext(event) {
			return isRightSide(event) || !hasPrevious();
		}

		sliderEl.click(function(event){ 
			preferNext(event) ? next() : previous();
		});

		sliderEl.mousemove(function (event) {
			if (preferNext(event)) {
				$(this).removeClass("slider-point-previous");
				$(this).addClass("slider-point-next");
			}
			else {
				$(this).removeClass("slider-point-next");
				$(this).addClass("slider-point-previous");	
			}
		});

		function increaseIndex(){
			sliderIndex = sliderIndex == slides.length-1 ? 0 : sliderIndex+1;
			notifyIndexChanged();
		}

		function decreaseIndex(){
			sliderIndex--;
			notifyIndexChanged();	
		}

		function notifyIndexChanged(){
			sliderIndexesEl.text(sliderIndex+1)
		}

		function next(e){
			if(!isTransitioning && hasNext()) {
				var previous = sliderIndex;
				increaseIndex();
				transition(previous, sliderIndex);
			}
		}

		function hasNext() {
			return sliderIndex < sliderTotal;
		}

		function previous(e){
			if(!isTransitioning && hasPrevious()) {
				var previous = sliderIndex;
				decreaseIndex();
				transition(previous, sliderIndex);
			}
		}

		function hasPrevious() {
			return 0 < sliderIndex;
		}

		function transition(currentIndex, nextIndex){
			isTransitioning = true;
			return hide(currentIndex, function(){
				return show(nextIndex, function(){
					isTransitioning = false;
				});
			});
		}

		function hide(index, callback){
			return slides[index].fadeOut(0, callback);
		}

		function show(index, callback){
			return slides[index].fadeIn(0, callback);
		}

		slides[0].show();
		notifyIndexChanged();		
	});
});

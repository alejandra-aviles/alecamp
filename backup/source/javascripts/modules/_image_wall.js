$(document).ready(function(){
	$('.image-wall').GITheWall({
		  // Callbacks API
		  onBeforeInit: null,
		  onReady: null,
		  onViewPortUpdate: null,
		  onItemChange: null,
		  onDestroy: null,
		  onShow: null,
		  onHide: null,
		  onContentLoading: null,
		  onContentLoaded: null,
		  margin: {
		    top: 10,
		    bottom: 10
		  },
		  scrollerElm: null,
		  scrollOffset: 150,
		  // settings
		  arrows: true,
		  closebutton: true,
		  keyboardNavigation: true,
		  animationSpeed: 300,
		  autoscroll: true,
		  responsive: true,
		  initialWrapperHeight: 600,
		  dynamicHeight: true,
		  nextButtonClass: '',
		  prevButtonClass: '',
		  closeButtonClass: ''
		});
});

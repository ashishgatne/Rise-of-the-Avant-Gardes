/*
 * Jump to chapters on the timeline
 */
 (function($){
 	var scrollTime = 1000;
 	var easingFunction = 'easeInOutQuad'; /* Easing cheatsheet: http://easings.net */
 	
 	/* JUMP TO IMPRESSIONISM */
 	$.kinetic.callMethods.reverse = function(settings){
 		scrollGallery(0000,this);
 	};

	//function scrollGallery
	function scrollGallery(chapterLocation,myObject) {
		var mypixelstomove = myObject.scrollLeft-chapterLocation;
		$(myObject).animate(
			{scrollLeft: '-=' + mypixelstomove}, scrollTime , easingFunction , function() {
			}
		);
	};
 }(jQuery));
 

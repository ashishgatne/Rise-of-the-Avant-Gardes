/*
 * Jump to chapters on the timeline
 */
 (function($){
 	var scrollTime = 2400;
 	var fadeTime = 120;
 	var easingFunction = 'easeInOutQuart'; /* Easing cheatsheet: http://easings.net */
 	
 	/* JUMP TO IMPRESSIONISM */
 	$.kinetic.callMethods.chapter1 = function(settings){
 		scrollGallery(0000,this);
 	};
 	
 	/* JUMP TO NEO-IMPRESSIONISM */
 	$.kinetic.callMethods.chapter2 = function(settings){
		scrollGallery(4850,this);
 	};
 	
 	/* JUMP TO POST-IMPRESSIONISM */
 	$.kinetic.callMethods.chapter3 = function(settings){
		scrollGallery(8000,this);
 	};

	//function scrollGallery
	function scrollGallery(chapterLocation,myObject) {
			if (myObject.scrollLeft < chapterLocation) {
				var mypixelstomove = chapterLocation-myObject.scrollLeft;
				$('.anchors').fadeOut(fadeTime);
				$(myObject).animate(
					{scrollLeft: '+=' + mypixelstomove}, scrollTime , easingFunction , function() {
						$('.anchors').fadeIn(fadeTime);
					}
				);
			} else if (myObject.scrollLeft > chapterLocation) {
				var mypixelstomove = myObject.scrollLeft-chapterLocation;
				$('.anchors').fadeOut(fadeTime);
				$(myObject).animate(
					{scrollLeft: '-=' + mypixelstomove}, scrollTime , easingFunction , function() {
						$('.anchors').fadeIn(fadeTime);
					}
				);
			}
		};
 }(jQuery));
 

/*
 * Kinetic method to jump to far right
 */
 (function($){

 	var scrollTime = 2400;
 	var easingFunction = 'easeInOutQuart'; /* Easing cheatsheet: http://easings.net */

 	$.kinetic.callMethods.center = function(settings){
 		this.scrollLeft = this.scrollWidth/2-window.innerWidth/2;
 		this.scrollTop = this.scrollHeight/2-window.innerHeight/2;
 	};
 	$.kinetic.callMethods.imp = function(settings) {
 		this.scrollLeft = 2048-window.innerWidth/2;
 		this.scrollTop = 1280-window.innerHeight/2;
 	};
 	$.kinetic.callMethods.nim = function(settings) {
 		this.scrollLeft = 1792-window.innerWidth/2;
 		this.scrollTop = 1536-window.innerHeight/2;
 	};
 	$.kinetic.callMethods.pim = function(settings) {
 		this.scrollLeft = 1792-window.innerWidth/2;
 		this.scrollTop = 1024-window.innerHeight/2;
 	};

 	/*$.kinetic.callMethods.center_imp = function(settings) {
 	 	$(this).animate({scrollLeft: 2048-window.innerWidth/2, scrollTop: 1280-window.innerHeight/2}, 1000);
 	};*/

  	$.kinetic.callMethods.center_imp = function(settings) {scrollCanvas(2048,1280,this)};
  	$.kinetic.callMethods.center_nim = function(settings) {scrollCanvas(1792,1536,this)};
  	$.kinetic.callMethods.center_pim = function(settings) {scrollCanvas(1792,1024,this)};


 	function scrollCanvas(movementLocationL,movementLocationT,myObject) {
 		var deltaL = movementLocationL-(window.innerWidth/2);
 		var deltaT = movementLocationT-(window.innerHeight/2);
 		$(myObject).animate(
			{scrollLeft: deltaL, scrollTop: deltaT}, scrollTime , easingFunction , function() {}
		);
 	};

 }(jQuery));

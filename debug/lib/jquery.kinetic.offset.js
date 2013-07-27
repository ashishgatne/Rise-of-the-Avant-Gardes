/**
 * Kinetic method to jump to far right
 */
 (function($){

 	$.kinetic.callMethods.center = function(settings){
 		this.scrollLeft = this.scrollWidth/2-window.innerWidth/2;
 		this.scrollTop = this.scrollHeight/2-window.innerHeight/2;
 	};
 }(jQuery));
 
 /*
 
 ==PURE CODE FROM THE FORUM==
 
  (function($){

 	$.kinetic.callMethods.farRight = function(settings){
 		this.scrollLeft = this.scrollWidth;
 	};
	alert('test');
 }(jQuery));
 
 */
/*
 * Kinetic method to jump to far right
 */
 (function($){

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
 }(jQuery));

 (function($){

 	var scrollTime = 1200;
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

	$.kinetic.callMethods.center_ppa = function(settings) {scrollCanvas(0512,0256,this)};
	$.kinetic.callMethods.center_nou = function(settings) {scrollCanvas(1024,0256,this)};
	$.kinetic.callMethods.center_nov = function(settings) {scrollCanvas(2450,0256,this)};
	$.kinetic.callMethods.center_neu = function(settings) {scrollCanvas(3072,0256,this)};
	$.kinetic.callMethods.center_aex = function(settings) {scrollCanvas(0758,0512,this)};
	$.kinetic.callMethods.center_inf = function(settings) {scrollCanvas(1280,0512,this)};
	$.kinetic.callMethods.center_sur = function(settings) {scrollCanvas(1792,0512,this)};
	$.kinetic.callMethods.center_pit = function(settings) {scrollCanvas(2304,0512,this)};
	$.kinetic.callMethods.center_fut = function(settings) {scrollCanvas(2816,0512,this)};
	$.kinetic.callMethods.center_nre = function(settings) {scrollCanvas(3328,0512,this)};
	$.kinetic.callMethods.center_nex = function(settings) {scrollCanvas(0512,0768,this)};
	$.kinetic.callMethods.center_nda = function(settings) {scrollCanvas(1024,0768,this)};
	$.kinetic.callMethods.center_dad = function(settings) {scrollCanvas(1536,0768,this)};
	$.kinetic.callMethods.center_fau = function(settings) {scrollCanvas(2048,0768,this)};
	$.kinetic.callMethods.center_exp = function(settings) {scrollCanvas(2560,0768,this)};
	$.kinetic.callMethods.center_ray = function(settings) {scrollCanvas(2816,0768,this)};
	$.kinetic.callMethods.center_bau = function(settings) {scrollCanvas(3138,0768,this)};
	$.kinetic.callMethods.center_opa = function(settings) {scrollCanvas(3574,0768,this)};
	$.kinetic.callMethods.center_hyp = function(settings) {scrollCanvas(0512,1024,this)};
	$.kinetic.callMethods.center_pop = function(settings) {scrollCanvas(0768,1024,this)};
	$.kinetic.callMethods.center_asm = function(settings) {scrollCanvas(1280,1024,this)};
	$.kinetic.callMethods.center_pim = function(settings) {scrollCanvas(1792,1024,this)};
	$.kinetic.callMethods.center_dec = function(settings) {scrollCanvas(2304,1024,this)};
	$.kinetic.callMethods.center_sup = function(settings) {scrollCanvas(2816,1024,this)};
	$.kinetic.callMethods.center_dej = function(settings) {scrollCanvas(3072,1024,this)};
	$.kinetic.callMethods.center_int = function(settings) {scrollCanvas(3328,1024,this)};
	$.kinetic.callMethods.center_sva = function(settings) {scrollCanvas(0512,1280,this)};
	$.kinetic.callMethods.center_coa = function(settings) {scrollCanvas(1024,1280,this)};
	$.kinetic.callMethods.center_flx = function(settings) {scrollCanvas(1280,1280,this)};
	$.kinetic.callMethods.center_cub = function(settings) {scrollCanvas(1536,1280,this)};
	$.kinetic.callMethods.center_imp = function(settings) {scrollCanvas(2048,1280,this)};
	$.kinetic.callMethods.center_aac = function(settings) {scrollCanvas(2560,1280,this)};
	$.kinetic.callMethods.center_mir = function(settings) {scrollCanvas(2816,1280,this)};
	$.kinetic.callMethods.center_min = function(settings) {scrollCanvas(3072,1280,this)};
	$.kinetic.callMethods.center_hit = function(settings) {scrollCanvas(3584,1280,this)};
	$.kinetic.callMethods.center_nma = function(settings) {scrollCanvas(0256,1536,this)};
	$.kinetic.callMethods.center_pfa = function(settings) {scrollCanvas(0768,1536,this)};
	$.kinetic.callMethods.center_hap = function(settings) {scrollCanvas(1024,1536,this)};
	$.kinetic.callMethods.center_nim = function(settings) {scrollCanvas(1792,1536,this)};
	$.kinetic.callMethods.center_ano = function(settings) {scrollCanvas(2304,1536,this)};
	$.kinetic.callMethods.center_con = function(settings) {scrollCanvas(2816,1536,this)};
	$.kinetic.callMethods.center_dco = function(settings) {scrollCanvas(3850,1536,this)};
	$.kinetic.callMethods.center_boa = function(settings) {scrollCanvas(0768,1792,this)};
	$.kinetic.callMethods.center_ins = function(settings) {scrollCanvas(1280,1792,this)};
	$.kinetic.callMethods.center_boa = function(settings) {scrollCanvas(0768,1792,this)};
	$.kinetic.callMethods.center_syn = function(settings) {scrollCanvas(1536,1792,this)};
	$.kinetic.callMethods.center_reg = function(settings) {scrollCanvas(2048,1792,this)};
	$.kinetic.callMethods.center_adc = function(settings) {scrollCanvas(2560,1792,this)};
	$.kinetic.callMethods.center_kin = function(settings) {scrollCanvas(1024,2560,this)};
	$.kinetic.callMethods.center_prc = function(settings) {scrollCanvas(1792,2560,this)};
	$.kinetic.callMethods.center_sre = function(settings) {scrollCanvas(2304,2560,this)};
	$.kinetic.callMethods.center_soc = function(settings) {scrollCanvas(2816,2560,this)};
	$.kinetic.callMethods.center_eat = function(settings) {scrollCanvas(1280,2304,this)};
	$.kinetic.callMethods.center_bru = function(settings) {scrollCanvas(3072,2304,this)};

 	function scrollCanvas(movementLocationL,movementLocationT,myObject) {
 		var deltaL = movementLocationL-(window.innerWidth/2);
 		var deltaT = movementLocationT-(window.innerHeight/2);
 		$(myObject).animate(
			{scrollLeft: deltaL, scrollTop: deltaT}, scrollTime , easingFunction , function() {}
		);
 	};

 }(jQuery));

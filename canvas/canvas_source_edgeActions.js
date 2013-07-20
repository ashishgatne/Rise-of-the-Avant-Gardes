/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      


      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         $('#loader').fadeOut(250);
         
         var urlHash = window.location.hash;
         if (urlHash) {
         	switch (urlHash) {
         		case "#impressionism":
         			sym.getComposition().getStage().getSymbol("node-imp").play("hover");
         			break;
         		case "#neo-impressionism":
         			sym.getComposition().getStage().getSymbol("node-nim").play("hover");
         			break;
         		case "#post-impressionism":
         			sym.getComposition().getStage().getSymbol("node-pim").play("hover");
         			break;
         	}
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         $('.navigate').fadeIn(200);
         sym.stop();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'alpha_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/impressionism.html#impressionism", "_self");
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
      //Edge binding end

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-imp").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("active");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("active");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);
         
         	location.hash = 'impressionism';

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".imp-nim").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/impressionism.html#impressionism", "_self");
         });

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         $(".imp-pim").fadeIn(250);

      });
      //Edge binding end

      

   })("node-imp");
   //Edge symbol end:'node-imp'

   //=========================================================
   
   //Edge symbol: 'node-l_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      

      

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/impressionism.html#post-impressionism", "_self");
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
      //Edge binding end

      

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("active");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("active");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("active");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-pim").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);
         
         	location.hash = 'post-impressionism';

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".imp-pim").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/impressionism.html#post-impressionism", "_self");
         });

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         $(".pim-fau").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2700, function(sym, e) {
         $(".pim-cub").fadeIn(250);

      });
      //Edge binding end

      

      })("node-pim");
   //Edge symbol end:'node-pim'

   //=========================================================
   
   //Edge symbol: 'nddl'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("nddl");
   //Edge symbol end:'nddl'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
   })("nav-close");
   //Edge symbol end:'nav-close'

   //=========================================================
   
   //Edge symbol: 'node-imp_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
         //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
         //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
         //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("active");
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-cub").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("active");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("active");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("active");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".pim-cub").fadeIn(250);
         $(".nim-cub").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2700, function(sym, e) {
         $(".cub-asm").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         $(".cub-syn").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

      })("node-cub");
   //Edge symbol end:'node-cub'

   //=========================================================
   
   //Edge symbol: 'node-pim_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
         //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/impressionism.html#neo-impressionism", "_self");
         });

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
         //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         		sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-cub").play("active");
         		sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-imp").play("active");
         		sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	 /*sym.getComposition().getStage().getSymbol("node-nim").play("inactive");*/
         		sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         		sym.getComposition().getStage().getSymbol("node-syn").play("active");
         	
         		$(".noodle").fadeOut(125);
         		$(".action").fadeOut(125);
         	
         		location.hash = 'neo-impressionism';

      });
      //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".imp-nim").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/impressionism.html#neo-impressionism", "_self");
         });

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         $(".nim-cub").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2700, function(sym, e) {
         $(".nim-syn").fadeIn(250);

      });
      //Edge binding end

      

         })("node-nim");
   //Edge symbol end:'node-nim'

   //=========================================================
   
   //Edge symbol: 'node-nim_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
         //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
         //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-asm").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("active");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("active");
         	sym.getComposition().getStage().getSymbol("node-dad").play("active");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("active");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("active");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".cub-asm").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         $(".asm-dad").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2700, function(sym, e) {
         $(".asm-pop").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2800, function(sym, e) {
         $(".asm-flx").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2900, function(sym, e) {
         $(".asm-coa").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

         })("node-asm");
   //Edge symbol end:'node-asm'

   //=========================================================
   
   //Edge symbol: 'node-asm_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
         //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
         //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("active");
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-dad").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("active");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("active");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sur").play("active");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".asm-dad").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         $(".dad-sur").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2700, function(sym, e) {
         $(".dad-inf").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2800, function(sym, e) {
         $(".dad-ned").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

         })("node-dad");
   //Edge symbol end:'node-dad'

   //=========================================================
   
   //Edge symbol: 'node-dad_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
         //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
         //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("active");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("active");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-reg").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("active");
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".imp-reg").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         $(".reg-prc").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2700, function(sym, e) {
         $(".reg-sre").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

         })("node-reg");
   //Edge symbol end:'node-reg'

   //=========================================================
   
   //Edge symbol: 'node-reg_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
         //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
         //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("active");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("active");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-inf").play("active");*/
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("active");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".dad-inf").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         $(".inf-nou").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2700, function(sym, e) {
         $(".inf-aex").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

         })("node-inf");
   //Edge symbol end:'node-inf'

   //=========================================================
   
   //Edge symbol: 'node-cub_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         //sym.play("idle");
         sym.stop();

      });
         //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
         //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
         //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
         //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("active");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-nda").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("active");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".dad-ned").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         $(".pop-ned").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

      })("node-nda");
   //Edge symbol end:'node-nda'

   //=========================================================
   
   //Edge symbol: 'node-nim_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
            //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
            //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("active");
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-coa").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("active");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("active");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".asm-coa").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         $(".flx-coa").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2700, function(sym, e) {
         $(".pop-coa").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

            })("node-coa");
   //Edge symbol end:'node-coa'

   //=========================================================
   
   //Edge symbol: 'node-cub_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
            //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
            //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
            //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-boa").play("active");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("active");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("active");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".hap-pfa").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2700, function(sym, e) {
         $(".pfa-sva").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         $(".pfa-bda").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

         })("node-pfa");
   //Edge symbol end:'node-pfa'

   //=========================================================
   
   //Edge symbol: 'node-inf_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
            //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
            //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("active");
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("active");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-flx").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("active");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("active");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("active");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);
         

      });
      //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".asm-flx").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         $(".flx-coa").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2700, function(sym, e) {
         $(".flx-hap").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2800, function(sym, e) {
         $(".flx-ins").fadeIn(250);
         $(".hap-pfa").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

            })("node-flx");
   //Edge symbol end:'node-flx'

   //=========================================================
   
   //Edge symbol: 'node-arb_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
            //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
            //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("active");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-nex").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".aex-nex").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

            })("node-nex");
   //Edge symbol end:'node-nex'

   //=========================================================
   
   //Edge symbol: 'node-nex_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         //sym.play("idle");
         sym.stop();

      });
               //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("node-anc").play("inactive");
         sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         
         sym.getComposition().getStage().getSymbol("node-imp").play("active");
         
         sym.getComposition().getStage().getSymbol("noodle-imp-sym").play("bridge");
         
         sym.getComposition().getStage().getSymbol("noodle-anc-ano").play("disconnect");
         sym.getComposition().getStage().getSymbol("noodle-imp-nim").play("disconnect");

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.play("rehover");

      });
               //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("node-anc").play("enable");
         sym.getComposition().getStage().getSymbol("node-ano").play("enable");
         sym.getComposition().getStage().getSymbol("node-nim").play("enable");
         
         sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         
         sym.getComposition().getStage().getSymbol("noodle-imp-sym").play("debridge");
         
         sym.getComposition().getStage().getSymbol("noodle-anc-ano").play("reconnect");
         sym.getComposition().getStage().getSymbol("noodle-imp-nim").play("reconnect");

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8250, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9250, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11500, function(sym, e) {
         sym.stop();
         

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12500, function(sym, e) {
         sym.stop();
         

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("node-anc").play("inactive");
         sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         
         sym.getComposition().getStage().getSymbol("node-imp").play("active");
         
         sym.getComposition().getStage().getSymbol("noodle-imp-sym").play("bridge");
         
         sym.getComposition().getStage().getSymbol("noodle-anc-ano").play("disconnect");
         sym.getComposition().getStage().getSymbol("noodle-imp-nim").play("disconnect");

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
         sym.play("retouch");

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         setTimeout(function () {
         		sym.play("idle");
         },(Math.random()*100000));
         
         
         
         

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseout", function(sym, e) {
         sym.play("exit");

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         window.open("../timeline/timeline.html#post-impressionism", "_self");

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("touch");
         

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nav_touch}", "click", function(sym, e) {
         window.open("../timeline/timeline.html#post-impressionism", "_self");

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nav_touch}", "touchstart", function(sym, e) {
         window.open("../timeline/timeline.html#post-impressionism", "_self");

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nav-close}", "click", function(sym, e) {
         sym.play("exit");

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nav-close}", "touchstart", function(sym, e) {
         sym.play("exit");

      });
            //Edge binding end

            })("node-dig");
   //Edge symbol end:'node-dig'

   //=========================================================
   
   //Edge symbol: 'node-nda_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
            //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
            //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
            //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("active");
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("active");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("active");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("active");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-pop").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("active");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         	$(".asm-pop").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         	$(".pop-coa").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2700, function(sym, e) {
         	$(".pop-ned").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2800, function(sym, e) {
         	$(".pop-hyp").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2900, function(sym, e) {
         	$(".pop-sva").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

         })("node-pop");
   //Edge symbol end:'node-pop'

   //=========================================================
   
   //Edge symbol: 'node-pop_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
            //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
            //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
            //Edge binding end

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-aex").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("active");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("active");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("active");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("active");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".inf-aex").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2700, function(sym, e) {
         $(".aex-ppa").fadeIn(250);
         $(".aex-nex").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         $(".nou-aex").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

         })("node-aex");
   //Edge symbol end:'node-aex'

   //=========================================================
   
   //Edge symbol: 'node-vor_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
            //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
            //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("active");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".pop-hyp").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

            })("node-hyp");
   //Edge symbol end:'node-hyp'

   //=========================================================
   
   //Edge symbol: 'node-nda_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
            //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
            //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
            //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("active");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("active");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("active");
         	sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-sur").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".fau-sur").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         $(".pit-sur").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2700, function(sym, e) {
         $(".dad-sur").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

         })("node-sur");
   //Edge symbol end:'node-sur'

   //=========================================================
   
   //Edge symbol: 'node-sur_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
            //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
            //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
            //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-fau").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("active");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sur").play("active");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);
         

      });
      //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".pim-fau").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         $(".fau-sur").fadeIn(250);

      });
      //Edge binding end

         })("node-fau");
   //Edge symbol end:'node-fau'

   //=========================================================
   
   //Edge symbol: 'node-imp_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
         //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
         //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
         //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-dec").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("active");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".dec-exp").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

      })("node-dec");
   //Edge symbol end:'node-dec'

   //=========================================================
   
   //Edge symbol: 'node-pfa_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
            //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
            //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
          /*sym.getComposition().getStage().getSymbol("node-aac").play("active");*/
         	sym.getComposition().getStage().getSymbol("node-adc").play("active");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("active");
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("active");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".aac-mir").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         $(".aac-ano").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2700, function(sym, e) {
         $(".aac-adc").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

         })("node-aac");
   //Edge symbol end:'node-aac'

   //=========================================================
   
   //Edge symbol: 'node-fau_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
            //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
            //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
            //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("active");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-exp").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("active");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("active");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".dec-exp").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         $(".exp-fut").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2700, function(sym, e) {
         $(".exp-sup").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

         })("node-exp");
   //Edge symbol end:'node-exp'

   //=========================================================
   
   //Edge symbol: 'node-inf_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
            //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
            //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("active");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-fut").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("active");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("active");
         	sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("active");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".exp-fut").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         $(".fut-ray").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2700, function(sym, e) {
         $(".fut-neu").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2800, function(sym, e) {
         $(".fut-pit").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

            })("node-fut");
   //Edge symbol end:'node-fut'

   //=========================================================
   
   //Edge symbol: 'node-reg_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
            //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
            //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("active");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("active");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("active");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-syn").play("inactive");*/
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".cub-syn").fadeIn(250);
         $(".nim-syn").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         $(".syn-prc").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

            })("node-syn");
   //Edge symbol end:'node-syn'

   //=========================================================
   
   //Edge symbol: 'node-fut_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
               //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
               //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
               //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bau").play("active");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("active");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("active");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("active");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-sup").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2800, function(sym, e) {
         $(".sup-bau").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".mir-isk").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         $(".exp-sup").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2700, function(sym, e) {
         $(".ray-sup").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2900, function(sym, e) {
         $(".sup-min").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

               })("node-sup");
   //Edge symbol end:'node-sup'

   //=========================================================
   
   //Edge symbol: 'node-imp_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         //sym.play("idle");
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("node-anc").play("inactive");
         sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         
         sym.getComposition().getStage().getSymbol("node-nim").play("active");
         sym.getComposition().getStage().getSymbol("node-sym").play("active");
         
         sym.getComposition().getStage().getSymbol("noodle-imp-nim").play("bridge");
         sym.getComposition().getStage().getSymbol("noodle-imp-sym").play("bridge");
         
         sym.getComposition().getStage().getSymbol("noodle-anc-ano").play("disconnect");
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.play("rehover");

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("node-anc").play("enable");
         sym.getComposition().getStage().getSymbol("node-ano").play("enable");
         
         sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         sym.getComposition().getStage().getSymbol("node-sym").play("inactive");
         
         sym.getComposition().getStage().getSymbol("noodle-imp-nim").play("debridge");
         sym.getComposition().getStage().getSymbol("noodle-imp-sym").play("debridge");
         
         sym.getComposition().getStage().getSymbol("noodle-anc-ano").play("reconnect");
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8250, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9250, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11500, function(sym, e) {
         sym.stop();
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12500, function(sym, e) {
         sym.stop();
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("node-anc").play("inactive");
         sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         
         sym.getComposition().getStage().getSymbol("node-nim").play("active");
         sym.getComposition().getStage().getSymbol("node-sym").play("active");
         
         sym.getComposition().getStage().getSymbol("noodle-imp-nim").play("bridge");
         sym.getComposition().getStage().getSymbol("noodle-imp-sym").play("bridge");
         
         sym.getComposition().getStage().getSymbol("noodle-anc-ano").play("disconnect");

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
         sym.play("retouch");

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         setTimeout(function () {
         		sym.play("idle");
         },(Math.random()*100000));

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseout", function(sym, e) {
         sym.play("exit");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         window.open("../timeline/timeline.html#impressionism", "_self");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("touch");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nav-touch}", "touchstart", function(sym, e) {
         window.open("../timeline/timeline.html#impressionism", "_self");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nav-close}", "click", function(sym, e) {
         sym.play("exit");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nav-close}", "touchstart", function(sym, e) {
         sym.play("exit");
         

      });
         //Edge binding end

      })("node-icon");
   //Edge symbol end:'node-icon'

   //=========================================================
   
   //Edge symbol: 'node-con_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
         //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
         //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
         //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("active");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-min").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("active");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".sup-min").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         $(".dsj-min").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

      })("node-min");
   //Edge symbol end:'node-min'

   //=========================================================
   
   //Edge symbol: 'node-con_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
         //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
         //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
         //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("active");
          /*sym.getComposition().getStage().getSymbol("node-adc").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("active");
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".aac-adc").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         $(".ano-adc").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

      })("node-adc");
   //Edge symbol end:'node-adc'

   //=========================================================
   
   //Edge symbol: 'node-eta_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
               //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
               //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
               //Edge binding end

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("active");
         	sym.getComposition().getStage().getSymbol("node-adc").play("active");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-ano").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".aac-ano").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         $(".ano-adc").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

               })("node-ano");
   //Edge symbol end:'node-ano'

   //=========================================================
   
   //Edge symbol: 'node-ano_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
               //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
               //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
               //Edge binding end

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("active");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("active");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-neu").play("active");*/
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("active");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".exp-fut").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2700, function(sym, e) {
         $(".neu-nre").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         $(".fut-neu").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

               })("node-neu");
   //Edge symbol end:'node-neu'

   //=========================================================
   
   //Edge symbol: 'node-neu_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
               //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
               //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
               //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bau").play("active");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("active");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-nre").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".neu-nre").fadeIn(250);
         $(".bau-nre").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

               })("node-nre");
   //Edge symbol end:'node-nre'

   //=========================================================
   
   //Edge symbol: 'node-exp_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
               //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
               //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
               //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
               //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-bau").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("active");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("active");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("active");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("active");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".sup-bau").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2900, function(sym, e) {
         $(".bau-opa").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         $(".dsj-bau").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2700, function(sym, e) {
         $(".bau-int").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2800, function(sym, e) {
         $(".bau-nre").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

            })("node-bau");
   //Edge symbol end:'node-bau'

   //=========================================================
   
   //Edge symbol: 'node-neu_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
               //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
               //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
               //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("active");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("active");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-pit").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sur").play("active");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".fut-pit").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         $(".pit-sur").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2700, function(sym, e) {
         $(".pit-nov").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

               })("node-pit");
   //Edge symbol end:'node-pit'

   //=========================================================
   
   //Edge symbol: 'node-pfa_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
               //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
               //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
               //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
               //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("active");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("active");
         	sym.getComposition().getStage().getSymbol("node-soc").play("active");
          /*sym.getComposition().getStage().getSymbol("node-sre").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".reg-sre").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         $(".soc-sre").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

            })("node-sre");
   //Edge symbol end:'node-sre'

   //=========================================================
   
   //Edge symbol: 'node-sup_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
               //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
               //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
               //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bau").play("active");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-dej").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("active");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("active");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".dsj-bau").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         $(".dsj-int").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2700, function(sym, e) {
         $(".dsj-min").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

               })("node-dej");
   //Edge symbol end:'node-dej'

   //=========================================================
   
   //Edge symbol: 'node-dej_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
               //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
               //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
               //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bau").play("active");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-opa").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".bau-opa").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

               })("node-opa");
   //Edge symbol end:'node-opa'

   //=========================================================
   
   //Edge symbol: 'node-ano_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
               //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
               //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
               //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("active");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("active");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-soc").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-sre").play("active");
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".con-soc").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         $(".soc-sre").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2700, function(sym, e) {
         $(".soc-bru").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

               })("node-soc");
   //Edge symbol end:'node-soc'

   //=========================================================
   
   //Edge symbol: 'node-vor_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
            //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
            //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("active");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-ray").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("active");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".fut-ray").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         $(".ray-sup").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

            })("node-ray");
   //Edge symbol end:'node-ray'

   //=========================================================
   
   //Edge symbol: 'node-syn_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
               //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
               //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
               //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("active");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-prc").play("active");*/
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("active");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("active");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".cub-syn").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         $(".syn-prc").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2700, function(sym, e) {
         $(".reg-prc").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

               })("node-prc");
   //Edge symbol end:'node-prc'

   //=========================================================
   
   //Edge symbol: 'node-vor_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         //sym.play("idle");
         sym.stop();

      });
               //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("node-anc").play("inactive");
         sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         sym.getComposition().getStage().getSymbol("node-sym").play("inactive");
         
         sym.getComposition().getStage().getSymbol("node-imp").play("active");
         
         sym.getComposition().getStage().getSymbol("noodle-imp-nim").play("bridge");
         
         sym.getComposition().getStage().getSymbol("noodle-anc-ano").play("disconnect");
         sym.getComposition().getStage().getSymbol("noodle-imp-sym").play("disconnect");

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.play("rehover");

      });
               //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("node-anc").play("enable");
         sym.getComposition().getStage().getSymbol("node-ano").play("enable");
         sym.getComposition().getStage().getSymbol("node-sym").play("enable");
         
         sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         
         sym.getComposition().getStage().getSymbol("noodle-imp-nim").play("debridge");
         
         sym.getComposition().getStage().getSymbol("noodle-anc-ano").play("reconnect");
         sym.getComposition().getStage().getSymbol("noodle-imp-sym").play("reconnect");

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8250, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9250, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11500, function(sym, e) {
         sym.stop();
         

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12500, function(sym, e) {
         sym.stop();
         

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("node-anc").play("inactive");
         sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         sym.getComposition().getStage().getSymbol("node-sym").play("inactive");
         
         sym.getComposition().getStage().getSymbol("node-imp").play("active");
         
         sym.getComposition().getStage().getSymbol("noodle-imp-nim").play("bridge");
         
         sym.getComposition().getStage().getSymbol("noodle-anc-ano").play("disconnect");
         sym.getComposition().getStage().getSymbol("noodle-imp-sym").play("disconnect");

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
         sym.play("retouch");

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         setTimeout(function () {
         		sym.play("idle");
         },(Math.random()*100000));

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseout", function(sym, e) {
         sym.play("exit");

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         window.open("../timeline/timeline.html#neo-impressionism", "_self");

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("touch");

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nav-touch}", "click", function(sym, e) {
         window.open("../timeline/timeline.html#neo-impressionism", "_self");

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nav-close}", "click", function(sym, e) {
         sym.play("exit");

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nav-close}", "touchstart", function(sym, e) {
         sym.play("exit");

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nav-touch}", "touchstart", function(sym, e) {
         window.open("../timeline/timeline.html#neo-impressionism", "_self");

      });
            //Edge binding end

            })("node-let");
   //Edge symbol end:'node-let'

   //=========================================================
   
   //Edge symbol: 'node-dig_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
               //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
               //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
               //Edge binding end

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-nma").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("active");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("active");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".pop-sva").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         $(".sva-nma").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

               })("node-nma");
   //Edge symbol end:'node-nma'

   //=========================================================
   
   //Edge symbol: 'node-dig_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
               //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
               //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
               //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-boa").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("active");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("active");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".hap-bda").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         $(".pfa-bda").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

               })("node-boa");
   //Edge symbol end:'node-boa'

   //=========================================================
   
   //Edge symbol: 'node-nre_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         //sym.play("idle");
         sym.stop();

      });
                     //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("node-anc").play("inactive");
         sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         
         sym.getComposition().getStage().getSymbol("node-imp").play("active");
         
         sym.getComposition().getStage().getSymbol("noodle-imp-sym").play("bridge");
         
         sym.getComposition().getStage().getSymbol("noodle-anc-ano").play("disconnect");
         sym.getComposition().getStage().getSymbol("noodle-imp-nim").play("disconnect");

      });
                  //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.play("rehover");

      });
                     //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("node-anc").play("enable");
         sym.getComposition().getStage().getSymbol("node-ano").play("enable");
         sym.getComposition().getStage().getSymbol("node-nim").play("enable");
         
         sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         
         sym.getComposition().getStage().getSymbol("noodle-imp-sym").play("debridge");
         
         sym.getComposition().getStage().getSymbol("noodle-anc-ano").play("reconnect");
         sym.getComposition().getStage().getSymbol("noodle-imp-nim").play("reconnect");

      });
                  //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         sym.stop();

      });
                     //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8250, function(sym, e) {
         sym.stop();

      });
                     //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9250, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11500, function(sym, e) {
         sym.stop();
         

      });
                  //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12500, function(sym, e) {
         sym.stop();
         

      });
                  //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("node-anc").play("inactive");
         sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         
         sym.getComposition().getStage().getSymbol("node-imp").play("active");
         
         sym.getComposition().getStage().getSymbol("noodle-imp-sym").play("bridge");
         
         sym.getComposition().getStage().getSymbol("noodle-anc-ano").play("disconnect");
         sym.getComposition().getStage().getSymbol("noodle-imp-nim").play("disconnect");

      });
                  //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
         sym.play("retouch");

      });
                  //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         setTimeout(function () {
         		sym.play("idle");
         },(Math.random()*100000));
         
         
         
         

      });
                  //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseout", function(sym, e) {
         sym.play("exit");

      });
                  //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
                  //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         window.open("../timeline/timeline.html#post-impressionism", "_self");

      });
                  //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("touch");
         

      });
                  //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nav_touch}", "click", function(sym, e) {
         window.open("../timeline/timeline.html#post-impressionism", "_self");

      });
                  //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nav_touch}", "touchstart", function(sym, e) {
         window.open("../timeline/timeline.html#post-impressionism", "_self");

      });
                  //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nav-close}", "click", function(sym, e) {
         sym.play("exit");

      });
                  //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nav-close}", "touchstart", function(sym, e) {
         sym.play("exit");

      });
                  //Edge binding end

                  })("node-nbr");
   //Edge symbol end:'node-nbr'

   //=========================================================
   
   //Edge symbol: 'node-mir_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
                  //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
                  //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
                  //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
                  //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
                  //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bau").play("active");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("active");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("active");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-int").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".dsj-int").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2700, function(sym, e) {
         $(".int-hit").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         $(".bau-int").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

               })("node-int");
   //Edge symbol end:'node-int'

   //=========================================================
   
   //Edge symbol: 'node-min_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
            //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
            //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
            //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("active");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-hit").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("active");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".int-hit").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         $(".hit-dec").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

         })("node-hit");
   //Edge symbol end:'node-hit'

   //=========================================================
   
   //Edge symbol: 'node-stx_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
                     //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
                     //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
                  //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
                  //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
                  //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
                  //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
                  //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-dco").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("active");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".hit-dec").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

                  })("node-dco");
   //Edge symbol end:'node-dco'

   //=========================================================
   
   //Edge symbol: 'node-dco_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
                     //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
                     //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
                  //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
                  //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
                  //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
                  //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
                  //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-bru").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("active");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".soc-bru").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

                  })("node-bru");
   //Edge symbol end:'node-bru'

   //=========================================================
   
   //Edge symbol: 'node-flx_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
               //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
               //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
               //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-boa").play("active");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("active");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-hap").play("active");*/
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("active");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".flx-hap").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         $(".hap-bda").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2700, function(sym, e) {
         $(".hap-pfa").fadeIn(250);	

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_people}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

               })("node-hap");
   //Edge symbol end:'node-hap'

   //=========================================================
   
   //Edge symbol: 'node-hap_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
               //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
               //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
               //Edge binding end

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("active");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("active");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-ins").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("active");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".flx-ins").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         $(".ins-kin").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2700, function(sym, e) {
         $(".ins-eat").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

               })("node-ins");
   //Edge symbol end:'node-ins'

   //=========================================================
   
   //Edge symbol: 'node-pit_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         //sym.play("idle");
         sym.stop();

      });
                     //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("node-anc").play("inactive");
         sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         
         sym.getComposition().getStage().getSymbol("node-imp").play("active");
         
         sym.getComposition().getStage().getSymbol("noodle-imp-sym").play("bridge");
         
         sym.getComposition().getStage().getSymbol("noodle-anc-ano").play("disconnect");
         sym.getComposition().getStage().getSymbol("noodle-imp-nim").play("disconnect");

      });
                  //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.play("rehover");

      });
                     //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("node-anc").play("enable");
         sym.getComposition().getStage().getSymbol("node-ano").play("enable");
         sym.getComposition().getStage().getSymbol("node-nim").play("enable");
         
         sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         
         sym.getComposition().getStage().getSymbol("noodle-imp-sym").play("debridge");
         
         sym.getComposition().getStage().getSymbol("noodle-anc-ano").play("reconnect");
         sym.getComposition().getStage().getSymbol("noodle-imp-nim").play("reconnect");

      });
                  //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         sym.stop();

      });
                     //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8250, function(sym, e) {
         sym.stop();

      });
                     //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9250, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11500, function(sym, e) {
         sym.stop();
         

      });
                  //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12500, function(sym, e) {
         sym.stop();
         

      });
                  //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("node-anc").play("inactive");
         sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         
         sym.getComposition().getStage().getSymbol("node-imp").play("active");
         
         sym.getComposition().getStage().getSymbol("noodle-imp-sym").play("bridge");
         
         sym.getComposition().getStage().getSymbol("noodle-anc-ano").play("disconnect");
         sym.getComposition().getStage().getSymbol("noodle-imp-nim").play("disconnect");

      });
                  //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
         sym.play("retouch");

      });
                  //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         setTimeout(function () {
         		sym.play("idle");
         },(Math.random()*100000));
         
         
         
         

      });
                  //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseout", function(sym, e) {
         sym.play("exit");

      });
                  //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
                  //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         window.open("../timeline/timeline.html#post-impressionism", "_self");

      });
                  //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("touch");
         

      });
                  //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nav_touch}", "click", function(sym, e) {
         window.open("../timeline/timeline.html#post-impressionism", "_self");

      });
                  //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nav_touch}", "touchstart", function(sym, e) {
         window.open("../timeline/timeline.html#post-impressionism", "_self");

      });
                  //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nav-close}", "click", function(sym, e) {
         sym.play("exit");

      });
                  //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nav-close}", "touchstart", function(sym, e) {
         sym.play("exit");

      });
                  //Edge binding end

                  })("node-apo");
   //Edge symbol end:'node-apo'

   //=========================================================
   
   //Edge symbol: 'node-neu_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
                     //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
                     //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
                  //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
                  //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
                  //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
                  //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
                  //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-nov").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("active");
         	sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".pit-nov").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

                  })("node-nov");
   //Edge symbol end:'node-nov'

   //=========================================================
   
   //Edge symbol: 'node-nex_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
               //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
               //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
               //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
               //Edge binding end

      

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("active");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("active");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-nou").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".inf-nou").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         $(".nou-aex").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

               })("node-nou");
   //Edge symbol end:'node-nou'

   //=========================================================
   
   //Edge symbol: 'node-eta_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
                     //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
                     //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
                  //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
                  //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
                  //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
                  //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
                  //Edge binding end

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("active");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-kin").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         	$(".ins-kin").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

                  })("node-kin");
   //Edge symbol end:'node-kin'

   //=========================================================
   
   //Edge symbol: 'node-aex_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("active");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("active");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
               //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
               //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
               //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".inf-aex").fadeIn(250);

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         $(".aex-ppa").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

            })("node-ppa");
   //Edge symbol end:'node-ppa'

   //=========================================================
   
   //Edge symbol: 'node-ano_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
                     //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
                     //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
                  //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
                  //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
                  //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
                  //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
                  //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("active");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("active");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-mir").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("active");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".aac-mir").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         $(".mir-sup").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2700, function(sym, e) {
         $(".mir-con").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

                  })("node-mir");
   //Edge symbol end:'node-mir'

   //=========================================================
   
   //Edge symbol: 'node-asm_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
            //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
            //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("active");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("active");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("active");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-sva").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".pop-sva").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2700, function(sym, e) {
         $(".sva-nma").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         $(".pfa-sva").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

            })("node-sva");
   //Edge symbol end:'node-sva'

   //=========================================================
   
   //Edge symbol: 'node-min_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
            //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
            //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
            //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("active");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-con").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-eat").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("active");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("active");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".mir-con").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2600, function(sym, e) {
         $(".con-soc").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2700, function(sym, e) {
         $(".soc-bru").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

         })("node-con");
   //Edge symbol end:'node-con'

   //=========================================================
   
   //Edge symbol: 'node-kin_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
                        //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
                        //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         

      });
                     //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         

      });
                     //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
                     //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
                     //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("hover");
         sym.$("action").fadeIn(250);

      });
                     //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         	sym.getComposition().getStage().getSymbol("node-aac").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-adc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-aex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-asm").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-boa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-bru").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-coa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-con").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-cub").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dad").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dco").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dec").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-dej").play("inactive");
          /*sym.getComposition().getStage().getSymbol("node-eat").play("inactive");*/
         	sym.getComposition().getStage().getSymbol("node-exp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fau").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-flx").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-fut").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hap").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-hyp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-imp").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-inf").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ins").play("active");
         	sym.getComposition().getStage().getSymbol("node-int").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-kin").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-min").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-mir").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nda").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-neu").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nex").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nma").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nou").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nov").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-nre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-opa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pfa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pim").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pit").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-pop").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ppa").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-prc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-ray").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-reg").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-soc").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sre").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sup").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sur").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-sva").play("inactive");
         	sym.getComposition().getStage().getSymbol("node-syn").play("inactive");
         
         	$(".noodle").fadeOut(125);
         	$(".action").fadeOut(125);

      });
      //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         $(".ins-eat").fadeIn(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_action}", "touchend", function(sym, e) {
         $('body').fadeOut(400, function(){
         	window.open("../timeline/timeline.html", "_self");
         });

      });
      //Edge binding end

                     })("node-lan");
   //Edge symbol end:'node-lan'

   //=========================================================
   
   //Edge symbol: 'line_362'
   (function(symbolName) {   
   
      

      

      

   })("noodle_0256");
   //Edge symbol end:'noodle_0256'

   //=========================================================
   
   //Edge symbol: 'noodle_1'
   (function(symbolName) {   
   
      

      

      

   })("noodle_0362");
   //Edge symbol end:'noodle_0362'

   //=========================================================
   
   //Edge symbol: 'noodle_1'
   (function(symbolName) {   
   
      

      

      

   })("noodle_0512");
   //Edge symbol end:'noodle_0512'

   //=========================================================
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
   
   })("Preloader");
   //Edge symbol end:'Preloader'

   //=========================================================
   
   //Edge symbol: 'action'
   (function(symbolName) {   
   
      

   })("action_R");
   //Edge symbol end:'action_R'

   //=========================================================
   
   //Edge symbol: 'action_R_1'
   (function(symbolName) {   
   
      

      })("action_L");
   //Edge symbol end:'action_L'

   //=========================================================
   
   //Edge symbol: 'action_R_1'
   (function(symbolName) {   
   
      

      })("action_C");
   //Edge symbol end:'action_C'

   //=========================================================
   
   //Edge symbol: 'note-don_1'
   (function(symbolName) {   
   
   })("note-rcc");
   //Edge symbol end:'note-rcc'

   //=========================================================
   
   //Edge symbol: 'note-rcc_1'
   (function(symbolName) {   
   
   })("note-fau");
   //Edge symbol end:'note-fau'

   //=========================================================
   
   //Edge symbol: 'note-fau_1'
   (function(symbolName) {   
   
   })("note-tig");
   //Edge symbol end:'note-tig'

   //=========================================================
   
   //Edge symbol: 'note-fau_1'
   (function(symbolName) {   
   
      })("note-ash");
   //Edge symbol end:'note-ash'

   //=========================================================
   
   //Edge symbol: 'note-rcc_1'
   (function(symbolName) {   
   
      })("note-nxr");
   //Edge symbol end:'note-nxr'

   //=========================================================
   
   //Edge symbol: 'note-fau_1'
   (function(symbolName) {   
   
      })("note-pro");
   //Edge symbol end:'note-pro'

   //=========================================================
   
   //Edge symbol: 'note-pro_1'
   (function(symbolName) {   
   
      })("note-kod");
   //Edge symbol end:'note-kod'

   //=========================================================
   
   //Edge symbol: 'note-fau_1'
   (function(symbolName) {   
   
      })("note-chs");
   //Edge symbol end:'note-chs'

   //=========================================================
   
   //Edge symbol: 'note-rcc_1'
   (function(symbolName) {   
   
      })("note-sit");
   //Edge symbol end:'note-sit'

   //=========================================================
   
   //Edge symbol: 'note-sit_1'
   (function(symbolName) {   
   
      })("note-dbr");
   //Edge symbol end:'note-dbr'

   //=========================================================
   
   //Edge symbol: 'note-fau_1'
   (function(symbolName) {   
   
      })("note-bru");
   //Edge symbol end:'note-bru'

   //=========================================================
   
   //Edge symbol: 'note-pro_1'
   (function(symbolName) {   
   
      })("note-vkh");
   //Edge symbol end:'note-vkh'

   //=========================================================
   
   //Edge symbol: 'note-vkh_1'
   (function(symbolName) {   
   
         })("note-dwb");
   //Edge symbol end:'note-dwb'

   //=========================================================
   
   //Edge symbol: 'note-nxr_1'
   (function(symbolName) {   
   
         })("note-csu");
   //Edge symbol end:'note-csu'

   //=========================================================
   
   //Edge symbol: 'note-dwb_1'
   (function(symbolName) {   
   
         })("note-edp");
   //Edge symbol end:'note-edp'

})(jQuery, AdobeEdge, "avnt_canvas");
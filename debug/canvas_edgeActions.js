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
      
      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'alpha_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         //sym.play("idle");
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.play("rehover");

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

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("node-anc").play("disable");
         sym.getComposition().getStage().getSymbol("node-ano").play("disable");
         
         sym.getComposition().getStage().getSymbol("node-nim").play("active");
         sym.getComposition().getStage().getSymbol("node-sym").play("active");
         
         sym.getComposition().getStage().getSymbol("noodle-imp-nim").play("bridge");
         sym.getComposition().getStage().getSymbol("noodle-imp-sym").play("bridge");
         
         sym.getComposition().getStage().getSymbol("noodle-anc-ano").play("disconnect");
         

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
         sym.getComposition().getStage().getSymbol("node-anc").play("disable");
         sym.getComposition().getStage().getSymbol("node-ano").play("disable");
         
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

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseout", function(sym, e) {
         sym.play("exit");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         $('#wrapper').kinetic('center_imp');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("touch");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         setTimeout(function () {
         		sym.play("idle");
         },(Math.random()*100000));

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nav-touch}", "touchstart", function(sym, e) {
         window.open("../timeline/timeline.html#impressionism", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nav-touch}", "click", function(sym, e) {
         $('#wrapper').kinetic('center_imp');

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

   })("node-imp");
   //Edge symbol end:'node-imp'

   //=========================================================
   
   //Edge symbol: 'node-l_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         //sym.play("idle");
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.play("rehover");

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

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("node-anc").play("disable");
         sym.getComposition().getStage().getSymbol("node-ano").play("disable");
         sym.getComposition().getStage().getSymbol("node-nim").play("disable");
         
         sym.getComposition().getStage().getSymbol("node-imp").play("active");
         
         sym.getComposition().getStage().getSymbol("noodle-imp-sym").play("bridge");
         
         sym.getComposition().getStage().getSymbol("noodle-anc-ano").play("disconnect");
         sym.getComposition().getStage().getSymbol("noodle-imp-nim").play("disconnect");

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
         sym.getComposition().getStage().getSymbol("node-anc").play("disable");
         sym.getComposition().getStage().getSymbol("node-ano").play("disable");
         sym.getComposition().getStage().getSymbol("node-nim").play("disable");
         
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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         setTimeout(function () {
         		sym.play("idle");
         },(Math.random()*100000));
         
         
         
         

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

      })("node-sym");
   //Edge symbol end:'node-sym'

   //=========================================================
   
   //Edge symbol: 'node-m_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         //sym.play("idle");
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.play("rehover");

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

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseout", function(sym, e) {
         sym.play("exit");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("node-anc").play("disable");
         sym.getComposition().getStage().getSymbol("node-ano").play("disable");
         sym.getComposition().getStage().getSymbol("node-sym").play("disable");
         
         sym.getComposition().getStage().getSymbol("node-imp").play("active");
         
         sym.getComposition().getStage().getSymbol("noodle-imp-nim").play("bridge");
         
         sym.getComposition().getStage().getSymbol("noodle-anc-ano").play("disconnect");
         sym.getComposition().getStage().getSymbol("noodle-imp-sym").play("disconnect");

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

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         window.open("../timeline/timeline.html#neo-impressionism", "_self");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("node-anc").play("disable");
         sym.getComposition().getStage().getSymbol("node-ano").play("disable");
         sym.getComposition().getStage().getSymbol("node-sym").play("disable");
         
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

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("touch");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         setTimeout(function () {
         		sym.play("idle");
         },(Math.random()*100000));

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

      })("node-nim");
   //Edge symbol end:'node-nim'

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
   
   //Edge symbol: 'node-imp_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         //sym.play("idle");
         sym.stop();

      });
         //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.play("rehover");

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

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseout", function(sym, e) {
         sym.play("exit");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");
         

      });
         //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         alert ('This movement is locked in the pre-alpha demo.');
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_nav-close}", "touchstart", function(sym, e) {
         sym.play("exit");

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("touch");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("node-imp").play("enable");
         sym.getComposition().getStage().getSymbol("node-sym").play("enable");
         sym.getComposition().getStage().getSymbol("node-nim").play("enable");
         
         sym.getComposition().getStage().getSymbol("node-ano").play("inactive");
         
         sym.getComposition().getStage().getSymbol("noodle-anc-ano").play("debridge");
         
         sym.getComposition().getStage().getSymbol("noodle-imp-nim").play("reconnect");
         sym.getComposition().getStage().getSymbol("noodle-imp-sym").play("reconnect");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("node-imp").play("disable");
         sym.getComposition().getStage().getSymbol("node-sym").play("disable");
         sym.getComposition().getStage().getSymbol("node-nim").play("disable");
         
         sym.getComposition().getStage().getSymbol("node-ano").play("active");
         
         sym.getComposition().getStage().getSymbol("noodle-anc-ano").play("bridge");
         
         sym.getComposition().getStage().getSymbol("noodle-imp-nim").play("disconnect");
         sym.getComposition().getStage().getSymbol("noodle-imp-sym").play("disconnect");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("node-imp").play("disable");
         sym.getComposition().getStage().getSymbol("node-sym").play("disable");
         sym.getComposition().getStage().getSymbol("node-nim").play("disable");
         
         sym.getComposition().getStage().getSymbol("node-ano").play("active");
         
         sym.getComposition().getStage().getSymbol("noodle-anc-ano").play("bridge");
         
         sym.getComposition().getStage().getSymbol("noodle-imp-nim").play("disconnect");
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

      Symbol.bindElementAction(compId, symbolName, "${_nav-close}", "click", function(sym, e) {
         sym.play("exit");
         

      });
      //Edge binding end

      })("node-anc");
   //Edge symbol end:'node-anc'

   //=========================================================
   
   //Edge symbol: 'node-sym_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         //sym.play("idle");
         sym.stop();

      });
            //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("node-imp").play("disable");
         sym.getComposition().getStage().getSymbol("node-sym").play("disable");
         sym.getComposition().getStage().getSymbol("node-nim").play("disable");
         
         sym.getComposition().getStage().getSymbol("node-anc").play("active");
         
         sym.getComposition().getStage().getSymbol("noodle-anc-ano").play("bridge");
         
         sym.getComposition().getStage().getSymbol("noodle-imp-nim").play("disconnect");
         sym.getComposition().getStage().getSymbol("noodle-imp-sym").play("disconnect");

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.play("rehover");

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

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseout", function(sym, e) {
         sym.play("exit");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "mouseover", function(sym, e) {
         sym.play("hover");

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("node-imp").play("disable");
         sym.getComposition().getStage().getSymbol("node-sym").play("disable");
         sym.getComposition().getStage().getSymbol("node-nim").play("disable");
         
         sym.getComposition().getStage().getSymbol("node-anc").play("active");
         
         sym.getComposition().getStage().getSymbol("noodle-anc-ano").play("bridge");
         
         sym.getComposition().getStage().getSymbol("noodle-imp-nim").play("disconnect");
         sym.getComposition().getStage().getSymbol("noodle-imp-sym").play("disconnect");
         sym.getComposition().getStage().getSymbol("node-imp").play("disable");
         sym.getComposition().getStage().getSymbol("node-sym").play("disable");
         sym.getComposition().getStage().getSymbol("node-nim").play("disable");
         
         sym.getComposition().getStage().getSymbol("node-anc").play("active");
         
         sym.getComposition().getStage().getSymbol("noodle-anc-ano").play("bridge");
         
         sym.getComposition().getStage().getSymbol("noodle-imp-nim").play("disconnect");
         sym.getComposition().getStage().getSymbol("noodle-imp-sym").play("disconnect");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
         sym.play("retouch");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         var sfx_hover = new buzz.sound("sounds/sfx_hover", { formats: [ "ogg", "mp3" ] });
         sfx_hover.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
         sym.play("rehover");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("node-imp").play("enable");
         sym.getComposition().getStage().getSymbol("node-sym").play("enable");
         sym.getComposition().getStage().getSymbol("node-nim").play("enable");
         
         sym.getComposition().getStage().getSymbol("node-anc").play("inactive");
         
         sym.getComposition().getStage().getSymbol("noodle-anc-ano").play("debridge");
         
         sym.getComposition().getStage().getSymbol("noodle-imp-nim").play("reconnect");
         sym.getComposition().getStage().getSymbol("noodle-imp-sym").play("reconnect");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "click", function(sym, e) {
         alert ('This movement is locked in the pre-alpha demo.');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bounds}", "touchstart", function(sym, e) {
         sym.play("touch");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         setTimeout(function () {
         		sym.play("idle");
         },(Math.random()*100000));
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nav-close}", "touchstart", function(sym, e) {
         sym.play("exit");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nav-close}", "click", function(sym, e) {
         sym.play("exit");
         

      });
      //Edge binding end

         })("node-ano");
   //Edge symbol end:'node-ano'

   //=========================================================
   
   //Edge symbol: 'nddl_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         sym.stop();
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4250, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("noodle-imp-sym");
   //Edge symbol end:'noodle-imp-sym'

   //=========================================================
   
   //Edge symbol: 'nddl_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         sym.stop();
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4250, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("noodle-imp-nim");
   //Edge symbol end:'noodle-imp-nim'

   //=========================================================
   
   //Edge symbol: 'noodle-imp-sym_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         sym.stop();
         

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4250, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("noodle-anc-ano");
   //Edge symbol end:'noodle-anc-ano'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
   })("nav-close");
   //Edge symbol end:'nav-close'

   //=========================================================
   
   //Edge symbol: 'nav-close_1'
   (function(symbolName) {   
   
      })("nav-enter");
   //Edge symbol end:'nav-enter'

   //=========================================================
   
   //Edge symbol: 'nav-explore'
   (function(symbolName) {   
   
   })("nav-explore");
   //Edge symbol end:'nav-explore'

})(jQuery, AdobeEdge, "avnt_canvas");
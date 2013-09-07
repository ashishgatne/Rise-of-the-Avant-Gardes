/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['\'Source Sans Pro\', sans-serif']='<link href=\'http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700,900,200italic,300italic,400italic,600italic,700italic,900italic\' rel=\'stylesheet\' type=\'text/css\'>';
   fonts['\'Libre Baskerville\', serif']='<link href=\'http://fonts.googleapis.com/css?family=Libre+Baskerville:400,700,400italic&subset=latin,latin-ext\' rel=\'stylesheet\' type=\'text/css\'>';
   fonts['\'Radley\', serif']='<link href=\'http://fonts.googleapis.com/css?family=Radley:400,400italic\' rel=\'stylesheet\' type=\'text/css\'>';


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'noodle-anc-ano',
            type:'rect',
            rect:['2151px','1192px','auto','auto','auto','auto'],
            transform:[[],['60deg']]
         },
         {
            id:'noodle-imp-sym',
            type:'rect',
            rect:['1918px','1270px','auto','auto','auto','auto'],
            transform:[[],['135deg']]
         },
         {
            id:'noodle-imp-nim',
            type:'rect',
            rect:['1918px','1268px','auto','auto','auto','auto'],
            transform:[[],['215deg']]
         },
         {
            id:'node-ano',
            type:'rect',
            rect:['2256px','1297px','auto','auto','auto','auto']
         },
         {
            id:'node-anc',
            type:'rect',
            rect:['2088px','1126px','auto','auto','auto','auto']
         },
         {
            id:'node-sym',
            type:'rect',
            rect:['1680px','1409px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'node-nim',
            type:'rect',
            rect:['1746px','1098px','auto','auto','auto','auto']
         },
         {
            id:'node-imp',
            type:'rect',
            rect:['1852px','1204px','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'node-ano',
            symbolName:'node-ano'
         },
         {
            id:'noodle-imp-nim',
            symbolName:'noodle-imp-nim'
         },
         {
            id:'node-sym',
            symbolName:'node-sym'
         },
         {
            id:'node-imp',
            symbolName:'node-imp'
         },
         {
            id:'noodle-imp-sym',
            symbolName:'noodle-imp-sym'
         },
         {
            id:'node-nim',
            symbolName:'node-nim'
         },
         {
            id:'node-anc',
            symbolName:'node-anc'
         },
         {
            id:'noodle-anc-ano',
            symbolName:'noodle-anc-ano'
         }
         ]
      },
   states: {
      "Base State": {
         "${_node-sym}": [
            ["style", "top", '1408.82px'],
            ["style", "left", '1679.57px'],
            ["style", "cursor", 'pointer']
         ],
         "${_noodle-imp-sym}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '1269.82px'],
            ["style", "left", '1917.57px'],
            ["transform", "rotateZ", '135deg']
         ],
         "${_node-ano}": [
            ["style", "top", '1297px'],
            ["style", "left", '2256px']
         ],
         "${_node-imp}": [
            ["style", "left", '1851.75px'],
            ["style", "top", '1203.82px']
         ],
         "${_artist3}": [
            ["style", "text-align", '']
         ],
         "${_node-anc}": [
            ["style", "left", '2088px'],
            ["style", "top", '1126px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '2560px'],
            ["style", "width", '4096px']
         ],
         "${_noodle-imp-nim}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '1268.12px'],
            ["style", "left", '1917.77px'],
            ["transform", "rotateZ", '225deg']
         ],
         "${_node-nim}": [
            ["style", "top", '1098px'],
            ["style", "left", '1746px']
         ],
         "${_noodle-anc-ano}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '1191.57px'],
            ["style", "left", '2150.67px'],
            ["transform", "rotateZ", '45deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2500,
         autoPlay: true,
         labels: {
            "1860": 500,
            "1880": 1500,
            "1900": 2500
         },
         timeline: [
            { id: "eid889", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_node-nim}', [] ], ""], position: 0 },
            { id: "eid888", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_node-ano}', [] ], ""], position: 0 },
            { id: "eid894", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_noodle-imp-nim}', [] ], ""], position: 0 },
            { id: "eid1817", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_node-anc}', ['spawn'] ], ""], position: 0 },
            { id: "eid898", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_noodle-anc-ano}', [] ], ""], position: 0 },
            { id: "eid892", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_noodle-imp-sym}', [] ], ""], position: 0 },
            { id: "eid890", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_node-imp}', [] ], ""], position: 0 },
            { id: "eid891", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_node-sym}', [] ], ""], position: 0 },
            { id: "eid878", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_node-imp}', ['spawn'] ], ""], position: 500 },
            { id: "eid882", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_node-nim}', ['spawn'] ], ""], position: 1100 },
            { id: "eid879", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_node-sym}', ['spawn'] ], ""], position: 1200 },
            { id: "eid895", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_noodle-imp-nim}', [] ], ""], position: 1300 },
            { id: "eid893", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_noodle-imp-sym}', ['start'] ], ""], position: 1300 },
            { id: "eid884", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_node-ano}', ['spawn'] ], ""], position: 1500 },
            { id: "eid899", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_noodle-anc-ano}', [] ], ""], position: 1800 },
            { id: "eid897", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_noodle-imp-nim}', [] ], ""], position: 2000 },
            { id: "eid896", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_noodle-imp-sym}', [] ], ""], position: 2000 },
            { id: "eid900", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_noodle-anc-ano}', [] ], ""], position: 2500 }         ]
      }
   }
},
"node-imp": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'ellipse',
      borderRadius: ['50%','50%','50%','50%'],
      id: 'effect',
      stroke: [2,'rgba(51,51,51,1.00)','solid'],
      cursor: ['pointer'],
      rect: ['2px','2px','124px','124px','auto','auto'],
      display: 'none',
      transform: {},
      fill: ['rgba(255,255,255,0.00)']
   },
   {
      rect: ['0px','0px','132px','132px','auto','auto'],
      id: 'people',
      transform: {},
      display: 'none',
      type: 'group',
      c: [
      {
         rect: ['-132px','58px','96px','16px','auto','auto'],
         font: ['Source Sans Pro, sans-serif',18,'rgba(51,51,51,1.00)','300','none',''],
         id: 'artist6',
         text: 'Manet',
         align: 'right',
         type: 'text'
      },
      {
         rect: ['-102px','128px','96px','16px','auto','auto'],
         font: ['Source Sans Pro, sans-serif',18,'rgba(51,51,51,1.00)','300','none',''],
         align: 'right',
         id: 'artist5',
         text: 'Bazille',
         display: 'none',
         type: 'text'
      },
      {
         rect: ['18px','168px','96px','16px','auto','auto'],
         font: ['Source Sans Pro, sans-serif',18,'rgba(51,51,51,1.00)','300','none',''],
         id: 'artist4',
         text: 'Sisley',
         align: 'center',
         type: 'text'
      },
      {
         rect: ['138px','128px','220px','16px','auto','auto'],
         font: ['Source Sans Pro, sans-serif',36,'rgba(51,51,51,1.00)','600','none',''],
         id: 'artist3',
         text: 'impressionism',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['168px','58px','96px','16px','auto','auto'],
         font: ['Source Sans Pro, sans-serif',18,'rgba(51,51,51,1.00)','300','none',''],
         id: 'artist2',
         text: 'Cézanne',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['128px','-12px','96px','16px','auto','auto'],
         font: ['Source Sans Pro, sans-serif',18,'rgba(51,51,51,1.00)','300','none',''],
         id: 'artist1',
         text: 'Degas',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['18px','-52px','96px','16px','auto','auto'],
         font: ['Source Sans Pro, sans-serif',18,'rgba(51,51,51,1.00)','300','none',''],
         id: 'artist0',
         text: 'Monet',
         align: 'center',
         type: 'text'
      }]
   },
   {
      transform: [{},{},{},['0','0']],
      rect: ['2px','2px','124px','124px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'node',
      stroke: [2,'rgba(51,51,51,1.00)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      id: 'node_act_128px',
      type: 'image',
      rect: ['0px','0px','132px','132px','auto','auto'],
      fill: ['rgba(0,0,0,0)','img/node_act_128px.png','0px','0px']
   },
   {
      rect: ['2px','51px','128px','30px','auto','auto'],
      font: ['Source Sans Pro, sans-serif',16,'rgba(51,51,51,1.00)','600','none',''],
      id: 'label',
      text: 'impressionism',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['0','0','132px','132px','auto','auto'],
      id: 'node_imp_128px',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_imp_128px.png','0px','0px']
   },
   {
      rect: ['0px','0px','132px','132px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   },
   {
      type: 'ellipse',
      borderRadius: ['50%','50%','50%','50%'],
      id: 'nav-touch',
      stroke: [2,'rgba(51,51,51,1.00)','solid'],
      cursor: ['pointer'],
      rect: ['2px','2px','124px','124px','auto','auto'],
      display: 'none',
      transform: [{},{},{},['1.6','1.6']],
      fill: ['rgba(255,255,255,0.00)']
   },
   {
      display: 'none',
      type: 'rect',
      rect: ['184px','-77px','auto','auto','auto','auto'],
      id: 'nav-close'
   },
   {
      transform: {},
      rect: ['6px','34px','120px','64px','auto','auto'],
      font: ['Radley, serif',48,'rgba(51,51,51,1.00)','900','none','normal'],
      align: 'center',
      id: '_1872',
      text: '1872',
      display: 'none',
      type: 'text'
   }],
   symbolInstances: [
   {
      id: 'nav-close',
      symbolName: 'nav-close'
   }   ]
   },
   states: {
      "Base State": {
         "${_nav-touch}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '1.6'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '124px'],
            ["style", "top", '2px'],
            ["style", "opacity", '1'],
            ["transform", "scaleY", '1.6'],
            ["style", "height", '124px'],
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(51,51,51,0.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '2px']
         ],
         "${_artist5}": [
            ["style", "line-height", '12px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '-102px'],
            ["style", "font-size", '18px'],
            ["style", "top", '128px'],
            ["style", "text-align", 'right'],
            ["style", "height", '16px'],
            ["style", "font-family", '\'Source Sans Pro\', sans-serif'],
            ["style", "display", 'none'],
            ["style", "width", '96px']
         ],
         "${_artist1}": [
            ["style", "line-height", '12px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '128px'],
            ["style", "font-size", '18px'],
            ["style", "top", '-12px'],
            ["style", "text-align", 'left'],
            ["style", "height", '16px'],
            ["style", "font-family", '\'Source Sans Pro\', sans-serif'],
            ["style", "width", '96px']
         ],
         "${__1872}": [
            ["style", "line-height", '64px'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '0'],
            ["transform", "scaleX", '0'],
            ["style", "font-weight", '900'],
            ["style", "left", '6px'],
            ["style", "width", '120px'],
            ["style", "top", '34px'],
            ["style", "display", 'none'],
            ["style", "text-align", 'center'],
            ["style", "height", '64px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Radley, serif'],
            ["style", "font-size", '48px'],
            ["color", "color", 'rgba(51,51,51,1.00)']
         ],
         "${_artist6}": [
            ["style", "line-height", '12px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '-132px'],
            ["style", "font-size", '18px'],
            ["style", "top", '58px'],
            ["style", "text-align", 'right'],
            ["style", "height", '16px'],
            ["style", "font-family", '\'Source Sans Pro\', sans-serif'],
            ["style", "width", '96px']
         ],
         "${_nav-close}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '184px'],
            ["style", "top", '-77px']
         ],
         "${symbolSelector}": [
            ["style", "height", '132px'],
            ["style", "width", '132px']
         ],
         "${_effect}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '124px'],
            ["style", "top", '2px'],
            ["style", "opacity", '0.0789794921875'],
            ["transform", "scaleY", '1'],
            ["style", "height", '124px'],
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "left", '2px'],
            ["style", "cursor", 'pointer']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '0'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '124px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '0'],
            ["style", "left", '2px'],
            ["style", "height", '124px'],
            ["color", "border-color", 'rgba(51,51,51,0.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '1']
         ],
         "${_node_imp_128px}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1']
         ],
         "${_artist4}": [
            ["style", "line-height", '12px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '18px'],
            ["style", "font-size", '18px'],
            ["style", "top", '168px'],
            ["style", "text-align", 'center'],
            ["style", "height", '16px'],
            ["style", "font-family", '\'Source Sans Pro\', sans-serif'],
            ["style", "width", '96px']
         ],
         "${_artist0}": [
            ["style", "line-height", '12px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '18px'],
            ["style", "font-size", '18px'],
            ["style", "top", '-52px'],
            ["style", "text-align", 'center'],
            ["style", "height", '16px'],
            ["style", "font-family", '\'Source Sans Pro\', sans-serif'],
            ["style", "width", '96px']
         ],
         "${_people}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["transform", "scaleY", '1.6'],
            ["transform", "scaleX", '1.6'],
            ["style", "height", '132px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '132px']
         ],
         "${_node_act_128px}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_label}": [
            ["style", "line-height", '16px'],
            ["style", "letter-spacing", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "font-size", '16px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '2px'],
            ["style", "width", '128px'],
            ["style", "top", '58px'],
            ["transform", "scaleY", '1'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "font-weight", '600']
         ],
         "${_bounds}": [
            ["style", "top", '0.3px'],
            ["style", "height", '131.87019362232px'],
            ["transform", "scaleY", '1'],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleX", '1'],
            ["style", "border-width", '0px'],
            ["style", "left", '0.2px'],
            ["style", "width", '132px']
         ],
         "${_artist2}": [
            ["style", "line-height", '12px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '168px'],
            ["style", "font-size", '18px'],
            ["style", "top", '58px'],
            ["style", "text-align", 'left'],
            ["style", "height", '16px'],
            ["style", "font-family", '\'Source Sans Pro\', sans-serif'],
            ["style", "width", '96px']
         ],
         "${_artist3}": [
            ["style", "line-height", '12px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '600'],
            ["style", "left", '138px'],
            ["style", "font-size", '36px'],
            ["style", "top", '128px'],
            ["style", "text-align", 'left'],
            ["style", "height", '16px'],
            ["style", "font-family", '\'Source Sans Pro\', sans-serif'],
            ["style", "width", '220px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 18000,
         autoPlay: true,
         labels: {
            "spawn": 500,
            "hover": 3000,
            "rehover": 3500,
            "exit": 6000,
            "disable": 8000,
            "enable": 9000,
            "active": 11000,
            "inactive": 12000,
            "touch": 13000,
            "retouch": 14000,
            "idle": 16000
         },
         timeline: [
            { id: "eid1829", tween: [ "style", "${_nav-touch}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
            { id: "eid1830", tween: [ "style", "${_nav-touch}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
            { id: "eid541", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 3000, duration: 500, easing: "easeOutBack" },
            { id: "eid1481", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 13000, duration: 500, easing: "easeOutBack" },
            { id: "eid1653", tween: [ "style", "${_node_imp_128px}", "opacity", '1', { fromValue: '1'}], position: 13000, duration: 0 },
            { id: "eid1624", tween: [ "style", "${_node_imp_128px}", "opacity", '1', { fromValue: '0'}], position: 16000, duration: 500 },
            { id: "eid1626", tween: [ "style", "${_node_imp_128px}", "opacity", '0', { fromValue: '1'}], position: 17500, duration: 500 },
            { id: "eid501", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 250 },
            { id: "eid543", tween: [ "style", "${_people}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 250 },
            { id: "eid1480", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 13000, duration: 250 },
            { id: "eid20", tween: [ "style", "${_label}", "opacity", '1', { fromValue: '0.000000'}], position: 1500, duration: 100 },
            { id: "eid129", tween: [ "style", "${_label}", "opacity", '0', { fromValue: '1'}], position: 8000, duration: 250 },
            { id: "eid312", tween: [ "style", "${_label}", "opacity", '1', { fromValue: '0'}], position: 9000, duration: 250 },
            { id: "eid652", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.0789790004491806'}], position: 1500, duration: 500 },
            { id: "eid638", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 1000 },
            { id: "eid1475", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 14000, duration: 1000 },
            { id: "eid912", tween: [ "style", "${_node_imp_128px}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid913", tween: [ "style", "${_node_imp_128px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid1485", tween: [ "style", "${_node_imp_128px}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0 },
            { id: "eid1831", tween: [ "style", "${_nav-close}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0 },
            { id: "eid1832", tween: [ "style", "${_nav-close}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
            { id: "eid649", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid650", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid654", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid641", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid1477", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'block'}], position: 14000, duration: 0 },
            { id: "eid1478", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
            { id: "eid1785", tween: [ "color", "${_node}", "border-color", 'rgba(51,51,51,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(51,51,51,0.00)'}], position: 1300, duration: 200 },
            { id: "eid575", tween: [ "transform", "${_bounds}", "scaleX", '2.8', { fromValue: '1'}], position: 3000, duration: 500 },
            { id: "eid830", tween: [ "transform", "${_bounds}", "scaleX", '1', { fromValue: '2.8'}], position: 6000, duration: 500 },
            { id: "eid511", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0, easing: "easeOutElastic" },
            { id: "eid520", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 6250, duration: 0, easing: "easeOutElastic" },
            { id: "eid1482", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0, easing: "easeOutElastic" },
            { id: "eid1620", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0, easing: "easeOutBack" },
            { id: "eid644", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid635", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 1000 },
            { id: "eid1474", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 14000, duration: 1000 },
            { id: "eid34", tween: [ "transform", "${_node}", "scaleX", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid125", tween: [ "transform", "${_node}", "scaleX", '0.92', { fromValue: '1'}], position: 8000, duration: 250 },
            { id: "eid309", tween: [ "transform", "${_node}", "scaleX", '1', { fromValue: '0.92'}], position: 9000, duration: 250 },
            { id: "eid646", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid636", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 1000 },
            { id: "eid1476", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 14000, duration: 1000 },
            { id: "eid1722", tween: [ "style", "${__1872}", "opacity", '1', { fromValue: '0.000000'}], position: 500, duration: 200 },
            { id: "eid1910", tween: [ "style", "${__1872}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1471", tween: [ "style", "${_node_act_128px}", "opacity", '1', { fromValue: '0.000000'}], position: 11000, duration: 250 },
            { id: "eid1473", tween: [ "style", "${_node_act_128px}", "opacity", '0', { fromValue: '1'}], position: 12000, duration: 250 },
            { id: "eid131", tween: [ "style", "${_node}", "opacity", '0.041412353515625', { fromValue: '1'}], position: 8000, duration: 250 },
            { id: "eid310", tween: [ "style", "${_node}", "opacity", '1', { fromValue: '0.041412353515625'}], position: 9000, duration: 250 },
            { id: "eid1907", tween: [ "style", "${_artist5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1783", tween: [ "transform", "${__1872}", "scaleY", '1', { fromValue: '0'}], position: 500, duration: 200 },
            { id: "eid1727", tween: [ "transform", "${__1872}", "scaleY", '0', { fromValue: '1'}], position: 1500, duration: 100 },
            { id: "eid540", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 3000, duration: 500, easing: "easeOutBack" },
            { id: "eid1479", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 13000, duration: 500, easing: "easeOutBack" },
            { id: "eid33", tween: [ "transform", "${_node}", "scaleY", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid127", tween: [ "transform", "${_node}", "scaleY", '0.92', { fromValue: '1'}], position: 8000, duration: 250 },
            { id: "eid311", tween: [ "transform", "${_node}", "scaleY", '1', { fromValue: '0.92'}], position: 9000, duration: 250 },
            { id: "eid577", tween: [ "transform", "${_bounds}", "scaleY", '1.8', { fromValue: '1'}], position: 3000, duration: 500 },
            { id: "eid828", tween: [ "transform", "${_bounds}", "scaleY", '1', { fromValue: '1.8'}], position: 6000, duration: 500 },
            { id: "eid1782", tween: [ "transform", "${__1872}", "scaleX", '1', { fromValue: '0'}], position: 500, duration: 200 },
            { id: "eid1726", tween: [ "transform", "${__1872}", "scaleX", '0', { fromValue: '1'}], position: 1500, duration: 100 }         ]
      }
   }
},
"node-sym": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'ellipse',
      borderRadius: ['50%','50%','50%','50%'],
      id: 'effect',
      stroke: [2,'rgba(51,51,51,1.00)','solid'],
      cursor: ['pointer'],
      rect: ['2px','2px','92px','92px','auto','auto'],
      display: 'none',
      transform: {},
      fill: ['rgba(255,255,255,0.00)']
   },
   {
      transform: {},
      id: 'people',
      type: 'group',
      display: 'none',
      rect: ['0px','0px','100px','100px','auto','auto'],
      c: [
      {
         font: ['Source Sans Pro, sans-serif',18,'rgba(51,51,51,1.00)','300','none',''],
         type: 'text',
         id: 'artist5',
         text: 'Rivera',
         align: 'right',
         rect: ['-108px','2px','96px','16px','auto','auto']
      },
      {
         font: ['Source Sans Pro, sans-serif',18,'rgba(51,51,51,1.00)','300','none',''],
         type: 'text',
         id: 'artist4',
         text: 'Redon',
         align: 'right',
         rect: ['-108px','82px','96px','16px','auto','auto']
      },
      {
         font: ['Source Sans Pro, sans-serif',18,'rgba(51,51,51,1.00)','300','none',''],
         type: 'text',
         id: 'artist3',
         text: 'Moreau',
         align: 'center',
         rect: ['2px','122px','96px','16px','auto','auto']
      },
      {
         font: ['Source Sans Pro, sans-serif',36,'rgba(51,51,51,1.00)','600','none',''],
         type: 'text',
         id: 'artist2',
         text: 'post-impressionism',
         align: 'left',
         rect: ['112px','82px','320px','18px','auto','auto']
      },
      {
         font: ['Source Sans Pro, sans-serif',18,'rgba(51,51,51,1.00)','300','none',''],
         type: 'text',
         id: 'artist1',
         text: 'Verlaine',
         align: 'left',
         rect: ['112px','2px','96px','16px','auto','auto']
      },
      {
         font: ['Source Sans Pro, sans-serif',18,'rgba(51,51,51,1.00)','300','none',''],
         type: 'text',
         id: 'artist0',
         text: 'Mallarmé',
         align: 'center',
         rect: ['2px','-38px','96px','16px','auto','auto']
      }]
   },
   {
      transform: [{1:0,0:0},{},{},['0','0']],
      rect: ['2px','2px','92px','92px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'node',
      stroke: [2,'rgba(51,51,51,1.00)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      id: 'node_act_096px',
      type: 'image',
      rect: ['0px','0px','100px','100px','auto','auto'],
      fill: ['rgba(0,0,0,0)','img/node_act_096px.png','0px','0px']
   },
   {
      font: ['Source Sans Pro, sans-serif',14,'rgba(0,0,0,1.00)','600','none',''],
      type: 'text',
      id: 'label',
      text: 'post impress\'ism',
      align: 'center',
      rect: ['2px','32px','96px','32px','auto','auto']
   },
   {
      rect: ['0px','0px','100px','100px','auto','auto'],
      id: 'node_sym_096px',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_sym_096px.png','0px','0px']
   },
   {
      rect: ['0px','0px','68px','68px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   },
   {
      type: 'ellipse',
      borderRadius: ['50%','50%','50%','50%'],
      id: 'nav_touch',
      stroke: [2,'rgba(51,51,51,1.00)','solid'],
      cursor: ['pointer'],
      rect: ['2px','2px','92px','92px','auto','auto'],
      display: 'none',
      transform: [{1:0,0:0},{},{},['0','0']],
      fill: ['rgba(255,255,255,0.00)']
   },
   {
      rect: ['-76px','-87px','auto','auto','auto','auto'],
      id: 'nav-close',
      opacity: 1,
      display: 'none',
      type: 'rect'
   },
   {
      type: 'text',
      id: '_1882',
      opacity: 1,
      rect: ['-14px','18px','128px','64px','auto','auto'],
      transform: {},
      display: 'none',
      font: ['Radley, serif',48,'rgba(51,51,51,1.00)','900','none','normal'],
      align: 'center',
      text: '1882'
   }],
   symbolInstances: [
   {
      id: 'nav-close',
      symbolName: 'nav-close'
   }   ]
   },
   states: {
      "Base State": {
         "${_artist5}": [
            ["style", "line-height", '12px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '-108px'],
            ["style", "font-size", '18px'],
            ["style", "top", '2px'],
            ["style", "text-align", 'right'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro, sans-serif'],
            ["style", "width", '96px']
         ],
         "${_artist1}": [
            ["style", "line-height", '12px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '112px'],
            ["style", "font-size", '18px'],
            ["style", "top", '2px'],
            ["style", "text-align", 'left'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro, sans-serif'],
            ["style", "width", '96px']
         ],
         "${_nav-close}": [
            ["style", "top", '-87px'],
            ["style", "opacity", '1'],
            ["style", "left", '-76px'],
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '100px'],
            ["style", "width", '100px']
         ],
         "${_node_sym_096px}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_effect}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '88.452830188679px'],
            ["style", "top", '4px'],
            ["style", "left", '4px'],
            ["transform", "scaleY", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '88.452830188679px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "display", 'none'],
            ["style", "opacity", '0.0789790004491806']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '0'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '92px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '0'],
            ["style", "opacity", '1'],
            ["style", "height", '92px'],
            ["color", "border-color", 'rgba(51,51,51,0.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '2px']
         ],
         "${_nav_touch}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '0'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '92px'],
            ["style", "top", '2px'],
            ["style", "left", '2px'],
            ["transform", "scaleY", '0'],
            ["style", "height", '92px'],
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(51,51,51,0.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '1']
         ],
         "${_artist3}": [
            ["style", "line-height", '12px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '2px'],
            ["style", "font-size", '18px'],
            ["style", "top", '122px'],
            ["style", "text-align", 'center'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro, sans-serif'],
            ["style", "width", '96px']
         ],
         "${_artist0}": [
            ["style", "line-height", '12px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '2px'],
            ["style", "font-size", '18px'],
            ["style", "top", '-38px'],
            ["style", "text-align", 'center'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro, sans-serif'],
            ["style", "width", '96px']
         ],
         "${_people}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["transform", "scaleY", '1.6'],
            ["style", "height", '100px'],
            ["transform", "scaleX", '1.6'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '100px']
         ],
         "${_label}": [
            ["style", "line-height", '16px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '600'],
            ["style", "left", '2px'],
            ["style", "width", '96px'],
            ["style", "top", '32px'],
            ["style", "opacity", '0'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '31.6171875px'],
            ["style", "font-family", 'Source Sans Pro, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "font-size", '16px']
         ],
         "${_artist4}": [
            ["style", "line-height", '12px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '-108px'],
            ["style", "font-size", '18px'],
            ["style", "top", '82px'],
            ["style", "text-align", 'right'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro, sans-serif'],
            ["style", "width", '96px']
         ],
         "${_artist2}": [
            ["style", "line-height", '12px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '600'],
            ["style", "left", '112px'],
            ["style", "font-size", '36px'],
            ["style", "top", '82px'],
            ["style", "text-align", 'left'],
            ["style", "height", '18px'],
            ["style", "font-family", 'Source Sans Pro, sans-serif'],
            ["style", "width", '320.0078125px']
         ],
         "${_bounds}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "scaleY", '1'],
            ["style", "border-width", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "height", '99.901661835092px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '100px']
         ],
         "${__1882}": [
            ["style", "line-height", '64px'],
            ["style", "opacity", '0'],
            ["style", "width", '128px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '900'],
            ["style", "left", '-14px'],
            ["style", "font-size", '48px'],
            ["style", "top", '18px'],
            ["style", "height", '64px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Radley, serif'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1']
         ],
         "${_node_act_096px}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 18000,
         autoPlay: true,
         labels: {
            "spawn": 500,
            "hover": 3000,
            "rehover": 3500,
            "exit": 6000,
            "disable": 8000,
            "enable": 9000,
            "active": 11000,
            "inactive": 12000,
            "touch": 13000,
            "retouch": 14000,
            "idle": 16000
         },
         timeline: [
            { id: "eid474", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 3000, duration: 500, easing: "easeOutBack" },
            { id: "eid1521", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 13000, duration: 500, easing: "easeOutBack" },
            { id: "eid1764", tween: [ "transform", "${__1882}", "scaleY", '0', { fromValue: '1'}], position: 1500, duration: 100 },
            { id: "eid464", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 250 },
            { id: "eid517", tween: [ "style", "${_people}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 250 },
            { id: "eid1520", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 13000, duration: 250 },
            { id: "eid20", tween: [ "style", "${_label}", "opacity", '1', { fromValue: '0.000000'}], position: 1500, duration: 100 },
            { id: "eid129", tween: [ "style", "${_label}", "opacity", '0', { fromValue: '1'}], position: 8000, duration: 250 },
            { id: "eid293", tween: [ "style", "${_label}", "opacity", '1', { fromValue: '0'}], position: 9000, duration: 250 },
            { id: "eid657", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.0789790004491806'}], position: 1500, duration: 500 },
            { id: "eid658", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4250, duration: 750 },
            { id: "eid1515", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 14250, duration: 750 },
            { id: "eid1853", tween: [ "style", "${_nav-close}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0 },
            { id: "eid1854", tween: [ "style", "${_nav-close}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
            { id: "eid662", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid663", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid664", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid665", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid1517", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 14250, duration: 0 },
            { id: "eid1518", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
            { id: "eid1794", tween: [ "color", "${_node}", "border-color", 'rgba(51,51,51,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(51,51,51,0.00)'}], position: 1300, duration: 200 },
            { id: "eid1866", tween: [ "style", "${_nav_touch}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
            { id: "eid1867", tween: [ "style", "${_nav_touch}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
            { id: "eid1665", tween: [ "style", "${_node_sym_096px}", "opacity", '1', { fromValue: '1'}], position: 13000, duration: 0 },
            { id: "eid1633", tween: [ "style", "${_node_sym_096px}", "opacity", '1', { fromValue: '0'}], position: 16000, duration: 500 },
            { id: "eid1635", tween: [ "style", "${_node_sym_096px}", "opacity", '0', { fromValue: '1'}], position: 17500, duration: 500 },
            { id: "eid1765", tween: [ "style", "${__1882}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 200 },
            { id: "eid1766", tween: [ "style", "${__1882}", "opacity", '1', { fromValue: '1'}], position: 1500, duration: 0 },
            { id: "eid1759", tween: [ "style", "${__1882}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 100 },
            { id: "eid1763", tween: [ "transform", "${__1882}", "scaleX", '0', { fromValue: '1'}], position: 1500, duration: 100 },
            { id: "eid34", tween: [ "transform", "${_node}", "scaleX", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid125", tween: [ "transform", "${_node}", "scaleX", '0.92', { fromValue: '1'}], position: 8000, duration: 250 },
            { id: "eid290", tween: [ "transform", "${_node}", "scaleX", '1', { fromValue: '0.92'}], position: 9000, duration: 250 },
            { id: "eid1868", tween: [ "style", "${__1882}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid659", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid660", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4250, duration: 750 },
            { id: "eid1516", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 14250, duration: 750 },
            { id: "eid1536", tween: [ "transform", "${_bounds}", "scaleX", '2.9', { fromValue: '1'}], position: 3000, duration: 500 },
            { id: "eid1537", tween: [ "transform", "${_bounds}", "scaleX", '1', { fromValue: '2.9'}], position: 6000, duration: 500 },
            { id: "eid1664", tween: [ "style", "${_node_act_096px}", "opacity", '1', { fromValue: '0'}], position: 11000, duration: 250, easing: "easeOutBack" },
            { id: "eid1526", tween: [ "style", "${_node_act_096px}", "opacity", '0', { fromValue: '1'}], position: 12250, duration: 250, easing: "easeOutBack" },
            { id: "eid131", tween: [ "style", "${_node}", "opacity", '0.041412353515625', { fromValue: '1'}], position: 8000, duration: 250 },
            { id: "eid291", tween: [ "style", "${_node}", "opacity", '1', { fromValue: '0.041412353515625'}], position: 9000, duration: 250 },
            { id: "eid914", tween: [ "style", "${_node_sym_096px}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid915", tween: [ "style", "${_node_sym_096px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid1531", tween: [ "style", "${_node_sym_096px}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0, easing: "easeOutBack" },
            { id: "eid1538", tween: [ "transform", "${_bounds}", "scaleY", '1.8', { fromValue: '1'}], position: 3000, duration: 500 },
            { id: "eid1539", tween: [ "transform", "${_bounds}", "scaleY", '1', { fromValue: '1.8'}], position: 6000, duration: 500 },
            { id: "eid473", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 3000, duration: 500, easing: "easeOutBack" },
            { id: "eid1519", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 13000, duration: 500, easing: "easeOutBack" },
            { id: "eid33", tween: [ "transform", "${_node}", "scaleY", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid127", tween: [ "transform", "${_node}", "scaleY", '0.92', { fromValue: '1'}], position: 8000, duration: 250 },
            { id: "eid292", tween: [ "transform", "${_node}", "scaleY", '1', { fromValue: '0.92'}], position: 9000, duration: 250 },
            { id: "eid461", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid462", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 6250, duration: 0 },
            { id: "eid1522", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0 },
            { id: "eid1667", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
            { id: "eid655", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid656", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4250, duration: 750 },
            { id: "eid1514", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 14250, duration: 750 }         ]
      }
   }
},
"node-nim": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'ellipse',
      borderRadius: ['50%','50%','50%','50%'],
      id: 'effect',
      stroke: [2,'rgba(51,51,51,1.00)','solid'],
      cursor: ['pointer'],
      rect: ['2px','2px','60px','60px','auto','auto'],
      display: 'none',
      transform: {},
      fill: ['rgba(255,255,255,0.00)']
   },
   {
      transform: {},
      id: 'people',
      type: 'group',
      display: 'none',
      rect: ['0px','0px','68px','68px','auto','auto'],
      c: [
      {
         font: ['Source Sans Pro, sans-serif',18,'rgba(51,51,51,1.00)','300','none',''],
         type: 'text',
         id: 'artist3',
         text: 'Angrand',
         align: 'right',
         rect: ['-114px','26px','96px','16px','auto','auto']
      },
      {
         font: ['Source Sans Pro, sans-serif',18,'rgba(51,51,51,1.00)','300','none',''],
         type: 'text',
         id: 'artist2',
         text: 'Signac',
         align: 'center',
         rect: ['-14px','86px','96px','16px','auto','auto']
      },
      {
         font: ['Source Sans Pro, sans-serif',36,'rgba(51,51,51,1.00)','600','none','normal'],
         type: 'text',
         id: 'artist1',
         text: 'neo-impressionism',
         align: 'left',
         rect: ['86px','26px','300px','18px','auto','auto']
      },
      {
         font: ['Source Sans Pro, sans-serif',18,'rgba(51,51,51,1.00)','300','none',''],
         type: 'text',
         id: 'artist0',
         text: 'Seurat',
         align: 'center',
         rect: ['-14px','-34px','96px','16px','auto','auto']
      }]
   },
   {
      transform: [{1:0,0:0},{},{},['0','0']],
      rect: ['3px','3px','58px','58px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'node',
      stroke: [2,'rgba(51,51,51,1.00)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      id: 'node_act_064px',
      type: 'image',
      rect: ['0','0','68px','68px','auto','auto'],
      fill: ['rgba(0,0,0,0)','img/node_act_064px.png','0px','0px']
   },
   {
      font: ['Source Sans Pro, sans-serif',12,'rgba(51,51,51,1.00)','600','none',''],
      type: 'text',
      id: 'label',
      text: 'neo<br>imp\'m',
      align: 'center',
      rect: ['2px','19px','64px','22px','auto','auto']
   },
   {
      rect: ['0px','0px','68px','68px','auto','auto'],
      id: 'node_nim_064px',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_nim_064px.png','0px','0px']
   },
   {
      rect: ['0px','0px','68px','68px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgba(0,85,164,1.00)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   },
   {
      type: 'ellipse',
      borderRadius: ['50%','50%','50%','50%'],
      id: 'nav-touch',
      stroke: [2,'rgba(51,51,51,1.00)','solid'],
      cursor: ['pointer'],
      rect: ['3px','3px','58px','58px','auto','auto'],
      display: 'none',
      transform: [{1:0,0:0},{},{},['1.8','1.8']],
      fill: ['rgba(255,255,255,0.00)']
   },
   {
      rect: ['-76px','-87px','auto','auto','auto','auto'],
      id: 'nav-close',
      opacity: 1,
      display: 'none',
      type: 'rect'
   },
   {
      transform: {},
      rect: ['-12px','2px','auto','64px','auto','auto'],
      font: ['Radley, serif',48,'rgba(51,51,51,1.00)','900','none','normal'],
      align: 'center',
      id: '_1884',
      text: '1884',
      display: 'none',
      type: 'text'
   }],
   symbolInstances: [
   {
      id: 'nav-close',
      symbolName: 'nav-close'
   }   ]
   },
   states: {
      "Base State": {
         "${_nav-touch}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '1.8'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '58px'],
            ["style", "top", '3px'],
            ["style", "opacity", '1'],
            ["transform", "scaleY", '1.8'],
            ["style", "height", '58px'],
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(51,51,51,0.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '3px']
         ],
         "${_effect}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '60px'],
            ["style", "top", '2px'],
            ["style", "left", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '60px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "display", 'none'],
            ["style", "opacity", '0.0789790004491806']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '0'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '58px'],
            ["style", "top", '3px'],
            ["transform", "scaleY", '0'],
            ["style", "left", '3px'],
            ["style", "height", '58px'],
            ["color", "border-color", 'rgba(51,51,51,0.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '1']
         ],
         "${_artist1}": [
            ["style", "line-height", '12px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '600'],
            ["style", "left", '86px'],
            ["style", "width", '300.29049253531px'],
            ["style", "top", '26px'],
            ["style", "text-align", 'left'],
            ["style", "height", '18px'],
            ["style", "font-family", 'Source Sans Pro, sans-serif'],
            ["style", "font-style", 'normal'],
            ["style", "font-size", '36px']
         ],
         "${_artist3}": [
            ["style", "line-height", '12px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '-114px'],
            ["style", "width", '96px'],
            ["style", "top", '26px'],
            ["style", "text-align", 'right'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro, sans-serif'],
            ["style", "font-size", '18px']
         ],
         "${_artist0}": [
            ["style", "line-height", '12px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '-14px'],
            ["style", "width", '96px'],
            ["style", "top", '-34px'],
            ["style", "text-align", 'center'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro, sans-serif'],
            ["style", "font-size", '18px']
         ],
         "${_people}": [
            ["style", "top", '0px'],
            ["style", "height", '68px'],
            ["transform", "scaleY", '1.6'],
            ["style", "display", 'none'],
            ["transform", "scaleX", '1.6'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '68px']
         ],
         "${_nav-close}": [
            ["style", "top", '-87px'],
            ["style", "opacity", '1'],
            ["style", "left", '-76px'],
            ["style", "display", 'none']
         ],
         "${_node_nim_064px}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_node_act_064px}": [
            ["style", "opacity", '0']
         ],
         "${symbolSelector}": [
            ["style", "height", '68px'],
            ["style", "width", '68px']
         ],
         "${__1884}": [
            ["style", "line-height", '64px'],
            ["style", "font-weight", '900'],
            ["transform", "scaleY", '0'],
            ["transform", "scaleX", '0'],
            ["style", "opacity", '0'],
            ["style", "left", '-30px'],
            ["style", "width", '128px'],
            ["style", "top", '3px'],
            ["style", "height", '64px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Radley, serif'],
            ["style", "font-size", '48px'],
            ["color", "color", 'rgba(51,51,51,1.00)']
         ],
         "${_artist2}": [
            ["style", "line-height", '12px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '-14px'],
            ["style", "width", '96px'],
            ["style", "top", '86px'],
            ["style", "text-align", 'center'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro, sans-serif'],
            ["style", "font-size", '18px']
         ],
         "${_bounds}": [
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "border-width", '0px'],
            ["style", "height", '67.733337402344px'],
            ["color", "border-color", 'rgba(0,85,164,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '67.816650390625px']
         ],
         "${_label}": [
            ["style", "line-height", '14px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '600'],
            ["style", "left", '2px'],
            ["style", "width", '64px'],
            ["style", "top", '19px'],
            ["style", "font-size", '16px'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '30px'],
            ["style", "font-family", 'Source Sans Pro, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "opacity", '0']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 18000,
         autoPlay: true,
         labels: {
            "spawn": 500,
            "hover": 3000,
            "rehover": 3500,
            "exit": 6000,
            "disable": 8000,
            "enable": 9000,
            "active": 11000,
            "inactive": 12000,
            "touch": 13000,
            "retouch": 14000,
            "idle": 16000
         },
         timeline: [
            { id: "eid1744", tween: [ "style", "${__1884}", "opacity", '1', { fromValue: '0.000000'}], position: 500, duration: 200 },
            { id: "eid1746", tween: [ "style", "${__1884}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 100 },
            { id: "eid670", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid671", tween: [ "transform", "${_effect}", "scaleY", '2.4', { fromValue: '1'}], position: 4500, duration: 500 },
            { id: "eid1502", tween: [ "transform", "${_effect}", "scaleY", '2.4', { fromValue: '1'}], position: 14500, duration: 500 },
            { id: "eid477", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 250 },
            { id: "eid478", tween: [ "style", "${_people}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 250 },
            { id: "eid1497", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 13500, duration: 250 },
            { id: "eid20", tween: [ "style", "${_label}", "opacity", '1', { fromValue: '0.000000'}], position: 1500, duration: 100 },
            { id: "eid129", tween: [ "style", "${_label}", "opacity", '0', { fromValue: '1'}], position: 8000, duration: 250 },
            { id: "eid279", tween: [ "style", "${_label}", "opacity", '1', { fromValue: '0'}], position: 9000, duration: 250 },
            { id: "eid668", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.0789790004491806'}], position: 1500, duration: 500 },
            { id: "eid669", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4500, duration: 500 },
            { id: "eid1501", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 14500, duration: 500 },
            { id: "eid1881", tween: [ "style", "${_nav-close}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0 },
            { id: "eid1882", tween: [ "style", "${_nav-close}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
            { id: "eid673", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid674", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid675", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
            { id: "eid676", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid1503", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 14500, duration: 0 },
            { id: "eid1504", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
            { id: "eid1787", tween: [ "color", "${_node}", "border-color", 'rgba(51,51,51,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(51,51,51,0.00)'}], position: 1300, duration: 200 },
            { id: "eid559", tween: [ "transform", "${_bounds}", "scaleY", '2.1', { fromValue: '1'}], position: 3000, duration: 500 },
            { id: "eid831", tween: [ "transform", "${_bounds}", "scaleY", '1', { fromValue: '2.1'}], position: 6000, duration: 500 },
            { id: "eid1508", tween: [ "style", "${_node_act_064px}", "opacity", '1', { fromValue: '0.000000'}], position: 11000, duration: 250 },
            { id: "eid1510", tween: [ "style", "${_node_act_064px}", "opacity", '0', { fromValue: '1'}], position: 12250, duration: 250 },
            { id: "eid666", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid667", tween: [ "transform", "${_effect}", "scaleX", '2.4', { fromValue: '1'}], position: 4500, duration: 500 },
            { id: "eid1500", tween: [ "transform", "${_effect}", "scaleX", '2.4', { fromValue: '1'}], position: 14500, duration: 500 },
            { id: "eid479", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 3000, duration: 500, easing: "easeOutBack" },
            { id: "eid1498", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 13500, duration: 500, easing: "easeOutBack" },
            { id: "eid34", tween: [ "transform", "${_node}", "scaleX", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid125", tween: [ "transform", "${_node}", "scaleX", '0.92', { fromValue: '1'}], position: 8000, duration: 250 },
            { id: "eid276", tween: [ "transform", "${_node}", "scaleX", '1', { fromValue: '0.92'}], position: 9000, duration: 250 },
            { id: "eid1869", tween: [ "style", "${__1884}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid33", tween: [ "transform", "${_node}", "scaleY", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid127", tween: [ "transform", "${_node}", "scaleY", '0.92', { fromValue: '1'}], position: 8000, duration: 250 },
            { id: "eid278", tween: [ "transform", "${_node}", "scaleY", '1', { fromValue: '0.92'}], position: 9000, duration: 250 },
            { id: "eid916", tween: [ "style", "${_node_nim_064px}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid917", tween: [ "style", "${_node_nim_064px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid1505", tween: [ "style", "${_node_nim_064px}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0 },
            { id: "eid1802", tween: [ "style", "${_node}", "opacity", '0.038330078125', { fromValue: '1'}], position: 8000, duration: 250 },
            { id: "eid1804", tween: [ "style", "${_node}", "opacity", '1', { fromValue: '0.03832999989390373'}], position: 9000, duration: 250 },
            { id: "eid1790", tween: [ "transform", "${__1884}", "scaleX", '1', { fromValue: '0'}], position: 500, duration: 200 },
            { id: "eid1749", tween: [ "transform", "${__1884}", "scaleX", '0', { fromValue: '1'}], position: 1500, duration: 100 },
            { id: "eid475", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid521", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 6250, duration: 0, easing: "easeOutElastic" },
            { id: "eid1499", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 13500, duration: 0 },
            { id: "eid1666", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
            { id: "eid558", tween: [ "transform", "${_bounds}", "scaleX", '4', { fromValue: '1'}], position: 3000, duration: 500 },
            { id: "eid832", tween: [ "transform", "${_bounds}", "scaleX", '1', { fromValue: '4'}], position: 6000, duration: 500 },
            { id: "eid480", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 3000, duration: 500, easing: "easeOutBack" },
            { id: "eid1496", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 13500, duration: 500, easing: "easeOutBack" },
            { id: "eid1879", tween: [ "style", "${_nav-touch}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
            { id: "eid1880", tween: [ "style", "${_nav-touch}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
            { id: "eid1791", tween: [ "transform", "${__1884}", "scaleY", '1', { fromValue: '0'}], position: 500, duration: 200 },
            { id: "eid1750", tween: [ "transform", "${__1884}", "scaleY", '0', { fromValue: '1'}], position: 1500, duration: 100 },
            { id: "eid1652", tween: [ "style", "${_node_nim_064px}", "opacity", '1', { fromValue: '1'}], position: 13000, duration: 0 },
            { id: "eid1628", tween: [ "style", "${_node_nim_064px}", "opacity", '1', { fromValue: '0'}], position: 16000, duration: 500 },
            { id: "eid1630", tween: [ "style", "${_node_nim_064px}", "opacity", '0', { fromValue: '1'}], position: 17500, duration: 500 }         ]
      }
   }
},
"nddl": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [{1:0,0:0},['-135deg'],['0deg']],
      borderRadius: ['2px 2px','2px 2px','2px 2px','2px 2px'],
      rect: ['148px','-11px','2px','10px','auto','auto'],
      id: 'arrow-bo',
      stroke: [1,'rgba(0, 0, 0, 0)','solid'],
      type: 'rect',
      fill: ['rgba(0,0,0,1)']
   },
   {
      transform: [{1:0,0:0},['-45deg'],['0deg']],
      borderRadius: ['2px 2px','2px 2px','2px 2px','2px 2px'],
      rect: ['148px','-11px','2px','10px','auto','auto'],
      id: 'arrow-to',
      stroke: [1,'rgba(0, 0, 0, 0)','solid'],
      type: 'rect',
      fill: ['rgba(0,0,0,1)']
   },
   {
      transform: [{1:0,0:0},['0deg']],
      rect: ['0px','0px','0px','0px','auto','auto'],
      id: 'line',
      stroke: [1,'rgba(0, 0, 0, 0)','solid'],
      type: 'rect',
      fill: ['rgba(0,0,0,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_arrow-to}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "border-top-left-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '0'],
            ["style", "left", '128px'],
            ["style", "width", '2px'],
            ["style", "top", '-11px'],
            ["style", "border-bottom-left-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '1'],
            ["transform", "skewX", '0deg'],
            ["style", "display", 'block'],
            ["style", "height", '10px'],
            ["transform", "rotateZ", '-45deg'],
            ["style", "border-top-right-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_arrow-bo}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "border-top-left-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '0'],
            ["style", "left", '128px'],
            ["style", "width", '2px'],
            ["style", "top", '-11px'],
            ["style", "border-bottom-left-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '1'],
            ["transform", "skewX", '0deg'],
            ["style", "display", 'block'],
            ["style", "height", '10px'],
            ["style", "border-top-right-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "rotateZ", '-135deg']
         ],
         "${_line}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '-0.04px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '0px'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '2px'],
            ["style", "width", '480px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 7000,
         autoPlay: true,
         labels: {
            "start": 0,
            "stop": 500,
            "bridge": 2000,
            "debridge": 4000,
            "disconnect": 5000,
            "reconnect": 6000
         },
         timeline: [
            { id: "eid729", tween: [ "style", "${_line}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 100, easing: "easeOutQuad" },
            { id: "eid718", tween: [ "style", "${_arrow-to}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid719", tween: [ "style", "${_arrow-bo}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid725", tween: [ "style", "${_line}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid724", tween: [ "style", "${_line}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
            { id: "eid678", tween: [ "style", "${_line}", "width", '316px', { fromValue: '0px'}], position: 0, duration: 500, easing: "easeOutQuad" },
            { id: "eid715", tween: [ "style", "${_arrow-bo}", "left", '157.9px', { fromValue: '128px'}], position: 2000, duration: 250 },
            { id: "eid714", tween: [ "style", "${_arrow-to}", "left", '157.9px', { fromValue: '128px'}], position: 2000, duration: 250 },
            { id: "eid782", tween: [ "style", "${_arrow-to}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
            { id: "eid781", tween: [ "style", "${_arrow-bo}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
            { id: "eid705", tween: [ "transform", "${_line}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 250 },
            { id: "eid815", tween: [ "transform", "${_line}", "scaleY", '1', { fromValue: '2'}], position: 4000, duration: 250, easing: "easeOutQuad" }         ]
      }
   }
},
"node-anc": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'ellipse',
      borderRadius: ['50%','50%','50%','50%'],
      id: 'effect',
      stroke: [2,'rgba(51,51,51,1.00)','solid'],
      cursor: ['pointer'],
      rect: ['2px','2px','124px','124px','auto','auto'],
      display: 'none',
      transform: {},
      fill: ['rgba(255,255,255,0.00)']
   },
   {
      rect: ['0px','0px','132px','132px','auto','auto'],
      id: 'people',
      transform: {},
      display: 'none',
      type: 'group',
      c: [
      {
         rect: ['-102px','-12px','96px','16px','auto','auto'],
         font: ['\'Source Sans Pro\', sans-serif',18,'rgba(51,51,51,1.00)','300','none','normal'],
         id: 'artist7',
         text: 'Morris',
         align: 'right',
         type: 'text'
      },
      {
         rect: ['auto','58px','225px','18px','168px','auto'],
         font: ['Source Sans Pro, sans-serif',36,'rgba(51,51,51,1.00)','600','none','normal'],
         id: 'artist6',
         text: 'arts and crafts',
         align: 'right',
         type: 'text'
      },
      {
         rect: ['-102px','128px','96px','16px','auto','auto'],
         font: ['\'Source Sans Pro\', sans-serif',18,'rgba(51,51,51,1.00)','300','none','normal'],
         id: 'artist5',
         text: 'Ruskin',
         align: 'right',
         type: 'text'
      },
      {
         rect: ['18px','168px','96px','16px','auto','auto'],
         font: ['\'Source Sans Pro\', sans-serif',18,'rgba(51,51,51,1.00)','300','none','normal'],
         id: 'artist4',
         text: 'Stickley',
         align: 'center',
         type: 'text'
      },
      {
         rect: ['138px','128px','96px','16px','auto','auto'],
         font: ['\'Source Sans Pro\', sans-serif',18,'rgba(51,51,51,1.00)','300','none','normal'],
         align: 'left',
         id: 'artist3',
         text: 'Yanagi',
         display: 'none',
         type: 'text'
      },
      {
         rect: ['168px','58px','96px','16px','auto','auto'],
         font: ['\'Source Sans Pro\', sans-serif',18,'rgba(51,51,51,1.00)','300','none','normal'],
         id: 'artist2',
         text: 'Mackintosh',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['128px','-12px','96px','16px','auto','auto'],
         font: ['\'Source Sans Pro\', sans-serif',18,'rgba(51,51,51,1.00)','300','none','normal'],
         id: 'artist1',
         text: 'Schmidt',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['18px','-52px','96px','16px','auto','auto'],
         font: ['\'Source Sans Pro\', sans-serif',18,'rgba(51,51,51,1.00)','300','none','normal'],
         id: 'artist0',
         text: 'Crane',
         align: 'center',
         type: 'text'
      }]
   },
   {
      transform: [{1:0,0:0},{},{},['0','0']],
      rect: ['2px','2px','124px','124px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'node',
      stroke: [2,'rgba(51,51,51,1.00)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      id: 'node_act_128px',
      type: 'image',
      rect: ['0','0','132px','132px','auto','auto'],
      fill: ['rgba(0,0,0,0)','img/node_act_128px.png','0px','0px']
   },
   {
      rect: ['2px','51px','128px','30px','auto','auto'],
      font: ['Source Sans Pro, sans-serif',16,'rgba(51,51,51,1.00)','600','none',''],
      id: 'label',
      text: 'arts and crafts',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['0px','0px','132px','132px','auto','auto'],
      type: 'image',
      id: 'node_anc_128px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_anc_128px.png','0px','0px']
   },
   {
      rect: ['0px','0px','132px','132px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgba(0,0,0,0.00)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0.00)']
   },
   {
      type: 'ellipse',
      borderRadius: ['50%','50%','50%','50%'],
      id: 'nav-touch',
      stroke: [2,'rgba(51,51,51,1.00)','solid'],
      cursor: ['pointer'],
      rect: ['2px','2px','124px','124px','auto','auto'],
      display: 'none',
      transform: [{1:0,0:0},{},{},['1.6','1.6']],
      fill: ['rgba(255,255,255,0.00)']
   },
   {
      display: 'none',
      type: 'rect',
      rect: ['192px','-69px','auto','auto','auto','auto'],
      id: 'nav-close'
   },
   {
      type: 'text',
      id: '_1860',
      text: '1860',
      font: ['Radley, serif',48,'rgba(51,51,51,1.00)','900','none','normal'],
      transform: {},
      display: 'none',
      rect: ['4px','34px','124px','64px','auto','auto'],
      align: 'center',
      opacity: 1
   }],
   symbolInstances: [
   {
      id: 'nav-close',
      symbolName: 'nav-close'
   }   ]
   },
   states: {
      "Base State": {
         "${_nav-touch}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '1.6'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '124px'],
            ["style", "top", '2px'],
            ["style", "left", '2px'],
            ["transform", "scaleY", '1.6'],
            ["style", "height", '124px'],
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(51,51,51,0.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '1']
         ],
         "${_artist5}": [
            ["style", "line-height", '12px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '-102px'],
            ["style", "font-size", '18px'],
            ["style", "top", '128px'],
            ["style", "text-align", 'right'],
            ["style", "height", '16px'],
            ["style", "font-family", '\'Source Sans Pro\', sans-serif'],
            ["style", "font-style", 'normal'],
            ["style", "width", '96px']
         ],
         "${_artist1}": [
            ["style", "line-height", '12px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '128px'],
            ["style", "font-size", '18px'],
            ["style", "top", '-12px'],
            ["style", "text-align", 'left'],
            ["style", "height", '16px'],
            ["style", "font-family", '\'Source Sans Pro\', sans-serif'],
            ["style", "font-style", 'normal'],
            ["style", "width", '96px']
         ],
         "${_artist6}": [
            ["style", "line-height", '12px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '600'],
            ["style", "left", 'auto'],
            ["style", "font-size", '36px'],
            ["style", "top", '58px'],
            ["style", "text-align", 'right'],
            ["style", "font-style", 'normal'],
            ["style", "height", '18px'],
            ["style", "font-family", '\'Source Sans Pro\', sans-serif'],
            ["style", "width", '225px'],
            ["style", "right", '168px']
         ],
         "${_nav-close}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '192px'],
            ["style", "top", '-69px']
         ],
         "${symbolSelector}": [
            ["style", "height", '132px'],
            ["style", "width", '132px']
         ],
         "${_effect}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '124px'],
            ["style", "top", '2px'],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleY", '1'],
            ["style", "left", '2px'],
            ["style", "height", '124px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "display", 'none'],
            ["style", "opacity", '0.0789794921875']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '0'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '124px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '0'],
            ["style", "opacity", '1'],
            ["style", "height", '124px'],
            ["color", "border-color", 'rgba(51,51,51,0.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '2px']
         ],
         "${_artist3}": [
            ["style", "line-height", '12px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '138px'],
            ["style", "font-size", '18px'],
            ["style", "top", '128px'],
            ["style", "text-align", 'left'],
            ["style", "height", '16px'],
            ["style", "display", 'none'],
            ["style", "font-family", '\'Source Sans Pro\', sans-serif'],
            ["style", "font-style", 'normal'],
            ["style", "width", '96px']
         ],
         "${_artist0}": [
            ["style", "line-height", '12px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '18px'],
            ["style", "font-size", '18px'],
            ["style", "top", '-52px'],
            ["style", "text-align", 'center'],
            ["style", "height", '16px'],
            ["style", "font-family", '\'Source Sans Pro\', sans-serif'],
            ["style", "font-style", 'normal'],
            ["style", "width", '96px']
         ],
         "${_people}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["transform", "scaleY", '1.6'],
            ["style", "height", '132px'],
            ["transform", "scaleX", '1.6'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '132px']
         ],
         "${_node_act_128px}": [
            ["style", "opacity", '0']
         ],
         "${_artist4}": [
            ["style", "line-height", '12px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '18px'],
            ["style", "font-size", '18px'],
            ["style", "top", '168px'],
            ["style", "text-align", 'center'],
            ["style", "height", '16px'],
            ["style", "font-family", '\'Source Sans Pro\', sans-serif'],
            ["style", "font-style", 'normal'],
            ["style", "width", '96px']
         ],
         "${_label}": [
            ["style", "line-height", '16px'],
            ["style", "letter-spacing", '0px'],
            ["style", "opacity", '0'],
            ["style", "width", '128px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '600'],
            ["style", "left", '2px'],
            ["style", "font-size", '16px'],
            ["style", "top", '58px'],
            ["style", "text-align", 'center'],
            ["transform", "scaleY", '1'],
            ["style", "text-indent", '0px'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["transform", "scaleX", '1']
         ],
         "${_node_anc_128px}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_artist7}": [
            ["style", "line-height", '12px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '-102px'],
            ["style", "font-size", '18px'],
            ["style", "top", '-12px'],
            ["style", "text-align", 'right'],
            ["style", "height", '16px'],
            ["style", "font-family", '\'Source Sans Pro\', sans-serif'],
            ["style", "font-style", 'normal'],
            ["style", "width", '96px']
         ],
         "${_artist2}": [
            ["style", "line-height", '12px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '168px'],
            ["style", "font-size", '18px'],
            ["style", "top", '58px'],
            ["style", "text-align", 'left'],
            ["style", "height", '16px'],
            ["style", "font-family", '\'Source Sans Pro\', sans-serif'],
            ["style", "font-style", 'normal'],
            ["style", "width", '96px']
         ],
         "${_bounds}": [
            ["color", "background-color", 'rgba(0,0,0,0.00)'],
            ["transform", "scaleX", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '132px'],
            ["style", "top", '0.3px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '131.87019362232px'],
            ["color", "border-color", 'rgba(0,0,0,0.00)'],
            ["style", "left", '0.2px'],
            ["style", "border-width", '0px']
         ],
         "${__1860}": [
            ["style", "line-height", '64px'],
            ["style", "font-weight", '900'],
            ["transform", "scaleY", '0'],
            ["transform", "scaleX", '0'],
            ["style", "opacity", '0'],
            ["style", "left", '4px'],
            ["style", "font-size", '48px'],
            ["style", "top", '34px'],
            ["style", "display", 'none'],
            ["style", "text-align", 'center'],
            ["style", "height", '64.34765625px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Radley, serif'],
            ["style", "width", '124px'],
            ["color", "color", 'rgba(51,51,51,1.00)']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 18000,
         autoPlay: true,
         labels: {
            "spawn": 500,
            "hover": 3000,
            "rehover": 3500,
            "exit": 6000,
            "disable": 8000,
            "enable": 9000,
            "active": 11000,
            "inactive": 12000,
            "touch": 13000,
            "retouch": 14000,
            "idle": 16000
         },
         timeline: [
            { id: "eid1851", tween: [ "style", "${_nav-touch}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
            { id: "eid1852", tween: [ "style", "${_nav-touch}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
            { id: "eid1086", tween: [ "style", "${_nav-close}", "opacity", '1', { fromValue: '0'}], position: 13000, duration: 500 },
            { id: "eid501", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 250 },
            { id: "eid543", tween: [ "style", "${_people}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 250 },
            { id: "eid1071", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 13000, duration: 250 },
            { id: "eid20", tween: [ "style", "${_label}", "opacity", '1', { fromValue: '0.000000'}], position: 1500, duration: 100 },
            { id: "eid129", tween: [ "style", "${_label}", "opacity", '0', { fromValue: '1'}], position: 8000, duration: 250 },
            { id: "eid312", tween: [ "style", "${_label}", "opacity", '1', { fromValue: '0'}], position: 9000, duration: 250 },
            { id: "eid652", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.0789790004491806'}], position: 1500, duration: 500 },
            { id: "eid638", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 1000 },
            { id: "eid1075", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 14000, duration: 1000 },
            { id: "eid1089", tween: [ "style", "${_nav-close}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0 },
            { id: "eid1671", tween: [ "style", "${_nav-close}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
            { id: "eid649", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid650", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid654", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid641", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid1077", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'block'}], position: 14000, duration: 0 },
            { id: "eid1078", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
            { id: "eid575", tween: [ "transform", "${_bounds}", "scaleX", '2.8', { fromValue: '1'}], position: 3000, duration: 500 },
            { id: "eid830", tween: [ "transform", "${_bounds}", "scaleX", '1', { fromValue: '2.8'}], position: 6000, duration: 500 },
            { id: "eid1810", tween: [ "color", "${_node}", "border-color", 'rgba(51,51,51,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(51,51,51,0.00)'}], position: 1300, duration: 200 },
            { id: "eid1908", tween: [ "style", "${_artist3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid577", tween: [ "transform", "${_bounds}", "scaleY", '1.8', { fromValue: '1'}], position: 3000, duration: 500 },
            { id: "eid828", tween: [ "transform", "${_bounds}", "scaleY", '1', { fromValue: '1.8'}], position: 6000, duration: 500 },
            { id: "eid1659", tween: [ "style", "${_node_anc_128px}", "opacity", '1', { fromValue: '1'}], position: 13000, duration: 0 },
            { id: "eid1637", tween: [ "style", "${_node_anc_128px}", "opacity", '1', { fromValue: '0'}], position: 16000, duration: 500 },
            { id: "eid1639", tween: [ "style", "${_node_anc_128px}", "opacity", '0', { fromValue: '1'}], position: 17500, duration: 500 },
            { id: "eid644", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid635", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 1000 },
            { id: "eid1074", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 14000, duration: 1000 },
            { id: "eid1909", tween: [ "style", "${__1860}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid34", tween: [ "transform", "${_node}", "scaleX", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid125", tween: [ "transform", "${_node}", "scaleX", '0.92', { fromValue: '1'}], position: 8000, duration: 250 },
            { id: "eid309", tween: [ "transform", "${_node}", "scaleX", '1', { fromValue: '0.92'}], position: 9000, duration: 250 },
            { id: "eid1808", tween: [ "transform", "${__1860}", "scaleY", '1', { fromValue: '0'}], position: 500, duration: 200 },
            { id: "eid1688", tween: [ "transform", "${__1860}", "scaleY", '0', { fromValue: '1'}], position: 1500, duration: 100 },
            { id: "eid1807", tween: [ "transform", "${__1860}", "scaleX", '1', { fromValue: '0'}], position: 500, duration: 200 },
            { id: "eid1687", tween: [ "transform", "${__1860}", "scaleX", '0', { fromValue: '1'}], position: 1500, duration: 100 },
            { id: "eid1108", tween: [ "style", "${_node_act_128px}", "opacity", '1', { fromValue: '0.000000'}], position: 11000, duration: 250 },
            { id: "eid1110", tween: [ "style", "${_node_act_128px}", "opacity", '0', { fromValue: '1'}], position: 12000, duration: 250 },
            { id: "eid33", tween: [ "transform", "${_node}", "scaleY", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid127", tween: [ "transform", "${_node}", "scaleY", '0.92', { fromValue: '1'}], position: 8000, duration: 250 },
            { id: "eid311", tween: [ "transform", "${_node}", "scaleY", '1', { fromValue: '0.92'}], position: 9000, duration: 250 },
            { id: "eid918", tween: [ "style", "${_node_anc_128px}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid919", tween: [ "style", "${_node_anc_128px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid1064", tween: [ "style", "${_node_anc_128px}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0 },
            { id: "eid131", tween: [ "style", "${_node}", "opacity", '0.041412353515625', { fromValue: '1'}], position: 8000, duration: 250 },
            { id: "eid310", tween: [ "style", "${_node}", "opacity", '1', { fromValue: '0.041412353515625'}], position: 9000, duration: 250 },
            { id: "eid1704", tween: [ "style", "${__1860}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 200 },
            { id: "eid540", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 3000, duration: 500, easing: "easeOutBack" },
            { id: "eid1070", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 13000, duration: 500, easing: "easeOutBack" },
            { id: "eid646", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid636", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 1000 },
            { id: "eid1076", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 14000, duration: 1000 },
            { id: "eid511", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0, easing: "easeOutElastic" },
            { id: "eid520", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 6250, duration: 0, easing: "easeOutElastic" },
            { id: "eid1073", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0, easing: "easeOutElastic" },
            { id: "eid1668", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
            { id: "eid541", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 3000, duration: 500, easing: "easeOutBack" },
            { id: "eid1072", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 13000, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"node-ano": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'ellipse',
      borderRadius: ['50%','50%','50%','50%'],
      id: 'effect',
      stroke: [2,'rgba(51,51,51,1.00)','solid'],
      cursor: ['pointer'],
      rect: ['2px','2px','92px','92px','auto','auto'],
      display: 'none',
      transform: {},
      fill: ['rgba(255,255,255,0.00)']
   },
   {
      transform: {},
      id: 'people',
      type: 'group',
      display: 'none',
      rect: ['0px','0px','100px','100px','auto','auto'],
      c: [
      {
         font: ['Source Sans Pro, sans-serif',36,'rgba(51,51,51,1.00)','600','none',''],
         type: 'text',
         id: 'artist5',
         text: 'art nouveau',
         align: 'right',
         rect: ['auto','2px','190px','18px','112px','auto']
      },
      {
         font: ['Source Sans Pro, sans-serif',18,'rgba(51,51,51,1.00)','300','none',''],
         type: 'text',
         id: 'artist4',
         text: 'Klimt',
         align: 'right',
         rect: ['-108px','82px','96px','16px','auto','auto']
      },
      {
         font: ['Source Sans Pro, sans-serif',18,'rgba(51,51,51,1.00)','300','none',''],
         type: 'text',
         id: 'artist3',
         text: 'Gaudí',
         align: 'center',
         rect: ['2px','122px','96px','16px','auto','auto']
      },
      {
         font: ['Source Sans Pro, sans-serif',18,'rgba(51,51,51,1.00)','300','none',''],
         type: 'text',
         id: 'artist2',
         text: 'Willette',
         align: 'left',
         rect: ['112px','82px','96px','16px','auto','auto']
      },
      {
         font: ['Source Sans Pro, sans-serif',18,'rgba(51,51,51,1.00)','300','none',''],
         type: 'text',
         id: 'artist1',
         text: 'Mackintosh',
         align: 'left',
         rect: ['112px','2px','96px','16px','auto','auto']
      },
      {
         font: ['Source Sans Pro, sans-serif',18,'rgba(51,51,51,1.00)','300','none',''],
         type: 'text',
         id: 'artist0',
         text: 'Mucha',
         align: 'center',
         rect: ['2px','-38px','96px','16px','auto','auto']
      }]
   },
   {
      transform: [{1:0,0:0},{},{},['0','0']],
      rect: ['2px','2px','92px','92px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'node',
      stroke: [2,'rgba(51,51,51,1.00)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      id: 'node_act_096px',
      type: 'image',
      rect: ['0','0','100px','100px','auto','auto'],
      fill: ['rgba(0,0,0,0)','img/node_act_096px.png','0px','0px']
   },
   {
      font: ['Source Sans Pro, sans-serif',16,'rgba(0,0,0,1)','600','none',''],
      type: 'text',
      id: 'label',
      text: 'art nouveau',
      align: 'center',
      rect: ['2px','42px','96px','16px','auto','auto']
   },
   {
      rect: ['0px','0px','100px','100px','auto','auto'],
      id: 'node_ano_064px',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_ano_064px.png','0px','0px']
   },
   {
      rect: ['0px','0px','68px','68px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   },
   {
      type: 'ellipse',
      borderRadius: ['50%','50%','50%','50%'],
      id: 'nav-touch',
      stroke: [2,'rgba(51,51,51,1.00)','solid'],
      cursor: ['pointer'],
      rect: ['2px','2px','92px','92px','auto','auto'],
      display: 'none',
      transform: [{1:0,0:0},{},{},['1.7','1.7']],
      fill: ['rgba(255,255,255,0.00)']
   },
   {
      type: 'rect',
      display: 'none',
      opacity: 1,
      id: 'nav-close',
      rect: ['160px','122px','auto','auto','auto','auto']
   },
   {
      type: 'text',
      id: '_1890',
      text: '1890',
      font: ['Radley, serif',48,'rgba(51,51,51,1.00)','900','none','normal'],
      transform: {},
      display: 'none',
      rect: ['-10px','18px','120px','64px','auto','auto'],
      align: 'center',
      opacity: 1
   }],
   symbolInstances: [
   {
      id: 'nav-close',
      symbolName: 'nav-close'
   }   ]
   },
   states: {
      "Base State": {
         "${_nav-touch}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '1.7'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '92px'],
            ["style", "top", '2px'],
            ["style", "left", '2px'],
            ["transform", "scaleY", '1.7'],
            ["style", "height", '92px'],
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(51,51,51,0.00)'],
            ["style", "border-width", '2px'],
            ["style", "border-style", 'solid']
         ],
         "${_artist5}": [
            ["style", "line-height", '12px'],
            ["style", "opacity", '1'],
            ["style", "font-size", '36px'],
            ["transform", "scaleX", '1'],
            ["style", "right", '112px'],
            ["style", "left", 'auto'],
            ["style", "width", '190px'],
            ["style", "top", '2px'],
            ["style", "text-align", 'right'],
            ["transform", "scaleY", '1'],
            ["style", "height", '18px'],
            ["style", "display", 'block'],
            ["style", "font-family", 'Source Sans Pro, sans-serif'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '600']
         ],
         "${_artist1}": [
            ["style", "line-height", '12px'],
            ["style", "font-size", '18px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '112px'],
            ["style", "width", '96px'],
            ["style", "top", '2px'],
            ["style", "opacity", '1'],
            ["style", "text-align", 'left'],
            ["style", "display", 'block'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro, sans-serif'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1']
         ],
         "${_nav-close}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '160px'],
            ["style", "top", '122px']
         ],
         "${symbolSelector}": [
            ["style", "height", '100px'],
            ["style", "width", '100px']
         ],
         "${_node_act_096px}": [
            ["style", "opacity", '0']
         ],
         "${_effect}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '88.452830188679px'],
            ["style", "top", '4px'],
            ["style", "opacity", '0.0789790004491806'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'none'],
            ["style", "height", '88.452830188679px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '4px']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '0'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '92px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '0'],
            ["style", "border-style", 'solid'],
            ["style", "height", '92px'],
            ["color", "border-color", 'rgba(51,51,51,0.00)'],
            ["style", "border-width", '2px'],
            ["style", "left", '2px']
         ],
         "${_artist4}": [
            ["style", "line-height", '12px'],
            ["style", "font-size", '18px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '-108px'],
            ["style", "width", '96px'],
            ["style", "top", '82px'],
            ["style", "opacity", '1'],
            ["style", "text-align", 'right'],
            ["style", "display", 'block'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro, sans-serif'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1']
         ],
         "${_artist0}": [
            ["style", "line-height", '12px'],
            ["style", "font-size", '18px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '2px'],
            ["style", "width", '96px'],
            ["style", "top", '-38px'],
            ["style", "opacity", '1'],
            ["style", "text-align", 'center'],
            ["style", "display", 'block'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro, sans-serif'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1']
         ],
         "${_people}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["transform", "scaleY", '1.6'],
            ["transform", "scaleX", '1.6'],
            ["style", "height", '100px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '100px']
         ],
         "${_label}": [
            ["style", "line-height", '16px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "width", '96px'],
            ["transform", "scaleX", '1'],
            ["style", "font-weight", '600'],
            ["style", "left", '2px'],
            ["style", "font-size", '16px'],
            ["style", "top", '42px'],
            ["style", "text-align", 'center'],
            ["transform", "scaleY", '1'],
            ["style", "text-indent", '0px'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "opacity", '0']
         ],
         "${_artist3}": [
            ["style", "line-height", '12px'],
            ["style", "font-size", '18px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '2px'],
            ["style", "width", '96px'],
            ["style", "top", '122px'],
            ["style", "opacity", '1'],
            ["style", "text-align", 'center'],
            ["style", "display", 'block'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro, sans-serif'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1']
         ],
         "${_node_ano_064px}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${__1890}": [
            ["style", "line-height", '64px'],
            ["style", "font-weight", '900'],
            ["transform", "scaleY", '0'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '-10px'],
            ["style", "width", '120px'],
            ["style", "top", '18px'],
            ["style", "font-style", 'normal'],
            ["style", "text-align", 'center'],
            ["style", "height", '64px'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Radley, serif'],
            ["style", "font-size", '48px'],
            ["transform", "scaleX", '0']
         ],
         "${_bounds}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "scaleY", '1'],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleX", '1'],
            ["style", "height", '99.901661835092px'],
            ["style", "border-width", '0px'],
            ["style", "width", '100px']
         ],
         "${_artist2}": [
            ["style", "line-height", '12px'],
            ["style", "font-size", '18px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '112px'],
            ["style", "width", '96px'],
            ["style", "top", '82px'],
            ["style", "opacity", '1'],
            ["style", "text-align", 'left'],
            ["style", "display", 'block'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro, sans-serif'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 18000,
         autoPlay: true,
         labels: {
            "spawn": 500,
            "hover": 3000,
            "rehover": 3500,
            "exit": 6000,
            "disable": 8000,
            "enable": 9000,
            "active": 11000,
            "inactive": 12000,
            "touch": 13000,
            "retouch": 14000,
            "idle": 16000
         },
         timeline: [
            { id: "eid1893", tween: [ "style", "${_nav-touch}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
            { id: "eid1894", tween: [ "style", "${_nav-touch}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
            { id: "eid659", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid660", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4250, duration: 750 },
            { id: "eid1464", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 14250, duration: 750 },
            { id: "eid464", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 250 },
            { id: "eid517", tween: [ "style", "${_people}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 250 },
            { id: "eid1457", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 13000, duration: 250 },
            { id: "eid920", tween: [ "style", "${_node_ano_064px}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid921", tween: [ "style", "${_node_ano_064px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid1468", tween: [ "style", "${_node_ano_064px}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0 },
            { id: "eid657", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.0789790004491806'}], position: 1500, duration: 500 },
            { id: "eid658", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4250, duration: 750 },
            { id: "eid1463", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 14250, duration: 750 },
            { id: "eid1904", tween: [ "style", "${_nav-close}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0 },
            { id: "eid1905", tween: [ "style", "${_nav-close}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
            { id: "eid1813", tween: [ "transform", "${__1890}", "scaleX", '1', { fromValue: '0'}], position: 500, duration: 200 },
            { id: "eid1697", tween: [ "transform", "${__1890}", "scaleX", '0', { fromValue: '1'}], position: 1500, duration: 100 },
            { id: "eid662", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid663", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid664", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid665", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid1465", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 14250, duration: 0 },
            { id: "eid1466", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
            { id: "eid1816", tween: [ "color", "${_node}", "border-color", 'rgba(51,51,51,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(51,51,51,0.00)'}], position: 1300, duration: 200 },
            { id: "eid571", tween: [ "transform", "${_bounds}", "scaleX", '2.9', { fromValue: '1'}], position: 3000, duration: 500 },
            { id: "eid835", tween: [ "transform", "${_bounds}", "scaleX", '1', { fromValue: '2.9'}], position: 6000, duration: 500 },
            { id: "eid461", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid462", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 6250, duration: 0 },
            { id: "eid1460", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0 },
            { id: "eid1669", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
            { id: "eid655", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid656", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4250, duration: 750 },
            { id: "eid1462", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 14250, duration: 750 },
            { id: "eid34", tween: [ "transform", "${_node}", "scaleX", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid125", tween: [ "transform", "${_node}", "scaleX", '0.92', { fromValue: '1'}], position: 8000, duration: 250 },
            { id: "eid290", tween: [ "transform", "${_node}", "scaleX", '1', { fromValue: '0.92'}], position: 9000, duration: 250 },
            { id: "eid474", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 3000, duration: 500, easing: "easeOutBack" },
            { id: "eid1459", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 13000, duration: 500, easing: "easeOutBack" },
            { id: "eid1660", tween: [ "style", "${_node_ano_064px}", "opacity", '1', { fromValue: '1'}], position: 13000, duration: 0 },
            { id: "eid1642", tween: [ "style", "${_node_ano_064px}", "opacity", '1', { fromValue: '0'}], position: 16000, duration: 500 },
            { id: "eid1644", tween: [ "style", "${_node_ano_064px}", "opacity", '0', { fromValue: '1'}], position: 17500, duration: 500 },
            { id: "eid1814", tween: [ "transform", "${__1890}", "scaleY", '1', { fromValue: '0'}], position: 500, duration: 200 },
            { id: "eid1698", tween: [ "transform", "${__1890}", "scaleY", '0', { fromValue: '1'}], position: 1500, duration: 100 },
            { id: "eid1449", tween: [ "style", "${_node_act_096px}", "opacity", '1', { fromValue: '0.000000'}], position: 11000, duration: 250 },
            { id: "eid1451", tween: [ "style", "${_node_act_096px}", "opacity", '0', { fromValue: '1'}], position: 12000, duration: 250 },
            { id: "eid33", tween: [ "transform", "${_node}", "scaleY", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid127", tween: [ "transform", "${_node}", "scaleY", '0.92', { fromValue: '1'}], position: 8000, duration: 250 },
            { id: "eid292", tween: [ "transform", "${_node}", "scaleY", '1', { fromValue: '0.92'}], position: 9000, duration: 250 },
            { id: "eid1708", tween: [ "style", "${__1890}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 200 },
            { id: "eid1690", tween: [ "style", "${__1890}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 100 },
            { id: "eid20", tween: [ "style", "${_label}", "opacity", '1', { fromValue: '0.000000'}], position: 1500, duration: 100 },
            { id: "eid129", tween: [ "style", "${_label}", "opacity", '0', { fromValue: '1'}], position: 8000, duration: 250 },
            { id: "eid293", tween: [ "style", "${_label}", "opacity", '1', { fromValue: '0'}], position: 9000, duration: 250 },
            { id: "eid1883", tween: [ "style", "${__1890}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid473", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 3000, duration: 500, easing: "easeOutBack" },
            { id: "eid1456", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 13000, duration: 500, easing: "easeOutBack" },
            { id: "eid131", tween: [ "style", "${_node}", "opacity", '0.041412353515625', { fromValue: '1'}], position: 8000, duration: 250 },
            { id: "eid291", tween: [ "style", "${_node}", "opacity", '1', { fromValue: '0.041412353515625'}], position: 9000, duration: 250 },
            { id: "eid573", tween: [ "transform", "${_bounds}", "scaleY", '1.8', { fromValue: '1'}], position: 3000, duration: 500 },
            { id: "eid836", tween: [ "transform", "${_bounds}", "scaleY", '1', { fromValue: '1.8'}], position: 6000, duration: 500 }         ]
      }
   }
},
"noodle-imp-sym": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['148px','-10px','4px','10px','auto','auto'],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      transform: [{1:0,0:0},['-180deg'],['-45deg']],
      id: 'arrow-bo',
      stroke: [1,'rgba(0, 0, 0, 0)','solid'],
      type: 'rect',
      fill: ['rgba(51,51,51,1.00)']
   },
   {
      rect: ['148px','-12px','4px','10px','auto','auto'],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      transform: [{1:0,0:0},['0deg'],['45deg']],
      id: 'arrow-to',
      stroke: [1,'rgba(0, 0, 0, 0)','solid'],
      type: 'rect',
      fill: ['rgba(51,51,51,1.00)']
   },
   {
      rect: ['0px','0px','0px','0px','auto','auto'],
      transform: [{1:0,0:0},['0deg']],
      id: 'line',
      stroke: [1,'rgba(0, 0, 0, 0)','solid'],
      type: 'rect',
      fill: ['rgba(51,51,51,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_arrow-to}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '128px'],
            ["style", "opacity", '0'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '4px'],
            ["style", "top", '-12px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '1'],
            ["transform", "skewX", '45deg'],
            ["style", "display", 'block'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '10px'],
            ["color", "background-color", 'rgba(51,51,51,1.00)']
         ],
         "${symbolSelector}": [
            ["style", "height", '2px'],
            ["style", "width", '480px']
         ],
         "${_line}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '0px'],
            ["style", "top", '-0.04px'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'block'],
            ["style", "height", '0px'],
            ["color", "background-color", 'rgba(51,51,51,1.00)']
         ],
         "${_arrow-bo}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "rotateZ", '-180deg'],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '0'],
            ["style", "left", '128px'],
            ["style", "width", '4px'],
            ["style", "top", '-10px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '1'],
            ["transform", "skewX", '-45deg'],
            ["style", "display", 'block'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '10px'],
            ["color", "background-color", 'rgba(51,51,51,1.00)']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 7000,
         autoPlay: true,
         labels: {
            "start": 0,
            "stop": 500,
            "bridge": 2000,
            "debridge": 4000,
            "disconnect": 5000,
            "reconnect": 6000
         },
         timeline: [
            { id: "eid729", tween: [ "style", "${_line}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 100, easing: "easeOutQuad" },
            { id: "eid718", tween: [ "style", "${_arrow-to}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid719", tween: [ "style", "${_arrow-bo}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid705", tween: [ "transform", "${_line}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 250 },
            { id: "eid815", tween: [ "transform", "${_line}", "scaleY", '1', { fromValue: '2'}], position: 4000, duration: 250, easing: "easeOutQuad" },
            { id: "eid678", tween: [ "style", "${_line}", "width", '258px', { fromValue: '0px'}], position: 0, duration: 500, easing: "easeOutQuad" },
            { id: "eid782", tween: [ "style", "${_arrow-to}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
            { id: "eid714", tween: [ "style", "${_arrow-to}", "left", '156px', { fromValue: '128px'}], position: 2000, duration: 250 },
            { id: "eid715", tween: [ "style", "${_arrow-bo}", "left", '156px', { fromValue: '128px'}], position: 2000, duration: 250 },
            { id: "eid781", tween: [ "style", "${_arrow-bo}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
            { id: "eid725", tween: [ "style", "${_line}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid724", tween: [ "style", "${_line}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 }         ]
      }
   }
},
"noodle-imp-nim": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [{1:0,0:0},['-180deg'],['-45deg']],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      rect: ['148px','-11px','4px','10px','auto','auto'],
      id: 'arrow-bo',
      stroke: [1,'rgba(0, 0, 0, 0)','solid'],
      type: 'rect',
      fill: ['rgba(51,51,51,1.00)']
   },
   {
      transform: [{1:0,0:0},['0deg'],['45deg']],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      rect: ['148px','-12px','4px','10px','auto','auto'],
      id: 'arrow-to',
      stroke: [1,'rgba(0, 0, 0, 0)','solid'],
      type: 'rect',
      fill: ['rgba(51,51,51,1.00)']
   },
   {
      transform: [{1:0,0:0},['0deg']],
      rect: ['0px','0px','0px','0px','auto','auto'],
      id: 'line',
      stroke: [1,'rgba(0, 0, 0, 0)','solid'],
      type: 'rect',
      fill: ['rgba(51,51,51,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_arrow-to}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '87.9px'],
            ["style", "opacity", '0'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '4px'],
            ["style", "top", '-11.71px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '1'],
            ["transform", "skewX", '45deg'],
            ["style", "display", 'block'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '10px'],
            ["color", "background-color", 'rgba(51,51,51,1.00)']
         ],
         "${_arrow-bo}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "rotateZ", '-180deg'],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '0'],
            ["style", "left", '87.9px'],
            ["style", "width", '4px'],
            ["style", "top", '-10.7px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '1'],
            ["transform", "skewX", '-45deg'],
            ["style", "display", 'block'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '10px'],
            ["color", "background-color", 'rgba(51,51,51,1.00)']
         ],
         "${_line}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '0px'],
            ["style", "top", '-0.04px'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'block'],
            ["style", "height", '0px'],
            ["color", "background-color", 'rgba(51,51,51,1.00)']
         ],
         "${symbolSelector}": [
            ["style", "height", '2px'],
            ["style", "width", '480px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 7000,
         autoPlay: true,
         labels: {
            "start": 0,
            "stop": 500,
            "bridge": 2000,
            "debridge": 4000,
            "disconnect": 5000,
            "reconnect": 6000
         },
         timeline: [
            { id: "eid729", tween: [ "style", "${_line}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 100, easing: "easeOutQuad" },
            { id: "eid725", tween: [ "style", "${_line}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid724", tween: [ "style", "${_line}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
            { id: "eid719", tween: [ "style", "${_arrow-bo}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid714", tween: [ "style", "${_arrow-to}", "left", '118px', { fromValue: '87.9px'}], position: 2000, duration: 250 },
            { id: "eid678", tween: [ "style", "${_line}", "width", '198px', { fromValue: '0px'}], position: 0, duration: 500, easing: "easeOutQuad" },
            { id: "eid782", tween: [ "style", "${_arrow-to}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
            { id: "eid705", tween: [ "transform", "${_line}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 250 },
            { id: "eid815", tween: [ "transform", "${_line}", "scaleY", '1', { fromValue: '2'}], position: 4000, duration: 250, easing: "easeOutQuad" },
            { id: "eid715", tween: [ "style", "${_arrow-bo}", "left", '118px', { fromValue: '87.9px'}], position: 2000, duration: 250 },
            { id: "eid781", tween: [ "style", "${_arrow-bo}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
            { id: "eid718", tween: [ "style", "${_arrow-to}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 }         ]
      }
   }
},
"noodle-anc-ano": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['148px','-11px','6px','12px','auto','auto'],
      borderRadius: ['2px 2px','2px 2px','2px 2px','2px 2px'],
      transform: [{1:0,0:0},['-180deg'],['-45deg']],
      id: 'arrow-bo',
      stroke: [0,'rgba(0, 0, 0, 0)','solid'],
      type: 'rect',
      fill: ['rgba(51,51,51,1.00)']
   },
   {
      rect: ['148px','-11px','6px','12px','auto','auto'],
      borderRadius: ['2px 2px','2px 2px','2px 2px','2px 2px'],
      transform: [{1:0,0:0},['0deg'],['45deg']],
      id: 'arrow-to',
      stroke: [0,'rgba(0, 0, 0, 0)','solid'],
      type: 'rect',
      fill: ['rgba(51,51,51,1.00)']
   },
   {
      rect: ['0px','0px','0px','0px','auto','auto'],
      transform: [{1:0,0:0},['0deg']],
      id: 'line',
      stroke: [1,'rgba(0, 0, 0, 0)','solid'],
      type: 'rect',
      fill: ['rgba(51,51,51,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_arrow-to}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '97.9px'],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["color", "background-color", 'rgba(51,51,51,1.00)'],
            ["style", "opacity", '0'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '6px'],
            ["style", "top", '-11px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '1'],
            ["transform", "skewX", '45deg'],
            ["style", "display", 'block'],
            ["style", "height", '12px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "border-width", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '2px'],
            ["style", "width", '480px']
         ],
         "${_line}": [
            ["color", "background-color", 'rgba(51,51,51,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '0px'],
            ["style", "top", '-0.04px'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'block'],
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "border-width", '1px'],
            ["style", "height", '0px']
         ],
         "${_arrow-bo}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '97.9px'],
            ["transform", "rotateZ", '-180deg'],
            ["color", "background-color", 'rgba(51,51,51,1.00)'],
            ["style", "opacity", '0'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '6px'],
            ["style", "top", '-11px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '1'],
            ["transform", "skewX", '-45deg'],
            ["style", "display", 'block'],
            ["style", "height", '12px'],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-width", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 7000,
         autoPlay: true,
         labels: {
            "start": 0,
            "stop": 500,
            "bridge": 2000,
            "debridge": 4000,
            "disconnect": 5000,
            "reconnect": 6000
         },
         timeline: [
            { id: "eid729", tween: [ "style", "${_line}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 100, easing: "easeOutQuad" },
            { id: "eid725", tween: [ "style", "${_line}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid724", tween: [ "style", "${_line}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
            { id: "eid719", tween: [ "style", "${_arrow-bo}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid718", tween: [ "style", "${_arrow-to}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid678", tween: [ "style", "${_line}", "width", '218px', { fromValue: '0px'}], position: 0, duration: 500, easing: "easeOutQuad" },
            { id: "eid715", tween: [ "style", "${_arrow-bo}", "left", '130px', { fromValue: '97.9px'}], position: 2000, duration: 250 },
            { id: "eid976", tween: [ "transform", "${_line}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 250 },
            { id: "eid978", tween: [ "transform", "${_line}", "scaleY", '1', { fromValue: '2'}], position: 4000, duration: 250 },
            { id: "eid782", tween: [ "style", "${_arrow-to}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
            { id: "eid781", tween: [ "style", "${_arrow-bo}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
            { id: "eid714", tween: [ "style", "${_arrow-to}", "left", '130px', { fromValue: '97.9px'}], position: 2000, duration: 250 }         ]
      }
   }
},
"nav-close": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','9px','32px','32px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [0,'rgba(0,0,0,0.00)','none'],
      type: 'ellipse',
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      transform: [{1:0,0:0},['135deg']],
      rect: ['6px','24px','20px','3px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0, 0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      transform: [{1:0,0:0},['225deg']],
      rect: ['6px','24px','20px','3px','auto','auto'],
      id: 'RectangleCopy',
      stroke: [0,'rgba(0, 0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ellipse}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "top", '9px'],
            ["style", "height", '32px'],
            ["color", "border-color", 'rgba(0,0,0,0.00)'],
            ["style", "left", '0px'],
            ["style", "width", '32px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "rotateZ", '135deg'],
            ["style", "height", '3px'],
            ["style", "top", '24px'],
            ["style", "left", '6px'],
            ["style", "width", '20px']
         ],
         "${_RectangleCopy}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "rotateZ", '225deg'],
            ["style", "height", '3px'],
            ["style", "top", '24px'],
            ["style", "left", '6px'],
            ["style", "width", '20px']
         ],
         "${symbolSelector}": [
            ["style", "height", '49px'],
            ["style", "width", '32px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"nav-enter": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','9px','32px','32px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [0,'rgba(0,0,0,0.00)','none'],
      type: 'ellipse',
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      rect: ['6px','24px','20px','3px','auto','auto'],
      transform: [{1:0,0:0},['135deg']],
      id: 'Rectangle',
      stroke: [0,'rgba(0, 0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['6px','24px','20px','3px','auto','auto'],
      transform: [{1:0,0:0},['225deg']],
      id: 'RectangleCopy',
      stroke: [0,'rgba(0, 0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RectangleCopy}": [
            ["style", "top", '24px'],
            ["transform", "rotateZ", '225deg'],
            ["style", "height", '3px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '6px'],
            ["style", "width", '20px']
         ],
         "${_Rectangle}": [
            ["style", "top", '24px'],
            ["transform", "rotateZ", '135deg'],
            ["style", "height", '3px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '6px'],
            ["style", "width", '20px']
         ],
         "${_Ellipse}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "top", '9px'],
            ["style", "height", '32px'],
            ["color", "border-color", 'rgba(0,0,0,0.00)'],
            ["style", "left", '0px'],
            ["style", "width", '32px']
         ],
         "${symbolSelector}": [
            ["style", "height", '49px'],
            ["style", "width", '32px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"nav-explore": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','64px','32px','auto','auto'],
      borderRadius: ['16px 16px','16px 16px','16px 16px','16px 16px'],
      id: 'RoundRect2',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      type: 'rect',
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      rect: ['0px','8px','64px','16px','auto','auto'],
      font: ['Source Sans Pro, sans-serif',12,'rgba(255,255,255,1.00)','600','none',''],
      id: 'Text',
      text: 'EXPLORE',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '32px'],
            ["style", "width", '64px']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '600'],
            ["style", "left", '0px'],
            ["style", "font-size", '12px'],
            ["style", "top", '8px'],
            ["style", "text-align", 'center'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro, sans-serif'],
            ["style", "width", '64px']
         ],
         "${_RoundRect2}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "border-top-left-radius", [16,16], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [16,16], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [16,16], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '64px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [16,16], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '32px'],
            ["style", "left", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "avnt_canvas");

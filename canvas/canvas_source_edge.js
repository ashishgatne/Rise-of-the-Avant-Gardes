/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['\'Source Sans Pro Local\', sans-serif']='<link rel=\"stylesheet\" type=\"text/css\" href=\"webfonts/SourceSansPro-webfont.css\">';


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
            id:'note-rcc',
            type:'rect',
            rect:['3338px','360px','auto','auto','auto','auto']
         },
         {
            id:'note-fau',
            type:'rect',
            rect:['2057px','845px','auto','auto','auto','auto']
         },
         {
            id:'note-bru',
            type:'rect',
            rect:['2570px','590px','auto','auto','auto','auto']
         },
         {
            id:'note-chs',
            type:'rect',
            rect:['2314px','1613px','auto','auto','auto','auto']
         },
         {
            id:'note-dbr',
            type:'rect',
            rect:['2105px','868px','auto','auto','auto','auto']
         },
         {
            id:'note-pro',
            type:'rect',
            rect:['2826px','1870px','auto','auto','auto','auto']
         },
         {
            id:'note-vkh',
            type:'rect',
            rect:['2826px','1625px','auto','auto','auto','auto']
         },
         {
            id:'note-dwb',
            type:'rect',
            rect:['3336px','837px','auto','auto','auto','auto']
         },
         {
            id:'note-edp',
            type:'rect',
            rect:['1546px','1094','auto','auto','auto','auto']
         },
         {
            id:'note-kod',
            type:'rect',
            rect:['2826px','1094px','auto','auto','auto','auto']
         },
         {
            id:'note-nxr',
            type:'rect',
            rect:['1034px','106px','auto','auto','auto','auto']
         },
         {
            id:'note-csu',
            type:'rect',
            rect:['1800px','361px','auto','auto','auto','auto']
         },
         {
            id:'note-ash',
            type:'rect',
            rect:['2058px','1878px','auto','auto','auto','auto']
         },
         {
            id:'note-tig',
            type:'rect',
            rect:['777px','1101px','auto','auto','auto','auto']
         },
         {
            id:'note-sit',
            type:'rect',
            rect:['568px','1379px','auto','auto','auto','auto']
         },
         {
            id:'noodle-imp-pim',
            type:'rect',
            rect:['2048px','1280px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle imp-pim",
            transform:[[],['-135deg']]
         },
         {
            id:'noodle-pim-cub',
            type:'rect',
            rect:['1792px','1024px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle pim-cub",
            transform:[[],['135deg']]
         },
         {
            id:'noodle-imp-nim',
            type:'rect',
            rect:['2048px','1280px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle imp-nim",
            transform:[[],['135deg']]
         },
         {
            id:'noodle-nim-cub',
            type:'rect',
            rect:['1792px','1536px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle nim-cub",
            transform:[[],['-135deg']]
         },
         {
            id:'noodle-cub-asm',
            type:'rect',
            rect:['1536px','1280px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle cub-asm",
            transform:[[],['-135deg']]
         },
         {
            id:'noodle-asm-dad',
            type:'rect',
            rect:['1280px','1024px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle asm-dad",
            transform:[[],['-45deg']]
         },
         {
            id:'noodle-nim-syn',
            type:'rect',
            rect:['1792px','1536px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle nim-syn",
            transform:[[],['135deg']]
         },
         {
            id:'noodle-syn-prc',
            type:'rect',
            rect:['1536px','1792px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle syn-prc",
            transform:[[],['45deg']]
         },
         {
            id:'noodle-reg-prc',
            type:'rect',
            rect:['2048px','1792px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle reg-prc",
            transform:[[],['135deg']]
         },
         {
            id:'noodle-reg-sre',
            type:'rect',
            rect:['2048px','1792px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle reg-sre",
            transform:[[],['45deg']]
         },
         {
            id:'noodle-asm-coa',
            type:'rect',
            rect:['1280px','1024px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle asm-coa",
            transform:[[],['135deg']]
         },
         {
            id:'noodle-pfa-sva',
            type:'rect',
            rect:['768px','1536px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle pfa-sva",
            transform:[[],['-135deg']]
         },
         {
            id:'noodle-sva-nma',
            type:'rect',
            rect:['512px','1280px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle sva-nma",
            transform:[[],['135deg']]
         },
         {
            id:'noodle-hap-bda',
            type:'rect',
            rect:['1024px','1536px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle hap-bda",
            transform:[[],['135deg']]
         },
         {
            id:'noodle-ins-kin',
            type:'rect',
            rect:['1280px','1792px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle ins-kin",
            transform:[[],['135deg']]
         },
         {
            id:'noodle-flx-hap',
            type:'rect',
            rect:['1280px','1280px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle flx-hap",
            transform:[[],['135deg']]
         },
         {
            id:'noodle-pop-coa',
            type:'rect',
            rect:['768px','1024px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle pop-coa",
            transform:[[],['45deg']]
         },
         {
            id:'noodle-pop-sva',
            type:'rect',
            rect:['768px','1024px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle pop-sva",
            transform:[[],['135deg']]
         },
         {
            id:'noodle-pop-ned',
            type:'rect',
            rect:['768px','1024px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle pop-ned",
            transform:[[],['-45deg']]
         },
         {
            id:'noodle-dad-inf',
            type:'rect',
            rect:['1536px','768px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle dad-inf",
            transform:[[],['-135deg']]
         },
         {
            id:'noodle-inf-nou',
            type:'rect',
            rect:['1280px','512px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle inf-nou",
            transform:[[],['-135deg']]
         },
         {
            id:'noodle-nou-aex',
            type:'rect',
            rect:['1024px','256px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle nou-aex",
            transform:[[],['135deg']]
         },
         {
            id:'noodle-aex-nex',
            type:'rect',
            rect:['768px','512px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle aex-nex",
            transform:[[],['135deg']]
         },
         {
            id:'noodle-aex-ppa',
            type:'rect',
            rect:['768px','512px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle aex-ppa",
            transform:[[],['-135deg']]
         },
         {
            id:'noodle-dad-sur',
            type:'rect',
            rect:['1536px','768px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle dad-sur",
            transform:[[],['-45deg']]
         },
         {
            id:'noodle-fau-sur',
            type:'rect',
            rect:['2048px','768px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle fau-sur",
            transform:[[],['-135deg']]
         },
         {
            id:'noodle-dec-exp',
            type:'rect',
            rect:['2304px','1024px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle dec-exp",
            transform:[[],['-45deg']]
         },
         {
            id:'noodle-exp-fut',
            type:'rect',
            rect:['2560px','768px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle exp-fut",
            transform:[[],['-45deg']]
         },
         {
            id:'noodle-exp-neu',
            type:'rect',
            rect:['2816px','512px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle exp-neu",
            transform:[[],['-45deg']]
         },
         {
            id:'noodle-neu-nre',
            type:'rect',
            rect:['3072px','256px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle neu-nre",
            transform:[[],['45deg']]
         },
         {
            id:'noodle-bau-nre',
            type:'rect',
            rect:['3072px','768px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle bau-nre",
            transform:[[],['-45deg']]
         },
         {
            id:'noodle-exp-sup',
            type:'rect',
            rect:['2560px','768px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle exp-sup",
            transform:[[],['45deg']]
         },
         {
            id:'noodle-sup-bau',
            type:'rect',
            rect:['2816px','1024px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle sup-bau",
            transform:[[],['-45deg']]
         },
         {
            id:'noodle-bau-int',
            type:'rect',
            rect:['3072px','768px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle bau-int",
            transform:[[],['45deg']]
         },
         {
            id:'noodle-int-hit',
            type:'rect',
            rect:['3328px','1024px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle int-hit",
            transform:[[],['45deg']]
         },
         {
            id:'noodle-hit-dec',
            type:'rect',
            rect:['3584px','1280px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle hit-dec",
            transform:[[],['45deg']]
         },
         {
            id:'noodle-sup-min',
            type:'rect',
            rect:['2816px','1024px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle sup-min",
            transform:[[],['45deg']]
         },
         {
            id:'noodle-soc-bru',
            type:'rect',
            rect:['2816px','2048px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle soc-bru",
            transform:[[],['45deg']]
         },
         {
            id:'noodle-pit-nov',
            type:'rect',
            rect:['2304px','512px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle pit-nov",
            transform:[[],['-45deg']]
         },
         {
            id:'noodle-pim-fau',
            type:'rect',
            rect:['1792px','1024px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle pim-fau",
            transform:[[],['-45deg']]
         },
         {
            id:'noodle-pop-hyp',
            type:'rect',
            rect:['768px','1024px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle pop-hyp",
            transform:[[],['180deg']]
         },
         {
            id:'noodle-asm-flx',
            type:'rect',
            rect:['1280px','1024px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle asm-flx",
            transform:[[],['90deg']]
         },
         {
            id:'noodle-pfa-bda',
            type:'rect',
            rect:['768px','1536px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle pfa-bda",
            transform:[[],['90deg']]
         },
         {
            id:'noodle-fut-ray',
            type:'rect',
            rect:['2816px','512px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle fut-ray",
            transform:[[],['90deg']]
         },
         {
            id:'noodle-ray-sup',
            type:'rect',
            rect:['2816px','768px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle ray-sup",
            transform:[[],['90deg']]
         },
         {
            id:'noodle-mir-sup',
            type:'rect',
            rect:['2816px','1280px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle mir-sup",
            transform:[[],['-90deg']]
         },
         {
            id:'noodle-dsj-bau',
            type:'rect',
            rect:['3072px','1024px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle dsj-bau",
            transform:[[],['-90deg']]
         },
         {
            id:'noodle-dsj-int',
            type:'rect',
            rect:['3072px','1024px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle dsj-int"
         },
         {
            id:'noodle-aac-mir',
            type:'rect',
            rect:['2560px','1280px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle aac-mir"
         },
         {
            id:'noodle-flx-coa',
            type:'rect',
            rect:['1280px','1280px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle flx-coa",
            transform:[[],['180deg']]
         },
         {
            id:'noodle-dsj-min',
            type:'rect',
            rect:['3072px','1024px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle dsj-min",
            transform:[[],['90deg']]
         },
         {
            id:'noodle-flx-ins',
            type:'rect',
            rect:['1280px','1280px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle flx-ins",
            transform:[[],['90deg']]
         },
         {
            id:'noodle-ins-eat',
            type:'rect',
            rect:['1280px','1792px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle ins-eat",
            transform:[[],['90deg']]
         },
         {
            id:'noodle-dad-ned',
            type:'rect',
            rect:['1536px','768px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle dad-ned",
            transform:[[],['180deg']]
         },
         {
            id:'noodle-inf-aex',
            type:'rect',
            rect:['1280px','512px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle inf-aex",
            transform:[[],['180deg']]
         },
         {
            id:'noodle-cub-syn',
            type:'rect',
            rect:['1356px','1460px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle cub-syn",
            transform:[[],['90deg']]
         },
         {
            id:'noodle-fut-pit',
            type:'rect',
            rect:['2816px','512px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle fut-pit",
            transform:[[],['180deg']]
         },
         {
            id:'noodle-pit-sur',
            type:'rect',
            rect:['2304px','512px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle pit-sur",
            transform:[[],['-180deg']]
         },
         {
            id:'noodle-bau-opa',
            type:'rect',
            rect:['3072px','768px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle bau-opa"
         },
         {
            id:'noodle-aac-adc',
            type:'rect',
            rect:['2560px','1280px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle aac-adc",
            transform:[[],['90deg']]
         },
         {
            id:'noodle-aac-ano',
            type:'rect',
            rect:['2560px','1280px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle aac-ano",
            transform:[[],['135deg']]
         },
         {
            id:'noodle-ano-adc',
            type:'rect',
            rect:['2304px','1536px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle ano-adc",
            transform:[[],['45deg']]
         },
         {
            id:'noodle-soc-sre',
            type:'rect',
            rect:['2816px','2048px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle soc-sre",
            transform:[[],['180deg']]
         },
         {
            id:'noodle-mir-con',
            type:'rect',
            rect:['2816px','1280px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle mir-con",
            transform:[[],['90deg']]
         },
         {
            id:'noodle-con-soc',
            type:'rect',
            rect:['2816px','1536px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle con-soc",
            transform:[[],['90deg']]
         },
         {
            id:'noodle-imp-reg',
            type:'rect',
            rect:['2048px','1280px','auto','auto','auto','auto'],
            opacity:1,
            userClass:"noodle imp-reg",
            transform:[[],['90deg']]
         },
         {
            id:'noodle-fut-neu',
            type:'rect',
            rect:['2815px','511px','auto','auto','auto','auto'],
            userClass:"noodle fut-neu",
            transform:[[],['-45deg']]
         },
         {
            id:'noodle-hap-pfa',
            type:'rect',
            rect:['1024px','1534px','auto','auto','auto','auto'],
            userClass:"noodle hap-pfa",
            transform:[[],['180deg']]
         },
         {
            id:'noodle-asm-pop',
            type:'rect',
            rect:['1280px','1024px','auto','auto','auto','auto'],
            userClass:"noodle asm-pop",
            transform:[[],['180deg']]
         },
         {
            id:'node-pim',
            type:'rect',
            rect:['1742px','974px','auto','auto','auto','auto'],
            cursor:['pointer'],
            userClass:"node-pim"
         },
         {
            id:'node-nim',
            type:'rect',
            rect:['1742px','1486px','auto','auto','auto','auto'],
            userClass:"node-nim"
         },
         {
            id:'node-coa',
            type:'rect',
            rect:['974px','1230px','auto','auto','auto','auto']
         },
         {
            id:'node-nma',
            type:'rect',
            rect:['206px','1486px','auto','auto','auto','auto']
         },
         {
            id:'node-kin',
            type:'rect',
            rect:['974px','1998px','auto','auto','auto','auto']
         },
         {
            id:'node-eat',
            type:'rect',
            rect:['1230px','2254px','auto','auto','auto','auto']
         },
         {
            id:'node-reg',
            type:'rect',
            rect:['1998px','1742px','auto','auto','auto','auto']
         },
         {
            id:'node-syn',
            type:'rect',
            rect:['1486px','1742px','auto','auto','auto','auto']
         },
         {
            id:'node-ano',
            type:'rect',
            rect:['2254px','1486px','auto','auto','auto','auto']
         },
         {
            id:'node-mir',
            type:'rect',
            rect:['2766px','1230px','auto','auto','auto','auto']
         },
         {
            id:'node-soc',
            type:'rect',
            rect:['2766px','1998px','auto','auto','auto','auto']
         },
         {
            id:'node-neu',
            type:'rect',
            rect:['3022px','206px','auto','auto','auto','auto']
         },
         {
            id:'node-nov',
            type:'rect',
            rect:['2510px','206','auto','auto','auto','auto']
         },
         {
            id:'node-pit',
            type:'rect',
            rect:['2254px','462px','auto','auto','auto','auto']
         },
         {
            id:'node-asm',
            type:'rect',
            rect:['1230px','974px','auto','auto','auto','auto']
         },
         {
            id:'node-sva',
            type:'rect',
            rect:['462px','1230px','auto','auto','auto','auto']
         },
         {
            id:'node-dad',
            type:'rect',
            rect:['1486px','718px','auto','auto','auto','auto']
         },
         {
            id:'node-inf',
            type:'rect',
            rect:['1230px','462px','auto','auto','auto','auto']
         },
         {
            id:'node-fut',
            type:'rect',
            rect:['2766px','462px','auto','auto','auto','auto']
         },
         {
            id:'node-flx',
            type:'rect',
            rect:['1230px','1230px','auto','auto','auto','auto']
         },
         {
            id:'node-hap',
            type:'rect',
            rect:['974px','1486px','auto','auto','auto','auto']
         },
         {
            id:'node-ins',
            type:'rect',
            rect:['1230px','1742','auto','auto','auto','auto']
         },
         {
            id:'node-ray',
            type:'rect',
            rect:['2782px','734px','auto','auto','auto','auto']
         },
         {
            id:'node-hyp',
            type:'rect',
            rect:['478px','990px','auto','auto','auto','auto']
         },
         {
            id:'node-imp',
            type:'rect',
            rect:['1982px','1214px','auto','auto','auto','auto'],
            cursor:['pointer'],
            userClass:"node-imp"
         },
         {
            id:'node-min',
            type:'rect',
            rect:['3006px','1214','auto','auto','auto','auto']
         },
         {
            id:'node-con',
            type:'rect',
            rect:['2750px','1470px','auto','auto','auto','auto']
         },
         {
            id:'node-hit',
            type:'rect',
            rect:['3518px','1214px','auto','auto','auto','auto']
         },
         {
            id:'node-adc',
            type:'rect',
            rect:['2494px','1726px','auto','auto','auto','auto']
         },
         {
            id:'node-dec',
            type:'rect',
            rect:['2238px','958px','auto','auto','auto','auto']
         },
         {
            id:'node-exp',
            type:'rect',
            rect:['2494px','702px','auto','auto','auto','auto']
         },
         {
            id:'node-bau',
            type:'rect',
            rect:['3006px','702','auto','auto','auto','auto']
         },
         {
            id:'node-nre',
            type:'rect',
            rect:['3278px','462px','auto','auto','auto','auto']
         },
         {
            id:'node-dco',
            type:'rect',
            rect:['3790','1486px','auto','auto','auto','auto']
         },
         {
            id:'node-cub',
            type:'rect',
            rect:['1470px','1214px','auto','auto','auto','auto']
         },
         {
            id:'node-pfa',
            type:'rect',
            rect:['702px','1470px','auto','auto','auto','auto']
         },
         {
            id:'node-aac',
            type:'rect',
            rect:['2494px','1214px','auto','auto','auto','auto']
         },
         {
            id:'node-int',
            type:'rect',
            rect:['3262px','958px','auto','auto','auto','auto']
         },
         {
            id:'node-aex',
            type:'rect',
            rect:['702px','446px','auto','auto','auto','auto']
         },
         {
            id:'node-ppa',
            type:'rect',
            rect:['446px','190px','auto','auto','auto','auto']
         },
         {
            id:'node-nex',
            type:'rect',
            rect:['464px','718px','auto','auto','auto','auto']
         },
         {
            id:'node-nou',
            type:'rect',
            rect:['974px','206px','auto','auto','auto','auto']
         },
         {
            id:'node-nda',
            type:'rect',
            rect:['958px','702px','auto','auto','auto','auto']
         },
         {
            id:'node-sur',
            type:'rect',
            rect:['1726px','446px','auto','auto','auto','auto']
         },
         {
            id:'node-pop',
            type:'rect',
            rect:['702px','958px','auto','auto','auto','auto']
         },
         {
            id:'node-fau',
            type:'rect',
            rect:['1982px','702px','auto','auto','auto','auto']
         },
         {
            id:'node-sup',
            type:'rect',
            rect:['2766px','974px','auto','auto','auto','auto']
         },
         {
            id:'node-dej',
            type:'rect',
            rect:['3022px','974px','auto','auto','auto','auto']
         },
         {
            id:'node-opa',
            type:'rect',
            rect:['3534px','718px','auto','auto','auto','auto']
         },
         {
            id:'node-sre',
            type:'rect',
            rect:['2238px','1983px','auto','auto','auto','auto']
         },
         {
            id:'node-prc',
            type:'rect',
            rect:['1742px','1998px','auto','auto','auto','auto']
         },
         {
            id:'node-boa',
            type:'rect',
            rect:['718px','1742px','auto','auto','auto','auto']
         },
         {
            id:'node-bru',
            type:'rect',
            rect:['3022px','2254px','auto','auto','auto','auto']
         },
         {
            id:'overlay',
            type:'rect',
            rect:['0px','0px','4096px','2560px','auto','auto'],
            opacity:1,
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         }],
         symbolInstances: [
         {
            id:'noodle-ano-adc',
            symbolName:'noodle_0362'
         },
         {
            id:'noodle-ins-kin',
            symbolName:'noodle_0362'
         },
         {
            id:'node-con',
            symbolName:'node-con'
         },
         {
            id:'node-bau',
            symbolName:'node-bau'
         },
         {
            id:'node-nim',
            symbolName:'node-nim'
         },
         {
            id:'noodle-bau-opa',
            symbolName:'noodle_0512'
         },
         {
            id:'noodle-dsj-bau',
            symbolName:'noodle_0256'
         },
         {
            id:'node-coa',
            symbolName:'node-coa'
         },
         {
            id:'noodle-inf-nou',
            symbolName:'noodle_0362'
         },
         {
            id:'node-sva',
            symbolName:'node-sva'
         },
         {
            id:'noodle-dsj-min',
            symbolName:'noodle_0256'
         },
         {
            id:'noodle-cub-syn',
            symbolName:'noodle_0512'
         },
         {
            id:'note-dbr',
            symbolName:'note-dbr'
         },
         {
            id:'node-mir',
            symbolName:'node-mir'
         },
         {
            id:'node-ppa',
            symbolName:'node-ppa'
         },
         {
            id:'node-dad',
            symbolName:'node-dad'
         },
         {
            id:'note-rcc',
            symbolName:'note-rcc'
         },
         {
            id:'noodle-pop-ned',
            symbolName:'noodle_0362'
         },
         {
            id:'node-pit',
            symbolName:'node-pit'
         },
         {
            id:'node-sup',
            symbolName:'node-sup'
         },
         {
            id:'noodle-pfa-sva',
            symbolName:'noodle_0362'
         },
         {
            id:'noodle-pit-sur',
            symbolName:'noodle_0512'
         },
         {
            id:'node-dco',
            symbolName:'node-dco'
         },
         {
            id:'noodle-ray-sup',
            symbolName:'noodle_0256'
         },
         {
            id:'node-dec',
            symbolName:'node-dec'
         },
         {
            id:'noodle-pim-fau',
            symbolName:'noodle_0362'
         },
         {
            id:'node-pfa',
            symbolName:'node-pfa'
         },
         {
            id:'noodle-exp-sup',
            symbolName:'noodle_0362'
         },
         {
            id:'noodle-exp-neu',
            symbolName:'noodle_0362'
         },
         {
            id:'noodle-fau-sur',
            symbolName:'noodle_0362'
         },
         {
            id:'node-ins',
            symbolName:'node-ins'
         },
         {
            id:'node-kin',
            symbolName:'node-kin'
         },
         {
            id:'noodle-syn-prc',
            symbolName:'noodle_0362'
         },
         {
            id:'node-nex',
            symbolName:'node-nex'
         },
         {
            id:'node-cub',
            symbolName:'node-cub'
         },
         {
            id:'node-ray',
            symbolName:'node-ray'
         },
         {
            id:'noodle-bau-nre',
            symbolName:'noodle_0362'
         },
         {
            id:'node-exp',
            symbolName:'node-exp'
         },
         {
            id:'noodle-flx-ins',
            symbolName:'noodle_0512'
         },
         {
            id:'noodle-hap-pfa',
            symbolName:'noodle_0256'
         },
         {
            id:'noodle-imp-nim',
            symbolName:'noodle_0362'
         },
         {
            id:'noodle-aac-ano',
            symbolName:'noodle_0362'
         },
         {
            id:'noodle-mir-con',
            symbolName:'noodle_0256'
         },
         {
            id:'noodle-hit-dec',
            symbolName:'noodle_0362'
         },
         {
            id:'noodle-pop-sva',
            symbolName:'noodle_0362'
         },
         {
            id:'noodle-mir-sup',
            symbolName:'noodle_0256'
         },
         {
            id:'noodle-dad-sur',
            symbolName:'noodle_0362'
         },
         {
            id:'noodle-asm-flx',
            symbolName:'noodle_0256'
         },
         {
            id:'noodle-nim-cub',
            symbolName:'noodle_0362'
         },
         {
            id:'note-bru',
            symbolName:'note-bru'
         },
         {
            id:'noodle-sva-nma',
            symbolName:'noodle_0362'
         },
         {
            id:'noodle-aex-ppa',
            symbolName:'noodle_0362'
         },
         {
            id:'node-hit',
            symbolName:'node-hit'
         },
         {
            id:'note-sit',
            symbolName:'note-sit'
         },
         {
            id:'node-inf',
            symbolName:'node-inf'
         },
         {
            id:'node-imp',
            symbolName:'node-imp'
         },
         {
            id:'noodle-neu-nre',
            symbolName:'noodle_0362'
         },
         {
            id:'node-min',
            symbolName:'node-min'
         },
         {
            id:'noodle-cub-asm',
            symbolName:'noodle_0362'
         },
         {
            id:'note-ash',
            symbolName:'note-ash'
         },
         {
            id:'noodle-nim-syn',
            symbolName:'noodle_0362'
         },
         {
            id:'noodle-reg-sre',
            symbolName:'noodle_0362'
         },
         {
            id:'noodle-flx-coa',
            symbolName:'noodle_0256'
         },
         {
            id:'noodle-soc-bru',
            symbolName:'noodle_0362'
         },
         {
            id:'noodle-inf-aex',
            symbolName:'noodle_0512'
         },
         {
            id:'noodle-dad-ned',
            symbolName:'noodle_0512'
         },
         {
            id:'node-nda',
            symbolName:'node-nda'
         },
         {
            id:'noodle-flx-hap',
            symbolName:'noodle_0362'
         },
         {
            id:'node-nma',
            symbolName:'node-nma'
         },
         {
            id:'note-pro',
            symbolName:'note-pro'
         },
         {
            id:'noodle-ins-eat',
            symbolName:'noodle_0512'
         },
         {
            id:'note-chs',
            symbolName:'note-chs'
         },
         {
            id:'node-soc',
            symbolName:'node-soc'
         },
         {
            id:'node-nov',
            symbolName:'node-nov'
         },
         {
            id:'node-eat',
            symbolName:'node-lan'
         },
         {
            id:'noodle-fut-neu',
            symbolName:'noodle_0362'
         },
         {
            id:'noodle-dec-exp',
            symbolName:'noodle_0362'
         },
         {
            id:'note-fau',
            symbolName:'note-fau'
         },
         {
            id:'noodle-reg-prc',
            symbolName:'noodle_0362'
         },
         {
            id:'note-csu',
            symbolName:'note-csu'
         },
         {
            id:'node-bru',
            symbolName:'node-bru'
         },
         {
            id:'noodle-fut-ray',
            symbolName:'noodle_0256'
         },
         {
            id:'node-hyp',
            symbolName:'node-hyp'
         },
         {
            id:'node-fau',
            symbolName:'node-fau'
         },
         {
            id:'node-boa',
            symbolName:'node-boa'
         },
         {
            id:'node-prc',
            symbolName:'node-prc'
         },
         {
            id:'node-sre',
            symbolName:'node-sre'
         },
         {
            id:'noodle-imp-reg',
            symbolName:'noodle_0512'
         },
         {
            id:'noodle-soc-sre',
            symbolName:'noodle_0512'
         },
         {
            id:'node-neu',
            symbolName:'node-neu'
         },
         {
            id:'noodle-fut-pit',
            symbolName:'noodle_0512'
         },
         {
            id:'note-nxr',
            symbolName:'note-nxr'
         },
         {
            id:'node-flx',
            symbolName:'node-flx'
         },
         {
            id:'node-dej',
            symbolName:'node-dej'
         },
         {
            id:'noodle-asm-dad',
            symbolName:'noodle_0362'
         },
         {
            id:'node-pop',
            symbolName:'node-pop'
         },
         {
            id:'noodle-dsj-int',
            symbolName:'noodle_0256'
         },
         {
            id:'note-vkh',
            symbolName:'note-vkh'
         },
         {
            id:'node-reg',
            symbolName:'node-reg'
         },
         {
            id:'noodle-exp-fut',
            symbolName:'noodle_0362'
         },
         {
            id:'node-pim',
            symbolName:'node-pim'
         },
         {
            id:'node-aex',
            symbolName:'node-aex'
         },
         {
            id:'node-nou',
            symbolName:'node-nou'
         },
         {
            id:'node-nre',
            symbolName:'node-nre'
         },
         {
            id:'noodle-hap-bda',
            symbolName:'noodle_0362'
         },
         {
            id:'node-ano',
            symbolName:'node-ano'
         },
         {
            id:'noodle-asm-coa',
            symbolName:'noodle_0362'
         },
         {
            id:'noodle-sup-min',
            symbolName:'noodle_0362'
         },
         {
            id:'node-int',
            symbolName:'node-int'
         },
         {
            id:'noodle-int-hit',
            symbolName:'noodle_0362'
         },
         {
            id:'note-edp',
            symbolName:'note-edp'
         },
         {
            id:'node-aac',
            symbolName:'node-aac'
         },
         {
            id:'noodle-con-soc',
            symbolName:'noodle_0512'
         },
         {
            id:'noodle-sup-bau',
            symbolName:'noodle_0362'
         },
         {
            id:'note-tig',
            symbolName:'note-tig'
         },
         {
            id:'noodle-imp-pim',
            symbolName:'noodle_0362'
         },
         {
            id:'noodle-dad-inf',
            symbolName:'noodle_0362'
         },
         {
            id:'node-adc',
            symbolName:'node-adc'
         },
         {
            id:'note-kod',
            symbolName:'note-kod'
         },
         {
            id:'noodle-pfa-bda',
            symbolName:'noodle_0256'
         },
         {
            id:'node-asm',
            symbolName:'node-asm'
         },
         {
            id:'noodle-pop-coa',
            symbolName:'noodle_0362'
         },
         {
            id:'note-dwb',
            symbolName:'note-dwb'
         },
         {
            id:'noodle-aex-nex',
            symbolName:'noodle_0362'
         },
         {
            id:'node-syn',
            symbolName:'node-syn'
         },
         {
            id:'noodle-nou-aex',
            symbolName:'noodle_0362'
         },
         {
            id:'noodle-aac-mir',
            symbolName:'noodle_0256'
         },
         {
            id:'node-hap',
            symbolName:'node-hap'
         },
         {
            id:'node-fut',
            symbolName:'node-fut'
         },
         {
            id:'noodle-pop-hyp',
            symbolName:'noodle_0256'
         },
         {
            id:'node-opa',
            symbolName:'node-opa'
         },
         {
            id:'node-sur',
            symbolName:'node-sur'
         },
         {
            id:'noodle-asm-pop',
            symbolName:'noodle_0512'
         },
         {
            id:'noodle-bau-int',
            symbolName:'noodle_0362'
         },
         {
            id:'noodle-aac-adc',
            symbolName:'noodle_0512'
         },
         {
            id:'noodle-pit-nov',
            symbolName:'noodle_0362'
         },
         {
            id:'noodle-pim-cub',
            symbolName:'noodle_0362'
         }
         ]
      },
   states: {
      "Base State": {
         "${_noodle-bau-nre}": [
            ["style", "top", '768px'],
            ["transform", "rotateZ", '-45deg'],
            ["style", "opacity", '1'],
            ["style", "left", '3072px'],
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_noodle-aac-mir}": [
            ["style", "top", '1280px'],
            ["style", "opacity", '1'],
            ["style", "left", '2560px']
         ],
         "${_note-rcc}": [
            ["style", "left", '3338px'],
            ["style", "top", '360px']
         ],
         "${_note-fau}": [
            ["style", "left", '2056.66px'],
            ["style", "top", '845px']
         ],
         "${_noodle-reg-sre}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '45deg'],
            ["style", "opacity", '1'],
            ["style", "left", '2048px'],
            ["style", "top", '1792px']
         ],
         "${_noodle-nou-aex}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '135deg'],
            ["style", "opacity", '1'],
            ["style", "left", '1024px'],
            ["style", "top", '256px']
         ],
         "${_noodle-dsj-bau}": [
            ["style", "top", '1024px'],
            ["transform", "rotateZ", '-90deg'],
            ["style", "opacity", '1'],
            ["style", "left", '3072px'],
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_noodle-aex-nex}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '135deg'],
            ["style", "opacity", '1'],
            ["style", "left", '768px'],
            ["style", "top", '512px']
         ],
         "${_noodle-mir-con}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '90deg'],
            ["style", "opacity", '1'],
            ["style", "left", '2816px'],
            ["style", "top", '1280px']
         ],
         "${_node-pop}": [
            ["style", "top", '958px'],
            ["style", "left", '702px']
         ],
         "${_node-nre}": [
            ["style", "top", '462px'],
            ["style", "left", '3278px']
         ],
         "${_artist2}": [
            ["style", "line-height", '24px'],
            ["color", "color", 'rgba(245,245,245,1)'],
            ["style", "font-weight", '300'],
            ["style", "left", '2px'],
            ["style", "font-size", '24px'],
            ["style", "top", '74px'],
            ["style", "right", 'auto'],
            ["style", "height", '24px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '210px'],
            ["style", "font-style", 'normal']
         ],
         "${_node-nda}": [
            ["style", "top", '702px'],
            ["style", "left", '958px']
         ],
         "${_node-nex}": [
            ["style", "top", '718px'],
            ["style", "left", '464px']
         ],
         "${_note-bru}": [
            ["style", "left", '2570px'],
            ["style", "top", '590px']
         ],
         "${_noodle-dad-inf}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '-135deg'],
            ["style", "opacity", '1'],
            ["style", "left", '1536px'],
            ["style", "top", '768px']
         ],
         "${_node-aac}": [
            ["style", "top", '1214px'],
            ["style", "left", '2494px']
         ],
         "${_noodle-hit-dec}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '45deg'],
            ["style", "opacity", '1'],
            ["style", "left", '3584px'],
            ["style", "top", '1280px']
         ],
         "${_noodle-sup-min}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '45deg'],
            ["style", "opacity", '1'],
            ["style", "left", '2816px'],
            ["style", "top", '1024px']
         ],
         "${_node-sva}": [
            ["style", "top", '1230px'],
            ["style", "left", '462px']
         ],
         "${_noodle-hap-pfa}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '1534px'],
            ["style", "left", '1024px'],
            ["transform", "rotateZ", '180deg']
         ],
         "${_node-nim}": [
            ["style", "top", '1486px'],
            ["style", "left", '1742px']
         ],
         "${_noodle-fut-ray}": [
            ["style", "top", '512px'],
            ["transform", "rotateZ", '90deg'],
            ["style", "opacity", '1'],
            ["style", "left", '2816px'],
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_noodle-pim-cub}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '135deg'],
            ["style", "opacity", '1'],
            ["style", "left", '1792px'],
            ["style", "top", '1024px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '4096px'],
            ["style", "height", '2560px'],
            ["style", "overflow", 'hidden']
         ],
         "${_node-prc}": [
            ["style", "top", '1998px'],
            ["style", "left", '1742px']
         ],
         "${_node-hap}": [
            ["style", "top", '1486px'],
            ["style", "left", '974px']
         ],
         "${_noodle-neu-nre}": [
            ["style", "top", '256px'],
            ["transform", "rotateZ", '45deg'],
            ["style", "opacity", '1'],
            ["style", "left", '3072px'],
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_node-bau}": [
            ["style", "left", '3006px']
         ],
         "${_node-ppa}": [
            ["style", "top", '190px'],
            ["style", "left", '446px']
         ],
         "${_noodle-ins-eat}": [
            ["style", "top", '1792px'],
            ["transform", "rotateZ", '90deg'],
            ["style", "opacity", '1'],
            ["style", "left", '1280px'],
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_node-boa}": [
            ["style", "top", '1742px'],
            ["style", "left", '718px']
         ],
         "${_noodle-pim-fau}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '-45deg'],
            ["style", "opacity", '1'],
            ["style", "left", '1792px'],
            ["style", "top", '1024px']
         ],
         "${_node-inf}": [
            ["style", "top", '462px'],
            ["style", "left", '1230px']
         ],
         "${_noodle-soc-bru}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '45deg'],
            ["style", "opacity", '1'],
            ["style", "left", '2816px'],
            ["style", "top", '2048px']
         ],
         "${_noodle-syn-prc}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '45deg'],
            ["style", "opacity", '1'],
            ["style", "left", '1536px'],
            ["style", "top", '1792px']
         ],
         "${_noodle-pfa-sva}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '-135deg'],
            ["style", "opacity", '1'],
            ["style", "left", '768px'],
            ["style", "top", '1536px']
         ],
         "${_node-aex}": [
            ["style", "top", '446px'],
            ["style", "left", '702px']
         ],
         "${_node-syn}": [
            ["style", "top", '1742px'],
            ["style", "left", '1486px']
         ],
         "${_node-soc}": [
            ["style", "top", '1998px'],
            ["style", "left", '2766px']
         ],
         "${_noodle-fut-neu}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '511.39px'],
            ["style", "left", '2815.41px'],
            ["transform", "rotateZ", '-45deg']
         ],
         "${_note-nxr}": [
            ["style", "left", '1034.23px'],
            ["style", "top", '105.86px']
         ],
         "${_node-pit}": [
            ["style", "top", '462px'],
            ["style", "left", '2254px']
         ],
         "${_noodle-asm-dad}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '-45deg'],
            ["style", "opacity", '1'],
            ["style", "left", '1280px'],
            ["style", "top", '1024px']
         ],
         "${_artist3}": [
            ["style", "text-align", '']
         ],
         "${_node-dec}": [
            ["style", "top", '958px'],
            ["style", "left", '2238px']
         ],
         "${_node-hyp}": [
            ["style", "top", '990px'],
            ["style", "left", '478px']
         ],
         "${_noodle-int-hit}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '45deg'],
            ["style", "opacity", '1'],
            ["style", "left", '3328px'],
            ["style", "top", '1024px']
         ],
         "${_node-con}": [
            ["style", "top", '1470px'],
            ["style", "left", '2750px']
         ],
         "${_note-dwb}": [
            ["style", "top", '837px'],
            ["style", "left", '3335.67px']
         ],
         "${_noodle-pop-coa}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '45deg'],
            ["style", "opacity", '1'],
            ["style", "left", '768px'],
            ["style", "top", '1024px']
         ],
         "${_node-sup}": [
            ["style", "top", '974px'],
            ["style", "left", '2766px']
         ],
         "${_note-kod}": [
            ["style", "left", '2826px'],
            ["style", "top", '1094px']
         ],
         "${_note-pro}": [
            ["style", "left", '2826.47px'],
            ["style", "top", '1869.82px']
         ],
         "${_node-dad}": [
            ["style", "top", '718px'],
            ["style", "left", '1486px']
         ],
         "${_node-coa}": [
            ["style", "top", '1230px'],
            ["style", "left", '974px']
         ],
         "${_noodle-bau-int}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '45deg'],
            ["style", "opacity", '1'],
            ["style", "left", '3072px'],
            ["style", "top", '768px']
         ],
         "${_enter}": [
            ["style", "text-align", '']
         ],
         "${_node-sre}": [
            ["style", "top", '1983px'],
            ["style", "left", '2238px']
         ],
         "${_noodle-nim-syn}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '135deg'],
            ["style", "opacity", '1'],
            ["style", "left", '1792px'],
            ["style", "top", '1536px']
         ],
         "${_noodle-asm-pop}": [
            ["style", "top", '1024px'],
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '1280px'],
            ["transform", "rotateZ", '180deg']
         ],
         "${_node-asm}": [
            ["style", "top", '974px'],
            ["style", "left", '1230px']
         ],
         "${_node-fau}": [
            ["style", "top", '702px'],
            ["style", "left", '1982px']
         ],
         "${_node-kin}": [
            ["style", "top", '1998px'],
            ["style", "left", '974px']
         ],
         "${_note-sit}": [
            ["style", "left", '568px'],
            ["style", "top", '1379.26px']
         ],
         "${_node-exp}": [
            ["style", "top", '702px'],
            ["style", "left", '2494px']
         ],
         "${_node-pfa}": [
            ["style", "top", '1470px'],
            ["style", "left", '702px']
         ],
         "${_node-nou}": [
            ["style", "top", '206px'],
            ["style", "left", '974px']
         ],
         "${_noodle-dsj-min}": [
            ["style", "top", '1024px'],
            ["transform", "rotateZ", '90deg'],
            ["style", "opacity", '1'],
            ["style", "left", '3072px'],
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_noodle-pfa-bda}": [
            ["style", "top", '1536px'],
            ["transform", "rotateZ", '90deg'],
            ["style", "opacity", '1'],
            ["style", "left", '768px'],
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_noodle-hap-bda}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '135deg'],
            ["style", "opacity", '1'],
            ["style", "left", '1024px'],
            ["style", "top", '1536px']
         ],
         "${_node-neu}": [
            ["style", "top", '206px'],
            ["style", "left", '3022px']
         ],
         "${_noodle-ano-adc}": [
            ["style", "top", '1536px'],
            ["transform", "rotateZ", '45deg'],
            ["style", "opacity", '1'],
            ["style", "left", '2304px'],
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_node-int}": [
            ["style", "top", '958px'],
            ["style", "left", '3262px']
         ],
         "${_noodle-mir-sup}": [
            ["style", "top", '1280px'],
            ["transform", "rotateZ", '-90deg'],
            ["style", "opacity", '1'],
            ["style", "left", '2816px'],
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_noodle-inf-nou}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '-135deg'],
            ["style", "opacity", '1'],
            ["style", "left", '1280px'],
            ["style", "top", '512px']
         ],
         "${_noodle-imp-reg}": [
            ["style", "top", '1280px'],
            ["transform", "rotateZ", '90deg'],
            ["style", "opacity", '1'],
            ["style", "left", '2048px'],
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_noodle-fut-pit}": [
            ["style", "top", '512px'],
            ["transform", "rotateZ", '180deg'],
            ["style", "opacity", '1'],
            ["style", "left", '2816px'],
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_note-vkh}": [
            ["style", "left", '2826px'],
            ["style", "top", '1625px']
         ],
         "${_noodle-imp-pim}": [
            ["style", "top", '1280px'],
            ["transform", "rotateZ", '-135deg'],
            ["style", "opacity", '1'],
            ["style", "left", '2048px'],
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_node-nma}": [
            ["style", "top", '1486px'],
            ["style", "left", '206px']
         ],
         "${_node-ins}": [
            ["style", "left", '1230px']
         ],
         "${_node-imp}": [
            ["style", "top", '1214px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '1982px']
         ],
         "${_node-mir}": [
            ["style", "top", '1230px'],
            ["style", "left", '2766px']
         ],
         "${_noodle-fau-sur}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '-135deg'],
            ["style", "opacity", '1'],
            ["style", "left", '2048px'],
            ["style", "top", '768px']
         ],
         "${_noodle-asm-flx}": [
            ["style", "top", '1024px'],
            ["transform", "rotateZ", '90deg'],
            ["style", "opacity", '1'],
            ["style", "left", '1280px'],
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_node-adc}": [
            ["style", "top", '1726px'],
            ["style", "left", '2494px']
         ],
         "${_noodle-pop-sva}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '135deg'],
            ["style", "opacity", '1'],
            ["style", "left", '768px'],
            ["style", "top", '1024px']
         ],
         "${_overlay}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "display", 'block'],
            ["style", "height", '2560px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '4096px']
         ],
         "${_node-ray}": [
            ["style", "top", '734px'],
            ["style", "left", '2782px']
         ],
         "${_noodle-nim-cub}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '-135deg'],
            ["style", "opacity", '1'],
            ["style", "left", '1792px'],
            ["style", "top", '1536px']
         ],
         "${_node-opa}": [
            ["style", "top", '718px'],
            ["style", "left", '3534px']
         ],
         "${_noodle-pop-hyp}": [
            ["style", "top", '1024px'],
            ["transform", "rotateZ", '180deg'],
            ["style", "opacity", '1'],
            ["style", "left", '768px'],
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_node-pim}": [
            ["style", "top", '974px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '1742px']
         ],
         "${_noodle-dad-ned}": [
            ["style", "top", '768px'],
            ["transform", "rotateZ", '180deg'],
            ["style", "opacity", '1'],
            ["style", "left", '1536px'],
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_noodle-ray-sup}": [
            ["style", "top", '768px'],
            ["transform", "rotateZ", '90deg'],
            ["style", "opacity", '1'],
            ["style", "left", '2816px'],
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_node-eat}": [
            ["style", "top", '2254px'],
            ["style", "left", '1230px']
         ],
         "${_noodle-con-soc}": [
            ["style", "top", '1536px'],
            ["transform", "rotateZ", '90deg'],
            ["style", "opacity", '1'],
            ["style", "left", '2816px'],
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_node-dco}": [
            ["style", "top", '1486px']
         ],
         "${_noodle-aac-ano}": [
            ["style", "top", '1280px'],
            ["transform", "rotateZ", '135deg'],
            ["style", "opacity", '1'],
            ["style", "left", '2560px'],
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_noodle-pit-nov}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '-45deg'],
            ["style", "opacity", '1'],
            ["style", "left", '2304px'],
            ["style", "top", '512px']
         ],
         "${_node-nov}": [
            ["style", "left", '2510px']
         ],
         "${_node-hit}": [
            ["style", "top", '1214px'],
            ["style", "left", '3518px']
         ],
         "${_node-bru}": [
            ["style", "top", '2254px'],
            ["style", "left", '3022px']
         ],
         "${_noodle-exp-neu}": [
            ["style", "top", '512px'],
            ["transform", "rotateZ", '-45deg'],
            ["style", "opacity", '1'],
            ["style", "left", '2816px'],
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_node-ano}": [
            ["style", "top", '1486px'],
            ["style", "left", '2254px']
         ],
         "${_node-reg}": [
            ["style", "top", '1742px'],
            ["style", "left", '1998px']
         ],
         "${_noodle-dsj-int}": [
            ["style", "top", '1024px'],
            ["style", "opacity", '1'],
            ["style", "left", '3072px']
         ],
         "${_noodle-cub-syn}": [
            ["style", "top", '1460px'],
            ["style", "opacity", '1'],
            ["style", "left", '1356px'],
            ["transform", "rotateZ", '90deg']
         ],
         "${_node-flx}": [
            ["style", "top", '1230px'],
            ["style", "left", '1230px']
         ],
         "${_note-csu}": [
            ["style", "left", '1799.97px'],
            ["style", "top", '361.47px']
         ],
         "${_noodle-exp-sup}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '45deg'],
            ["style", "opacity", '1'],
            ["style", "left", '2560px'],
            ["style", "top", '768px']
         ],
         "${_noodle-asm-coa}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '135deg'],
            ["style", "opacity", '1'],
            ["style", "left", '1280px'],
            ["style", "top", '1024px']
         ],
         "${_noodle-sup-bau}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '-45deg'],
            ["style", "opacity", '1'],
            ["style", "left", '2816px'],
            ["style", "top", '1024px']
         ],
         "${_note-ash}": [
            ["style", "left", '2058px'],
            ["style", "top", '1878px']
         ],
         "${_noodle-pit-sur}": [
            ["style", "top", '512px'],
            ["transform", "rotateZ", '-180deg'],
            ["style", "opacity", '1'],
            ["style", "left", '2304px'],
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_noodle-aex-ppa}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '-135deg'],
            ["style", "opacity", '1'],
            ["style", "left", '768px'],
            ["style", "top", '512px']
         ],
         "${_noodle-sva-nma}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '135deg'],
            ["style", "opacity", '1'],
            ["style", "left", '512px'],
            ["style", "top", '1280px']
         ],
         "${_noodle-reg-prc}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '135deg'],
            ["style", "opacity", '1'],
            ["style", "left", '2048px'],
            ["style", "top", '1792px']
         ],
         "${_node-dej}": [
            ["style", "top", '974px'],
            ["style", "left", '3022px']
         ],
         "${_node-fut}": [
            ["style", "top", '462px'],
            ["style", "left", '2766px']
         ],
         "${_note-tig}": [
            ["style", "left", '777px'],
            ["style", "top", '1101px']
         ],
         "${_noodle-soc-sre}": [
            ["style", "top", '2048px'],
            ["transform", "rotateZ", '180deg'],
            ["style", "opacity", '1'],
            ["style", "left", '2816px'],
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_noodle-cub-asm}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '-135deg'],
            ["style", "opacity", '1'],
            ["style", "left", '1536px'],
            ["style", "top", '1280px']
         ],
         "${_node-min}": [
            ["style", "left", '3006px']
         ],
         "${_noodle-pop-ned}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '-45deg'],
            ["style", "opacity", '1'],
            ["style", "left", '768px'],
            ["style", "top", '1024px']
         ],
         "${_noodle-dec-exp}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '-45deg'],
            ["style", "opacity", '1'],
            ["style", "left", '2304px'],
            ["style", "top", '1024px']
         ],
         "${_noodle-bau-opa}": [
            ["style", "top", '768px'],
            ["style", "opacity", '1'],
            ["style", "left", '3072px']
         ],
         "${_noodle-flx-coa}": [
            ["style", "top", '1280px'],
            ["transform", "rotateZ", '180deg'],
            ["style", "opacity", '1'],
            ["style", "left", '1280px'],
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_node-cub}": [
            ["style", "top", '1214px'],
            ["style", "left", '1470px']
         ],
         "${_note-chs}": [
            ["style", "top", '1613px'],
            ["style", "left", '2314px']
         ],
         "${_noodle-flx-hap}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '135deg'],
            ["style", "opacity", '1'],
            ["style", "left", '1280px'],
            ["style", "top", '1280px']
         ],
         "${_node-sur}": [
            ["style", "top", '446px'],
            ["style", "left", '1726px']
         ],
         "${_note-dbr}": [
            ["style", "left", '2105px'],
            ["style", "top", '868.47px']
         ],
         "${_noodle-inf-aex}": [
            ["style", "top", '512px'],
            ["transform", "rotateZ", '180deg'],
            ["style", "opacity", '1'],
            ["style", "left", '1280px'],
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_noodle-ins-kin}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '135deg'],
            ["style", "opacity", '1'],
            ["style", "left", '1280px'],
            ["style", "top", '1792px']
         ],
         "${_note-edp}": [
            ["style", "left", '1546.45px']
         ],
         "${_noodle-aac-adc}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '90deg'],
            ["style", "opacity", '1'],
            ["style", "left", '2560px'],
            ["style", "top", '1280px']
         ],
         "${_noodle-flx-ins}": [
            ["style", "top", '1280px'],
            ["transform", "rotateZ", '90deg'],
            ["style", "opacity", '1'],
            ["style", "left", '1280px'],
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_noodle-imp-nim}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '135deg'],
            ["style", "opacity", '1'],
            ["style", "left", '2048.39px'],
            ["style", "top", '1280px']
         ],
         "${_noodle-exp-fut}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '-45deg'],
            ["style", "opacity", '1'],
            ["style", "left", '2560px'],
            ["style", "top", '768px']
         ],
         "${_noodle-dad-sur}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '-45deg'],
            ["style", "opacity", '1'],
            ["style", "left", '1536px'],
            ["style", "top", '768px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid4005", tween: [ "style", "${_overlay}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid4003", tween: [ "style", "${_overlay}", "opacity", '0', { fromValue: '1'}], position: 100, duration: 400 }         ]
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
         rect: ['132px','0px','256px','32px','auto','auto'],
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none',''],
         id: 'year',
         text: '1863–90, Paris',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['132px','auto','256px','32px','auto','132px'],
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none',''],
         id: 'name',
         text: 'impressionism',
         align: 'left',
         type: 'text'
      }]
   },
   {
      display: 'none',
      type: 'rect',
      rect: ['-241px','81','auto','auto','auto','auto'],
      id: 'action'
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
      rect: ['0px','51px','132px','30px','auto','auto'],
      font: ['Source Sans Pro Local, sans-serif',16,'rgba(51,51,51,1.00)','400','none',''],
      align: 'center',
      id: 'label',
      opacity: 1,
      text: 'impressionism',
      type: 'text'
   },
   {
      rect: ['0','0','132px','132px','auto','auto'],
      type: 'image',
      id: 'node_imp_128px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_imp_128px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','132px','132px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   {
      id: 'action',
      symbolName: 'action'
   }   ]
   },
   states: {
      "Base State": {
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
            ["style", "opacity", '0.15847729146481']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '124px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "opacity", '1'],
            ["style", "height", '124px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '2px']
         ],
         "${_node_imp_128px}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '132px'],
            ["style", "font-size", '24px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '256px']
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
         "${_action}": [
            ["style", "top", '48px'],
            ["style", "left", '-241px'],
            ["style", "display", 'none']
         ],
         "${_label}": [
            ["style", "line-height", '16px'],
            ["style", "letter-spacing", '0px'],
            ["style", "font-weight", '400'],
            ["style", "width", '132px'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "font-size", '16px'],
            ["style", "top", '58px'],
            ["style", "text-align", 'center'],
            ["transform", "scaleY", '1'],
            ["style", "text-indent", '0px'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["color", "color", 'rgba(51,51,51,1.00)']
         ],
         "${symbolSelector}": [
            ["style", "height", '132px'],
            ["style", "width", '132px']
         ],
         "${_bounds}": [
            ["style", "top", '0px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "left", '0px'],
            ["style", "height", '132px'],
            ["style", "border-width", '0px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '132px']
         ],
         "${_name}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '132px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '132px'],
            ["style", "font-size", '36px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '256px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid511", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeOutElastic" },
            { id: "eid3902", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3700, duration: 0 },
            { id: "eid636", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3665", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid501", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid638", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3664", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid912", tween: [ "style", "${_node_imp_128px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3489", tween: [ "style", "${_node_imp_128px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid635", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3663", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid4064", tween: [ "style", "${_action}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid4065", tween: [ "style", "${_action}", "display", 'none', { fromValue: 'block'}], position: 3700, duration: 0 },
            { id: "eid540", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid654", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid641", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3666", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3667", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid541", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"node-pim": {
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
      rect: ['0px','0px','100px','100px','auto','auto'],
      id: 'people',
      transform: {},
      display: 'none',
      type: 'group',
      c: [
      {
         rect: ['auto','auto','360px','32px','100px','100px'],
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none',''],
         id: 'name',
         text: 'post-impressionism',
         align: 'right',
         type: 'text'
      },
      {
         rect: ['auto','0px','256px','32px','100px','auto'],
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none',''],
         id: 'year',
         text: '1888–1914',
         align: 'right',
         type: 'text'
      }]
   },
   {
      display: 'none',
      type: 'rect',
      rect: ['127px','32px','auto','auto','auto','auto'],
      id: 'action'
   },
   {
      transform: [{},{},{},['0','0']],
      rect: ['2px','2px','92px','92px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'node',
      stroke: [2,'rgba(51,51,51,1.00)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['0px','32px','100px','32px','auto','auto'],
      font: ['Source Sans Pro Local, sans-serif',14,'rgba(0,0,0,1.00)','400','none',''],
      align: 'center',
      id: 'label',
      opacity: 1,
      text: 'post- impress\'ism',
      type: 'text'
   },
   {
      rect: ['0px','0px','100px','100px','auto','auto'],
      type: 'image',
      id: 'node_sym_096px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_pim_096px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','68px','68px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   {
      id: 'action',
      symbolName: 'action'
   }   ]
   },
   states: {
      "Base State": {
         "${_effect}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '88.452830188679px'],
            ["style", "top", '4px'],
            ["style", "opacity", '0.15847729146481'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'none'],
            ["style", "height", '88.452830188679px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '4px']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '92px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "left", '2px'],
            ["style", "height", '92px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '1']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", 'auto'],
            ["style", "font-size", '24px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", '100px'],
            ["style", "width", '256px']
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
         "${_action}": [
            ["style", "top", '32px'],
            ["style", "left", '127px'],
            ["style", "display", 'none']
         ],
         "${_label}": [
            ["style", "line-height", '16px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '0px'],
            ["style", "width", '100px'],
            ["style", "top", '32px'],
            ["style", "font-size", '16px'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '31.6171875px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "opacity", '1']
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
         "${_bounds}": [
            ["style", "top", '0px'],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleY", '1'],
            ["style", "left", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "height", '99.901661835092px'],
            ["style", "border-width", '0px'],
            ["style", "width", '100px']
         ],
         "${_name}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '100px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", 'auto'],
            ["style", "font-size", '36px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", '100px'],
            ["style", "width", '360px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid461", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3870", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3700, duration: 0 },
            { id: "eid474", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid464", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid658", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3624", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid660", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3625", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid4066", tween: [ "style", "${_action}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid4067", tween: [ "style", "${_action}", "display", 'none', { fromValue: 'block'}], position: 3700, duration: 0 },
            { id: "eid664", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid665", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3626", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3627", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid914", tween: [ "style", "${_node_sym_096px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3480", tween: [ "style", "${_node_sym_096px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid656", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3623", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid473", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" }         ]
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
            ["style", "border-top-right-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "rotateZ", '-45deg'],
            ["style", "height", '10px']
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
            ["style", "top", '-0.04px'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'block'],
            ["style", "height", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '0px']
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
            ["transform", "rotateZ", '-135deg'],
            ["style", "border-top-right-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '10px']
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
            { id: "eid678", tween: [ "style", "${_line}", "width", '316px', { fromValue: '0px'}], position: 0, duration: 500, easing: "easeOutQuad" },
            { id: "eid782", tween: [ "style", "${_arrow-to}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
            { id: "eid714", tween: [ "style", "${_arrow-to}", "left", '157.9px', { fromValue: '128px'}], position: 2000, duration: 250 },
            { id: "eid715", tween: [ "style", "${_arrow-bo}", "left", '157.9px', { fromValue: '128px'}], position: 2000, duration: 250 },
            { id: "eid781", tween: [ "style", "${_arrow-bo}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
            { id: "eid725", tween: [ "style", "${_line}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid724", tween: [ "style", "${_line}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 }         ]
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
      rect: ['14px','14px','60px','60px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [2,'rgba(51, 51, 51, 0)','solid'],
      type: 'ellipse',
      fill: ['rgba(51,51,51,1.00)']
   },
   {
      transform: [{1:0,0:0},['135deg']],
      rect: ['20px','30px','24px','4px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0, 0, 0, 0)','solid'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      transform: [{1:0,0:0},['-135deg']],
      rect: ['20px','30px','24px','4px','auto','auto'],
      id: 'RectangleCopy',
      stroke: [0,'rgba(0, 0, 0, 0)','solid'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ellipse}": [
            ["color", "background-color", 'rgba(51,51,51,1.00)'],
            ["style", "top", '14px'],
            ["style", "height", '32px'],
            ["color", "border-color", 'rgba(0,0,0,0.00)'],
            ["style", "left", '14px'],
            ["style", "width", '32px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '30px'],
            ["transform", "rotateZ", '135deg'],
            ["style", "height", '4px'],
            ["style", "left", '20px'],
            ["style", "border-width", '0px'],
            ["style", "width", '24px']
         ],
         "${_RectangleCopy}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '30px'],
            ["transform", "rotateZ", '-135deg'],
            ["style", "height", '4px'],
            ["style", "left", '20px'],
            ["style", "border-width", '0px'],
            ["style", "width", '24px']
         ],
         "${symbolSelector}": [
            ["style", "height", '64px'],
            ["style", "width", '64px']
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
"node-cub": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','132px','132px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['auto','auto','160px','32px','132px','0px'],
         id: 'year',
         text: '1910, Paris',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','']
      },
      {
         type: 'text',
         rect: ['auto','132px','128px','32px','132px','auto'],
         id: 'name',
         text: 'cubism',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','']
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
      type: 'text',
      rect: ['0px','51px','132px','30px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'cubism',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',16,'rgba(51,51,51,1.00)','400','none','']
   },
   {
      rect: ['0','0','132px','132px','auto','auto'],
      type: 'image',
      id: 'node_imp_128px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_cub_128px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','132px','132px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_effect}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '124px'],
            ["style", "top", '2px'],
            ["style", "opacity", '0.15847729146481'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'none'],
            ["style", "height", '124px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "left", '2px'],
            ["style", "cursor", 'pointer']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '124px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "left", '2px'],
            ["style", "height", '124px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '1']
         ],
         "${_node_imp_128px}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '0px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", 'auto'],
            ["style", "font-size", '24px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", '132px'],
            ["style", "width", '160px']
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
         "${_label}": [
            ["style", "line-height", '16px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-size", '16px'],
            ["transform", "scaleX", '1'],
            ["style", "font-weight", '400'],
            ["style", "left", '0px'],
            ["style", "width", '132px'],
            ["style", "top", '58px'],
            ["transform", "scaleY", '1'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "opacity", '1']
         ],
         "${symbolSelector}": [
            ["style", "height", '132px'],
            ["style", "width", '132px']
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
         "${_name}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", 'auto'],
            ["style", "font-size", '36px'],
            ["style", "top", '132px'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", '132px'],
            ["style", "width", '128px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid511", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeOutElastic" },
            { id: "eid3898", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid541", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid501", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid638", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3659", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid912", tween: [ "style", "${_node_imp_128px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3490", tween: [ "style", "${_node_imp_128px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid540", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid654", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid641", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3661", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3662", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid635", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3658", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid636", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3660", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 }         ]
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
      rect: ['2px','2px','92px','92px','auto','auto'],
      display: 'none',
      transform: {},
      fill: ['rgba(255,255,255,0.00)']
   },
   {
      rect: ['0px','0px','100px','100px','auto','auto'],
      id: 'people',
      transform: {},
      display: 'none',
      type: 'group',
      c: [
      {
         rect: ['100px','100px','320px','32px','auto','auto'],
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none',''],
         id: 'name',
         text: 'neo-impressionism',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['100px','auto','256px','32px','auto','0px'],
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none',''],
         id: 'year',
         text: '1882–1907, Paris',
         align: 'left',
         type: 'text'
      }]
   },
   {
      display: 'none',
      type: 'rect',
      rect: ['-227px','30px','auto','auto','auto','auto'],
      id: 'action'
   },
   {
      transform: [{},{},{},['0','0']],
      rect: ['2px','2px','92px','92px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'node',
      stroke: [2,'rgba(51,51,51,1.00)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['0px','32px','100px','32px','auto','auto'],
      font: ['Source Sans Pro Local, sans-serif',14,'rgba(0,0,0,1.00)','400','none',''],
      align: 'center',
      id: 'label',
      opacity: 1,
      text: 'neo- impress\'ism',
      type: 'text'
   },
   {
      rect: ['0px','0px','100px','100px','auto','auto'],
      type: 'image',
      id: 'node_sym_096px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_nim_096px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','68px','68px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   {
      id: 'action',
      symbolName: 'action'
   }   ]
   },
   states: {
      "Base State": {
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
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "height", '88.452830188679px'],
            ["style", "opacity", '0.15847729146481']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '92px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "opacity", '1'],
            ["style", "height", '92px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '2px']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '0px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '100px'],
            ["style", "font-size", '24px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '256px']
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
         "${_action}": [
            ["style", "top", '30px'],
            ["style", "left", '-227px'],
            ["style", "display", 'none']
         ],
         "${_label}": [
            ["style", "line-height", '16px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '0px'],
            ["style", "width", '100px'],
            ["style", "top", '32px'],
            ["style", "opacity", '1'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '31.6171875px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "font-size", '16px']
         ],
         "${symbolSelector}": [
            ["style", "height", '100px'],
            ["style", "width", '100px']
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
         "${_node_sym_096px}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_name}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '100px'],
            ["style", "font-size", '36px'],
            ["style", "top", '100px'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '320px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid461", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3934", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3700, duration: 0 },
            { id: "eid474", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid464", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid658", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3704", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid656", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3703", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid4068", tween: [ "style", "${_action}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid4069", tween: [ "style", "${_action}", "display", 'none', { fromValue: 'block'}], position: 3700, duration: 0 },
            { id: "eid664", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid665", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3706", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3707", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid914", tween: [ "style", "${_node_sym_096px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3497", tween: [ "style", "${_node_sym_096px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid660", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3705", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid473", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"node-asm": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','100px','100px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['auto','auto','192px','32px','100px','100px'],
         id: 'name',
         text: 'assemblage',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','']
      },
      {
         type: 'text',
         rect: ['auto','0px','160px','32px','100px','auto'],
         id: 'year',
         text: '1914',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','']
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
      type: 'text',
      rect: ['0px','42px','100px','16px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'assemblage',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',14,'rgba(0,0,0,1.00)','400','none','']
   },
   {
      rect: ['0px','0px','100px','100px','auto','auto'],
      type: 'image',
      id: 'node_sym_096px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_asm_096px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','68px','68px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_effect}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '88.452830188679px'],
            ["style", "top", '4px'],
            ["style", "opacity", '0.15847729146481'],
            ["transform", "scaleY", '1'],
            ["style", "height", '88.452830188679px'],
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '4px']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '92px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "left", '2px'],
            ["style", "height", '92px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '1']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", 'auto'],
            ["style", "font-size", '24px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", '100px'],
            ["style", "width", '160px']
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
            ["style", "font-weight", '400'],
            ["style", "left", '0px'],
            ["style", "width", '100px'],
            ["style", "top", '42px'],
            ["style", "font-size", '16px'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "opacity", '1']
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
         "${_bounds}": [
            ["style", "top", '0px'],
            ["style", "border-width", '0px'],
            ["transform", "scaleY", '1'],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleX", '1'],
            ["style", "height", '99.901661835092px'],
            ["style", "left", '0px'],
            ["style", "width", '100px']
         ],
         "${_name}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '100px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", 'auto'],
            ["style", "font-size", '36px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '192px'],
            ["style", "right", '100px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid461", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3874", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid660", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3630", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid464", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid658", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3629", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid656", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3628", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid664", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid665", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3631", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3632", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid914", tween: [ "style", "${_node_sym_096px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3479", tween: [ "style", "${_node_sym_096px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid474", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid473", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"node-dad": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','100px','100px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['100px','auto','256px','32px','auto','0px'],
         id: 'year',
         text: '1916–30, Zurich',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','']
      },
      {
         type: 'text',
         rect: ['100px','100px','96px','32px','auto','auto'],
         id: 'name',
         text: 'dada',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','']
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
      type: 'text',
      rect: ['2px','42px','96px','16px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'dada',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',14,'rgba(0,0,0,1.00)','400','none','']
   },
   {
      rect: ['0px','0px','100px','100px','auto','auto'],
      type: 'image',
      id: 'node_sym_096px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_dad_096px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','68px','68px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
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
            ["style", "opacity", '0.15847729146481']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '92px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "opacity", '1'],
            ["style", "height", '92px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '2px']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '0px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '100px'],
            ["style", "font-size", '24px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '256px']
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
            ["style", "font-weight", '400'],
            ["style", "left", '2px'],
            ["style", "width", '96px'],
            ["style", "top", '42px'],
            ["style", "opacity", '1'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "font-size", '16px']
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
         "${_bounds}": [
            ["style", "top", '0px'],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleY", '1'],
            ["style", "left", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "height", '99.901661835092px'],
            ["style", "border-width", '0px'],
            ["style", "width", '100px']
         ],
         "${_name}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '100px'],
            ["style", "font-size", '36px'],
            ["style", "top", '100px'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '96px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid914", tween: [ "style", "${_node_sym_096px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3474", tween: [ "style", "${_node_sym_096px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid474", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid464", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid658", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3574", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid656", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3573", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid664", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid665", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3576", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3577", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid461", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3836", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid660", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3575", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid473", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"node-reg": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','100px','100px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['auto','0px','320px','32px','100px','auto'],
         id: 'year',
         text: '1929, Chicago &amp; New York City',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','']
      },
      {
         type: 'text',
         rect: ['auto','auto','192px','32px','100px','100px'],
         id: 'name',
         text: 'regionalism',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','']
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
      type: 'text',
      rect: ['0px','40px','100px','16px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'regionalism',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',14,'rgba(0,0,0,1.00)','400','none','']
   },
   {
      rect: ['0px','0px','100px','100px','auto','auto'],
      type: 'image',
      id: 'node_sym_096px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_reg_096px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','68px','68px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_effect}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '88.452830188679px'],
            ["style", "top", '4px'],
            ["style", "opacity", '0.15847729146481'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'none'],
            ["style", "height", '88.452830188679px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '4px']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '92px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "left", '2px'],
            ["style", "height", '92px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '1']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", 'auto'],
            ["style", "font-size", '24px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", '100px'],
            ["style", "width", '320px']
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
            ["style", "font-weight", '400'],
            ["style", "left", '0px'],
            ["style", "width", '100px'],
            ["style", "top", '40px'],
            ["style", "font-size", '16px'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "opacity", '1']
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
         "${_name}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '100px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", 'auto'],
            ["style", "font-size", '36px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", '100px'],
            ["style", "width", '192px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid461", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3962", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid660", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3740", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid464", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid658", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3739", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid474", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid664", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid665", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3741", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3742", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid914", tween: [ "style", "${_node_sym_096px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3502", tween: [ "style", "${_node_sym_096px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid656", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3738", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid473", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"node-inf": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','100px','100px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['100px','0px','160px','32px','auto','auto'],
         id: 'year',
         text: '1945, Paris',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','']
      },
      {
         type: 'text',
         rect: ['100px','auto','160px','32px','auto','100px'],
         id: 'name',
         text: 'tachism',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','']
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
      type: 'text',
      rect: ['0px','42px','100px','16px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'tachism',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',14,'rgba(0,0,0,1.00)','400','none','']
   },
   {
      rect: ['0px','0px','100px','100px','auto','auto'],
      type: 'image',
      id: 'node_sym_096px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_inf_096px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','68px','68px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
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
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "height", '88.452830188679px'],
            ["style", "opacity", '0.15847729146481']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '92px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "opacity", '1'],
            ["style", "height", '92px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '2px']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", 'auto'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '100px'],
            ["style", "font-size", '24px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", 'auto'],
            ["style", "width", '160px']
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
            ["style", "font-weight", '400'],
            ["style", "left", '0px'],
            ["style", "width", '100px'],
            ["style", "top", '42px'],
            ["style", "opacity", '1'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "font-size", '16px']
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
         "${_bounds}": [
            ["style", "top", '0px'],
            ["style", "border-width", '0px'],
            ["transform", "scaleY", '1'],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleX", '1'],
            ["style", "height", '99.901661835092px'],
            ["style", "left", '0px'],
            ["style", "width", '100px']
         ],
         "${_name}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '100px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '100px'],
            ["style", "font-size", '36px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", 'auto'],
            ["style", "width", '160px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid914", tween: [ "style", "${_node_sym_096px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3464", tween: [ "style", "${_node_sym_096px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid474", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid464", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid658", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3539", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid656", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3538", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid664", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid665", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3541", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3542", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid461", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3817", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid660", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3540", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid473", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"node-nda": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','132px','132px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['132px','0px','96px','32px','auto','auto'],
         id: 'year',
         text: '1960',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','']
      },
      {
         type: 'text',
         rect: ['132px','auto','160px','32px','auto','132px'],
         id: 'name',
         text: 'neo-dada',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','']
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
      type: 'text',
      rect: ['0px','51px','132px','30px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'neo-dada',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',16,'rgba(51,51,51,1.00)','400','none','']
   },
   {
      rect: ['0','0','132px','132px','auto','auto'],
      type: 'image',
      id: 'node_imp_128px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_ned_128px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','132px','132px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
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
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "height", '124px'],
            ["style", "opacity", '0.15847729146481']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '124px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "opacity", '1'],
            ["style", "height", '124px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '2px']
         ],
         "${_node_imp_128px}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '132px'],
            ["style", "font-size", '24px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '96px']
         ],
         "${_people}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["transform", "scaleY", '1.6'],
            ["style", "height", '132px'],
            ["transform", "scaleX", '1.64'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '132px']
         ],
         "${_label}": [
            ["style", "line-height", '16px'],
            ["style", "letter-spacing", '0px'],
            ["style", "opacity", '1'],
            ["style", "width", '132px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '0px'],
            ["style", "font-size", '16px'],
            ["style", "top", '58px'],
            ["style", "text-align", 'center'],
            ["transform", "scaleY", '1'],
            ["style", "text-indent", '0px'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["transform", "scaleX", '1']
         ],
         "${symbolSelector}": [
            ["style", "height", '132px'],
            ["style", "width", '132px']
         ],
         "${_bounds}": [
            ["style", "top", '0.3px'],
            ["style", "border-width", '0px'],
            ["transform", "scaleY", '1'],
            ["style", "left", '0.2px'],
            ["transform", "scaleX", '1'],
            ["style", "height", '131.87019362232px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '132px']
         ],
         "${_name}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '132px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '132px'],
            ["style", "font-size", '36px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '160px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid511", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeOutElastic" },
            { id: "eid3828", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid635", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3568", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid501", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid638", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3569", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid912", tween: [ "style", "${_node_imp_128px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3475", tween: [ "style", "${_node_imp_128px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid540", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.64'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid654", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid641", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3571", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3572", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid541", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid636", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3570", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 }         ]
      }
   }
},
"node-coa": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','100px','100px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['auto','100px','256px','32px','100px','auto'],
         id: 'name',
         text: 'conceptual art',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','']
      },
      {
         type: 'text',
         rect: ['auto','auto','128px','32px','100px','0px'],
         id: 'year',
         text: '1965',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','']
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
      type: 'text',
      rect: ['0px','36px','100px','32px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'conceptual<br>art',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',14,'rgba(0,0,0,1.00)','400','none','']
   },
   {
      rect: ['0px','0px','100px','100px','auto','auto'],
      type: 'image',
      id: 'node_sym_096px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_coa_096px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','68px','68px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_effect}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '88.452830188679px'],
            ["style", "top", '4px'],
            ["style", "opacity", '0.15847729146481'],
            ["transform", "scaleY", '1'],
            ["style", "height", '88.452830188679px'],
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '4px']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '92px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "left", '2px'],
            ["style", "height", '92px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '1']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '0px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", 'auto'],
            ["style", "font-size", '24px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", '100px'],
            ["style", "width", '128px']
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
            ["style", "font-weight", '400'],
            ["style", "left", '0px'],
            ["style", "width", '100px'],
            ["style", "top", '36px'],
            ["style", "font-size", '16px'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '31.6171875px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "opacity", '1']
         ],
         "${symbolSelector}": [
            ["style", "height", '100px'],
            ["style", "width", '100px']
         ],
         "${_bounds}": [
            ["style", "top", '0px'],
            ["style", "border-width", '0px'],
            ["transform", "scaleY", '1'],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleX", '1'],
            ["style", "height", '99.901661835092px'],
            ["style", "left", '0px'],
            ["style", "width", '100px']
         ],
         "${_node_sym_096px}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_name}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", 'auto'],
            ["style", "font-size", '36px'],
            ["style", "top", '100px'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '256px'],
            ["style", "right", '100px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid461", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3890", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid660", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3650", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid464", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid658", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3649", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid656", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3648", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid664", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid665", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3651", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3652", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid914", tween: [ "style", "${_node_sym_096px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3492", tween: [ "style", "${_node_sym_096px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid474", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid473", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"node-pfa": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','132px','132px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['auto','132px','324px','32px','132px','auto'],
         id: 'name',
         text: 'performance art',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','']
      },
      {
         type: 'text',
         rect: ['auto','auto','256px','32px','132px','0px'],
         id: 'year',
         text: '1965',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','']
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
      type: 'text',
      rect: ['2px','50px','128px','32px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'performance<br>art',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',16,'rgba(51,51,51,1.00)','400','none','']
   },
   {
      rect: ['0','0','132px','132px','auto','auto'],
      type: 'image',
      id: 'node_imp_128px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_pfa_128px.png','0px','0px']
   },
   {
      rect: ['0px','0px','132px','132px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
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
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "height", '124px'],
            ["style", "opacity", '0.15847729146481']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '124px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "opacity", '1'],
            ["style", "height", '124px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '2px']
         ],
         "${_node_imp_128px}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '0px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", 'auto'],
            ["style", "font-size", '24px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", '132px'],
            ["style", "width", '256px']
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
         "${_label}": [
            ["style", "line-height", '16px'],
            ["style", "letter-spacing", '0px'],
            ["style", "opacity", '1'],
            ["style", "width", '128px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '2px'],
            ["style", "font-size", '16px'],
            ["style", "top", '50px'],
            ["style", "text-align", 'center'],
            ["transform", "scaleY", '1'],
            ["style", "text-indent", '0px'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["transform", "scaleX", '1']
         ],
         "${symbolSelector}": [
            ["style", "height", '132px'],
            ["style", "width", '132px']
         ],
         "${_bounds}": [
            ["style", "top", '0.3px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "left", '0.2px'],
            ["style", "height", '131.87019362232px'],
            ["style", "border-width", '0px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '132px']
         ],
         "${_name}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", 'auto'],
            ["style", "font-size", '36px'],
            ["style", "top", '132px'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '324px'],
            ["style", "right", '132px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid511", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeOutElastic" },
            { id: "eid3942", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid541", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid501", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid638", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3714", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid912", tween: [ "style", "${_node_imp_128px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3495", tween: [ "style", "${_node_imp_128px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid654", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid641", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3716", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3717", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid540", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid635", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3713", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid636", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3715", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 }         ]
      }
   }
},
"node-flx": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','100px','100px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['100px','0px','96px','32px','auto','auto'],
         id: 'year',
         text: '1962',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','']
      },
      {
         type: 'text',
         rect: ['100px','auto','128px','32px','auto','100px'],
         id: 'name',
         text: 'fluxus',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','']
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
      type: 'text',
      rect: ['0px','42px','100px','16px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'fluxus',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',14,'rgba(0,0,0,1.00)','400','none','']
   },
   {
      rect: ['0px','0px','100px','100px','auto','auto'],
      type: 'image',
      id: 'node_sym_096px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_flx_096px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','68px','68px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_effect}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '88.452830188679px'],
            ["style", "top", '4px'],
            ["style", "opacity", '0.15847729146481'],
            ["transform", "scaleY", '1'],
            ["style", "height", '88.452830188679px'],
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '4px']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '92px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "left", '2px'],
            ["style", "height", '92px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '1']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", 'auto'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '100px'],
            ["style", "font-size", '24px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '96px']
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
            ["style", "font-weight", '400'],
            ["style", "left", '0px'],
            ["style", "width", '100px'],
            ["style", "top", '42px'],
            ["style", "font-size", '16px'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "opacity", '1']
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
         "${_bounds}": [
            ["style", "top", '0px'],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleY", '1'],
            ["style", "left", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "height", '99.901661835092px'],
            ["style", "border-width", '0px'],
            ["style", "width", '100px']
         ],
         "${_name}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '100px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '100px'],
            ["style", "font-size", '36px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '128px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid461", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3894", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid656", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3653", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid464", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid658", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3654", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid474", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid664", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid665", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3656", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3657", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid914", tween: [ "style", "${_node_sym_096px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3491", tween: [ "style", "${_node_sym_096px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid660", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3655", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid473", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"node-nex": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','100px','100px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['100px','100px','386px','32px','auto','auto'],
         id: 'name',
         text: 'neo-expressionism',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','']
      },
      {
         type: 'text',
         rect: ['100px','auto','256px','32px','auto','0px'],
         id: 'year',
         text: '1986',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','']
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
      type: 'text',
      rect: ['0px','32px','100px','32px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'neo<br>express\'ism',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',14,'rgba(0,0,0,1.00)','400','none','']
   },
   {
      rect: ['0px','0px','100px','100px','auto','auto'],
      type: 'image',
      id: 'node_sym_096px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_nex_096px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','68px','68px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_effect}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '88.452830188679px'],
            ["style", "top", '4px'],
            ["style", "opacity", '0.15847729146481'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'none'],
            ["style", "height", '88.452830188679px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '4px']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '92px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "left", '2px'],
            ["style", "height", '92px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '1']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '0px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '100px'],
            ["style", "font-size", '24px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '256px']
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
            ["style", "font-weight", '400'],
            ["style", "left", '0px'],
            ["style", "width", '100px'],
            ["style", "top", '32px'],
            ["style", "font-size", '16px'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '31.796875px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "opacity", '1']
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
         "${_bounds}": [
            ["style", "top", '0px'],
            ["style", "border-width", '0px'],
            ["transform", "scaleY", '1'],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleX", '1'],
            ["style", "height", '99.901661835092px'],
            ["style", "left", '0px'],
            ["style", "width", '100px']
         ],
         "${_name}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '100px'],
            ["style", "font-size", '36px'],
            ["style", "top", '100px'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '386px'],
            ["style", "right", 'auto']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid461", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3778", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid656", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3563", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid464", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid658", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3564", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid474", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid664", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid665", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3566", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3567", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid914", tween: [ "style", "${_node_sym_096px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3476", tween: [ "style", "${_node_sym_096px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid660", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3565", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid473", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"node-dig": {
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
      rect: ['0px','0px','100px','100px','auto','auto'],
      id: 'people',
      transform: {},
      display: 'none',
      type: 'group',
      c: [
      {
         rect: ['auto','100px','192px','32px','100px','auto'],
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none',''],
         id: 'name',
         text: 'digital art',
         align: 'right',
         type: 'text'
      },
      {
         rect: ['110px','39px','96px','22px','auto','auto'],
         font: ['Source Sans Pro Local, serif',48,'rgba(51,51,51,1.00)','400','none',''],
         id: 'year',
         text: '1972',
         align: 'center',
         type: 'text'
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
      rect: ['0px','34px','100px','32px','auto','auto'],
      font: ['Source Sans Pro Local, sans-serif',14,'rgba(0,0,0,1.00)','600','none',''],
      id: 'label',
      text: 'digital<br>art',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['0px','0px','100px','100px','auto','auto'],
      id: 'node_sym_096px',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/placeholder_096px.png','0px','0px']
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
      rect: ['3px','42px','96px','16px','auto','auto'],
      font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','600','none',''],
      align: 'center',
      id: 'enter',
      text: 'enter',
      display: 'none',
      type: 'text'
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
      rect: ['19px','-74px','auto','auto','auto','auto'],
      id: 'nav-close',
      opacity: 1,
      display: 'none',
      type: 'rect'
   }],
   symbolInstances: [
   {
      id: 'nav-close',
      symbolName: 'nav-close'
   }   ]
   },
   states: {
      "Base State": {
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
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "height", '88.452830188679px'],
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
            ["style", "display", 'none'],
            ["style", "height", '92px'],
            ["color", "border-color", 'rgba(51,51,51,0.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '1']
         ],
         "${_enter}": [
            ["style", "line-height", '16px'],
            ["style", "letter-spacing", '0px'],
            ["style", "opacity", '1'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '600'],
            ["style", "left", '3px'],
            ["style", "width", '96px'],
            ["style", "top", '42px'],
            ["style", "height", '16px'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "font-size", '24px']
         ],
         "${_year}": [
            ["style", "line-height", '12px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '110px'],
            ["style", "font-size", '48px'],
            ["style", "top", '39px'],
            ["style", "text-align", 'center'],
            ["style", "height", '22px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
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
         "${_nav-close}": [
            ["style", "top", '-74px'],
            ["style", "opacity", '0'],
            ["style", "left", '19px'],
            ["style", "display", 'none']
         ],
         "${_label}": [
            ["style", "line-height", '16px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '600'],
            ["style", "left", '0px'],
            ["style", "width", '100px'],
            ["style", "top", '34px'],
            ["style", "opacity", '0'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '31.796875px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "font-size", '16px']
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
         "${_node_act_096px}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_bounds}": [
            ["style", "top", '0px'],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleY", '1'],
            ["style", "left", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "height", '99.901661835092px'],
            ["style", "border-width", '0px'],
            ["style", "width", '100px']
         ],
         "${_name}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", 'auto'],
            ["style", "font-size", '36px'],
            ["style", "top", '100px'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '192px'],
            ["style", "right", '100px']
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
            { id: "eid1937", tween: [ "style", "${_enter}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0 },
            { id: "eid1938", tween: [ "style", "${_enter}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
            { id: "eid474", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 3000, duration: 500, easing: "easeOutBack" },
            { id: "eid1521", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 13000, duration: 500, easing: "easeOutBack" },
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
            { id: "eid1538", tween: [ "transform", "${_bounds}", "scaleY", '1.8', { fromValue: '1'}], position: 3000, duration: 500 },
            { id: "eid1539", tween: [ "transform", "${_bounds}", "scaleY", '1', { fromValue: '1.8'}], position: 6000, duration: 500 },
            { id: "eid461", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid462", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 6250, duration: 0 },
            { id: "eid1522", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0 },
            { id: "eid1667", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
            { id: "eid655", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid656", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4250, duration: 750 },
            { id: "eid1514", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 14250, duration: 750 },
            { id: "eid34", tween: [ "transform", "${_node}", "scaleX", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid125", tween: [ "transform", "${_node}", "scaleX", '0.92', { fromValue: '1'}], position: 8000, duration: 250 },
            { id: "eid290", tween: [ "transform", "${_node}", "scaleX", '1', { fromValue: '0.92'}], position: 9000, duration: 250 },
            { id: "eid1665", tween: [ "style", "${_node_sym_096px}", "opacity", '1', { fromValue: '1'}], position: 13000, duration: 0 },
            { id: "eid1633", tween: [ "style", "${_node_sym_096px}", "opacity", '1', { fromValue: '0'}], position: 16000, duration: 500 },
            { id: "eid1635", tween: [ "style", "${_node_sym_096px}", "opacity", '0', { fromValue: '1'}], position: 17500, duration: 500 },
            { id: "eid659", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid660", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4250, duration: 750 },
            { id: "eid1516", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 14250, duration: 750 },
            { id: "eid131", tween: [ "style", "${_node}", "opacity", '0.041412353515625', { fromValue: '1'}], position: 8000, duration: 250 },
            { id: "eid291", tween: [ "style", "${_node}", "opacity", '1', { fromValue: '0.041412353515625'}], position: 9000, duration: 250 },
            { id: "eid1941", tween: [ "style", "${_node_act_096px}", "opacity", '1', { fromValue: '0'}], position: 11000, duration: 250 },
            { id: "eid1526", tween: [ "style", "${_node_act_096px}", "opacity", '0', { fromValue: '1'}], position: 12000, duration: 250 },
            { id: "eid33", tween: [ "transform", "${_node}", "scaleY", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid127", tween: [ "transform", "${_node}", "scaleY", '0.92', { fromValue: '1'}], position: 8000, duration: 250 },
            { id: "eid292", tween: [ "transform", "${_node}", "scaleY", '1', { fromValue: '0.92'}], position: 9000, duration: 250 },
            { id: "eid473", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 3000, duration: 500, easing: "easeOutBack" },
            { id: "eid1519", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 13000, duration: 500, easing: "easeOutBack" },
            { id: "eid1932", tween: [ "style", "${_nav-close}", "opacity", '1', { fromValue: '0'}], position: 13750, duration: 250 },
            { id: "eid914", tween: [ "style", "${_node_sym_096px}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid915", tween: [ "style", "${_node_sym_096px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid1531", tween: [ "style", "${_node_sym_096px}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0, easing: "easeOutBack" },
            { id: "eid1536", tween: [ "transform", "${_bounds}", "scaleX", '2.9', { fromValue: '1'}], position: 3000, duration: 500 },
            { id: "eid1537", tween: [ "transform", "${_bounds}", "scaleX", '1', { fromValue: '2.9'}], position: 6000, duration: 500 }         ]
      }
   }
},
"node-pop": {
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
      transform: {},
      display: 'none',
      type: 'group',
      id: 'people',
      rect: ['0px','0px','132px','132px','auto','auto'],
      c: [
      {
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none',''],
         type: 'text',
         id: 'name',
         text: 'pop art',
         align: 'right',
         rect: ['auto','auto','128px','32px','132px','132px']
      },
      {
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none',''],
         type: 'text',
         id: 'year',
         text: '1952, London',
         align: 'right',
         rect: ['auto','0px','300px','32px','132px','auto']
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
      font: ['Source Sans Pro Local, sans-serif',16,'rgba(51,51,51,1.00)','400','none',''],
      type: 'text',
      text: 'pop art',
      id: 'label',
      opacity: 1,
      align: 'center',
      rect: ['0px','51px','132px','30px','auto','auto']
   },
   {
      type: 'image',
      rect: ['0','0','132px','132px','auto','auto'],
      id: 'node_imp_128px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_pop_128px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','132px','132px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_effect}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '124px'],
            ["style", "top", '2px'],
            ["style", "opacity", '0.15847729146481'],
            ["transform", "scaleY", '1'],
            ["style", "height", '124px'],
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "left", '2px'],
            ["style", "cursor", 'pointer']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '124px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "left", '2px'],
            ["style", "height", '124px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '1']
         ],
         "${_node_imp_128px}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", 'auto'],
            ["style", "font-size", '24px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", '132px'],
            ["style", "width", '300px']
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
         "${_label}": [
            ["style", "line-height", '16px'],
            ["style", "letter-spacing", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "font-size", '16px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '132px'],
            ["style", "top", '58px'],
            ["transform", "scaleY", '1'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "font-weight", '400']
         ],
         "${symbolSelector}": [
            ["style", "height", '132px'],
            ["style", "width", '132px']
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
         "${_name}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '132px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", 'auto'],
            ["style", "font-size", '36px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", '132px'],
            ["style", "width", '128px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid511", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeOutElastic" },
            { id: "eid3881", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid635", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3633", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid501", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid638", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3634", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid912", tween: [ "style", "${_node_imp_128px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3478", tween: [ "style", "${_node_imp_128px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid540", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid654", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid641", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3636", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3637", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid541", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid636", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3635", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 }         ]
      }
   }
},
"node-aex": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','132px','132px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['132px','auto','256px','32px','auto','0px'],
         id: 'year',
         text: '1946, New York City',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','']
      },
      {
         type: 'text',
         rect: ['132px','132px','420px','32px','auto','auto'],
         id: 'name',
         text: 'abstract expressionism',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','']
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
      type: 'text',
      rect: ['0px','50px','132px','32px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'abstract<br>expressionism',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',16,'rgba(51,51,51,1.00)','400','none','']
   },
   {
      rect: ['0','0','132px','132px','auto','auto'],
      type: 'image',
      id: 'node_imp_128px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_aex_128px.png','0px','0px']
   },
   {
      type: 'ellipse',
      borderRadius: ['50%','50%','50%','50%'],
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      rect: ['0px','0px','132px','132px','auto','auto'],
      transform: {},
      userClass: 'bounds',
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
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
            ["style", "opacity", '0.15847729146481']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '124px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "opacity", '1'],
            ["style", "height", '124px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '2px']
         ],
         "${_node_imp_128px}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '0px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '132px'],
            ["style", "font-size", '24px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '256px']
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
         "${_label}": [
            ["style", "line-height", '16px'],
            ["style", "letter-spacing", '0px'],
            ["style", "font-weight", '400'],
            ["style", "width", '132px'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "font-size", '16px'],
            ["style", "top", '50px'],
            ["style", "text-align", 'center'],
            ["transform", "scaleY", '1'],
            ["style", "text-indent", '0px'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["color", "color", 'rgba(51,51,51,1.00)']
         ],
         "${symbolSelector}": [
            ["style", "height", '132px'],
            ["style", "width", '132px']
         ],
         "${_bounds}": [
            ["style", "top", '0.3px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "left", '0.2px'],
            ["style", "height", '131.87019362232px'],
            ["style", "border-width", '0px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '132px']
         ],
         "${_name}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '132px'],
            ["style", "font-size", '36px'],
            ["style", "top", '132px'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '420px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid511", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeOutElastic" },
            { id: "eid3821", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid636", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3535", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid501", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid638", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3534", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid912", tween: [ "style", "${_node_imp_128px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3463", tween: [ "style", "${_node_imp_128px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid540", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid654", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid641", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3536", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3537", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid635", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3533", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid541", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"node-hyp": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','68px','68px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['auto','auto','256px','32px','68px','68px'],
         id: 'name',
         text: 'hyperrealism',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','']
      },
      {
         type: 'text',
         rect: ['auto','0px','256px','32px','68px','auto'],
         id: 'year',
         text: '1965, United States',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','']
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
      type: 'text',
      rect: ['0px','19px','68px','32px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'hyper<br>realism',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',12,'rgba(51,51,51,1.00)','400','none','']
   },
   {
      rect: ['0px','0px','68px','68px','auto','auto'],
      type: 'image',
      id: 'node_nim_064px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_hyp_064px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','68px','68px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgba(0,0,0,1.00)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_effect}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '60px'],
            ["style", "top", '2px'],
            ["style", "opacity", '0.15847729146481'],
            ["transform", "scaleY", '1'],
            ["style", "height", '60px'],
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '2px']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '58px'],
            ["style", "top", '3px'],
            ["transform", "scaleY", '1'],
            ["style", "opacity", '1'],
            ["style", "height", '58px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '3px']
         ],
         "${_node_nim_064px}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", 'auto'],
            ["style", "width", '256px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", '68px'],
            ["style", "font-size", '24px']
         ],
         "${_people}": [
            ["style", "top", '0px'],
            ["style", "height", '68px'],
            ["transform", "scaleY", '1.6'],
            ["transform", "scaleX", '1.6'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '68px']
         ],
         "${_label}": [
            ["style", "line-height", '14px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '0px'],
            ["style", "width", '68px'],
            ["style", "top", '19px'],
            ["style", "opacity", '1'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "font-size", '16px']
         ],
         "${symbolSelector}": [
            ["style", "height", '68px'],
            ["style", "width", '68px']
         ],
         "${_bounds}": [
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '67.733337402344px'],
            ["color", "border-color", 'rgba(0,0,0,1.00)'],
            ["style", "border-width", '0px'],
            ["style", "width", '67.816650390625px']
         ],
         "${_name}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '68px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", 'auto'],
            ["style", "width", '256px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "font-size", '36px'],
            ["style", "right", '68px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid475", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3882", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid479", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid477", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid669", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3639", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid667", tween: [ "transform", "${_effect}", "scaleX", '2.4', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3638", tween: [ "transform", "${_effect}", "scaleX", '2.4', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid675", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid676", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3641", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3642", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid671", tween: [ "transform", "${_effect}", "scaleY", '2.4', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3640", tween: [ "transform", "${_effect}", "scaleY", '2.4', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid480", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid916", tween: [ "style", "${_node_nim_064px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3477", tween: [ "style", "${_node_nim_064px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 }         ]
      }
   }
},
"node-sur": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','132px','132px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['132px','0px','160px','32px','auto','auto'],
         id: 'year',
         text: '1924, Paris',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','']
      },
      {
         type: 'text',
         rect: ['132px','auto','192px','32px','auto','132px'],
         id: 'name',
         text: 'surrealism',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','']
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
      type: 'text',
      rect: ['0px','51px','132px','30px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'surrealism',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',16,'rgba(51,51,51,1.00)','400','none','']
   },
   {
      rect: ['0','0','132px','132px','auto','auto'],
      type: 'image',
      id: 'node_imp_128px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_sur_128px.png','0px','0px']
   },
   {
      type: 'ellipse',
      borderRadius: ['50%','50%','50%','50%'],
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      rect: ['0px','0px','132px','132px','auto','auto'],
      transform: {},
      userClass: 'bounds',
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_effect}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '124px'],
            ["style", "top", '2px'],
            ["style", "opacity", '0.15847729146481'],
            ["transform", "scaleY", '1'],
            ["style", "height", '124px'],
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "left", '2px'],
            ["style", "cursor", 'pointer']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '124px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "left", '2px'],
            ["style", "height", '124px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '1']
         ],
         "${_node_imp_128px}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '132px'],
            ["style", "font-size", '24px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '160px']
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
         "${_label}": [
            ["style", "line-height", '16px'],
            ["style", "letter-spacing", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "font-size", '16px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '132px'],
            ["style", "top", '58px'],
            ["transform", "scaleY", '1'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "font-weight", '400']
         ],
         "${symbolSelector}": [
            ["style", "height", '132px'],
            ["style", "width", '132px']
         ],
         "${_bounds}": [
            ["style", "top", '0px'],
            ["style", "height", '131.87019362232px'],
            ["transform", "scaleY", '1'],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleX", '1'],
            ["style", "border-width", '0px'],
            ["style", "left", '0.2px'],
            ["style", "width", '132px']
         ],
         "${_name}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '132px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '132px'],
            ["style", "font-size", '36px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '192px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid511", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeOutElastic" },
            { id: "eid3813", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid635", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3543", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid501", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid638", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3544", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid912", tween: [ "style", "${_node_imp_128px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3465", tween: [ "style", "${_node_imp_128px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid540", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid654", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid641", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3546", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3547", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid541", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid636", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3545", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 }         ]
      }
   }
},
"node-fau": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','132px','132px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['132px','0px','256px','32px','auto','auto'],
         id: 'year',
         text: '1904–08, Paris',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','normal']
      },
      {
         type: 'text',
         rect: ['132px','auto','160px','32px','auto','132px'],
         id: 'name',
         text: 'fauvism',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','normal']
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
      type: 'text',
      rect: ['0px','51px','132px','30px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'fauvism',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',16,'rgba(51,51,51,1.00)','400','none','']
   },
   {
      rect: ['0','0','132px','132px','auto','auto'],
      type: 'image',
      id: 'node_imp_128px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_fau_128px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','132px','132px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
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
            ["style", "opacity", '0.15847729146481']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '124px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "opacity", '1'],
            ["style", "height", '124px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '2px']
         ],
         "${_node_imp_128px}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '132px'],
            ["style", "font-size", '24px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'left'],
            ["style", "width", '256px'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", 'auto'],
            ["style", "font-style", 'normal']
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
         "${_label}": [
            ["style", "line-height", '16px'],
            ["style", "letter-spacing", '0px'],
            ["style", "font-weight", '400'],
            ["style", "width", '132px'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "font-size", '16px'],
            ["style", "top", '58px'],
            ["style", "text-align", 'center'],
            ["transform", "scaleY", '1'],
            ["style", "text-indent", '0px'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["color", "color", 'rgba(51,51,51,1.00)']
         ],
         "${symbolSelector}": [
            ["style", "height", '132px'],
            ["style", "width", '132px']
         ],
         "${_bounds}": [
            ["style", "top", '0.3px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "left", '0.2px'],
            ["style", "height", '131.87019362232px'],
            ["style", "border-width", '0px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '132px']
         ],
         "${_name}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '132px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '132px'],
            ["style", "font-size", '36px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '160px'],
            ["style", "font-style", 'normal']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid511", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeOutElastic" },
            { id: "eid3840", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid635", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3578", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid501", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid638", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3579", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid912", tween: [ "style", "${_node_imp_128px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3473", tween: [ "style", "${_node_imp_128px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid540", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid654", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid641", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3581", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3582", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid636", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3580", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid541", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"node-dec": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','132px','132px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['auto','auto','192px','32px','132px','0px'],
         id: 'year',
         text: '1887–1910',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','']
      },
      {
         type: 'text',
         rect: ['auto','132px','192px','32px','132px','auto'],
         id: 'name',
         text: 'decadence',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','']
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
      type: 'text',
      rect: ['0px','51px','132px','16px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'decadence',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',16,'rgba(51,51,51,1.00)','400','none','']
   },
   {
      rect: ['0','0','132px','132px','auto','auto'],
      type: 'image',
      id: 'node_imp_128px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_dec_128px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','132px','132px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_effect}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '124px'],
            ["style", "top", '2px'],
            ["style", "opacity", '0.15847729146481'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'none'],
            ["style", "height", '124px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "left", '2px'],
            ["style", "cursor", 'pointer']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '124px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "left", '2px'],
            ["style", "height", '124px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '1']
         ],
         "${_node_imp_128px}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '0px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", 'auto'],
            ["style", "font-size", '24px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", '132px'],
            ["style", "width", '192.40430954637px']
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
         "${_label}": [
            ["style", "line-height", '16px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-size", '16px'],
            ["transform", "scaleX", '1'],
            ["style", "font-weight", '400'],
            ["style", "left", '0px'],
            ["style", "width", '132px'],
            ["style", "top", '58px'],
            ["transform", "scaleY", '1'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "opacity", '1']
         ],
         "${symbolSelector}": [
            ["style", "height", '132px'],
            ["style", "width", '132px']
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
         "${_name}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", 'auto'],
            ["style", "font-size", '36px'],
            ["style", "top", '132px'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", '132px'],
            ["style", "width", '192px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid511", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeOutElastic" },
            { id: "eid3866", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid635", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3618", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid501", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid638", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3619", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid912", tween: [ "style", "${_node_imp_128px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3481", tween: [ "style", "${_node_imp_128px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid540", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid654", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid641", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3621", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3622", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid541", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid636", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3620", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 }         ]
      }
   }
},
"node-aac": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','132px','132px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['auto','auto','256px','32px','132px','132px'],
         id: 'name',
         text: 'arts and crafts',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','800','none','']
      },
      {
         type: 'text',
         rect: ['auto','0px','256px','32px','132px','auto'],
         id: 'year',
         text: '1881–1914, England',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','']
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
      type: 'text',
      rect: ['0px','50px','132px','32px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'art and<br>crafts',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',16,'rgba(51,51,51,1.00)','400','none','']
   },
   {
      rect: ['0','0','132px','132px','auto','auto'],
      type: 'image',
      id: 'node_imp_128px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_aac_128px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','132px','132px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_effect}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '124px'],
            ["style", "top", '2px'],
            ["style", "opacity", '0.15847729146481'],
            ["transform", "scaleY", '1'],
            ["style", "height", '124px'],
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "left", '2px'],
            ["style", "cursor", 'pointer']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '124px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "left", '2px'],
            ["style", "height", '124px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '1']
         ],
         "${_node_imp_128px}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", 'auto'],
            ["style", "font-size", '24px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", '132px'],
            ["style", "width", '256px']
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
         "${_label}": [
            ["style", "line-height", '16px'],
            ["style", "letter-spacing", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "font-size", '16px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '132px'],
            ["style", "top", '50px'],
            ["transform", "scaleY", '1'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "font-weight", '400']
         ],
         "${symbolSelector}": [
            ["style", "height", '132px'],
            ["style", "width", '132px']
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
         "${_name}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '132px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '800'],
            ["style", "left", 'auto'],
            ["style", "font-size", '36px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", '132px'],
            ["style", "width", '256px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid511", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeOutElastic" },
            { id: "eid3906", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid636", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3670", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid501", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid638", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3669", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid912", tween: [ "style", "${_node_imp_128px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3488", tween: [ "style", "${_node_imp_128px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid540", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid654", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid641", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3671", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3672", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid541", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid635", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3668", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 }         ]
      }
   }
},
"node-exp": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','132px','132px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['auto','auto','256px','32px','132px','132px'],
         id: 'name',
         text: 'expressionism',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','']
      },
      {
         type: 'text',
         rect: ['auto','0px','256px','32px','132px','auto'],
         id: 'year',
         text: '1905–30, Berlin',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','']
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
      type: 'text',
      rect: ['0px','51px','132px','30px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'expressionism',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',16,'rgba(51,51,51,1.00)','400','none','']
   },
   {
      rect: ['0','0','132px','132px','auto','auto'],
      type: 'image',
      id: 'node_imp_128px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_exp_128px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','132px','132px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_effect}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '124px'],
            ["style", "top", '2px'],
            ["style", "opacity", '0.15847729146481'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'none'],
            ["style", "height", '124px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "left", '2px'],
            ["style", "cursor", 'pointer']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '124px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "left", '2px'],
            ["style", "height", '124px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '1']
         ],
         "${_node_imp_128px}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", 'auto'],
            ["style", "font-size", '24px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", '132px'],
            ["style", "width", '256px']
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
         "${_label}": [
            ["style", "line-height", '16px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-size", '16px'],
            ["transform", "scaleX", '1'],
            ["style", "font-weight", '400'],
            ["style", "left", '0px'],
            ["style", "width", '132px'],
            ["style", "top", '58px'],
            ["transform", "scaleY", '1'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "opacity", '1']
         ],
         "${symbolSelector}": [
            ["style", "height", '132px'],
            ["style", "width", '132px']
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
         "${_name}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '132px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", 'auto'],
            ["style", "font-size", '36px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '256px'],
            ["style", "right", '132px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid511", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeOutElastic" },
            { id: "eid3841", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid635", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3583", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid501", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid638", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3584", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid912", tween: [ "style", "${_node_imp_128px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3472", tween: [ "style", "${_node_imp_128px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid540", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid654", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid641", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3586", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3587", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid636", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3585", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid541", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"node-fut": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','100px','100px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['auto','0px','256px','32px','100px','auto'],
         id: 'year',
         text: '1909–1916, Italy',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','']
      },
      {
         type: 'text',
         rect: ['auto','auto','160px','32px','100px','100px'],
         id: 'name',
         text: 'futurism',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','']
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
      type: 'text',
      rect: ['0px','42px','100px','16px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'futurism',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',14,'rgba(0,0,0,1.00)','400','none','']
   },
   {
      rect: ['0px','0px','100px','100px','auto','auto'],
      type: 'image',
      id: 'node_sym_096px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_fut_096px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','68px','68px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_effect}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '88.452830188679px'],
            ["style", "top", '4px'],
            ["style", "opacity", '0.15847729146481'],
            ["transform", "scaleY", '1'],
            ["style", "height", '88.452830188679px'],
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '4px']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '92px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "left", '2px'],
            ["style", "height", '92px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '1']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", 'auto'],
            ["style", "font-size", '24px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", '100px'],
            ["style", "width", '256px']
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
            ["style", "font-weight", '400'],
            ["style", "left", '0px'],
            ["style", "width", '100px'],
            ["style", "top", '42px'],
            ["style", "font-size", '16px'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "opacity", '1']
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
         "${_bounds}": [
            ["style", "top", '0px'],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleY", '1'],
            ["style", "left", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "height", '99.901661835092px'],
            ["style", "border-width", '0px'],
            ["style", "width", '100px']
         ],
         "${_name}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '100px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", 'auto'],
            ["style", "font-size", '36px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", '100px'],
            ["style", "width", '160px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid914", tween: [ "style", "${_node_sym_096px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3467", tween: [ "style", "${_node_sym_096px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid656", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3553", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid464", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid658", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3554", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid660", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3555", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid664", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid665", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3556", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3557", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid461", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3804", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid474", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid473", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"node-syn": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','100px','100px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['auto','0px','256px','32px','100px','auto'],
         id: 'year',
         text: 'United States',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','']
      },
      {
         type: 'text',
         rect: ['auto','auto','224px','32px','100px','100px'],
         id: 'name',
         text: 'synchromism',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','']
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
      type: 'text',
      rect: ['0px','40px','100px','16px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'synchromism',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',14,'rgba(0,0,0,1.00)','400','none','']
   },
   {
      rect: ['0px','0px','100px','100px','auto','auto'],
      type: 'image',
      id: 'node_sym_096px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_syn_096px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','68px','68px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
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
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "height", '88.452830188679px'],
            ["style", "opacity", '0.15847729146481']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '92px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "opacity", '1'],
            ["style", "height", '92px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '2px']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", 'auto'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", 'auto'],
            ["style", "font-size", '24px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", '100px'],
            ["style", "width", '256px']
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
            ["style", "font-weight", '400'],
            ["style", "left", '0px'],
            ["style", "width", '100px'],
            ["style", "top", '40px'],
            ["style", "opacity", '1'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "font-size", '16px']
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
         "${_bounds}": [
            ["style", "top", '0px'],
            ["style", "border-width", '0px'],
            ["transform", "scaleY", '1'],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleX", '1'],
            ["style", "height", '99.901661835092px'],
            ["style", "left", '0px'],
            ["style", "width", '100px']
         ],
         "${_name}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '100px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", 'auto'],
            ["style", "font-size", '36px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", '100px'],
            ["style", "width", '224px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid914", tween: [ "style", "${_node_sym_096px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3503", tween: [ "style", "${_node_sym_096px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid474", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid464", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid658", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3734", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid656", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3733", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid664", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid665", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3736", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3737", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid461", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3958", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid660", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3735", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid473", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"node-sup": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','100px','100px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['auto','100px','224px','32px','100px','auto'],
         id: 'name',
         text: 'suprematism',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','']
      },
      {
         type: 'text',
         rect: ['auto','auto','256px','32px','100px','0px'],
         id: 'year',
         text: '1915–34, Moscow',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','']
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
      type: 'text',
      rect: ['0px','40px','100px','16px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'suprematism',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',14,'rgba(0,0,0,1.00)','400','none','']
   },
   {
      rect: ['0px','0px','100px','100px','auto','auto'],
      type: 'image',
      id: 'node_sym_096px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_sup_096px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','68px','68px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
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
            ["style", "opacity", '0.15847729146481']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '92px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "opacity", '1'],
            ["style", "height", '92px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '2px']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '0px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", 'auto'],
            ["style", "font-size", '24px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", '100px'],
            ["style", "width", '256px']
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
            ["style", "font-weight", '400'],
            ["style", "left", '0px'],
            ["style", "width", '100px'],
            ["style", "top", '40px'],
            ["style", "opacity", '1'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "font-size", '16px']
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
         "${_name}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", 'auto'],
            ["style", "font-size", '36px'],
            ["style", "top", '100px'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '224px'],
            ["style", "right", '100px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid461", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3861", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3881, duration: 0 },
            { id: "eid660", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3615", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid464", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid658", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3614", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid656", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3613", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid664", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid665", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3616", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3617", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid914", tween: [ "style", "${_node_sym_096px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3482", tween: [ "style", "${_node_sym_096px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid474", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid473", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"node-icon": {
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
         rect: ['-104px','-12px','96px','16px','auto','auto'],
         font: ['Source Sans Pro Local, sans-serif',18,'rgba(51,51,51,1.00)','300','none',''],
         id: 'artist7',
         text: 'Artist',
         align: 'right',
         type: 'text'
      },
      {
         rect: ['-132px','58px','96px','16px','auto','auto'],
         font: ['Source Sans Pro Local, sans-serif',18,'rgba(51,51,51,1.00)','300','none',''],
         id: 'artist6',
         text: 'Artist',
         align: 'right',
         type: 'text'
      },
      {
         rect: ['-104px','128px','96px','16px','auto','auto'],
         font: ['Source Sans Pro Local, sans-serif',18,'rgba(51,51,51,1.00)','300','none',''],
         id: 'artist5',
         text: 'Artist',
         align: 'right',
         type: 'text'
      },
      {
         rect: ['18px','168px','96px','16px','auto','auto'],
         font: ['Source Sans Pro Local, sans-serif',18,'rgba(51,51,51,1.00)','300','none',''],
         id: 'artist4',
         text: 'Artist',
         align: 'center',
         type: 'text'
      },
      {
         rect: ['140px','128px','96px','16px','auto','auto'],
         font: ['Source Sans Pro Local, sans-serif',18,'rgba(51,51,51,1.00)','300','none',''],
         id: 'artist3',
         text: 'Artist',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['168px','58px','96px','16px','auto','auto'],
         font: ['Source Sans Pro Local, sans-serif',18,'rgba(51,51,51,1.00)','300','none',''],
         id: 'artist2',
         text: 'Artist',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['140px','-12px','96px','16px','auto','auto'],
         font: ['Source Sans Pro Local, sans-serif',18,'rgba(51,51,51,1.00)','300','none',''],
         id: 'artist1',
         text: 'Artist',
         align: 'left',
         type: 'text'
      },
      {
         rect: ['18px','-52px','96px','16px','auto','auto'],
         font: ['Source Sans Pro Local, sans-serif',18,'rgba(51,51,51,1.00)','300','none',''],
         id: 'artist0',
         text: 'Artist',
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
      rect: ['0px','0px','132px','132px','auto','auto'],
      fill: ['rgba(0,0,0,0)','img/node_act_128px.png','0px','0px']
   },
   {
      rect: ['2px','51px','128px','30px','auto','auto'],
      font: ['Source Sans Pro Local, sans-serif',16,'rgba(51,51,51,1.00)','600','none',''],
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
      fill: ['rgba(0,0,0,0)','img/placeholder_128px.png','0px','0px']
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
      rect: ['2px','51px','128px','16px','auto','auto'],
      font: ['Source Sans Pro Local, sans-serif',24,'rgba(0,0,0,1.00)','600','none',''],
      display: 'none',
      align: 'center',
      id: 'enter',
      text: 'enter',
      textShadow: ['rgba(255,255,255,1.00)',0,0,4],
      type: 'text'
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
      type: 'rect',
      display: 'none',
      opacity: 1,
      id: 'nav-close',
      rect: ['184px','-77px','auto','auto','auto','auto']
   },
   {
      font: ['Source Sans Pro Local, serif',48,'rgba(51,51,51,1.00)','900','none','normal'],
      rect: ['6px','34px','120px','64px','auto','auto'],
      transform: {},
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
            ["style", "display", 'none'],
            ["style", "height", '124px'],
            ["color", "border-color", 'rgba(51,51,51,0.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '2px']
         ],
         "${_artist5}": [
            ["style", "line-height", '12px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '-104px'],
            ["style", "font-size", '18px'],
            ["style", "top", '128px'],
            ["style", "text-align", 'right'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '96px']
         ],
         "${_artist1}": [
            ["style", "line-height", '12px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '140px'],
            ["style", "font-size", '18px'],
            ["style", "top", '-12px'],
            ["style", "text-align", 'left'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '96px']
         ],
         "${__1872}": [
            ["style", "line-height", '64px'],
            ["style", "font-weight", '900'],
            ["style", "text-align", 'center'],
            ["transform", "scaleX", '0'],
            ["style", "opacity", '0'],
            ["style", "left", '6px'],
            ["style", "font-size", '48px'],
            ["style", "top", '34px'],
            ["style", "display", 'none'],
            ["transform", "scaleY", '0'],
            ["style", "height", '64px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '120px'],
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
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '96px']
         ],
         "${_nav-close}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '170px'],
            ["style", "top", '-79px']
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
            ["style", "display", 'none'],
            ["style", "height", '124px'],
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
         "${_enter}": [
            ["style", "line-height", '16px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["subproperty", "textShadow.offsetV", '0px'],
            ["style", "left", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "word-spacing", '0px'],
            ["subproperty", "textShadow.blur", '4px'],
            ["subproperty", "textShadow.offsetH", '0px'],
            ["style", "opacity", '1'],
            ["transform", "scaleX", '1'],
            ["style", "letter-spacing", '0px'],
            ["subproperty", "textShadow.color", 'rgba(255,255,255,1.00)'],
            ["style", "font-size", '24px'],
            ["style", "top", '58px'],
            ["style", "display", 'none'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "font-weight", '600'],
            ["style", "width", '128px']
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
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
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
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-size", '16px'],
            ["transform", "scaleX", '1'],
            ["style", "font-weight", '600'],
            ["style", "left", '2px'],
            ["style", "width", '128px'],
            ["style", "top", '58px'],
            ["transform", "scaleY", '1'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
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
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '96px']
         ],
         "${_artist7}": [
            ["style", "line-height", '12px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '-104px'],
            ["style", "font-size", '18px'],
            ["style", "top", '-12px'],
            ["style", "text-align", 'right'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
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
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '96px']
         ],
         "${_artist3}": [
            ["style", "line-height", '12px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '140px'],
            ["style", "font-size", '18px'],
            ["style", "top", '128px'],
            ["style", "text-align", 'left'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '96px']
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
            { id: "eid1921", tween: [ "style", "${_enter}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0 },
            { id: "eid1922", tween: [ "style", "${_enter}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
            { id: "eid1914", tween: [ "style", "${_nav-close}", "opacity", '1', { fromValue: '0'}], position: 13000, duration: 500 },
            { id: "eid1653", tween: [ "style", "${_node_imp_128px}", "opacity", '1', { fromValue: '1'}], position: 13000, duration: 0 },
            { id: "eid1624", tween: [ "style", "${_node_imp_128px}", "opacity", '1', { fromValue: '0'}], position: 16000, duration: 500 },
            { id: "eid1626", tween: [ "style", "${_node_imp_128px}", "opacity", '0', { fromValue: '1'}], position: 17500, duration: 500 },
            { id: "eid501", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 250 },
            { id: "eid543", tween: [ "style", "${_people}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 250 },
            { id: "eid1480", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 13000, duration: 250 },
            { id: "eid1471", tween: [ "style", "${_node_act_128px}", "opacity", '1', { fromValue: '0.000000'}], position: 11000, duration: 250 },
            { id: "eid1473", tween: [ "style", "${_node_act_128px}", "opacity", '0', { fromValue: '1'}], position: 12000, duration: 250 },
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
            { id: "eid577", tween: [ "transform", "${_bounds}", "scaleY", '1.8', { fromValue: '1'}], position: 3000, duration: 500 },
            { id: "eid828", tween: [ "transform", "${_bounds}", "scaleY", '1', { fromValue: '1.8'}], position: 6000, duration: 500 },
            { id: "eid511", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0, easing: "easeOutElastic" },
            { id: "eid520", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 6250, duration: 0, easing: "easeOutElastic" },
            { id: "eid1482", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0, easing: "easeOutElastic" },
            { id: "eid1620", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0, easing: "easeOutBack" },
            { id: "eid644", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid635", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 1000 },
            { id: "eid1474", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 14000, duration: 1000 },
            { id: "eid1829", tween: [ "style", "${_nav-touch}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
            { id: "eid1830", tween: [ "style", "${_nav-touch}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
            { id: "eid34", tween: [ "transform", "${_node}", "scaleX", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid125", tween: [ "transform", "${_node}", "scaleX", '0.92', { fromValue: '1'}], position: 8000, duration: 250 },
            { id: "eid309", tween: [ "transform", "${_node}", "scaleX", '1', { fromValue: '0.92'}], position: 9000, duration: 250 },
            { id: "eid1722", tween: [ "style", "${__1872}", "opacity", '1', { fromValue: '0.000000'}], position: 500, duration: 200 },
            { id: "eid541", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 3000, duration: 500, easing: "easeOutBack" },
            { id: "eid1481", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 13000, duration: 500, easing: "easeOutBack" },
            { id: "eid1910", tween: [ "style", "${__1872}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid131", tween: [ "style", "${_node}", "opacity", '0.041412353515625', { fromValue: '1'}], position: 8000, duration: 250 },
            { id: "eid310", tween: [ "style", "${_node}", "opacity", '1', { fromValue: '0.041412353515625'}], position: 9000, duration: 250 },
            { id: "eid33", tween: [ "transform", "${_node}", "scaleY", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid127", tween: [ "transform", "${_node}", "scaleY", '0.92', { fromValue: '1'}], position: 8000, duration: 250 },
            { id: "eid311", tween: [ "transform", "${_node}", "scaleY", '1', { fromValue: '0.92'}], position: 9000, duration: 250 },
            { id: "eid646", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid636", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 1000 },
            { id: "eid1476", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 14000, duration: 1000 },
            { id: "eid1783", tween: [ "transform", "${__1872}", "scaleY", '1', { fromValue: '0'}], position: 500, duration: 200 },
            { id: "eid1727", tween: [ "transform", "${__1872}", "scaleY", '0', { fromValue: '1'}], position: 1500, duration: 100 },
            { id: "eid540", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 3000, duration: 500, easing: "easeOutBack" },
            { id: "eid1479", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 13000, duration: 500, easing: "easeOutBack" },
            { id: "eid20", tween: [ "style", "${_label}", "opacity", '1', { fromValue: '0.000000'}], position: 1500, duration: 100 },
            { id: "eid129", tween: [ "style", "${_label}", "opacity", '0', { fromValue: '1'}], position: 8000, duration: 250 },
            { id: "eid312", tween: [ "style", "${_label}", "opacity", '1', { fromValue: '0'}], position: 9000, duration: 250 },
            { id: "eid575", tween: [ "transform", "${_bounds}", "scaleX", '2.8', { fromValue: '1'}], position: 3000, duration: 500 },
            { id: "eid830", tween: [ "transform", "${_bounds}", "scaleX", '1', { fromValue: '2.8'}], position: 6000, duration: 500 },
            { id: "eid1782", tween: [ "transform", "${__1872}", "scaleX", '1', { fromValue: '0'}], position: 500, duration: 200 },
            { id: "eid1726", tween: [ "transform", "${__1872}", "scaleX", '0', { fromValue: '1'}], position: 1500, duration: 100 }         ]
      }
   }
},
"node-min": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','132px','132px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['132px','auto','96px','32px','auto','0px'],
         id: 'year',
         text: '1966',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','']
      },
      {
         type: 'text',
         rect: ['132px','132px','224px','32px','auto','auto'],
         id: 'name',
         text: 'minimalism',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','']
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
      type: 'text',
      rect: ['0px','51px','132px','30px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'minimalism',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',16,'rgba(51,51,51,1.00)','400','none','']
   },
   {
      rect: ['0','0','132px','132px','auto','auto'],
      type: 'image',
      id: 'node_imp_128px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_min_128px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','132px','132px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
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
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "height", '124px'],
            ["style", "opacity", '0.15847729146481']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '124px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "opacity", '1'],
            ["style", "height", '124px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '2px']
         ],
         "${_node_imp_128px}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '0px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '132px'],
            ["style", "font-size", '24px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
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
         "${_label}": [
            ["style", "line-height", '16px'],
            ["style", "letter-spacing", '0px'],
            ["style", "opacity", '1'],
            ["style", "width", '132px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '0px'],
            ["style", "font-size", '16px'],
            ["style", "top", '58px'],
            ["style", "text-align", 'center'],
            ["transform", "scaleY", '1'],
            ["style", "text-indent", '0px'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["transform", "scaleX", '1']
         ],
         "${symbolSelector}": [
            ["style", "height", '132px'],
            ["style", "width", '132px']
         ],
         "${_bounds}": [
            ["style", "top", '0.3px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "left", '0.2px'],
            ["style", "height", '131.87019362232px'],
            ["style", "border-width", '0px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '132px']
         ],
         "${_name}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '132px'],
            ["style", "font-size", '36px'],
            ["style", "top", '132px'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '224px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid511", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeOutElastic" },
            { id: "eid3917", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid635", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3678", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid501", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid638", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3679", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid912", tween: [ "style", "${_node_imp_128px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3486", tween: [ "style", "${_node_imp_128px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid540", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid654", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid641", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3681", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3682", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid541", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid636", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3680", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 }         ]
      }
   }
},
"node-adc": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','132px','132px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['132px','auto','160px','32px','auto','132px'],
         id: 'name',
         text: 'art deco',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','']
      },
      {
         type: 'text',
         rect: ['132px','0px','320px','32px','auto','auto'],
         id: 'year',
         text: '1924, Paris &amp; New York City',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','']
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
      type: 'text',
      rect: ['0px','51px','132px','30px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'art deco',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',16,'rgba(51,51,51,1.00)','400','none','']
   },
   {
      rect: ['0','0','132px','132px','auto','auto'],
      type: 'image',
      id: 'node_imp_128px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_adc_128px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','132px','132px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
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
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "height", '124px'],
            ["style", "opacity", '0.15847729146481']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '124px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "opacity", '1'],
            ["style", "height", '124px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '2px']
         ],
         "${_node_imp_128px}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '132px'],
            ["style", "font-size", '24px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '320px']
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
         "${_label}": [
            ["style", "line-height", '16px'],
            ["style", "letter-spacing", '0px'],
            ["style", "opacity", '1'],
            ["style", "width", '132px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '0px'],
            ["style", "font-size", '16px'],
            ["style", "top", '58px'],
            ["style", "text-align", 'center'],
            ["transform", "scaleY", '1'],
            ["style", "text-indent", '0px'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["transform", "scaleX", '1']
         ],
         "${symbolSelector}": [
            ["style", "height", '132px'],
            ["style", "width", '132px']
         ],
         "${_bounds}": [
            ["style", "top", '0.3px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "left", '0.2px'],
            ["style", "height", '131.87019362232px'],
            ["style", "border-width", '0px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '132px']
         ],
         "${_name}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '132px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '132px'],
            ["style", "font-size", '36px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", 'auto'],
            ["style", "width", '160px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid511", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeOutElastic" },
            { id: "eid3966", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid635", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3743", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid501", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid638", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3744", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid912", tween: [ "style", "${_node_imp_128px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3501", tween: [ "style", "${_node_imp_128px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid540", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid654", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid641", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3746", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3747", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid541", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid636", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3745", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 }         ]
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','100px','100px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['auto','0px','256px','32px','100px','auto'],
         id: 'year',
         text: '1890–1910, Europe',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','']
      },
      {
         type: 'text',
         rect: ['auto','auto','224px','32px','100px','100px'],
         id: 'name',
         text: 'art nouveau',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','']
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
      type: 'text',
      rect: ['0px','34px','100px','32px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'art<br>nouveau',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',14,'rgba(0,0,0,1.00)','400','none','']
   },
   {
      rect: ['0px','0px','100px','100px','auto','auto'],
      type: 'image',
      id: 'node_sym_096px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_ano_096px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','68px','68px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
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
            ["style", "opacity", '0.15847729146481']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '92px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "opacity", '1'],
            ["style", "height", '92px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '2px']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", 'auto'],
            ["style", "font-size", '24px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", '100px'],
            ["style", "width", '256px']
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
            ["style", "font-weight", '400'],
            ["style", "left", '0px'],
            ["style", "width", '100px'],
            ["style", "top", '34px'],
            ["style", "opacity", '1'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '31.796875px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "font-size", '16px']
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
         "${_bounds}": [
            ["style", "top", '0px'],
            ["style", "border-width", '0px'],
            ["transform", "scaleY", '1'],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleX", '1'],
            ["style", "height", '99.901661835092px'],
            ["style", "left", '0px'],
            ["style", "width", '100px']
         ],
         "${_name}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '100px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", 'auto'],
            ["style", "font-size", '36px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", '100px'],
            ["style", "width", '224px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid914", tween: [ "style", "${_node_sym_096px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3498", tween: [ "style", "${_node_sym_096px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid660", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3700", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid464", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid658", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3699", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid474", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid664", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid665", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3701", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3702", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid461", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3930", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid656", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3698", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid473", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"node-neu": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','100px','100px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['100px','0px','320px','32px','auto','auto'],
         id: 'year',
         text: '1924–33, Weimar Republic',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','']
      },
      {
         type: 'text',
         rect: ['100px','auto','320px','32px','auto','100px'],
         id: 'name',
         text: 'new objectivity',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','']
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
      type: 'text',
      rect: ['0px','32px','100px','32px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'new<br>objectivity',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',14,'rgba(0,0,0,1.00)','400','none','']
   },
   {
      rect: ['0px','0px','100px','100px','auto','auto'],
      type: 'image',
      id: 'node_sym_096px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_neu_096px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','68px','68px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_effect}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '88.452830188679px'],
            ["style", "top", '4px'],
            ["style", "opacity", '0.15847729146481'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'none'],
            ["style", "height", '88.452830188679px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '4px']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '92px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "left", '2px'],
            ["style", "height", '92px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '1']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '100px'],
            ["style", "font-size", '24px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '320px']
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
            ["style", "font-weight", '400'],
            ["style", "left", '0px'],
            ["style", "width", '100px'],
            ["style", "top", '32px'],
            ["style", "font-size", '16px'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '31.796875px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "opacity", '1']
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
         "${_bounds}": [
            ["style", "top", '0px'],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleY", '1'],
            ["style", "left", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "height", '99.901661835092px'],
            ["style", "border-width", '0px'],
            ["style", "width", '100px']
         ],
         "${_name}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '100px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '100px'],
            ["style", "font-size", '36px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", 'auto'],
            ["style", "width", '320px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid914", tween: [ "style", "${_node_sym_096px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3462", tween: [ "style", "${_node_sym_096px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid656", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3528", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid464", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid658", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3529", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid660", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3530", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid664", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid665", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3531", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3532", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid461", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3799", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid474", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid473", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"node-nre": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','100px','100px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['100px','auto','440px','32px','auto','100px'],
         id: 'name',
         text: 'nationalist realism',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','']
      },
      {
         type: 'text',
         rect: ['100px','0px','320px','32px','auto','auto'],
         id: 'year',
         text: '1933–45, Nazi Germany',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','']
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
      type: 'text',
      rect: ['0px','34px','100px','32px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'nationalist<br>realism',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',14,'rgba(0,0,0,1.00)','400','none','']
   },
   {
      rect: ['0px','0px','100px','100px','auto','auto'],
      type: 'image',
      id: 'node_sym_096px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_nre_096px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','68px','68px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
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
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "height", '88.452830188679px'],
            ["style", "opacity", '0.15847729146481']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '92px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "opacity", '1'],
            ["style", "height", '92px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '2px']
         ],
         "${_artist4Copy}": [
            ["style", "line-height", '12px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '-108px'],
            ["style", "font-size", '18px'],
            ["style", "top", '82px'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "display", 'block'],
            ["style", "width", '96px']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '100px'],
            ["style", "font-size", '24px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '320px']
         ],
         "${_artist5Copy}": [
            ["style", "line-height", '12px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '-108px'],
            ["style", "font-size", '18px'],
            ["style", "top", '2px'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "display", 'block'],
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
            ["style", "font-weight", '400'],
            ["style", "left", '0px'],
            ["style", "width", '100px'],
            ["style", "top", '34px'],
            ["style", "opacity", '1'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '31.796875px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "font-size", '16px']
         ],
         "${symbolSelector}": [
            ["style", "height", '100px'],
            ["style", "width", '100px']
         ],
         "${_artist3Copy}": [
            ["style", "line-height", '12px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '2px'],
            ["style", "font-size", '18px'],
            ["style", "top", '122px'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "display", 'block'],
            ["style", "width", '96px']
         ],
         "${_node_sym_096px}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
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
         "${_name}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '100px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '100px'],
            ["style", "font-size", '36px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '440px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid461", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3800", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid474", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid464", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid658", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3549", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid656", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3548", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid664", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid665", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3551", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3552", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid914", tween: [ "style", "${_node_sym_096px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3468", tween: [ "style", "${_node_sym_096px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid660", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3550", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid473", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"node-bau": {
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
      transform: {},
      display: 'none',
      type: 'group',
      id: 'people',
      rect: ['0px','0px','132px','132px','auto','auto'],
      c: [
      {
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none',''],
         type: 'text',
         id: 'year',
         text: '1919–30, Germany',
         align: 'right',
         rect: ['auto','0px','256px','32px','132px','auto']
      },
      {
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none',''],
         type: 'text',
         id: 'name',
         text: 'bauhaus',
         align: 'right',
         rect: ['auto','auto','160px','32px','132px','132px']
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
      font: ['Source Sans Pro Local, sans-serif',16,'rgba(51,51,51,1.00)','400','none',''],
      type: 'text',
      text: 'bauhaus',
      id: 'label',
      opacity: 1,
      align: 'center',
      rect: ['0px','51px','132px','30px','auto','auto']
   },
   {
      type: 'image',
      rect: ['0','0','132px','132px','auto','auto'],
      id: 'node_imp_128px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_bau_128px.png','0px','0px']
   },
   {
      type: 'ellipse',
      borderRadius: ['50%','50%','50%','50%'],
      rect: ['0px','0px','132px','132px','auto','auto'],
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
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
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "height", '124px'],
            ["style", "opacity", '0.15847729146481']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '124px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "opacity", '1'],
            ["style", "height", '124px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '2px']
         ],
         "${_node_imp_128px}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", 'auto'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", 'auto'],
            ["style", "font-size", '24px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", '132px'],
            ["style", "width", '256px']
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
         "${_label}": [
            ["style", "line-height", '16px'],
            ["style", "letter-spacing", '0px'],
            ["style", "opacity", '1'],
            ["style", "width", '132px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '0px'],
            ["style", "font-size", '16px'],
            ["style", "top", '58px'],
            ["style", "text-align", 'center'],
            ["transform", "scaleY", '1'],
            ["style", "text-indent", '0px'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["transform", "scaleX", '1']
         ],
         "${symbolSelector}": [
            ["style", "height", '132px'],
            ["style", "width", '132px']
         ],
         "${_bounds}": [
            ["style", "top", '0.3px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "left", '0.2px'],
            ["style", "height", '131.87019362232px'],
            ["style", "border-width", '0px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '132px']
         ],
         "${_name}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '132px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", 'auto'],
            ["style", "font-size", '36px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", '132px'],
            ["style", "width", '160px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid511", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeOutElastic" },
            { id: "eid3849", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3877, duration: 0 },
            { id: "eid635", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3593", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid501", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid638", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3594", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid912", tween: [ "style", "${_node_imp_128px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3470", tween: [ "style", "${_node_imp_128px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid540", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid654", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid641", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3596", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3597", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid636", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3595", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid541", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"node-pit": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','100px','100px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['auto','0px','256px','32px','100px','auto'],
         id: 'year',
         text: '1911–20, Milan',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','']
      },
      {
         type: 'text',
         rect: ['auto','auto','386px','32px','100px','100px'],
         id: 'name',
         text: 'metaphysical art',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','']
      }]
   },
   {
      type: 'ellipse',
      borderRadius: ['50%','50%','50%','50%'],
      id: 'node',
      opacity: 1,
      cursor: ['pointer'],
      rect: ['2px','2px','92px','92px','auto','auto'],
      transform: [{1:0,0:0},{},{},['0','0']],
      stroke: [2,'rgba(51,51,51,1.00)','solid'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'text',
      rect: ['0px','38px','100px','32px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'metaphysical<br>art',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',14,'rgba(0,0,0,1.00)','400','none','']
   },
   {
      rect: ['0px','0px','100px','100px','auto','auto'],
      type: 'image',
      id: 'node_sym_096px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_pit_096px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','68px','68px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
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
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "height", '88.452830188679px'],
            ["style", "opacity", '0.15847729146481']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '92px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "opacity", '1'],
            ["style", "height", '92px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '2px']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", 'auto'],
            ["style", "font-size", '24px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", '100px'],
            ["style", "width", '256px']
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
            ["style", "font-weight", '400'],
            ["style", "left", '0px'],
            ["style", "width", '100px'],
            ["style", "top", '38px'],
            ["style", "opacity", '1'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '31.796875px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "font-size", '16px']
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
         "${_name}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '100px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", 'auto'],
            ["style", "font-size", '36px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", '100px'],
            ["style", "width", '386px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid914", tween: [ "style", "${_node_sym_096px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3466", tween: [ "style", "${_node_sym_096px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid474", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid464", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid658", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3559", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid656", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3558", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid664", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid665", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3561", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3562", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid461", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3808", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid660", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3560", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid473", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"node-sre": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','132px','132px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['132px','0px','256px','32px','auto','auto'],
         id: 'year',
         text: '1933–45, United States',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','']
      },
      {
         type: 'text',
         rect: ['132px','auto','256px','32px','auto','132px'],
         id: 'name',
         text: 'social realism',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','']
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
      type: 'text',
      rect: ['0px','50px','132px','32px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'social<br>realism',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',16,'rgba(51,51,51,1.00)','400','none','']
   },
   {
      rect: ['0','0','132px','132px','auto','auto'],
      type: 'image',
      id: 'node_imp_128px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_sre_128px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','132px','132px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_effect}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '124px'],
            ["style", "top", '2px'],
            ["style", "opacity", '0.15847729146481'],
            ["transform", "scaleY", '1'],
            ["style", "height", '124px'],
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "left", '2px'],
            ["style", "cursor", 'pointer']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '124px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "left", '2px'],
            ["style", "height", '124px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '1']
         ],
         "${_node_imp_128px}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '132px'],
            ["style", "font-size", '24px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '256px']
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
         "${_label}": [
            ["style", "line-height", '16px'],
            ["style", "letter-spacing", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "font-size", '16px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '132px'],
            ["style", "top", '50px'],
            ["transform", "scaleY", '1'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "font-weight", '400']
         ],
         "${symbolSelector}": [
            ["style", "height", '132px'],
            ["style", "width", '132px']
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
         "${_name}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '132px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '132px'],
            ["style", "font-size", '36px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '256px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid511", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeOutElastic" },
            { id: "eid3974", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid635", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3753", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid501", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid638", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3754", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid912", tween: [ "style", "${_node_imp_128px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3508", tween: [ "style", "${_node_imp_128px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid540", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid654", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid641", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3756", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3757", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid541", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid636", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3755", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 }         ]
      }
   }
},
"node-dej": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','100px','100px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['100px','0px','100px','32px','auto','auto'],
         id: 'year',
         text: '1917–31',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','']
      },
      {
         type: 'text',
         rect: ['100px','auto','128px','32px','auto','100px'],
         id: 'name',
         text: 'de stijl',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','']
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
      type: 'text',
      rect: ['0px','42px','100px','16px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'de stijl',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',14,'rgba(0,0,0,1.00)','400','none','']
   },
   {
      rect: ['0px','0px','100px','100px','auto','auto'],
      type: 'image',
      id: 'node_sym_096px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_dej_096px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','68px','68px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_effect}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '88.452830188679px'],
            ["style", "top", '4px'],
            ["style", "opacity", '0.15847729146481'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'none'],
            ["style", "height", '88.452830188679px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '4px']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '92px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "left", '2px'],
            ["style", "height", '92px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '1']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", 'auto'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '100px'],
            ["style", "font-size", '24px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '100px']
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
            ["style", "font-weight", '400'],
            ["style", "left", '0px'],
            ["style", "width", '100px'],
            ["style", "top", '42px'],
            ["style", "font-size", '16px'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "opacity", '1']
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
         "${_bounds}": [
            ["style", "top", '0px'],
            ["style", "border-width", '0px'],
            ["transform", "scaleY", '1'],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleX", '1'],
            ["style", "height", '99.901661835092px'],
            ["style", "left", '0px'],
            ["style", "width", '100px']
         ],
         "${_name}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '100px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '100px'],
            ["style", "font-size", '36px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '128px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid914", tween: [ "style", "${_node_sym_096px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3483", tween: [ "style", "${_node_sym_096px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid656", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3603", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid464", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid658", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3604", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid660", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3605", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid664", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid665", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3606", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3607", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid461", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3857", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid474", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid473", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"node-opa": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','100px','100px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['auto','0px','160px','32px','100px','auto'],
         id: 'year',
         text: '1964, Chicago',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','']
      },
      {
         type: 'text',
         rect: ['auto','auto','128px','32px','100px','100px'],
         id: 'name',
         text: 'op art',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','']
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
      type: 'text',
      rect: ['0px','42px','100px','16px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'op art',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',14,'rgba(0,0,0,1.00)','400','none','']
   },
   {
      rect: ['0px','0px','100px','100px','auto','auto'],
      type: 'image',
      id: 'node_sym_096px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_opa_096px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','68px','68px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
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
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "height", '88.452830188679px'],
            ["style", "opacity", '0.15847729146481']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '92px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "opacity", '1'],
            ["style", "height", '92px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '2px']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", 'auto'],
            ["style", "font-size", '24px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", '100px'],
            ["style", "width", '160px']
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
            ["style", "font-weight", '400'],
            ["style", "left", '0px'],
            ["style", "width", '100px'],
            ["style", "top", '42px'],
            ["style", "opacity", '1'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "font-size", '16px']
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
         "${_bounds}": [
            ["style", "top", '0px'],
            ["style", "border-width", '0px'],
            ["transform", "scaleY", '1'],
            ["style", "left", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "height", '99.901661835092px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '100px']
         ],
         "${_name}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '100px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", 'auto'],
            ["style", "font-size", '36px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", '100px'],
            ["style", "width", '128px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid914", tween: [ "style", "${_node_sym_096px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3469", tween: [ "style", "${_node_sym_096px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid474", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid464", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid658", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3599", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid656", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3598", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid664", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid665", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3601", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3602", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid461", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3853", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid660", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3600", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid473", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"node-soc": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','100px','100px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['auto','100px','288px','32px','100px','auto'],
         id: 'name',
         text: 'socialist realism',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','']
      },
      {
         type: 'text',
         rect: ['auto','auto','256px','32px','100px','0px'],
         id: 'year',
         text: '1932–91, Soviet Union',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','']
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
      type: 'text',
      rect: ['0px','34px','100px','32px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'socialist<br>realism',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',14,'rgba(0,0,0,1.00)','400','none','']
   },
   {
      rect: ['0px','0px','100px','100px','auto','auto'],
      type: 'image',
      id: 'node_sym_096px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_soc_096px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','68px','68px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_effect}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '88.452830188679px'],
            ["style", "top", '4px'],
            ["style", "opacity", '0.15847729146481'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'none'],
            ["style", "height", '88.452830188679px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '4px']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '92px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "left", '2px'],
            ["style", "height", '92px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '1']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '0px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", 'auto'],
            ["style", "font-size", '24px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", '100px'],
            ["style", "width", '256px']
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
            ["style", "font-weight", '400'],
            ["style", "left", '0px'],
            ["style", "width", '100px'],
            ["style", "top", '34px'],
            ["style", "font-size", '16px'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '31.796875px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "opacity", '1']
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
         "${_bounds}": [
            ["style", "top", '0px'],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleY", '1'],
            ["style", "left", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "height", '99.901661835092px'],
            ["style", "border-width", '0px'],
            ["style", "width", '100px']
         ],
         "${_name}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", 'auto'],
            ["style", "font-size", '36px'],
            ["style", "top", '100px'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", '100px'],
            ["style", "width", '288px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid914", tween: [ "style", "${_node_sym_096px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3509", tween: [ "style", "${_node_sym_096px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid660", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3750", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid464", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid658", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3749", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid474", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid664", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid665", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3751", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3752", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid461", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3970", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid656", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3748", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid473", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"node-ray": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','68px','68px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['68px','0px','160px','32px','auto','auto'],
         id: 'year',
         text: '1911, Moscow',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','']
      },
      {
         type: 'text',
         rect: ['68px','auto','160px','32px','auto','68px'],
         id: 'name',
         text: 'rayonism',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','']
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
      type: 'text',
      rect: ['0px','26px','68px','16px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'rayon\'m',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',12,'rgba(51,51,51,1.00)','400','none','']
   },
   {
      rect: ['0px','0px','68px','68px','auto','auto'],
      type: 'image',
      id: 'node_nim_064px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_ray_064px.png','0px','0px']
   },
   {
      rect: ['0px','0px','68px','68px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgba(0,85,164,1.00)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_effect}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '60px'],
            ["style", "top", '2px'],
            ["style", "opacity", '0.15847729146481'],
            ["transform", "scaleY", '1'],
            ["style", "height", '60px'],
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '2px']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '58px'],
            ["style", "top", '3px'],
            ["transform", "scaleY", '1'],
            ["style", "opacity", '1'],
            ["style", "height", '58px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '3px']
         ],
         "${_node_nim_064px}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '68px'],
            ["style", "width", '160px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "font-size", '24px']
         ],
         "${_people}": [
            ["style", "top", '0px'],
            ["style", "height", '68px'],
            ["transform", "scaleY", '1.6'],
            ["transform", "scaleX", '1.6'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '68px']
         ],
         "${_label}": [
            ["style", "line-height", '14px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '0px'],
            ["style", "width", '68px'],
            ["style", "top", '26px'],
            ["style", "opacity", '1'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "font-size", '16px']
         ],
         "${symbolSelector}": [
            ["style", "height", '68px'],
            ["style", "width", '68px']
         ],
         "${_bounds}": [
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '67.733337402344px'],
            ["color", "border-color", 'rgba(0,85,164,1.00)'],
            ["style", "border-width", '0px'],
            ["style", "width", '67.816650390625px']
         ],
         "${_name}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '68px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '68px'],
            ["style", "width", '160px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "font-size", '36px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid475", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3845", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid671", tween: [ "transform", "${_effect}", "scaleY", '2.4', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3590", tween: [ "transform", "${_effect}", "scaleY", '2.4', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid477", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid669", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3589", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid480", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid675", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid676", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3591", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3592", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid667", tween: [ "transform", "${_effect}", "scaleX", '2.4', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3588", tween: [ "transform", "${_effect}", "scaleX", '2.4', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid479", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid916", tween: [ "style", "${_node_nim_064px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3471", tween: [ "style", "${_node_nim_064px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 }         ]
      }
   }
},
"node-prc": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','100px','100px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['100px','100px','224px','32px','auto','auto'],
         id: 'name',
         text: 'precisionism',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','']
      },
      {
         type: 'text',
         rect: ['100px','auto','256px','32px','auto','0px'],
         id: 'year',
         text: '1924–32, United States',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','']
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
      type: 'text',
      rect: ['0px','40px','100px','16px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'precisionism',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',14,'rgba(0,0,0,1.00)','400','none','']
   },
   {
      rect: ['0px','0px','100px','100px','auto','auto'],
      type: 'image',
      id: 'node_sym_096px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_prc_096px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','68px','68px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_effect}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '88.452830188679px'],
            ["style", "top", '4px'],
            ["style", "opacity", '0.15847729146481'],
            ["transform", "scaleY", '1'],
            ["style", "height", '88.452830188679px'],
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '4px']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '92px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "left", '2px'],
            ["style", "height", '92px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '1']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '0px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '100px'],
            ["style", "font-size", '24px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '256px']
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
            ["style", "font-weight", '400'],
            ["style", "left", '0px'],
            ["style", "width", '100px'],
            ["style", "top", '40px'],
            ["style", "font-size", '16px'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "opacity", '1']
         ],
         "${symbolSelector}": [
            ["style", "height", '100px'],
            ["style", "width", '100px']
         ],
         "${_bounds}": [
            ["style", "top", '0px'],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleY", '1'],
            ["style", "left", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "height", '99.901661835092px'],
            ["style", "border-width", '0px'],
            ["style", "width", '100px']
         ],
         "${_node_sym_096px}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_name}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '100px'],
            ["style", "font-size", '36px'],
            ["style", "top", '100px'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '224px'],
            ["style", "right", 'auto']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid914", tween: [ "style", "${_node_sym_096px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3507", tween: [ "style", "${_node_sym_096px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid474", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid464", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid658", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3759", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid660", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3760", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid664", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid665", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3761", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3762", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid461", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3978", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid656", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3758", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid473", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"node-let": {
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
      rect: ['0px','0px','68px','68px','auto','auto'],
      id: 'people',
      transform: {},
      display: 'none',
      type: 'group',
      c: [
      {
         rect: ['auto','68px','128px','32px','68px','auto'],
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none',''],
         id: 'name',
         text: 'lettrism',
         align: 'right',
         type: 'text'
      },
      {
         rect: ['79px','23px','96px','22px','auto','auto'],
         font: ['Source Sans Pro Local, serif',48,'rgba(51,51,51,1.00)','400','none',''],
         id: 'year',
         text: '1945',
         align: 'center',
         type: 'text'
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
      rect: ['0px','26px','68px','16px','auto','auto'],
      font: ['Source Sans Pro Local, sans-serif',12,'rgba(51,51,51,1.00)','600','none',''],
      id: 'label',
      text: 'lettrism',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['0px','0px','68px','68px','auto','auto'],
      id: 'node_nim_064px',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/placeholder_064px.png','0px','0px']
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
      rect: ['2px','26px','64px','16px','auto','auto'],
      font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','600','none',''],
      align: 'center',
      id: 'enter',
      text: 'enter',
      display: 'none',
      type: 'text'
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
      rect: ['-64px','-64px','auto','auto','auto','auto'],
      id: 'nav-close',
      opacity: 1,
      display: 'none',
      type: 'rect'
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
            ["style", "left", '3px'],
            ["transform", "scaleY", '1.8'],
            ["style", "cursor", 'pointer'],
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(51,51,51,0.00)'],
            ["style", "height", '58px'],
            ["style", "opacity", '1']
         ],
         "${_effect}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '60px'],
            ["style", "top", '2px'],
            ["style", "opacity", '0.0789790004491806'],
            ["transform", "scaleY", '1'],
            ["style", "height", '60px'],
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '2px']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '0'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '58px'],
            ["style", "top", '3px'],
            ["transform", "scaleY", '0'],
            ["style", "opacity", '1'],
            ["style", "height", '58px'],
            ["color", "border-color", 'rgba(51,51,51,0.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '3px']
         ],
         "${_node_nim_064px}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_enter}": [
            ["style", "line-height", '14px'],
            ["style", "letter-spacing", '0px'],
            ["style", "font-size", '24px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '600'],
            ["style", "left", '2px'],
            ["style", "width", '64px'],
            ["style", "top", '26px'],
            ["style", "height", '16px'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "opacity", '0.000000']
         ],
         "${_year}": [
            ["style", "line-height", '12px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '78.95px'],
            ["style", "width", '96px'],
            ["style", "top", '23px'],
            ["style", "text-align", 'center'],
            ["style", "height", '22px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "font-size", '48px']
         ],
         "${_people}": [
            ["style", "top", '0px'],
            ["style", "height", '68px'],
            ["transform", "scaleY", '1.6'],
            ["transform", "scaleX", '1.6'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '68px']
         ],
         "${_nav-close}": [
            ["style", "top", '-64px'],
            ["style", "opacity", '0'],
            ["style", "left", '-64px'],
            ["style", "display", 'none']
         ],
         "${_node_act_064px}": [
            ["style", "opacity", '0']
         ],
         "${symbolSelector}": [
            ["style", "height", '68px'],
            ["style", "width", '68px']
         ],
         "${_bounds}": [
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '67.733337402344px'],
            ["color", "border-color", 'rgba(0,85,164,1.00)'],
            ["style", "border-width", '0px'],
            ["style", "width", '67.816650390625px']
         ],
         "${_label}": [
            ["style", "line-height", '14px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '600'],
            ["style", "left", '0px'],
            ["style", "width", '68px'],
            ["style", "top", '26px'],
            ["style", "opacity", '0'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "font-size", '16px']
         ],
         "${_name}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", 'auto'],
            ["style", "width", '128px'],
            ["style", "top", '68px'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "font-size", '36px'],
            ["style", "right", '68px']
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
            { id: "eid1879", tween: [ "style", "${_nav-touch}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
            { id: "eid1880", tween: [ "style", "${_nav-touch}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
            { id: "eid1947", tween: [ "style", "${_nav-close}", "opacity", '1', { fromValue: '0'}], position: 13750, duration: 250 },
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
            { id: "eid1508", tween: [ "style", "${_node_act_064px}", "opacity", '1', { fromValue: '0.000000'}], position: 11000, duration: 250 },
            { id: "eid1510", tween: [ "style", "${_node_act_064px}", "opacity", '0', { fromValue: '1'}], position: 12000, duration: 250 },
            { id: "eid666", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid667", tween: [ "transform", "${_effect}", "scaleX", '2.4', { fromValue: '1'}], position: 4500, duration: 500 },
            { id: "eid1500", tween: [ "transform", "${_effect}", "scaleX", '2.4', { fromValue: '1'}], position: 14500, duration: 500 },
            { id: "eid34", tween: [ "transform", "${_node}", "scaleX", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid125", tween: [ "transform", "${_node}", "scaleX", '0.92', { fromValue: '1'}], position: 8000, duration: 250 },
            { id: "eid276", tween: [ "transform", "${_node}", "scaleX", '1', { fromValue: '0.92'}], position: 9000, duration: 250 },
            { id: "eid1802", tween: [ "style", "${_node}", "opacity", '0.038330078125', { fromValue: '1'}], position: 8000, duration: 250 },
            { id: "eid1804", tween: [ "style", "${_node}", "opacity", '1', { fromValue: '0.03832999989390373'}], position: 9000, duration: 250 },
            { id: "eid916", tween: [ "style", "${_node_nim_064px}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid917", tween: [ "style", "${_node_nim_064px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid1505", tween: [ "style", "${_node_nim_064px}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0 },
            { id: "eid1925", tween: [ "style", "${_enter}", "opacity", '1', { fromValue: '0.000000'}], position: 1500, duration: 100 },
            { id: "eid1926", tween: [ "style", "${_enter}", "opacity", '0', { fromValue: '1'}], position: 8000, duration: 250 },
            { id: "eid1927", tween: [ "style", "${_enter}", "opacity", '1', { fromValue: '0'}], position: 9000, duration: 250 },
            { id: "eid33", tween: [ "transform", "${_node}", "scaleY", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid127", tween: [ "transform", "${_node}", "scaleY", '0.92', { fromValue: '1'}], position: 8000, duration: 250 },
            { id: "eid278", tween: [ "transform", "${_node}", "scaleY", '1', { fromValue: '0.92'}], position: 9000, duration: 250 },
            { id: "eid670", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid671", tween: [ "transform", "${_effect}", "scaleY", '2.4', { fromValue: '1'}], position: 4500, duration: 500 },
            { id: "eid1502", tween: [ "transform", "${_effect}", "scaleY", '2.4', { fromValue: '1'}], position: 14500, duration: 500 },
            { id: "eid475", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid521", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 6250, duration: 0, easing: "easeOutElastic" },
            { id: "eid1499", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 13500, duration: 0 },
            { id: "eid1666", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
            { id: "eid480", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 3000, duration: 500, easing: "easeOutBack" },
            { id: "eid1496", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 13500, duration: 500, easing: "easeOutBack" },
            { id: "eid1929", tween: [ "style", "${_enter}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0 },
            { id: "eid1930", tween: [ "style", "${_enter}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
            { id: "eid479", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 3000, duration: 500, easing: "easeOutBack" },
            { id: "eid1498", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 13500, duration: 500, easing: "easeOutBack" },
            { id: "eid1652", tween: [ "style", "${_node_nim_064px}", "opacity", '1', { fromValue: '1'}], position: 13000, duration: 0 },
            { id: "eid1628", tween: [ "style", "${_node_nim_064px}", "opacity", '1', { fromValue: '0'}], position: 16000, duration: 500 },
            { id: "eid1630", tween: [ "style", "${_node_nim_064px}", "opacity", '0', { fromValue: '1'}], position: 17500, duration: 500 }         ]
      }
   }
},
"node-nma": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','100px','100px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['100px','100px','192px','32px','auto','auto'],
         id: 'name',
         text: 'new media',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','']
      },
      {
         type: 'text',
         rect: ['100px','auto','96px','32px','auto','0px'],
         id: 'year',
         text: '1991',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','']
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
      type: 'text',
      rect: ['0px','34px','100px','32px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'new<br>media',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',14,'rgba(0,0,0,1.00)','400','none','']
   },
   {
      rect: ['0px','0px','100px','100px','auto','auto'],
      type: 'image',
      id: 'node_sym_096px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/placeholder_096px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','68px','68px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_effect}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '88.452830188679px'],
            ["style", "top", '4px'],
            ["style", "opacity", '0.15847729146481'],
            ["transform", "scaleY", '1'],
            ["style", "height", '88.452830188679px'],
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '4px']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '92px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "left", '2px'],
            ["style", "height", '92px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '1']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '0px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '100px'],
            ["style", "font-size", '24px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '96px']
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
            ["style", "font-weight", '400'],
            ["style", "left", '0px'],
            ["style", "width", '100px'],
            ["style", "top", '34px'],
            ["style", "font-size", '16px'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '31.796875px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "opacity", '1']
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
         "${_name}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '100px'],
            ["style", "font-size", '36px'],
            ["style", "top", '100px'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '192px'],
            ["style", "right", 'auto']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid914", tween: [ "style", "${_node_sym_096px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3494", tween: [ "style", "${_node_sym_096px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid660", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3720", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid464", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid658", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3719", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid656", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3718", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid664", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid665", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3721", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3722", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid461", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3946", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid474", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid473", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"node-boa": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','100px','100px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['auto','0px','96px','32px','100px','auto'],
         id: 'year',
         text: '1966',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','']
      },
      {
         type: 'text',
         rect: ['auto','auto','160px','32px','100px','100px'],
         id: 'name',
         text: 'body art',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','']
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
      type: 'text',
      rect: ['0px','34px','100px','32px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'body<br>art',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',14,'rgba(0,0,0,1.00)','400','none','']
   },
   {
      rect: ['0px','0px','100px','100px','auto','auto'],
      type: 'image',
      id: 'node_sym_096px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_boa_096px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','68px','68px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_effect}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '88.452830188679px'],
            ["style", "top", '4px'],
            ["style", "opacity", '0.15847729146481'],
            ["transform", "scaleY", '1'],
            ["style", "height", '88.452830188679px'],
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '4px']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '92px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "left", '2px'],
            ["style", "height", '92px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '1']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", 'auto'],
            ["style", "font-size", '24px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", '100px'],
            ["style", "width", '96px']
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
            ["style", "font-weight", '400'],
            ["style", "left", '0px'],
            ["style", "width", '100px'],
            ["style", "top", '34px'],
            ["style", "font-size", '16px'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '31.796875px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "opacity", '1']
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
         "${_name}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '100px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", 'auto'],
            ["style", "font-size", '36px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", '100px'],
            ["style", "width", '160px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid461", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3950", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid656", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3723", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid464", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid658", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3724", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid474", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid664", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid665", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3726", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3727", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid914", tween: [ "style", "${_node_sym_096px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3505", tween: [ "style", "${_node_sym_096px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid660", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3725", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid473", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"node-nbr": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','100px','100px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['-108px','2px','96px','16px','auto','auto'],
         id: 'artist5',
         text: 'Artist',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',18,'rgba(51,51,51,1.00)','300','none','']
      },
      {
         type: 'text',
         rect: ['-108px','82px','96px','16px','auto','auto'],
         id: 'artist4',
         text: 'Artist',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',18,'rgba(51,51,51,1.00)','300','none','']
      },
      {
         type: 'text',
         rect: ['2px','122px','96px','16px','auto','auto'],
         id: 'artist3',
         text: 'Artist',
         align: 'center',
         font: ['Source Sans Pro Local, sans-serif',18,'rgba(51,51,51,1.00)','300','none','']
      },
      {
         type: 'text',
         rect: ['112px','82px','96px','16px','auto','auto'],
         id: 'artist2',
         text: 'Artist',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',18,'rgba(51,51,51,1.00)','300','none','']
      },
      {
         type: 'text',
         rect: ['112px','2px','96px','16px','auto','auto'],
         id: 'artist1',
         text: 'Artist',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',18,'rgba(51,51,51,1.00)','300','none','']
      },
      {
         type: 'text',
         rect: ['2px','-38px','96px','16px','auto','auto'],
         id: 'artist0',
         text: 'Artist',
         align: 'center',
         font: ['Source Sans Pro Local, sans-serif',18,'rgba(51,51,51,1.00)','300','none','']
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
      type: 'text',
      rect: ['2px','34px','96px','32px','auto','auto'],
      id: 'label',
      text: 'nationalist<br>realism',
      align: 'center',
      font: ['Source Sans Pro Local, sans-serif',14,'rgba(0,0,0,1.00)','600','none','']
   },
   {
      rect: ['0px','0px','100px','100px','auto','auto'],
      id: 'node_sym_096px',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/placeholder_096px.png','0px','0px']
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
      rect: ['3px','42px','96px','16px','auto','auto'],
      font: ['Source Sans Pro Local, sans-serif',24,'rgba(0,0,0,1.00)','600','none',''],
      display: 'none',
      align: 'center',
      id: 'enter',
      text: 'enter',
      textShadow: ['rgba(255,255,255,1.00)',0,0,4],
      type: 'text'
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
      type: 'rect',
      display: 'none',
      opacity: 1,
      id: 'nav-close',
      rect: ['134px','-75px','auto','auto','auto','auto']
   },
   {
      type: 'text',
      id: '_1882',
      text: '1882',
      font: ['Source Sans Pro Local, serif',48,'rgba(51,51,51,1.00)','900','none','normal'],
      transform: {},
      display: 'none',
      rect: ['-14px','18px','128px','64px','auto','auto'],
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
         "${_artist5}": [
            ["style", "line-height", '12px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '-108px'],
            ["style", "font-size", '18px'],
            ["style", "top", '2px'],
            ["style", "text-align", 'right'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
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
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '96px']
         ],
         "${_nav-close}": [
            ["style", "top", '-75px'],
            ["style", "opacity", '0'],
            ["style", "left", '134px'],
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
            ["style", "opacity", '0.0789790004491806'],
            ["transform", "scaleY", '1'],
            ["style", "height", '88.452830188679px'],
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '4px']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '0'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '92px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '0'],
            ["style", "left", '2px'],
            ["style", "height", '92px'],
            ["color", "border-color", 'rgba(51,51,51,0.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '1']
         ],
         "${_nav_touch}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '0'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '92px'],
            ["style", "top", '2px'],
            ["style", "opacity", '1'],
            ["transform", "scaleY", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(51,51,51,0.00)'],
            ["style", "height", '92px'],
            ["style", "left", '2px']
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
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
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
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '96px']
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
         "${_node_act_096px}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_label}": [
            ["style", "line-height", '16px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '600'],
            ["style", "left", '2px'],
            ["style", "width", '96px'],
            ["style", "top", '34px'],
            ["style", "font-size", '16px'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '31.796875px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "opacity", '0']
         ],
         "${__1882}": [
            ["style", "line-height", '64px'],
            ["transform", "scaleX", '1'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '900'],
            ["style", "left", '-14px'],
            ["style", "font-size", '48px'],
            ["style", "top", '18px'],
            ["style", "font-style", 'normal'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'none'],
            ["style", "height", '64px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '128px'],
            ["style", "opacity", '0']
         ],
         "${_bounds}": [
            ["style", "top", '0px'],
            ["style", "border-width", '0px'],
            ["transform", "scaleY", '1'],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleX", '1'],
            ["style", "height", '99.901661835092px'],
            ["style", "left", '0px'],
            ["style", "width", '100px']
         ],
         "${_artist2}": [
            ["style", "line-height", '12px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '112px'],
            ["style", "font-size", '18px'],
            ["style", "top", '82px'],
            ["style", "text-align", 'left'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '96px']
         ],
         "${_enter}": [
            ["style", "line-height", '16px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '3px'],
            ["style", "word-spacing", '0px'],
            ["subproperty", "textShadow.blur", '4px'],
            ["style", "letter-spacing", '0px'],
            ["style", "font-size", '24px'],
            ["style", "font-weight", '600'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '96px'],
            ["style", "top", '42px'],
            ["subproperty", "textShadow.offsetH", '0px'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '16px'],
            ["subproperty", "textShadow.color", 'rgba(255,255,255,1.00)'],
            ["style", "display", 'none'],
            ["subproperty", "textShadow.offsetV", '0px']
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
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '96px']
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
            { id: "eid1937", tween: [ "style", "${_enter}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0 },
            { id: "eid1938", tween: [ "style", "${_enter}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
            { id: "eid659", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid660", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4250, duration: 750 },
            { id: "eid1516", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 14250, duration: 750 },
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
            { id: "eid1538", tween: [ "transform", "${_bounds}", "scaleY", '1.8', { fromValue: '1'}], position: 3000, duration: 500 },
            { id: "eid1539", tween: [ "transform", "${_bounds}", "scaleY", '1', { fromValue: '1.8'}], position: 6000, duration: 500 },
            { id: "eid914", tween: [ "style", "${_node_sym_096px}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid915", tween: [ "style", "${_node_sym_096px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid1531", tween: [ "style", "${_node_sym_096px}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0, easing: "easeOutBack" },
            { id: "eid655", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid656", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4250, duration: 750 },
            { id: "eid1514", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 14250, duration: 750 },
            { id: "eid461", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid462", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 6250, duration: 0 },
            { id: "eid1522", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0 },
            { id: "eid1667", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
            { id: "eid34", tween: [ "transform", "${_node}", "scaleX", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid125", tween: [ "transform", "${_node}", "scaleX", '0.92', { fromValue: '1'}], position: 8000, duration: 250 },
            { id: "eid290", tween: [ "transform", "${_node}", "scaleX", '1', { fromValue: '0.92'}], position: 9000, duration: 250 },
            { id: "eid1868", tween: [ "style", "${__1882}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1536", tween: [ "transform", "${_bounds}", "scaleX", '2.9', { fromValue: '1'}], position: 3000, duration: 500 },
            { id: "eid1537", tween: [ "transform", "${_bounds}", "scaleX", '1', { fromValue: '2.9'}], position: 6000, duration: 500 },
            { id: "eid1932", tween: [ "style", "${_nav-close}", "opacity", '1', { fromValue: '0'}], position: 13500, duration: 500 },
            { id: "eid1941", tween: [ "style", "${_node_act_096px}", "opacity", '1', { fromValue: '0'}], position: 11000, duration: 250 },
            { id: "eid1526", tween: [ "style", "${_node_act_096px}", "opacity", '0', { fromValue: '1'}], position: 12000, duration: 250 },
            { id: "eid33", tween: [ "transform", "${_node}", "scaleY", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid127", tween: [ "transform", "${_node}", "scaleY", '0.92', { fromValue: '1'}], position: 8000, duration: 250 },
            { id: "eid292", tween: [ "transform", "${_node}", "scaleY", '1', { fromValue: '0.92'}], position: 9000, duration: 250 },
            { id: "eid1765", tween: [ "style", "${__1882}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 200 },
            { id: "eid1766", tween: [ "style", "${__1882}", "opacity", '1', { fromValue: '1'}], position: 1500, duration: 0 },
            { id: "eid1759", tween: [ "style", "${__1882}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 100 },
            { id: "eid131", tween: [ "style", "${_node}", "opacity", '0.041412353515625', { fromValue: '1'}], position: 8000, duration: 250 },
            { id: "eid291", tween: [ "style", "${_node}", "opacity", '1', { fromValue: '0.041412353515625'}], position: 9000, duration: 250 },
            { id: "eid473", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 3000, duration: 500, easing: "easeOutBack" },
            { id: "eid1519", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 13000, duration: 500, easing: "easeOutBack" },
            { id: "eid1665", tween: [ "style", "${_node_sym_096px}", "opacity", '1', { fromValue: '1'}], position: 13000, duration: 0 },
            { id: "eid1633", tween: [ "style", "${_node_sym_096px}", "opacity", '1', { fromValue: '0'}], position: 16000, duration: 500 },
            { id: "eid1635", tween: [ "style", "${_node_sym_096px}", "opacity", '0', { fromValue: '1'}], position: 17500, duration: 500 },
            { id: "eid1763", tween: [ "transform", "${__1882}", "scaleX", '0', { fromValue: '1'}], position: 1500, duration: 100 },
            { id: "eid474", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 3000, duration: 500, easing: "easeOutBack" },
            { id: "eid1521", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 13000, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"node-int": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','132px','132px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['132px','auto','320px','32px','auto','132px'],
         id: 'name',
         text: 'international style',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','']
      },
      {
         type: 'text',
         rect: ['132px','0px','256px','32px','auto','auto'],
         id: 'year',
         text: '1932, New York City',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','']
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
      type: 'text',
      rect: ['0px','50px','132px','32px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'international<br>style',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',16,'rgba(51,51,51,1.00)','400','none','']
   },
   {
      rect: ['0','0','132px','132px','auto','auto'],
      type: 'image',
      id: 'node_imp_128px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_int_128px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','132px','132px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_effect}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '124px'],
            ["style", "top", '2px'],
            ["style", "opacity", '0.15847729146481'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'none'],
            ["style", "height", '124px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "left", '2px'],
            ["style", "cursor", 'pointer']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '124px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "left", '2px'],
            ["style", "height", '124px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '1']
         ],
         "${_node_imp_128px}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '132px'],
            ["style", "font-size", '24px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '256px']
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
         "${_label}": [
            ["style", "line-height", '16px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-size", '16px'],
            ["transform", "scaleX", '1'],
            ["style", "font-weight", '400'],
            ["style", "left", '0px'],
            ["style", "width", '132px'],
            ["style", "top", '50px'],
            ["transform", "scaleY", '1'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "opacity", '1']
         ],
         "${symbolSelector}": [
            ["style", "height", '132px'],
            ["style", "width", '132px']
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
         "${_name}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '132px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '132px'],
            ["style", "font-size", '36px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '320px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid511", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeOutElastic" },
            { id: "eid3994", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid635", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3608", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid501", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid638", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3609", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid912", tween: [ "style", "${_node_imp_128px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3484", tween: [ "style", "${_node_imp_128px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid540", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid654", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid641", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3611", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3612", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid636", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3610", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid541", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"node-hit": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','132px','132px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['132px','0px','96px','32px','auto','auto'],
         id: 'year',
         text: '1988',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','']
      },
      {
         type: 'text',
         rect: ['132px','auto','160px','32px','auto','132px'],
         id: 'name',
         text: 'high tech',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','']
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
      type: 'text',
      rect: ['0px','51px','132px','30px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'high tech',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',16,'rgba(51,51,51,1.00)','400','none','']
   },
   {
      rect: ['0','0','132px','132px','auto','auto'],
      type: 'image',
      id: 'node_imp_128px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_hit_128px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','132px','132px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_effect}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '124px'],
            ["style", "top", '2px'],
            ["style", "opacity", '0.15847729146481'],
            ["transform", "scaleY", '1'],
            ["style", "height", '124px'],
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "left", '2px'],
            ["style", "cursor", 'pointer']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '124px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "left", '2px'],
            ["style", "height", '124px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '1']
         ],
         "${_node_imp_128px}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '132px'],
            ["style", "font-size", '24px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
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
         "${_label}": [
            ["style", "line-height", '16px'],
            ["style", "letter-spacing", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "font-size", '16px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '132px'],
            ["style", "top", '58px'],
            ["transform", "scaleY", '1'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "font-weight", '400']
         ],
         "${symbolSelector}": [
            ["style", "height", '132px'],
            ["style", "width", '132px']
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
         "${_name}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '132px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '132px'],
            ["style", "font-size", '36px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '160px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid511", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeOutElastic" },
            { id: "eid3918", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid636", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3685", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid501", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid638", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3684", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid912", tween: [ "style", "${_node_imp_128px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3485", tween: [ "style", "${_node_imp_128px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid540", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid654", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid641", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3686", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3687", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid635", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3683", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid541", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"node-dco": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','100px','100px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['auto','100px','288px','32px','100px','auto'],
         id: 'name',
         text: 'deconstructivism',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','']
      },
      {
         type: 'text',
         rect: ['auto','auto','96px','32px','100px','0px'],
         id: 'year',
         text: '1988',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','']
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
      type: 'text',
      rect: ['0px','36px','100px','32px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'deconstruct<br>ivism',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',14,'rgba(0,0,0,1.00)','400','none','']
   },
   {
      rect: ['0px','0px','100px','100px','auto','auto'],
      type: 'image',
      id: 'node_sym_096px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_dco_096px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','68px','68px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
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
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "height", '88.452830188679px'],
            ["style", "opacity", '0.15847729146481']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '92px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "opacity", '1'],
            ["style", "height", '92px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '2px']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '0px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", 'auto'],
            ["style", "font-size", '24px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", '100px'],
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
            ["style", "font-weight", '400'],
            ["style", "left", '0px'],
            ["style", "width", '100px'],
            ["style", "top", '36px'],
            ["style", "opacity", '1'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '31.796875px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "font-size", '16px']
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
         "${_name}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", 'auto'],
            ["style", "font-size", '36px'],
            ["style", "top", '100px'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", '100px'],
            ["style", "width", '288px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid914", tween: [ "style", "${_node_sym_096px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3500", tween: [ "style", "${_node_sym_096px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid474", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid464", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid658", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3689", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid660", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3690", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid664", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid665", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3691", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3692", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid461", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3922", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid656", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3688", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid473", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"node-bru": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','100px','100px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['100px','0px','96px','32px','auto','auto'],
         id: 'year',
         text: '1953',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','']
      },
      {
         type: 'text',
         rect: ['100px','auto','192px','32px','auto','100px'],
         id: 'name',
         text: 'brutalism',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','']
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
      type: 'text',
      rect: ['0px','42px','100px','16px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'brutalism',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',14,'rgba(0,0,0,1.00)','400','none','']
   },
   {
      rect: ['0px','0px','100px','100px','auto','auto'],
      type: 'image',
      id: 'node_sym_096px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_bru_096px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','68px','68px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_effect}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '88.452830188679px'],
            ["style", "top", '4px'],
            ["style", "opacity", '0.15847729146481'],
            ["transform", "scaleY", '1'],
            ["style", "height", '88.452830188679px'],
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '4px']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '92px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "left", '2px'],
            ["style", "height", '92px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '1']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '100px'],
            ["style", "font-size", '24px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '96px']
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
            ["style", "font-weight", '400'],
            ["style", "left", '0px'],
            ["style", "width", '100px'],
            ["style", "top", '42px'],
            ["style", "font-size", '16px'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "opacity", '1']
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
         "${_bounds}": [
            ["style", "top", '0px'],
            ["style", "border-width", '0px'],
            ["transform", "scaleY", '1'],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleX", '1'],
            ["style", "height", '99.901661835092px'],
            ["style", "left", '0px'],
            ["style", "width", '100px']
         ],
         "${_name}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '100px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '100px'],
            ["style", "font-size", '36px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '192px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid461", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3990", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid660", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3775", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid464", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid658", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3774", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid656", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3773", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid664", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid665", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3776", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3777", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid914", tween: [ "style", "${_node_sym_096px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3510", tween: [ "style", "${_node_sym_096px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid474", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid473", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"node-hap": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','100px','100px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['100px','auto','256px','32px','auto','0px'],
         id: 'year',
         text: '1957',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','']
      },
      {
         type: 'text',
         rect: ['100px','100px','192px','32px','auto','auto'],
         id: 'name',
         text: 'happening',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','']
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
      type: 'text',
      rect: ['0px','40px','100px','16px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'happening',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',14,'rgba(0,0,0,1.00)','400','none','']
   },
   {
      rect: ['0px','0px','100px','100px','auto','auto'],
      type: 'image',
      id: 'node_sym_096px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_hap_096px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','68px','68px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
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
            ["style", "opacity", '0.15847729146481']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '92px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "opacity", '1'],
            ["style", "height", '92px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '2px']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '0px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '100px'],
            ["style", "font-size", '24px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '256px']
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
            ["style", "font-weight", '400'],
            ["style", "left", '0px'],
            ["style", "width", '100px'],
            ["style", "top", '40px'],
            ["style", "opacity", '1'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "font-size", '16px']
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
         "${_name}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '100px'],
            ["style", "font-size", '36px'],
            ["style", "top", '100px'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '192px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid914", tween: [ "style", "${_node_sym_096px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3496", tween: [ "style", "${_node_sym_096px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid474", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid464", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid658", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3709", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid660", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3710", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid664", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid665", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3711", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3712", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid461", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3938", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid656", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3708", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid473", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"node-ins": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','100px','100px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['auto','auto','224px','32px','100px','100px'],
         id: 'name',
         text: 'installation',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','']
      },
      {
         type: 'text',
         rect: ['auto','0px','96px','32px','100px','auto'],
         id: 'year',
         text: '1969',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','']
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
      type: 'text',
      rect: ['0px','40px','100px','16px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'installation',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',14,'rgba(0,0,0,1.00)','400','none','']
   },
   {
      rect: ['0px','0px','100px','100px','auto','auto'],
      type: 'image',
      id: 'node_sym_096px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_ins_096px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','68px','68px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_effect}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '88.452830188679px'],
            ["style", "top", '4px'],
            ["style", "opacity", '0.15847729146481'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'none'],
            ["style", "height", '88.452830188679px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '4px']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '92px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "left", '2px'],
            ["style", "height", '92px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '1']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", 'auto'],
            ["style", "font-size", '24px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", '100px'],
            ["style", "width", '96px']
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
            ["style", "font-weight", '400'],
            ["style", "left", '0px'],
            ["style", "width", '100px'],
            ["style", "top", '40px'],
            ["style", "font-size", '16px'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "opacity", '1']
         ],
         "${symbolSelector}": [
            ["style", "height", '100px'],
            ["style", "width", '100px']
         ],
         "${_bounds}": [
            ["style", "top", '0px'],
            ["style", "border-width", '0px'],
            ["transform", "scaleY", '1'],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleX", '1'],
            ["style", "height", '99.901661835092px'],
            ["style", "left", '0px'],
            ["style", "width", '100px']
         ],
         "${_node_sym_096px}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_name}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '100px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", 'auto'],
            ["style", "font-size", '36px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '224px'],
            ["style", "right", '100px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid914", tween: [ "style", "${_node_sym_096px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3504", tween: [ "style", "${_node_sym_096px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid656", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3728", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid464", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid658", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3729", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid660", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3730", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid664", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid665", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3731", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3732", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid461", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3954", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid474", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid473", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"node-apo": {
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
      type: 'group',
      display: 'none',
      rect: ['0px','0px','100px','100px','auto','auto'],
      id: 'people',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['-108px','2px','96px','16px','auto','auto'],
         id: 'artist5',
         text: 'Artist',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',18,'rgba(51,51,51,1.00)','300','none','']
      },
      {
         type: 'text',
         rect: ['-108px','82px','96px','16px','auto','auto'],
         id: 'artist4',
         text: 'Artist',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',18,'rgba(51,51,51,1.00)','300','none','']
      },
      {
         type: 'text',
         rect: ['2px','122px','96px','16px','auto','auto'],
         id: 'artist3',
         text: 'Artist',
         align: 'center',
         font: ['Source Sans Pro Local, sans-serif',18,'rgba(51,51,51,1.00)','300','none','']
      },
      {
         type: 'text',
         rect: ['112px','82px','96px','16px','auto','auto'],
         id: 'artist2',
         text: 'Artist',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',18,'rgba(51,51,51,1.00)','300','none','']
      },
      {
         type: 'text',
         rect: ['112px','2px','96px','16px','auto','auto'],
         id: 'artist1',
         text: 'Artist',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',18,'rgba(51,51,51,1.00)','300','none','']
      },
      {
         type: 'text',
         rect: ['2px','-38px','96px','16px','auto','auto'],
         id: 'artist0',
         text: 'Artist',
         align: 'center',
         font: ['Source Sans Pro Local, sans-serif',18,'rgba(51,51,51,1.00)','300','none','']
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
      type: 'text',
      rect: ['2px','34px','96px','32px','auto','auto'],
      id: 'label',
      text: 'arte<br>povera',
      align: 'center',
      font: ['Source Sans Pro Local, sans-serif',14,'rgba(0,0,0,1.00)','600','none','']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','0px','100px','100px','auto','auto'],
      id: 'node_sym_096px',
      fill: ['rgba(0,0,0,0)','img/placeholder_096px.png','0px','0px']
   },
   {
      type: 'ellipse',
      borderRadius: ['50%','50%','50%','50%'],
      rect: ['0px','0px','68px','68px','auto','auto'],
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   },
   {
      type: 'text',
      font: ['Source Sans Pro Local, sans-serif',24,'rgba(0,0,0,1.00)','600','none',''],
      display: 'none',
      id: 'enter',
      align: 'center',
      text: 'enter',
      textShadow: ['rgba(255,255,255,1.00)',0,0,4],
      rect: ['3px','42px','96px','16px','auto','auto']
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
      type: 'rect',
      id: 'nav-close',
      opacity: 1,
      rect: ['134px','-75px','auto','auto','auto','auto'],
      display: 'none'
   },
   {
      type: 'text',
      id: '_1882',
      text: '1882',
      rect: ['-14px','18px','128px','64px','auto','auto'],
      opacity: 1,
      display: 'none',
      align: 'center',
      font: ['Source Sans Pro Local, serif',48,'rgba(51,51,51,1.00)','900','none','normal'],
      transform: {}
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
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
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
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '96px']
         ],
         "${_nav-close}": [
            ["style", "top", '-75px'],
            ["style", "opacity", '0'],
            ["style", "left", '134px'],
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
            ["style", "opacity", '0.0789790004491806'],
            ["transform", "scaleY", '1'],
            ["style", "height", '88.452830188679px'],
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '4px']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '0'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '92px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '0'],
            ["style", "left", '2px'],
            ["style", "height", '92px'],
            ["color", "border-color", 'rgba(51,51,51,0.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '1']
         ],
         "${_nav_touch}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '0'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '92px'],
            ["style", "top", '2px'],
            ["style", "opacity", '1'],
            ["transform", "scaleY", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(51,51,51,0.00)'],
            ["style", "height", '92px'],
            ["style", "left", '2px']
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
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
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
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '96px']
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
         "${_node_act_096px}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_label}": [
            ["style", "line-height", '16px'],
            ["style", "letter-spacing", '0px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '600'],
            ["style", "left", '2px'],
            ["style", "width", '96px'],
            ["style", "top", '34px'],
            ["style", "font-size", '16px'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '31.796875px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "opacity", '0']
         ],
         "${__1882}": [
            ["style", "line-height", '64px'],
            ["transform", "scaleX", '1'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '900'],
            ["style", "left", '-14px'],
            ["style", "font-size", '48px'],
            ["style", "top", '18px'],
            ["style", "font-style", 'normal'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'none'],
            ["style", "height", '64px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '128px'],
            ["style", "opacity", '0']
         ],
         "${_bounds}": [
            ["style", "top", '0px'],
            ["style", "border-width", '0px'],
            ["transform", "scaleY", '1'],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleX", '1'],
            ["style", "height", '99.901661835092px'],
            ["style", "left", '0px'],
            ["style", "width", '100px']
         ],
         "${_artist2}": [
            ["style", "line-height", '12px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '112px'],
            ["style", "font-size", '18px'],
            ["style", "top", '82px'],
            ["style", "text-align", 'left'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '96px']
         ],
         "${_enter}": [
            ["style", "line-height", '16px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '3px'],
            ["style", "word-spacing", '0px'],
            ["subproperty", "textShadow.blur", '4px'],
            ["style", "letter-spacing", '0px'],
            ["style", "font-size", '24px'],
            ["style", "font-weight", '600'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '96px'],
            ["style", "top", '42px'],
            ["subproperty", "textShadow.offsetH", '0px'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '16px'],
            ["subproperty", "textShadow.color", 'rgba(255,255,255,1.00)'],
            ["style", "display", 'none'],
            ["subproperty", "textShadow.offsetV", '0px']
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
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '96px']
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
            { id: "eid1937", tween: [ "style", "${_enter}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0 },
            { id: "eid1938", tween: [ "style", "${_enter}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
            { id: "eid659", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid660", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4250, duration: 750 },
            { id: "eid1516", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 14250, duration: 750 },
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
            { id: "eid1538", tween: [ "transform", "${_bounds}", "scaleY", '1.8', { fromValue: '1'}], position: 3000, duration: 500 },
            { id: "eid1539", tween: [ "transform", "${_bounds}", "scaleY", '1', { fromValue: '1.8'}], position: 6000, duration: 500 },
            { id: "eid914", tween: [ "style", "${_node_sym_096px}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid915", tween: [ "style", "${_node_sym_096px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid1531", tween: [ "style", "${_node_sym_096px}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0, easing: "easeOutBack" },
            { id: "eid655", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid656", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4250, duration: 750 },
            { id: "eid1514", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 14250, duration: 750 },
            { id: "eid461", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid462", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 6250, duration: 0 },
            { id: "eid1522", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0 },
            { id: "eid1667", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
            { id: "eid34", tween: [ "transform", "${_node}", "scaleX", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid125", tween: [ "transform", "${_node}", "scaleX", '0.92', { fromValue: '1'}], position: 8000, duration: 250 },
            { id: "eid290", tween: [ "transform", "${_node}", "scaleX", '1', { fromValue: '0.92'}], position: 9000, duration: 250 },
            { id: "eid1868", tween: [ "style", "${__1882}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1536", tween: [ "transform", "${_bounds}", "scaleX", '2.9', { fromValue: '1'}], position: 3000, duration: 500 },
            { id: "eid1537", tween: [ "transform", "${_bounds}", "scaleX", '1', { fromValue: '2.9'}], position: 6000, duration: 500 },
            { id: "eid1932", tween: [ "style", "${_nav-close}", "opacity", '1', { fromValue: '0'}], position: 13500, duration: 500 },
            { id: "eid1941", tween: [ "style", "${_node_act_096px}", "opacity", '1', { fromValue: '0'}], position: 11000, duration: 250 },
            { id: "eid1526", tween: [ "style", "${_node_act_096px}", "opacity", '0', { fromValue: '1'}], position: 12000, duration: 250 },
            { id: "eid33", tween: [ "transform", "${_node}", "scaleY", '1', { fromValue: '0'}], position: 1000, duration: 500 },
            { id: "eid127", tween: [ "transform", "${_node}", "scaleY", '0.92', { fromValue: '1'}], position: 8000, duration: 250 },
            { id: "eid292", tween: [ "transform", "${_node}", "scaleY", '1', { fromValue: '0.92'}], position: 9000, duration: 250 },
            { id: "eid1765", tween: [ "style", "${__1882}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 200 },
            { id: "eid1766", tween: [ "style", "${__1882}", "opacity", '1', { fromValue: '1'}], position: 1500, duration: 0 },
            { id: "eid1759", tween: [ "style", "${__1882}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 100 },
            { id: "eid131", tween: [ "style", "${_node}", "opacity", '0.041412353515625', { fromValue: '1'}], position: 8000, duration: 250 },
            { id: "eid291", tween: [ "style", "${_node}", "opacity", '1', { fromValue: '0.041412353515625'}], position: 9000, duration: 250 },
            { id: "eid473", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 3000, duration: 500, easing: "easeOutBack" },
            { id: "eid1519", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 13000, duration: 500, easing: "easeOutBack" },
            { id: "eid1665", tween: [ "style", "${_node_sym_096px}", "opacity", '1', { fromValue: '1'}], position: 13000, duration: 0 },
            { id: "eid1633", tween: [ "style", "${_node_sym_096px}", "opacity", '1', { fromValue: '0'}], position: 16000, duration: 500 },
            { id: "eid1635", tween: [ "style", "${_node_sym_096px}", "opacity", '0', { fromValue: '1'}], position: 17500, duration: 500 },
            { id: "eid1763", tween: [ "transform", "${__1882}", "scaleX", '0', { fromValue: '1'}], position: 1500, duration: 100 },
            { id: "eid474", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 3000, duration: 500, easing: "easeOutBack" },
            { id: "eid1521", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 13000, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"node-nov": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','100px','100px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['auto','auto','386px','32px','100px','100px'],
         id: 'name',
         text: 'novecento italiano',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','']
      },
      {
         type: 'text',
         rect: ['auto','0px','256px','32px','100px','auto'],
         id: 'year',
         text: '1922–43, Milan',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','normal']
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
      type: 'text',
      rect: ['0px','34px','100px','32px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'novecento<br>italiano',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',14,'rgba(0,0,0,1.00)','400','none','']
   },
   {
      rect: ['0px','0px','100px','100px','auto','auto'],
      type: 'image',
      id: 'node_sym_096px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_nov_096px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','68px','68px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
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
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "height", '88.452830188679px'],
            ["style", "opacity", '0.15847729146481']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '92px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "opacity", '1'],
            ["style", "height", '92px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '2px']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", 'auto'],
            ["style", "font-size", '24px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'right'],
            ["style", "right", '100px'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "font-style", 'normal'],
            ["style", "width", '256px']
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
            ["style", "font-weight", '400'],
            ["style", "left", '0px'],
            ["style", "width", '100px'],
            ["style", "top", '34px'],
            ["style", "opacity", '1'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '31.796875px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "font-size", '16px']
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
         "${_name}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '100px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", 'auto'],
            ["style", "font-size", '36px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '386px'],
            ["style", "right", '100px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid914", tween: [ "style", "${_node_sym_096px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3512", tween: [ "style", "${_node_sym_096px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid474", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid464", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid658", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3524", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid656", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3523", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid664", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid665", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3526", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3527", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid461", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3795", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid660", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3525", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid473", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"node-nou": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','100px','100px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['auto','0px','256px','32px','100px','auto'],
         id: 'year',
         text: '1960–70, Milan',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','']
      },
      {
         type: 'text',
         rect: ['auto','auto','360px','32px','100px','100px'],
         id: 'name',
         text: 'new realism',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','']
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
      type: 'text',
      rect: ['0px','32px','100px','32px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'new<br>realism',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',14,'rgba(0,0,0,1.00)','400','none','']
   },
   {
      rect: ['0px','0px','100px','100px','auto','auto'],
      type: 'image',
      id: 'node_sym_096px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_nou_096px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','68px','68px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
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
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "height", '88.452830188679px'],
            ["style", "opacity", '0.15847729146481']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '92px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "opacity", '1'],
            ["style", "height", '92px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '2px']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", 'auto'],
            ["style", "font-size", '24px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", '100px'],
            ["style", "width", '256px']
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
            ["style", "font-weight", '400'],
            ["style", "left", '0px'],
            ["style", "width", '100px'],
            ["style", "top", '32px'],
            ["style", "opacity", '1'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '31.796875px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "font-size", '16px']
         ],
         "${symbolSelector}": [
            ["style", "height", '100px'],
            ["style", "width", '100px']
         ],
         "${_bounds}": [
            ["style", "top", '0px'],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleY", '1'],
            ["style", "left", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "height", '99.901661835092px'],
            ["style", "border-width", '0px'],
            ["style", "width", '100px']
         ],
         "${_node_sym_096px}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_name}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '100px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", 'auto'],
            ["style", "font-size", '36px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", '100px'],
            ["style", "width", '360px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid914", tween: [ "style", "${_node_sym_096px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3460", tween: [ "style", "${_node_sym_096px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid660", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3520", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid464", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid658", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3519", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid656", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3518", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid664", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid665", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3521", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3522", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid461", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3791", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid474", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid473", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"node-kin": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','100px','100px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['auto','auto','194px','32px','100px','100px'],
         id: 'name',
         text: 'kinetic art',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','']
      },
      {
         type: 'text',
         rect: ['auto','0px','160px','32px','100px','auto'],
         id: 'year',
         text: '1955',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','']
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
      type: 'text',
      rect: ['0px','36px','100px','32px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'kinetic<br>art',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',14,'rgba(0,0,0,1.00)','400','none','']
   },
   {
      rect: ['0px','0px','100px','100px','auto','auto'],
      type: 'image',
      id: 'node_sym_096px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_kin_096px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','68px','68px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
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
            ["style", "opacity", '0.15847729146481']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '92px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "opacity", '1'],
            ["style", "height", '92px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '2px']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", 'auto'],
            ["style", "font-size", '24px'],
            ["style", "top", '0.33px'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", '100px'],
            ["style", "width", '160px']
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
            ["style", "font-weight", '400'],
            ["style", "left", '0px'],
            ["style", "width", '100px'],
            ["style", "top", '36px'],
            ["style", "opacity", '1'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '31.796875px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "font-size", '16px']
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
         "${_bounds}": [
            ["style", "top", '0px'],
            ["style", "border-width", '0px'],
            ["transform", "scaleY", '1'],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleX", '1'],
            ["style", "height", '99.901661835092px'],
            ["style", "left", '0px'],
            ["style", "width", '100px']
         ],
         "${_name}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '100px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", 'auto'],
            ["style", "font-size", '36px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '194px'],
            ["style", "right", '100px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid461", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3985", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid660", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3765", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid464", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid658", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3764", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid656", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3763", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid664", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid665", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3766", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3767", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid914", tween: [ "style", "${_node_sym_096px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3506", tween: [ "style", "${_node_sym_096px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid474", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid473", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"node-ppa": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','132px','132px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['132px','auto','440px','32px','auto','132px'],
         id: 'name',
         text: 'post-painterly abstraction',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','']
      },
      {
         type: 'text',
         rect: ['132px','0px','256px','32px','auto','auto'],
         id: 'year',
         text: '1964,  Toronto',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','']
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
      font: ['Source Sans Pro Local, sans-serif',16,'rgba(51,51,51,1.00)','400','none',''],
      rect: ['0px','50px','132px','32px','auto','auto'],
      transform: {},
      opacity: 1,
      id: 'label',
      text: 'post-painterly<br>abstraction',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['0','0','132px','132px','auto','auto'],
      type: 'image',
      id: 'node_imp_128px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_ppa_128px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','132px','132px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_effect}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '124px'],
            ["style", "top", '2px'],
            ["style", "opacity", '0.15847729146481'],
            ["transform", "scaleY", '1'],
            ["style", "height", '124px'],
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "left", '2px'],
            ["style", "cursor", 'pointer']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '124px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "left", '2px'],
            ["style", "height", '124px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '1']
         ],
         "${_node_imp_128px}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '132px'],
            ["style", "font-size", '24px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '256px']
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
         "${_label}": [
            ["style", "line-height", '16px'],
            ["style", "letter-spacing", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "width", '132px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "font-size", '16px'],
            ["style", "top", '50px'],
            ["transform", "scaleY", '1'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "font-weight", '400']
         ],
         "${symbolSelector}": [
            ["style", "height", '132px'],
            ["style", "width", '132px']
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
         "${_name}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '132px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '132px'],
            ["style", "font-size", '36px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '440px'],
            ["style", "right", 'auto']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid511", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeOutElastic" },
            { id: "eid3782", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid541", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid501", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid638", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3514", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid912", tween: [ "style", "${_node_imp_128px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3459", tween: [ "style", "${_node_imp_128px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid654", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid641", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3516", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3517", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid636", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3515", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid635", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3513", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid540", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"node-mir": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','100px','100px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['auto','0px','96px','32px','100px','auto'],
         id: 'year',
         text: '1909',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','']
      },
      {
         type: 'text',
         rect: ['auto','auto','224px','32px','100px','100px'],
         id: 'name',
         text: 'mir iskusstva',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','']
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
      type: 'text',
      rect: ['0px','32px','100px','32px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'mir<br>iskusstva',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',14,'rgba(0,0,0,1.00)','400','none','']
   },
   {
      rect: ['0px','0px','100px','100px','auto','auto'],
      type: 'image',
      id: 'node_sym_096px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_mir_096px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','68px','68px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_effect}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '88.452830188679px'],
            ["style", "top", '4px'],
            ["style", "opacity", '0.15847729146481'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'none'],
            ["style", "height", '88.452830188679px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '4px']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '92px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "left", '2px'],
            ["style", "height", '92px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '1']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", 'auto'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", 'auto'],
            ["style", "font-size", '24px'],
            ["style", "top", '0.49px'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '96px'],
            ["style", "right", '100px']
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
            ["style", "font-weight", '400'],
            ["style", "left", '0px'],
            ["style", "width", '100px'],
            ["style", "top", '32px'],
            ["style", "font-size", '16px'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '31.796875px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "opacity", '1']
         ],
         "${symbolSelector}": [
            ["style", "height", '100px'],
            ["style", "width", '100px']
         ],
         "${_bounds}": [
            ["style", "top", '0px'],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleY", '1'],
            ["style", "left", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "height", '99.901661835092px'],
            ["style", "border-width", '0px'],
            ["style", "width", '100px']
         ],
         "${_node_sym_096px}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_name}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '100px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", 'auto'],
            ["style", "font-size", '36px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '224px'],
            ["style", "right", '100px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid914", tween: [ "style", "${_node_sym_096px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3487", tween: [ "style", "${_node_sym_096px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid656", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3673", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid464", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid658", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3674", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid660", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3675", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid664", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid665", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3676", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3677", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid461", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3910", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid474", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid473", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"node-sva": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','100px','100px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['auto','auto','320px','32px','100px','100px'],
         id: 'name',
         text: 'audiovisual art',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','']
      },
      {
         type: 'text',
         rect: ['auto','0px','256px','32px','100px','auto'],
         id: 'year',
         text: '1972',
         align: 'right',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','']
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
      type: 'text',
      rect: ['0px','36px','100px','32px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'audiovisual<br>art',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',14,'rgba(0,0,0,1.00)','400','none','']
   },
   {
      rect: ['0px','0px','100px','100px','auto','auto'],
      type: 'image',
      id: 'node_sym_096px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_ava_096px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','68px','68px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
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
            ["style", "opacity", '0.15847729146481']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '92px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "opacity", '1'],
            ["style", "height", '92px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '2px']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", 'auto'],
            ["style", "font-size", '24px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", '100px'],
            ["style", "width", '256px']
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
            ["style", "font-weight", '400'],
            ["style", "left", '0px'],
            ["style", "width", '100px'],
            ["style", "top", '36px'],
            ["style", "opacity", '1'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "font-size", '16px']
         ],
         "${symbolSelector}": [
            ["style", "height", '100px'],
            ["style", "width", '100px']
         ],
         "${_bounds}": [
            ["style", "top", '0px'],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleY", '1'],
            ["style", "left", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "height", '99.901661835092px'],
            ["style", "border-width", '0px'],
            ["style", "width", '100px']
         ],
         "${_node_sym_096px}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_name}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '100px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", 'auto'],
            ["style", "font-size", '36px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", '100px'],
            ["style", "width", '320px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid914", tween: [ "style", "${_node_sym_096px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3493", tween: [ "style", "${_node_sym_096px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid474", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid464", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid658", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3644", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid656", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3643", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid664", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid665", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3646", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3647", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid461", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3886", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid660", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3645", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid473", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"node-con": {
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
      type: 'group',
      id: 'people',
      rect: ['0px','0px','132px','132px','auto','auto'],
      display: 'none',
      transform: {},
      c: [
      {
         type: 'text',
         rect: ['132px','0px','256px','32px','auto','auto'],
         id: 'year',
         text: '1917–28, Moscow',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none','']
      },
      {
         type: 'text',
         rect: ['132px','auto','250px','32px','auto','132px'],
         id: 'name',
         text: 'constructivism',
         align: 'left',
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none','']
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
      type: 'text',
      rect: ['0px','51px','132px','30px','auto','auto'],
      align: 'center',
      id: 'label',
      text: 'constructivism',
      opacity: 1,
      font: ['Source Sans Pro Local, sans-serif',16,'rgba(51,51,51,1.00)','400','none','']
   },
   {
      rect: ['0','0','132px','132px','auto','auto'],
      type: 'image',
      id: 'node_con_128px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_con_128px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','132px','132px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_effect}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '124px'],
            ["style", "top", '2px'],
            ["style", "opacity", '0.15847729146481'],
            ["transform", "scaleY", '1'],
            ["style", "height", '124px'],
            ["style", "display", 'none'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "left", '2px'],
            ["style", "cursor", 'pointer']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '124px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "left", '2px'],
            ["style", "height", '124px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '1']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '132px'],
            ["style", "font-size", '24px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '256px']
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
         "${_node_con_128px}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1']
         ],
         "${_label}": [
            ["style", "line-height", '16px'],
            ["style", "letter-spacing", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "font-size", '16px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '132px'],
            ["style", "top", '58px'],
            ["transform", "scaleY", '1'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "font-weight", '400']
         ],
         "${symbolSelector}": [
            ["style", "height", '132px'],
            ["style", "width", '132px']
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
         "${_name}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '132px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '132px'],
            ["style", "font-size", '36px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '250px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid912", tween: [ "style", "${_node_con_128px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3499", tween: [ "style", "${_node_con_128px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid511", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeOutElastic" },
            { id: "eid3926", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid636", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3695", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid501", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid638", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3694", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid654", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid641", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3696", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3697", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid540", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid541", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid635", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3693", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 }         ]
      }
   }
},
"node-lan": {
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
      display: 'none',
      type: 'group',
      id: 'people',
      rect: ['0px','0px','100px','100px','auto','auto'],
      c: [
      {
         font: ['Source Sans Pro Local, sans-serif',36,'rgba(51,51,51,1.00)','700','none',''],
         type: 'text',
         id: 'name',
         text: 'land art',
         align: 'right',
         rect: ['auto','auto','194px','32px','100px','100px']
      },
      {
         font: ['Source Sans Pro Local, sans-serif',24,'rgba(51,51,51,1.00)','400','none',''],
         type: 'text',
         id: 'year',
         text: '1960',
         align: 'right',
         rect: ['auto','0px','96px','32px','100px','auto']
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
      font: ['Source Sans Pro Local, sans-serif',14,'rgba(0,0,0,1.00)','400','none',''],
      type: 'text',
      text: 'land<br>art',
      id: 'label',
      opacity: 1,
      align: 'center',
      rect: ['0px','34px','100px','32px','auto','auto']
   },
   {
      type: 'image',
      rect: ['0px','0px','100px','100px','auto','auto'],
      id: 'node_sym_096px',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','img/node_lan_096px.png','0px','0px']
   },
   {
      userClass: 'bounds',
      rect: ['0px','0px','68px','68px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'bounds',
      stroke: [0,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_effect}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '88.452830188679px'],
            ["style", "top", '4px'],
            ["style", "opacity", '0.15847729146481'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'none'],
            ["style", "height", '88.452830188679px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '4px']
         ],
         "${_node}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '2px'],
            ["style", "width", '92px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "left", '2px'],
            ["style", "height", '92px'],
            ["color", "border-color", 'rgba(51,51,51,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '1']
         ],
         "${_year}": [
            ["style", "line-height", '32px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", 'auto'],
            ["style", "font-size", '24px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", '100px'],
            ["style", "width", '96px']
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
            ["style", "font-weight", '400'],
            ["style", "left", '0px'],
            ["style", "width", '100px'],
            ["style", "top", '34px'],
            ["style", "font-size", '16px'],
            ["style", "text-align", 'center'],
            ["style", "text-indent", '0px'],
            ["style", "height", '31.796875px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "opacity", '1']
         ],
         "${symbolSelector}": [
            ["style", "height", '100px'],
            ["style", "width", '100px']
         ],
         "${_bounds}": [
            ["style", "top", '0px'],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleY", '1'],
            ["style", "left", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "height", '99.901661835092px'],
            ["style", "border-width", '0px'],
            ["style", "width", '100px']
         ],
         "${_node_sym_096px}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_name}": [
            ["style", "line-height", '32px'],
            ["style", "bottom", '100px'],
            ["color", "color", 'rgba(51,51,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", 'auto'],
            ["style", "font-size", '36px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'right'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "right", '100px'],
            ["style", "width", '194px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5250,
         autoPlay: false,
         labels: {
            "spawn": 0,
            "hover": 2000,
            "rehover": 2500,
            "active": 4000,
            "inactive": 5000
         },
         timeline: [
            { id: "eid461", tween: [ "style", "${_people}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3989", tween: [ "style", "${_people}", "display", 'none', { fromValue: 'block'}], position: 3750, duration: 0 },
            { id: "eid660", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3770", tween: [ "transform", "${_effect}", "scaleY", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid464", tween: [ "style", "${_people}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 250 },
            { id: "eid658", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 2000, duration: 750 },
            { id: "eid3769", tween: [ "style", "${_effect}", "opacity", '0', { fromValue: '0.15847729146481'}], position: 4000, duration: 750 },
            { id: "eid474", tween: [ "transform", "${_people}", "scaleY", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" },
            { id: "eid664", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid665", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 2750, duration: 0 },
            { id: "eid3771", tween: [ "style", "${_effect}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid3772", tween: [ "style", "${_effect}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0 },
            { id: "eid914", tween: [ "style", "${_node_sym_096px}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid3511", tween: [ "style", "${_node_sym_096px}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
            { id: "eid656", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 2000, duration: 750 },
            { id: "eid3768", tween: [ "transform", "${_effect}", "scaleX", '2', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid473", tween: [ "transform", "${_people}", "scaleX", '1', { fromValue: '1.6'}], position: 2000, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"noodle_0256": {
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
      id: 'arrow',
      type: 'group',
      rect: ['0','-11px','362','26','auto','auto'],
      c: [
      {
         transform: [{1:0,0:0},['360deg']],
         rect: ['0px','11px','256px','4px','auto','auto'],
         id: 'arrow_line',
         stroke: [0,'rgba(0,0,0,0.00)','none'],
         type: 'rect',
         fill: ['rgba(51,51,51,1.00)']
      },
      {
         id: 'arrow_head',
         type: 'group',
         rect: ['174px','0px','14','26','auto','auto'],
         c: [
         {
            transform: [{1:0,0:0},['-45deg']],
            rect: ['5px','-1px','4px','16px','auto','auto'],
            id: 'arrow_B',
            stroke: [0,'rgba(0, 0, 0, 0)','none'],
            type: 'rect',
            fill: ['rgba(51,51,51,1)']
         },
         {
            transform: [{1:0,0:0},['45deg']],
            rect: ['5px','11px','4px','16px','auto','auto'],
            id: 'arrow_T',
            stroke: [0,'rgba(0, 0, 0, 0)','none'],
            type: 'rect',
            fill: ['rgba(51,51,51,1)']
         }]
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_arrow_head}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '128px']
         ],
         "${_arrow_line}": [
            ["color", "background-color", 'rgba(51,51,51,1.00)'],
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '11px'],
            ["transform", "rotateZ", '360deg'],
            ["style", "height", '4px'],
            ["color", "border-color", 'rgba(0,0,0,0.00)'],
            ["style", "left", '0px'],
            ["style", "width", '256px']
         ],
         "${symbolSelector}": [
            ["style", "height", '4px'],
            ["style", "width", '362px']
         ],
         "${_arrow_T}": [
            ["style", "top", '11px'],
            ["transform", "rotateZ", '45deg'],
            ["style", "height", '16px'],
            ["style", "left", '5px'],
            ["style", "width", '4px']
         ],
         "${_arrow_B}": [
            ["style", "top", '-1px'],
            ["transform", "rotateZ", '-45deg'],
            ["style", "height", '16px'],
            ["style", "left", '5px'],
            ["style", "width", '4px']
         ],
         "${_arrow}": [
            ["style", "top", '-11px'],
            ["style", "opacity", '1']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"noodle_0362": {
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
      id: 'arrow',
      type: 'group',
      rect: ['0','-11px','362','26','auto','auto'],
      c: [
      {
         transform: [{1:0,0:0},['360deg']],
         rect: ['0px','11px','362px','4px','auto','auto'],
         id: 'arrow_line',
         stroke: [0,'rgba(0,0,0,0.00)','none'],
         type: 'rect',
         fill: ['rgba(51,51,51,1.00)']
      },
      {
         id: 'arrow_head',
         type: 'group',
         rect: ['174px','0px','14','26','auto','auto'],
         c: [
         {
            transform: [{1:0,0:0},['-45deg']],
            rect: ['5px','-1px','4px','16px','auto','auto'],
            id: 'arrow_B',
            stroke: [0,'rgba(0, 0, 0, 0)','none'],
            type: 'rect',
            fill: ['rgba(51,51,51,1)']
         },
         {
            transform: [{1:0,0:0},['45deg']],
            rect: ['5px','11px','4px','16px','auto','auto'],
            id: 'arrow_T',
            stroke: [0,'rgba(0, 0, 0, 0)','none'],
            type: 'rect',
            fill: ['rgba(51,51,51,1)']
         }]
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_arrow_head}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '174px']
         ],
         "${_arrow_line}": [
            ["style", "top", '11px'],
            ["color", "background-color", 'rgba(51,51,51,1.00)'],
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '360deg'],
            ["style", "height", '4px'],
            ["color", "border-color", 'rgba(0,0,0,0.00)'],
            ["style", "left", '0px'],
            ["style", "width", '362px']
         ],
         "${symbolSelector}": [
            ["style", "height", '4px'],
            ["style", "width", '362px']
         ],
         "${_arrow_T}": [
            ["style", "top", '11px'],
            ["transform", "rotateZ", '45deg'],
            ["style", "height", '16px'],
            ["style", "left", '5px'],
            ["style", "width", '4px']
         ],
         "${_arrow_B}": [
            ["style", "top", '-1px'],
            ["transform", "rotateZ", '-45deg'],
            ["style", "height", '16px'],
            ["style", "left", '5px'],
            ["style", "width", '4px']
         ],
         "${_arrow}": [
            ["style", "top", '-11px'],
            ["style", "opacity", '1']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"noodle_0512": {
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
      id: 'arrow',
      type: 'group',
      rect: ['0','-11px','362','26','auto','auto'],
      c: [
      {
         transform: [{1:0,0:0},['360deg']],
         rect: ['0px','11px','512px','4px','auto','auto'],
         id: 'arrow_line',
         stroke: [0,'rgba(0,0,0,0.00)','none'],
         type: 'rect',
         fill: ['rgba(51,51,51,1.00)']
      },
      {
         id: 'arrow_head',
         type: 'group',
         rect: ['174px','0px','14','26','auto','auto'],
         c: [
         {
            transform: [{1:0,0:0},['-45deg']],
            rect: ['5px','-1px','4px','16px','auto','auto'],
            id: 'arrow_B',
            stroke: [0,'rgba(0, 0, 0, 0)','none'],
            type: 'rect',
            fill: ['rgba(51,51,51,1)']
         },
         {
            transform: [{1:0,0:0},['45deg']],
            rect: ['5px','11px','4px','16px','auto','auto'],
            id: 'arrow_T',
            stroke: [0,'rgba(0, 0, 0, 0)','none'],
            type: 'rect',
            fill: ['rgba(51,51,51,1)']
         }]
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_arrow_head}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '256px']
         ],
         "${_arrow_line}": [
            ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '11px'],
            ["color", "background-color", 'rgba(51,51,51,1.00)'],
            ["transform", "rotateZ", '360deg'],
            ["style", "height", '4px'],
            ["color", "border-color", 'rgba(0,0,0,0.00)'],
            ["style", "left", '0px'],
            ["style", "width", '512px']
         ],
         "${symbolSelector}": [
            ["style", "height", '4px'],
            ["style", "width", '362px']
         ],
         "${_arrow_T}": [
            ["style", "top", '11px'],
            ["transform", "rotateZ", '45deg'],
            ["style", "height", '16px'],
            ["style", "left", '5px'],
            ["style", "width", '4px']
         ],
         "${_arrow_B}": [
            ["style", "top", '-1px'],
            ["transform", "rotateZ", '-45deg'],
            ["style", "height", '16px'],
            ["style", "left", '5px'],
            ["style", "width", '4px']
         ],
         "${_arrow}": [
            ["style", "top", '-11px'],
            ["style", "opacity", '1']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"action_R": {
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
      rect: ['auto','0px','200px','36px','0px','auto'],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      opacity: 1,
      id: 'base',
      stroke: [0,'rgba(51,51,51,0.00)','solid'],
      type: 'rect',
      fill: ['rgba(51,51,51,1.00)']
   },
   {
      type: 'text',
      rect: ['8px','0px','192px','36px','auto','auto'],
      opacity: 1,
      id: 'enter',
      text: 'ENTER GALLERY',
      align: 'center',
      font: ['Source Sans Pro Local, sans-serif',24,'rgba(255,255,255,1.00)','600','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_base}": [
            ["color", "background-color", 'rgba(51,51,51,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '1'],
            ["style", "border-width", '0px'],
            ["style", "width", '200px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", 'auto'],
            ["style", "height", '36px'],
            ["color", "border-color", 'rgba(51,51,51,0.00)'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "right", '0px']
         ],
         "${_enter}": [
            ["style", "line-height", '36px'],
            ["style", "letter-spacing", '1px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '600'],
            ["style", "left", '8px'],
            ["style", "width", '192px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'center'],
            ["style", "height", '36px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "opacity", '1']
         ],
         "${symbolSelector}": [
            ["style", "height", '36px'],
            ["style", "width", '200px']
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
"action_L": {
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
      rect: ['auto','0px','200px','36px','0px','auto'],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      opacity: 1,
      id: 'base',
      stroke: [0,'rgba(51,51,51,0.00)','solid'],
      type: 'rect',
      fill: ['rgba(51,51,51,1.00)']
   },
   {
      rect: ['0px','0px','192px','36px','auto','auto'],
      font: ['Source Sans Pro Local, sans-serif',24,'rgba(255,255,255,1.00)','600','none','normal'],
      text: 'ENTER GALLERY',
      id: 'enter',
      opacity: 1,
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_enter}": [
            ["style", "line-height", '36px'],
            ["style", "letter-spacing", '1px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '600'],
            ["style", "left", '0px'],
            ["style", "width", '192px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'center'],
            ["style", "height", '36px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "opacity", '1']
         ],
         "${_base}": [
            ["color", "background-color", 'rgba(51,51,51,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '1'],
            ["style", "border-width", '0px'],
            ["style", "width", '200px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "right", '0px'],
            ["style", "height", '36px'],
            ["color", "border-color", 'rgba(51,51,51,0.00)'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", 'auto']
         ],
         "${symbolSelector}": [
            ["style", "height", '36px'],
            ["style", "width", '200px']
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
"action": {
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
      rect: ['auto','0px','200px','36px','0px','auto'],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      opacity: 1,
      id: 'base',
      stroke: [0,'rgba(51,51,51,0.00)','solid'],
      type: 'rect',
      fill: ['rgba(51,51,51,1.00)']
   },
   {
      rect: ['0px','0px','200px','36px','auto','auto'],
      font: ['Source Sans Pro Local, sans-serif',24,'rgba(255,255,255,1.00)','600','none','normal'],
      text: 'ENTER GALLERY',
      id: 'enter',
      opacity: 1,
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_base}": [
            ["color", "background-color", 'rgba(51,51,51,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '1'],
            ["style", "border-width", '0px'],
            ["style", "width", '200px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "right", '0px'],
            ["style", "height", '36px'],
            ["color", "border-color", 'rgba(51,51,51,0.00)'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", 'auto']
         ],
         "${_enter}": [
            ["style", "line-height", '36px'],
            ["style", "letter-spacing", '1px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '600'],
            ["style", "left", '0px'],
            ["style", "width", '200px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'center'],
            ["style", "height", '36px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "opacity", '1']
         ],
         "${symbolSelector}": [
            ["style", "height", '36px'],
            ["style", "width", '200px']
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
"note-rcc": {
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
      font: ['Source Sans Pro Local, sans-serif',24,'rgba(245,245,245,1.00)','300','none','normal'],
      type: 'text',
      id: 'artist2',
      text: 'Joseph Goebbels',
      align: 'left',
      rect: ['2px','44px','210px','24px','auto','auto']
   },
   {
      font: ['Source Sans Pro Local, sans-serif',60,'rgba(245,245,245,1.00)','900','none','normal'],
      type: 'text',
      id: 'group',
      text: 'REICHKULTURKAMMER',
      align: 'left',
      rect: ['0px','0px','750px','44px','auto','auto']
   },
   {
      rect: ['-11px','3px','2px','150px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(248,248,248,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle}": [
            ["style", "top", '3px'],
            ["style", "height", '150px'],
            ["color", "background-color", 'rgba(248,248,248,1)'],
            ["style", "left", '-11px'],
            ["style", "width", '2px']
         ],
         "${_artist2}": [
            ["style", "line-height", '24px'],
            ["color", "color", 'rgba(245,245,245,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '2px'],
            ["style", "font-size", '24px'],
            ["style", "top", '44px'],
            ["style", "text-align", 'left'],
            ["style", "right", 'auto'],
            ["style", "height", '24px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '210px'],
            ["style", "font-style", 'normal']
         ],
         "${_group}": [
            ["style", "line-height", '42px'],
            ["color", "color", 'rgba(245,245,245,1.00)'],
            ["style", "font-weight", '900'],
            ["style", "left", '0px'],
            ["style", "font-size", '60px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'left'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "height", '44px'],
            ["style", "width", '750px']
         ],
         "${symbolSelector}": [
            ["style", "height", '72px'],
            ["style", "width", '10px']
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
"note-fau": {
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
      font: ['Source Sans Pro Local, sans-serif',24,'rgba(245,245,245,1.00)','300','none','normal'],
      type: 'text',
      id: 'artist2',
      text: 'André Derain',
      align: 'right',
      rect: ['-232px','74px','210px','24px','auto','auto']
   },
   {
      font: ['Source Sans Pro Local, sans-serif',24,'rgba(245,245,245,1.00)','300','none','normal'],
      type: 'text',
      id: 'artist2Copy3',
      text: 'Henri Matisse',
      align: 'right',
      rect: ['-232px','6px','210px','24px','auto','auto']
   },
   {
      font: ['Source Sans Pro Local, sans-serif',60,'rgba(245,245,245,1.00)','900','none','normal'],
      type: 'text',
      id: 'group',
      text: 'LES FAUVES',
      align: 'right',
      rect: ['-380px','30px','360px','44px','auto','auto']
   },
   {
      rect: ['-11px','-77px','2px','172px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(248,248,248,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_artist2Copy3}": [
            ["style", "line-height", '24px'],
            ["color", "color", 'rgba(245,245,245,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '-232px'],
            ["style", "font-size", '24px'],
            ["style", "top", '6px'],
            ["style", "text-align", 'right'],
            ["style", "right", 'auto'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '210px'],
            ["style", "height", '24px']
         ],
         "${symbolSelector}": [
            ["style", "height", '72px'],
            ["style", "width", '10px']
         ],
         "${_group}": [
            ["style", "line-height", '42px'],
            ["color", "color", 'rgba(245,245,245,1.00)'],
            ["style", "font-weight", '900'],
            ["style", "left", '-380px'],
            ["style", "font-size", '60px'],
            ["style", "top", '30px'],
            ["style", "text-align", 'right'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '360px'],
            ["style", "height", '44px']
         ],
         "${_artist2}": [
            ["style", "line-height", '24px'],
            ["color", "color", 'rgba(245,245,245,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '-232px'],
            ["style", "font-size", '24px'],
            ["style", "top", '74px'],
            ["style", "text-align", 'right'],
            ["style", "font-style", 'normal'],
            ["style", "height", '24px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '210px'],
            ["style", "right", 'auto']
         ],
         "${_Rectangle}": [
            ["style", "top", '-77px'],
            ["style", "height", '172px'],
            ["color", "background-color", 'rgba(248,248,248,1)'],
            ["style", "left", '-11px'],
            ["style", "width", '2px']
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
"note-tig": {
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
      font: ['Source Sans Pro Local, sans-serif',24,'rgba(245,245,245,1.00)','300','none','normal'],
      type: 'text',
      id: 'artist2',
      text: 'Eduardo Paolozzi',
      align: 'right',
      rect: ['-232px','74px','210px','24px','auto','auto']
   },
   {
      font: ['Source Sans Pro Local, sans-serif',60,'rgba(245,245,245,1.00)','900','none','normal'],
      type: 'text',
      id: 'group',
      text: 'INDEPENDENT GROUP',
      align: 'right',
      rect: ['auto','30px','620px','44px','30px','auto']
   },
   {
      rect: ['-11px','-77px','2px','172px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(248,248,248,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_artist2}": [
            ["style", "line-height", '24px'],
            ["color", "color", 'rgba(245,245,245,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '-232px'],
            ["style", "font-size", '24px'],
            ["style", "top", '74px'],
            ["style", "text-align", 'right'],
            ["style", "right", 'auto'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '210px'],
            ["style", "height", '24px']
         ],
         "${_Rectangle}": [
            ["style", "top", '-77px'],
            ["style", "height", '172px'],
            ["color", "background-color", 'rgba(248,248,248,1)'],
            ["style", "left", '-11px'],
            ["style", "width", '2px']
         ],
         "${_group}": [
            ["style", "line-height", '42px'],
            ["color", "color", 'rgba(245,245,245,1.00)'],
            ["style", "font-weight", '900'],
            ["style", "left", 'auto'],
            ["style", "font-size", '60px'],
            ["style", "top", '30px'],
            ["style", "text-align", 'right'],
            ["style", "right", '30px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "height", '44px'],
            ["style", "width", '620px']
         ],
         "${symbolSelector}": [
            ["style", "height", '72px'],
            ["style", "width", '10px']
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
"note-ash": {
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
      font: ['Source Sans Pro Local, sans-serif',24,'rgba(245,245,245,1.00)','300','none','normal'],
      type: 'text',
      id: 'artist2Copy3',
      text: 'Robert Henri',
      align: 'right',
      rect: ['-232px','6px','210px','24px','auto','auto']
   },
   {
      font: ['Source Sans Pro Local, sans-serif',60,'rgba(245,245,245,1.00)','900','none','normal'],
      type: 'text',
      id: 'group',
      text: 'ASHCAN SCHOOL',
      align: 'right',
      rect: ['-500px','30px','480px','44px','auto','auto']
   },
   {
      rect: ['-11px','-85px','2px','255px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(248,248,248,1.00)']
   },
   {
      rect: ['-11px','-85px','2px','512px','auto','auto'],
      transform: [{1:0,0:0},['90deg']],
      id: 'RectangleCopy',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(248,248,248,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_artist2Copy3}": [
            ["style", "line-height", '24px'],
            ["color", "color", 'rgba(245,245,245,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '-232px'],
            ["style", "font-size", '24px'],
            ["style", "top", '6px'],
            ["style", "text-align", 'right'],
            ["style", "height", '24px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '210px'],
            ["style", "right", 'auto']
         ],
         "${_RectangleCopy}": [
            ["color", "background-color", 'rgba(248,248,248,1)'],
            ["transform", "rotateZ", '90deg'],
            ["style", "height", '512.2421875px'],
            ["style", "top", '-85.12px'],
            ["style", "left", '-10.62px'],
            ["style", "width", '2px']
         ],
         "${symbolSelector}": [
            ["style", "height", '72px'],
            ["style", "width", '10px']
         ],
         "${_group}": [
            ["style", "line-height", '42px'],
            ["color", "color", 'rgba(245,245,245,1.00)'],
            ["style", "font-weight", '900'],
            ["style", "left", '-500.35px'],
            ["style", "font-size", '60px'],
            ["style", "top", '30px'],
            ["style", "text-align", 'right'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "height", '44px'],
            ["style", "width", '480.357421875px']
         ],
         "${_Rectangle}": [
            ["style", "top", '-85.17px'],
            ["style", "height", '254.76042175293px'],
            ["color", "background-color", 'rgba(248,248,248,1)'],
            ["style", "left", '-11px'],
            ["style", "width", '2px']
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
"note-nxr": {
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
      font: ['Source Sans Pro Local, sans-serif',24,'rgba(245,245,245,1.00)','300','none','normal'],
      type: 'text',
      id: 'artist2',
      text: 'Yves Klein',
      align: 'left',
      rect: ['4px','44px','210px','24px','auto','auto']
   },
   {
      font: ['Source Sans Pro Local, sans-serif',60,'rgba(245,245,245,1.00)','900','none','normal'],
      type: 'text',
      id: 'group',
      text: 'NOUVEAUX RÉALISTES',
      align: 'left',
      rect: ['0px','0px','750px','44px','auto','auto']
   },
   {
      rect: ['-11px','3px','2px','150px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(248,248,248,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_artist2}": [
            ["style", "line-height", '24px'],
            ["color", "color", 'rgba(245,245,245,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '4px'],
            ["style", "font-size", '24px'],
            ["style", "top", '44px'],
            ["style", "text-align", 'left'],
            ["style", "font-style", 'normal'],
            ["style", "height", '24px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '210px'],
            ["style", "right", 'auto']
         ],
         "${_Rectangle}": [
            ["style", "top", '3px'],
            ["style", "height", '150px'],
            ["color", "background-color", 'rgba(248,248,248,1)'],
            ["style", "left", '-11px'],
            ["style", "width", '2px']
         ],
         "${_group}": [
            ["style", "line-height", '42px'],
            ["color", "color", 'rgba(245,245,245,1.00)'],
            ["style", "font-weight", '900'],
            ["style", "left", '0px'],
            ["style", "font-size", '60px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'left'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '750px'],
            ["style", "height", '44px']
         ],
         "${symbolSelector}": [
            ["style", "height", '72px'],
            ["style", "width", '10px']
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
"note-pro": {
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
      font: ['Source Sans Pro Local, sans-serif',24,'rgba(245,245,245,1.00)','300','none','normal'],
      type: 'text',
      id: 'artist2',
      text: 'Anatoly Lunacharsky',
      align: 'right',
      rect: ['-232px','74px','210px','24px','auto','auto']
   },
   {
      font: ['Source Sans Pro Local, sans-serif',24,'rgba(245,245,245,1.00)','300','none','normal'],
      type: 'text',
      id: 'artist2Copy3',
      text: 'Alexander Bogdanov',
      align: 'right',
      rect: ['-232px','6px','210px','24px','auto','auto']
   },
   {
      font: ['Source Sans Pro Local, sans-serif',60,'rgba(245,245,245,1.00)','900','none','normal'],
      type: 'text',
      id: 'group',
      text: 'PROLETKULT',
      align: 'left',
      rect: ['-380px','30px','360px','44px','auto','auto']
   },
   {
      rect: ['-11px','9px','2px','172px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(248,248,248,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_artist2Copy3}": [
            ["style", "line-height", '24px'],
            ["color", "color", 'rgba(245,245,245,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '-232px'],
            ["style", "font-size", '24px'],
            ["style", "top", '6px'],
            ["style", "text-align", 'right'],
            ["style", "height", '24px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '210px'],
            ["style", "right", 'auto']
         ],
         "${symbolSelector}": [
            ["style", "height", '72px'],
            ["style", "width", '10px']
         ],
         "${_Rectangle}": [
            ["style", "top", '9px'],
            ["style", "height", '172px'],
            ["color", "background-color", 'rgba(248,248,248,1)'],
            ["style", "left", '-11px'],
            ["style", "width", '2px']
         ],
         "${_artist2}": [
            ["style", "line-height", '24px'],
            ["color", "color", 'rgba(245,245,245,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '-232px'],
            ["style", "font-size", '24px'],
            ["style", "top", '74px'],
            ["style", "text-align", 'right'],
            ["style", "right", 'auto'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '210px'],
            ["style", "height", '24px']
         ],
         "${_group}": [
            ["style", "line-height", '42px'],
            ["color", "color", 'rgba(245,245,245,1.00)'],
            ["style", "font-weight", '900'],
            ["style", "left", '-380px'],
            ["style", "font-size", '60px'],
            ["style", "top", '30px'],
            ["style", "text-align", 'left'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "height", '44px'],
            ["style", "width", '360px']
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
"note-kod": {
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
      font: ['Source Sans Pro Local, sans-serif',24,'rgba(245,245,245,1.00)','300','none','normal'],
      type: 'text',
      id: 'artist2',
      text: 'Mikhail Larionov<br>',
      align: 'left',
      rect: ['2px','74px','210px','24px','auto','auto']
   },
   {
      font: ['Source Sans Pro Local, sans-serif',60,'rgba(245,245,245,1.00)','900','none','normal'],
      type: 'text',
      id: 'group',
      text: 'BUBNOVYI VALET',
      align: 'left',
      rect: ['0px','30px','600px','44px','auto','auto']
   },
   {
      rect: ['-11px','-68px','2px','256px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(248,248,248,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_group}": [
            ["style", "line-height", '42px'],
            ["color", "color", 'rgba(245,245,245,1.00)'],
            ["style", "font-weight", '900'],
            ["style", "left", '0px'],
            ["style", "font-size", '60px'],
            ["style", "top", '30px'],
            ["style", "text-align", 'left'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '599.5546875px'],
            ["style", "height", '44px']
         ],
         "${_artist2}": [
            ["style", "line-height", '24px'],
            ["color", "color", 'rgba(245,245,245,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '2px'],
            ["style", "font-size", '24px'],
            ["style", "top", '74px'],
            ["style", "text-align", 'left'],
            ["style", "height", '24px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '210px'],
            ["style", "right", 'auto']
         ],
         "${_Rectangle}": [
            ["style", "top", '-68.39px'],
            ["style", "height", '256px'],
            ["color", "background-color", 'rgba(248,248,248,1)'],
            ["style", "left", '-10.65px'],
            ["style", "width", '2px']
         ],
         "${symbolSelector}": [
            ["style", "height", '72px'],
            ["style", "width", '10px']
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
"note-chs": {
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
      font: ['Source Sans Pro Local, sans-serif',60,'rgba(245,245,245,1.00)','900','none','normal'],
      type: 'text',
      id: 'group',
      text: 'CHICAGO SCHOOL',
      align: 'right',
      rect: ['auto','30px','500px','44px','30px','auto']
   },
   {
      rect: ['-11px','-77px','2px','149px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(248,248,248,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle}": [
            ["style", "top", '-77px'],
            ["style", "height", '149px'],
            ["color", "background-color", 'rgba(248,248,248,1)'],
            ["style", "left", '-11px'],
            ["style", "width", '2px']
         ],
         "${_group}": [
            ["style", "line-height", '42px'],
            ["color", "color", 'rgba(245,245,245,1.00)'],
            ["style", "font-weight", '900'],
            ["style", "left", 'auto'],
            ["style", "font-size", '60px'],
            ["style", "top", '30px'],
            ["style", "text-align", 'right'],
            ["style", "font-style", 'normal'],
            ["style", "height", '44px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '500px'],
            ["style", "right", '30px']
         ],
         "${symbolSelector}": [
            ["style", "height", '72px'],
            ["style", "width", '10px']
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
"note-sit": {
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
      rect: ['-55px','-23px','500px','92px','auto','auto'],
      font: ['Source Sans Pro Local, sans-serif',60,'rgba(245,245,245,1.00)','900','none','normal'],
      id: 'group',
      text: 'SITUATIONISTS<br>INTERNATIONAL',
      align: 'right',
      type: 'text'
   },
   {
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['454px','-98px','256px','2px','auto','auto'],
      fill: ['rgba(248,248,248,1)']
   },
   {
      transform: [{1:0,0:0},['90deg']],
      rect: ['329px','29px','252px','2px','auto','auto'],
      id: 'RectangleCopy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(248,248,248,1)']
   },
   {
      transform: [{1:0,0:0},['180deg']],
      rect: ['200px','156px','256px','2px','auto','auto'],
      id: 'RectangleCopy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(248,248,248,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '72px'],
            ["style", "width", '10px']
         ],
         "${_Rectangle}": [
            ["style", "top", '-98.47px'],
            ["style", "height", '2px'],
            ["style", "left", '453.87px'],
            ["style", "width", '256px']
         ],
         "${_group}": [
            ["style", "line-height", '44px'],
            ["color", "color", 'rgba(245,245,245,1.00)'],
            ["style", "font-weight", '900'],
            ["style", "left", '-55px'],
            ["style", "font-size", '60px'],
            ["style", "top", '-23.31px'],
            ["style", "text-align", 'right'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '500px'],
            ["style", "height", '92px']
         ],
         "${_RectangleCopy2}": [
            ["style", "top", '29px'],
            ["transform", "rotateZ", '90deg'],
            ["style", "height", '2px'],
            ["style", "left", '329px'],
            ["style", "width", '252px']
         ],
         "${_RectangleCopy3}": [
            ["style", "top", '156px'],
            ["transform", "rotateZ", '180deg'],
            ["style", "height", '2px'],
            ["style", "left", '200px'],
            ["style", "width", '256px']
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
"note-dbr": {
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
      font: ['Source Sans Pro Local, sans-serif',24,'rgba(245,245,245,1.00)','300','none','normal'],
      type: 'text',
      id: 'artist2Copy',
      text: 'Wassily Kandinsky',
      align: 'right',
      rect: ['231px','auto','210px','24px','auto','65px']
   },
   {
      font: ['Source Sans Pro Local, sans-serif',60,'rgba(245,245,245,1.00)','900','none','normal'],
      type: 'text',
      id: 'group',
      text: 'DER BLAUE<br>REITER',
      align: 'right',
      rect: ['-56px','7px','500px','92px','auto','auto']
   },
   {
      rect: ['454px','156px','256px','2px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(248,248,248,1)']
   },
   {
      rect: ['329px','29px','252px','2px','auto','auto'],
      transform: [{1:0,0:0},['90deg']],
      id: 'RectangleCopy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(248,248,248,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_artist2Copy}": [
            ["style", "line-height", '24px'],
            ["style", "bottom", '64.62px'],
            ["color", "color", 'rgba(245,245,245,1)'],
            ["style", "font-weight", '300'],
            ["style", "left", '231px'],
            ["style", "font-size", '24px'],
            ["style", "top", 'auto'],
            ["style", "text-align", 'right'],
            ["style", "right", 'auto'],
            ["style", "height", '24px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '210px'],
            ["style", "font-style", 'normal']
         ],
         "${symbolSelector}": [
            ["style", "height", '72px'],
            ["style", "width", '10px']
         ],
         "${_Rectangle}": [
            ["style", "height", '2px'],
            ["style", "top", '155.52px'],
            ["style", "left", '453.87px'],
            ["style", "width", '256px']
         ],
         "${_RectangleCopy2}": [
            ["style", "top", '29px'],
            ["transform", "rotateZ", '90deg'],
            ["style", "height", '2px'],
            ["style", "left", '329px'],
            ["style", "width", '252px']
         ],
         "${_group}": [
            ["style", "line-height", '44px'],
            ["color", "color", 'rgba(245,245,245,1.00)'],
            ["style", "font-weight", '900'],
            ["style", "left", '-56px'],
            ["style", "font-size", '60px'],
            ["style", "top", '6.77px'],
            ["style", "text-align", 'right'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "height", '92px'],
            ["style", "width", '500px']
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
"note-bru": {
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
      font: ['Source Sans Pro Local, sans-serif',60,'rgba(245,245,245,1.00)','900','none','normal'],
      type: 'text',
      id: 'group',
      text: 'DIE BRÜCKE',
      align: 'right',
      rect: ['-380px','30px','360px','44px','auto','auto']
   },
   {
      rect: ['-11px','31px','2px','148px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(248,248,248,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_group}": [
            ["style", "line-height", '42px'],
            ["color", "color", 'rgba(245,245,245,1.00)'],
            ["style", "font-weight", '900'],
            ["style", "left", '-380px'],
            ["style", "font-size", '60px'],
            ["style", "top", '30px'],
            ["style", "text-align", 'right'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "height", '44px'],
            ["style", "width", '360px']
         ],
         "${_Rectangle}": [
            ["style", "top", '31px'],
            ["style", "height", '148px'],
            ["color", "background-color", 'rgba(248,248,248,1)'],
            ["style", "left", '-11px'],
            ["style", "width", '2px']
         ],
         "${symbolSelector}": [
            ["style", "height", '72px'],
            ["style", "width", '10px']
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
"note-vkh": {
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
      font: ['Source Sans Pro Local, sans-serif',24,'rgba(245,245,245,1.00)','300','none','normal'],
      type: 'text',
      id: 'artist2',
      text: 'El Lissitzky',
      align: 'left',
      rect: ['4px','65px','210px','24px','auto','auto']
   },
   {
      font: ['Source Sans Pro Local, sans-serif',24,'rgba(245,245,245,1.00)','300','none','normal'],
      type: 'text',
      id: 'artist2Copy3',
      text: 'Kazimir Malevich',
      align: 'left',
      rect: ['4px','-3px','210px','24px','auto','auto']
   },
   {
      font: ['Source Sans Pro Local, sans-serif',60,'rgba(245,245,245,1.00)','900','none','normal'],
      type: 'text',
      id: 'group',
      text: 'VKHUTEMAS',
      align: 'left',
      rect: ['4px','21px','360px','44px','auto','auto']
   },
   {
      rect: ['-11px','-87px','2px','172px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(248,248,248,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_artist2Copy3}": [
            ["style", "line-height", '24px'],
            ["color", "color", 'rgba(245,245,245,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '4px'],
            ["style", "font-size", '24px'],
            ["style", "top", '-3px'],
            ["style", "text-align", 'left'],
            ["style", "right", 'auto'],
            ["style", "height", '24px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '210px'],
            ["style", "font-style", 'normal']
         ],
         "${symbolSelector}": [
            ["style", "height", '72px'],
            ["style", "width", '10px']
         ],
         "${_Rectangle}": [
            ["style", "top", '-87px'],
            ["style", "height", '172px'],
            ["color", "background-color", 'rgba(248,248,248,1)'],
            ["style", "left", '-11px'],
            ["style", "width", '2px']
         ],
         "${_group}": [
            ["style", "line-height", '42px'],
            ["color", "color", 'rgba(245,245,245,1.00)'],
            ["style", "font-weight", '900'],
            ["style", "left", '4px'],
            ["style", "font-size", '60px'],
            ["style", "top", '21px'],
            ["style", "text-align", 'left'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '360px'],
            ["style", "height", '44px']
         ],
         "${_artist2}": [
            ["style", "line-height", '24px'],
            ["color", "color", 'rgba(245,245,245,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '4px'],
            ["style", "font-size", '24px'],
            ["style", "top", '65px'],
            ["style", "text-align", 'left'],
            ["style", "height", '24px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '210px'],
            ["style", "right", 'auto']
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
"note-dwb": {
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
      font: ['Source Sans Pro Local, sans-serif',24,'rgba(245,245,245,1.00)','300','none','normal'],
      type: 'text',
      id: 'artist2',
      text: 'Walter Gropius<br>',
      align: 'left',
      rect: ['7px','79px','210px','24px','auto','auto']
   },
   {
      font: ['Source Sans Pro Local, sans-serif',24,'rgba(245,245,245,1.00)','300','none','normal'],
      type: 'text',
      id: 'artist2Copy3',
      text: 'Hermann Muthesius',
      align: 'left',
      rect: ['5px','-37px','210px','24px','auto','auto']
   },
   {
      font: ['Source Sans Pro Local, sans-serif',60,'rgba(245,245,245,1.00)','900','none','normal'],
      type: 'text',
      id: 'group',
      text: 'DEUTSCHER<br>WERKBUND',
      align: 'left',
      rect: ['4px','-13px','340px','92px','auto','auto']
   },
   {
      rect: ['-11px','-67px','2px','254px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(248,248,248,1.00)']
   },
   {
      rect: ['-137px','-195px','2px','254px','auto','auto'],
      transform: [{1:0,0:0},['90deg']],
      id: 'RectangleCopy',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(248,248,248,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_artist2Copy3}": [
            ["style", "line-height", '24px'],
            ["color", "color", 'rgba(245,245,245,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '5px'],
            ["style", "font-size", '24px'],
            ["style", "top", '-37px'],
            ["style", "text-align", 'left'],
            ["style", "font-style", 'normal'],
            ["style", "height", '24px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '210px'],
            ["style", "right", 'auto']
         ],
         "${_RectangleCopy}": [
            ["style", "top", '-195.32px'],
            ["transform", "rotateZ", '90deg'],
            ["style", "height", '253.859375px'],
            ["color", "background-color", 'rgba(248,248,248,1)'],
            ["style", "left", '-137px'],
            ["style", "width", '2px']
         ],
         "${symbolSelector}": [
            ["style", "height", '72px'],
            ["style", "width", '10px']
         ],
         "${_Rectangle}": [
            ["style", "top", '-67.35px'],
            ["style", "height", '253.859375px'],
            ["color", "background-color", 'rgba(248,248,248,1)'],
            ["style", "left", '-11px'],
            ["style", "width", '2px']
         ],
         "${_artist2}": [
            ["style", "line-height", '24px'],
            ["color", "color", 'rgba(245,245,245,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '7px'],
            ["style", "font-size", '24px'],
            ["style", "top", '79px'],
            ["style", "text-align", 'left'],
            ["style", "right", 'auto'],
            ["style", "height", '24px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '210px'],
            ["style", "font-style", 'normal']
         ],
         "${_group}": [
            ["style", "line-height", '44px'],
            ["color", "color", 'rgba(245,245,245,1.00)'],
            ["style", "font-weight", '900'],
            ["style", "left", '4px'],
            ["style", "font-size", '60px'],
            ["style", "top", '-13px'],
            ["style", "text-align", 'left'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "height", '92px'],
            ["style", "width", '340px']
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
"note-csu": {
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
      font: ['Source Sans Pro Local, sans-serif',24,'rgba(245,245,245,1.00)','300','none','normal'],
      type: 'text',
      id: 'artist2',
      text: 'André Breton',
      align: 'left',
      rect: ['4px','44px','210px','24px','auto','auto']
   },
   {
      font: ['Source Sans Pro Local, sans-serif',60,'rgba(245,245,245,1.00)','900','none','normal'],
      type: 'text',
      id: 'group',
      text: 'CENTRALE SURRÉALISTE',
      align: 'left',
      rect: ['0px','0px','750px','44px','auto','auto']
   },
   {
      rect: ['-11px','3px','2px','150px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(248,248,248,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle}": [
            ["style", "top", '3px'],
            ["style", "height", '150px'],
            ["color", "background-color", 'rgba(248,248,248,1)'],
            ["style", "left", '-11px'],
            ["style", "width", '2px']
         ],
         "${_artist2}": [
            ["style", "line-height", '24px'],
            ["color", "color", 'rgba(245,245,245,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '4px'],
            ["style", "font-size", '24px'],
            ["style", "top", '44px'],
            ["style", "text-align", 'left'],
            ["style", "right", 'auto'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '210px'],
            ["style", "height", '24px']
         ],
         "${_group}": [
            ["style", "line-height", '42px'],
            ["color", "color", 'rgba(245,245,245,1.00)'],
            ["style", "font-weight", '900'],
            ["style", "left", '0px'],
            ["style", "font-size", '60px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'left'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "height", '44px'],
            ["style", "width", '750px']
         ],
         "${symbolSelector}": [
            ["style", "height", '72px'],
            ["style", "width", '10px']
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
"note-edp": {
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
      font: ['Source Sans Pro Local, sans-serif',24,'rgba(245,245,245,1.00)','300','none','normal'],
      type: 'text',
      id: 'artist2',
      text: 'Pablo Picasso<br>',
      align: 'right',
      rect: ['-231px','79px','210px','24px','auto','auto']
   },
   {
      font: ['Source Sans Pro Local, sans-serif',60,'rgba(245,245,245,1.00)','900','none','normal'],
      type: 'text',
      id: 'group',
      text: 'ÉCOLE DE<br>PARIS',
      align: 'right',
      rect: ['-359px','-13px','340px','92px','auto','auto']
   },
   {
      rect: ['-10px','-67px','2px','254px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(248,248,248,1.00)']
   },
   {
      rect: ['116px','-195px','2px','254px','auto','auto'],
      transform: [{1:0,0:0},['90deg']],
      id: 'RectangleCopy',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(248,248,248,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RectangleCopy}": [
            ["color", "background-color", 'rgba(248,248,248,1)'],
            ["transform", "rotateZ", '90deg'],
            ["style", "height", '253.859375px'],
            ["style", "top", '-195.32px'],
            ["style", "left", '116px'],
            ["style", "width", '2px']
         ],
         "${symbolSelector}": [
            ["style", "height", '72px'],
            ["style", "width", '10px']
         ],
         "${_Rectangle}": [
            ["style", "top", '-67.35px'],
            ["style", "height", '253.859375px'],
            ["color", "background-color", 'rgba(248,248,248,1)'],
            ["style", "left", '-10px'],
            ["style", "width", '2px']
         ],
         "${_group}": [
            ["style", "line-height", '44px'],
            ["color", "color", 'rgba(245,245,245,1.00)'],
            ["style", "font-weight", '900'],
            ["style", "left", '-359px'],
            ["style", "font-size", '60px'],
            ["style", "top", '-13px'],
            ["style", "text-align", 'right'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '340px'],
            ["style", "height", '92px']
         ],
         "${_artist2}": [
            ["style", "line-height", '24px'],
            ["color", "color", 'rgba(245,245,245,1.00)'],
            ["style", "font-weight", '300'],
            ["style", "left", '-231px'],
            ["style", "font-size", '24px'],
            ["style", "top", '79px'],
            ["style", "text-align", 'right'],
            ["style", "font-style", 'normal'],
            ["style", "height", '24px'],
            ["style", "font-family", 'Source Sans Pro Local, sans-serif'],
            ["style", "width", '210px'],
            ["style", "right", 'auto']
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

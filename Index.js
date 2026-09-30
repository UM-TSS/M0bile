(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Index_atlas_1", frames: [[794,794,421,122],[0,0,395,395],[397,0,395,395],[794,0,395,395],[1191,0,395,395],[1588,0,395,395],[0,397,395,395],[397,397,395,395],[794,397,395,395],[1191,397,395,395],[1588,397,395,395],[0,794,395,395],[397,794,395,395]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.button2 = function() {
	this.initialize(ss["Index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.cryingface01 = function() {
	this.initialize(img.cryingface01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3508,2481);


(lib.Homepages_nobutton = function() {
	this.initialize(img.Homepages_nobutton);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4000,2250);


(lib.Iconscards03 = function() {
	this.initialize(ss["Index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Iconscards04 = function() {
	this.initialize(ss["Index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Iconscards10 = function() {
	this.initialize(ss["Index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Iconscards11 = function() {
	this.initialize(ss["Index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Iconscards12 = function() {
	this.initialize(ss["Index_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Iconscards_RIM01pngcopy2 = function() {
	this.initialize(ss["Index_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Iconscards_RIM02pngcopy = function() {
	this.initialize(ss["Index_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Iconscards_RIM05pngcopy = function() {
	this.initialize(ss["Index_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Iconscards_RIM06pngcopy = function() {
	this.initialize(ss["Index_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Iconscards_RIM07pngcopy = function() {
	this.initialize(ss["Index_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Iconscards_RIM09pngcopy = function() {
	this.initialize(ss["Index_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Iconslogo13 = function() {
	this.initialize(ss["Index_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.logofull02 = function() {
	this.initialize(img.logofull02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4961,1788);


(lib.sad02 = function() {
	this.initialize(img.sad02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2481,1748);


(lib.Trophy01 = function() {
	this.initialize(img.Trophy01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2481,3508);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.YouWin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("YOU WIN!!!", "normal 700 120px 'Passion One'", "#C4D82D");
	this.text.textAlign = "center";
	this.text.lineHeight = 124;
	this.text.lineWidth = 731;
	this.text.parent = this;
	this.text.setTransform(0.007,-154.25,0.8928,0.8928);
	if(!lib.properties.webfonts['Passion One']) {
		lib.webFontTxtInst['Passion One'] = lib.webFontTxtInst['Passion One'] || [];
		lib.webFontTxtInst['Passion One'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-328,-156,656,112.1);


(lib.YouLose = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.cryingface01();
	this.instance.setTransform(-118,-12,0.0664,0.0664);

	this.text = new cjs.Text("YOU LOSE...", "normal 700 96px 'Passion One'", "#CC0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 99;
	this.text.lineWidth = 731;
	this.text.parent = this;
	this.text.setTransform(0,-128.65);
	if(!lib.properties.webfonts['Passion One']) {
		lib.webFontTxtInst['Passion One'] = lib.webFontTxtInst['Passion One'] || [];
		lib.webFontTxtInst['Passion One'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-367.3,-130.6,734.7,283.4);


(lib.TapToStart = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Tap to start", "normal 700 68px 'Passion One'");
	this.text.textAlign = "center";
	this.text.lineHeight = 71;
	this.text.lineWidth = 408;
	this.text.parent = this;
	this.text.setTransform(0,-34.45);
	if(!lib.properties.webfonts['Passion One']) {
		lib.webFontTxtInst['Passion One'] = lib.webFontTxtInst['Passion One'] || [];
		lib.webFontTxtInst['Passion One'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206.1,-36.4,412.29999999999995,72.9);


(lib.Rec3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.button2();
	this.instance.setTransform(-208,-52,0.9857,0.854);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-208,-52,415,104.2);


(lib.Rec2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhK/AqMMAAAhUXMCV/AAAMAAABUXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-480,-270,960,540);


(lib.Rec1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C4D82D").s().p("Aq4FkQhkAAAAhkIAAn/QAAhkBkAAIVxAAQBkAAAABkIAAH/QAABkhkAAg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.7,-35.6,159.5,71.2);


(lib.Rec = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.button2();
	this.instance.setTransform(-119,-52,0.5636,0.8512);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BACF00").s().p("AuwHXQiJAAAAiJIAAqbQAAiJCJAAIdgAAQCKAAAACJIAAKbQAACJiKAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119,-52,237.3,103.9);


(lib.Logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tf
	this.instance = new lib.logofull02();
	this.instance.setTransform(-369,-133,0.1489,0.1489);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-369,-133,738.5,266.2);


(lib.InvisibleButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("EhK/AqMMAAAhUXMCV/AAAMAAABUXg");
	this.shape.setTransform(480,270);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,960,540);


(lib.Hit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ak/FAIAAp/IJ/AAIAAJ/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-32,64,64);


(lib.Faces = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11));

	// numbers
	this.instance = new lib.Iconscards_RIM01pngcopy2();
	this.instance.setTransform(-102,-101,0.5139,0.5139);

	this.text = new cjs.Text("0", "normal 400 130px 'Passion One'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 136;
	this.text.lineWidth = 172;
	this.text.parent = this;
	this.text.setTransform(0,-67.15);
	if(!lib.properties.webfonts['Passion One']) {
		lib.webFontTxtInst['Passion One'] = lib.webFontTxtInst['Passion One'] || [];
		lib.webFontTxtInst['Passion One'].push(this.text);
	}

	this.instance_1 = new lib.Iconscards_RIM02pngcopy();
	this.instance_1.setTransform(-102,-101,0.5139,0.5139);

	this.instance_2 = new lib.Iconscards03();
	this.instance_2.setTransform(-102,-101,0.5139,0.5139);

	this.instance_3 = new lib.Iconscards04();
	this.instance_3.setTransform(-102,-101,0.5139,0.5139);

	this.instance_4 = new lib.Iconscards_RIM05pngcopy();
	this.instance_4.setTransform(-102,-101,0.5139,0.5139);

	this.instance_5 = new lib.Iconscards_RIM06pngcopy();
	this.instance_5.setTransform(-102,-101,0.5139,0.5139);

	this.instance_6 = new lib.Iconscards_RIM07pngcopy();
	this.instance_6.setTransform(-102,-101,0.5139,0.5139);

	this.instance_7 = new lib.Iconscards12();
	this.instance_7.setTransform(-102,-101,0.5139,0.5139);

	this.instance_8 = new lib.Iconscards_RIM09pngcopy();
	this.instance_8.setTransform(-102,-101,0.5139,0.5139);

	this.instance_9 = new lib.Iconscards10();
	this.instance_9.setTransform(-102,-101,0.5139,0.5139);

	this.instance_10 = new lib.Iconscards11();
	this.instance_10.setTransform(-102,-101,0.5139,0.5139);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{text:"0"}},{t:this.instance}]}).to({state:[{t:this.text,p:{text:"1"}},{t:this.instance_1}]},1).to({state:[{t:this.text,p:{text:"2"}},{t:this.instance_2}]},1).to({state:[{t:this.text,p:{text:"3"}},{t:this.instance_3}]},1).to({state:[{t:this.text,p:{text:"4"}},{t:this.instance_4}]},1).to({state:[{t:this.text,p:{text:"5"}},{t:this.instance_5}]},1).to({state:[{t:this.text,p:{text:"6"}},{t:this.instance_6}]},1).to({state:[{t:this.text,p:{text:"7"}},{t:this.instance_7}]},1).to({state:[{t:this.text,p:{text:"8"}},{t:this.instance_8}]},1).to({state:[{t:this.text,p:{text:"9"}},{t:this.instance_9}]},1).to({state:[{t:this.text,p:{text:"10"}},{t:this.instance_10}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102,-101,203,203);


(lib.exitFullScreenBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AikClIAAlJIFJAAIAAFJg");
	this.shape.setTransform(0.5,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-18,33,33);


(lib.FullScreenButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// icons
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D9D195").ss(4,2,0,3).p("ADIhKIh9AAIAAh9ABLDIIAAh9IB9AAAhKjHIAAB9Ih9AAAjHBLIB9AAIAAB9");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// hit
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AkrEsIAApXIJXAAIAAJXg");
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-30,60,60);


(lib.Arrow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C4D82D").s().p("AgGCLIkZAAIAAkWIEZAAIAAiWIEmEiIkmEhg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.8,-28.9,57.6,57.9);


(lib.YouWinAnim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// anim
	this.instance = new lib.YouWin("single",0);
	this.instance.setTransform(0,0,0.05,0.05);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:1},29,cjs.Ease.backOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-359,-170.8,718.1,168.60000000000002);


(lib.YouLoseAnim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// anim
	this.instance = new lib.YouLose("single",0);
	this.instance.setTransform(0,0,0.05,0.05);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:1},29,cjs.Ease.backOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-402.1,-143,804.3,310.3);


(lib.YesButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tf
	this.tf = new cjs.Text("YES", "normal 700 48px 'Passion One'", "#FFFFFF");
	this.tf.name = "tf";
	this.tf.textAlign = "center";
	this.tf.lineHeight = 51;
	this.tf.lineWidth = 98;
	this.tf.parent = this;
	this.tf.setTransform(0,-24.35);
	if(!lib.properties.webfonts['Passion One']) {
		lib.webFontTxtInst['Passion One'] = lib.webFontTxtInst['Passion One'] || [];
		lib.webFontTxtInst['Passion One'].push(this.tf);
	}

	this.timeline.addTween(cjs.Tween.get(this.tf).wait(1).to({x:4.8,y:-26.75},0).wait(1).to({font:"normal 700 44px 'Passion One'",lineHeight:46.55},0).to({_off:true},1).wait(1));

	// rec
	this.instance = new lib.Rec1("single",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.9,scaleY:0.9},0).to({_off:true},1).wait(1));

	// hit
	this.instance_1 = new lib.Rec1("single",0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.7,-35.6,159.5,71.2);


(lib.TapToStartAnim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tapToStart
	this.instance = new lib.TapToStart("single",0);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},59,cjs.Ease.sineInOut).wait(30).to({startPosition:0},0).to({alpha:0},60,cjs.Ease.sineInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206.1,-36.4,412.29999999999995,72.9);


(lib.PlayButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tf
	this.tf = new cjs.Text("PLAY", "normal 700 68px 'Passion One'", "#C4D82D");
	this.tf.name = "tf";
	this.tf.textAlign = "center";
	this.tf.lineHeight = 71;
	this.tf.lineWidth = 174;
	this.tf.parent = this;
	this.tf.setTransform(0,-34.45);
	if(!lib.properties.webfonts['Passion One']) {
		lib.webFontTxtInst['Passion One'] = lib.webFontTxtInst['Passion One'] || [];
		lib.webFontTxtInst['Passion One'].push(this.tf);
	}

	this.timeline.addTween(cjs.Tween.get(this.tf).wait(1).to({x:5,y:-36.45,color:"#FFFFFF"},0).wait(1).to({font:"normal 700 64px 'Passion One'",lineHeight:66.85},0).to({_off:true},1).wait(1));

	// rec
	this.instance = new lib.Rec("single",0);
	this.instance.setTransform(0.35,0.05,1.1174,1.1174);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.9,scaleY:0.9,x:0,y:0},0).to({_off:true},1).wait(1));

	// hit
	this.instance_1 = new lib.Rec("single",0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132.6,-58,265.2,116);


(lib.PlayAgainButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tf
	this.tf = new cjs.Text("PLAY AGAIN", "normal 700 68px 'Passion One'", "#C4D82D");
	this.tf.name = "tf";
	this.tf.textAlign = "center";
	this.tf.lineHeight = 71;
	this.tf.lineWidth = 372;
	this.tf.parent = this;
	this.tf.setTransform(0,-34.45);
	if(!lib.properties.webfonts['Passion One']) {
		lib.webFontTxtInst['Passion One'] = lib.webFontTxtInst['Passion One'] || [];
		lib.webFontTxtInst['Passion One'].push(this.tf);
	}

	this.timeline.addTween(cjs.Tween.get(this.tf).wait(1).to({x:6.25,color:"#FFFFFF"},0).wait(1).to({font:"normal 700 64px 'Passion One'",lineHeight:66.85},0).to({_off:true},1).wait(1));

	// rec
	this.instance = new lib.Rec3("single",0);
	this.instance.setTransform(-0.05,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.9,scaleY:0.9,x:0},0).to({_off:true},1).wait(1));

	// hit
	this.instance_1 = new lib.Rec3("single",0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-208,-52,415,104.2);


(lib.NoButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tf
	this.tf = new cjs.Text("NO", "normal 700 48px 'Passion One'", "#FFFFFF");
	this.tf.name = "tf";
	this.tf.textAlign = "center";
	this.tf.lineHeight = 51;
	this.tf.lineWidth = 98;
	this.tf.parent = this;
	this.tf.setTransform(0,-24.35);
	if(!lib.properties.webfonts['Passion One']) {
		lib.webFontTxtInst['Passion One'] = lib.webFontTxtInst['Passion One'] || [];
		lib.webFontTxtInst['Passion One'].push(this.tf);
	}

	this.timeline.addTween(cjs.Tween.get(this.tf).wait(1).to({x:4.8,y:-26.75},0).wait(1).to({font:"normal 700 44px 'Passion One'",lineHeight:46.55},0).to({_off:true},1).wait(1));

	// rec
	this.instance = new lib.Rec1("single",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.9,scaleY:0.9},0).to({_off:true},1).wait(1));

	// hit
	this.instance_1 = new lib.Rec1("single",0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.7,-35.6,159.5,71.2);


(lib.MenuScreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.playButton = new lib.PlayButton();
	this.playButton.name = "playButton";
	this.playButton.setTransform(480,478.6,0.5541,0.5541);
	new cjs.ButtonHelper(this.playButton, 0, 1, 2, false, new lib.PlayButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.playButton).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MenuScreen, new cjs.Rectangle(406.5,446.4,146.89999999999998,64.30000000000001), null);


(lib.MenuButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tf
	this.tf = new cjs.Text("EXIT", "normal 700 68px 'Passion One'", "#C4D82D");
	this.tf.name = "tf";
	this.tf.textAlign = "center";
	this.tf.lineHeight = 71;
	this.tf.lineWidth = 160;
	this.tf.parent = this;
	this.tf.setTransform(0,-34.45);
	if(!lib.properties.webfonts['Passion One']) {
		lib.webFontTxtInst['Passion One'] = lib.webFontTxtInst['Passion One'] || [];
		lib.webFontTxtInst['Passion One'].push(this.tf);
	}

	this.timeline.addTween(cjs.Tween.get(this.tf).wait(1).to({x:5,y:-36.45,text:"MENU",color:"#FFFFFF",lineWidth:174},0).wait(1).to({font:"normal 700 64px 'Passion One'",lineHeight:66.85},0).to({_off:true},1).wait(1));

	// rec
	this.instance = new lib.Rec("single",0);
	this.instance.setTransform(0.45,0,0.9288,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.9,scaleY:0.9,x:0},0).to({_off:true},1).wait(1));

	// hit
	this.instance_1 = new lib.Rec("single",0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119,-52,237.3,103.9);


(lib.LoseScreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// youLose
	this.instance = new lib.YouLoseAnim();
	this.instance.setTransform(480,147.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// menuButton
	this.menuButton = new lib.MenuButton();
	this.menuButton.name = "menuButton";
	this.menuButton.setTransform(487.9,375.7,0.668,0.668,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.menuButton, 0, 1, 2, false, new lib.MenuButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.menuButton).wait(1));

	// playButton
	this.playAgainButton = new lib.PlayAgainButton();
	this.playAgainButton.name = "playAgainButton";
	this.playAgainButton.setTransform(480.25,467.2,0.668,0.668,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.playAgainButton, 0, 1, 2, false, new lib.PlayAgainButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.playAgainButton).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LoseScreen, new cjs.Rectangle(341.2,140.8,277.2,361.2), null);


(lib.LogoScreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_179 = function() {
		root.gotoAndStop("menu");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(179).call(this.frame_179).wait(1));

	// logo
	this.instance = new lib.Logo("single",0);
	this.instance.setTransform(480,270);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},59,cjs.Ease.sineInOut).wait(60).to({startPosition:0},0).to({alpha:0},60,cjs.Ease.sineIn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(111,137,738.5,266.2);


(lib.fullScreenBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.fullScreenButton = new lib.FullScreenButton();
	this.fullScreenButton.name = "fullScreenButton";
	this.fullScreenButton.setTransform(0.5,0.5);
	new cjs.ButtonHelper(this.fullScreenButton, 0, 1, 2, false, new lib.FullScreenButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.fullScreenButton).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.5,-29.5,60,60);


(lib.FadeButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// rec
	this.instance = new lib.Rec2("single",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-480,-270,960,540);


(lib.CardAnim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {front:1,back:30};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(31));

	// numbers
	this.faces = new lib.Faces();
	this.faces.name = "faces";
	this.faces.setTransform(0,0,0.0028,1);
	this.faces.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.faces).wait(14).to({visible:true},0).to({scaleX:1},15).to({scaleX:0.3352},10).to({scaleX:0.0028},5).to({_off:true},1).wait(15));

	// rec
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D80F81").ss(1,1,1).p("At9AAIb7AA");
	this.shape.setTransform(-0.025,-89.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#C4D82D").ss(1,1,1).p("AN+AAI77AA");
	this.shape_1.setTransform(-0.025,89.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FDB813").ss(1,1,1).p("AAAN+IAA77");
	this.shape_2.setTransform(-89.4,-0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00AFD5").ss(1,1,1).p("AAAt9IAAb7");
	this.shape_3.setTransform(89.35,-0.025);

	this.instance = new lib.Iconslogo13();
	this.instance.setTransform(-89,-89,0.4292,0.4514);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#00AFD5").ss(1,1,1).p("AAAttIAAbb");
	this.shape_4.setTransform(82.55,-0.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#BD8A0E").ss(1,1,1).p("AAAN+IAA77");
	this.shape_5.setTransform(-82.6,-0.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#D80F81").ss(1,1,1).p("As5gHIZzAP");
	this.shape_6.setTransform(-0.025,-88.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#C4D82D").ss(1,1,1).p("AM6gHI5zAP");
	this.shape_7.setTransform(-0.025,88.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#D80F81").ss(1,1,1).p("Ar1gPIXrAe");
	this.shape_8.setTransform(-0.025,-87.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#00AFD5").ss(1,1,1).p("AAAteIAAa9");
	this.shape_9.setTransform(75.75,-0.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#C4D82D").ss(1,1,1).p("AL2gOI3rAd");
	this.shape_10.setTransform(-0.025,87.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#C4D82D").ss(1,1,1).p("AKygWI1jAt");
	this.shape_11.setTransform(-0.05,87.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#D80F81").ss(1,1,1).p("AqxgWIVjAt");
	this.shape_12.setTransform(-0.05,-87.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#00AFD5").ss(1,1,1).p("AAAtOIAAad");
	this.shape_13.setTransform(68.9,-0.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#D80F81").ss(1,1,1).p("ApsgeITZA9");
	this.shape_14.setTransform(-0.05,-86.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#C4D82D").ss(1,1,1).p("AJtgeIzZA9");
	this.shape_15.setTransform(-0.05,86.225);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#00AFD5").ss(1,1,1).p("AAAs+IAAZ9");
	this.shape_16.setTransform(62.05,-0.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#D80F81").ss(1,1,1).p("AoogmIRRBN");
	this.shape_17.setTransform(-0.05,-85.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#C4D82D").ss(1,1,1).p("AIpgmIxRBN");
	this.shape_18.setTransform(-0.05,85.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#00AFD5").ss(1,1,1).p("AAAsvIAAZf");
	this.shape_19.setTransform(55.25,-0.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#D80F81").ss(1,1,1).p("AnkguIPJBd");
	this.shape_20.setTransform(-0.025,-84.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#C4D82D").ss(1,1,1).p("AHlguIvJBd");
	this.shape_21.setTransform(-0.025,84.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#00AFD5").ss(1,1,1).p("AAAsfIAAY/");
	this.shape_22.setTransform(48.45,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#D80F81").ss(1,1,1).p("Amgg2INBBt");
	this.shape_23.setTransform(-0.05,-83.925);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#00AFD5").ss(1,1,1).p("AAAsPIAAYf");
	this.shape_24.setTransform(41.6,-0.025);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#C4D82D").ss(1,1,1).p("AGhg2ItBBt");
	this.shape_25.setTransform(-0.05,83.875);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#D80F81").ss(1,1,1).p("Albg+IK3B9");
	this.shape_26.setTransform(-0.05,-83.125);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#C4D82D").ss(1,1,1).p("AFcg+Iq3B9");
	this.shape_27.setTransform(-0.05,83.075);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#00AFD5").ss(1,1,1).p("AAAr/IAAX/");
	this.shape_28.setTransform(34.75,-0.025);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#D80F81").ss(1,1,1).p("AkXhGIIvCM");
	this.shape_29.setTransform(-0.05,-82.35);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#C4D82D").ss(1,1,1).p("AEYhFIovCL");
	this.shape_30.setTransform(-0.05,82.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#00AFD5").ss(1,1,1).p("AAArwIAAXh");
	this.shape_31.setTransform(27.95,-0.025);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#C4D82D").ss(1,1,1).p("ADUhNImnCb");
	this.shape_32.setTransform(-0.025,81.525);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#D80F81").ss(1,1,1).p("AjThNIGnCc");
	this.shape_33.setTransform(-0.025,-81.55);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#00AFD5").ss(1,1,1).p("AAArgIAAXB");
	this.shape_34.setTransform(21.15,0);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#D80F81").ss(1,1,1).p("AiPhVIEfCr");
	this.shape_35.setTransform(-0.05,-80.775);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#C4D82D").ss(1,1,1).p("ACQhVIkfCr");
	this.shape_36.setTransform(-0.05,80.725);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#00AFD5").ss(1,1,1).p("AAArQIAAWh");
	this.shape_37.setTransform(14.3,-0.025);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#D80F81").ss(1,1,1).p("AhKhdICVC7");
	this.shape_38.setTransform(-0.025,-79.975);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#00AFD5").ss(1,1,1).p("AAArBIAAWD");
	this.shape_39.setTransform(7.5,0);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#C4D82D").ss(1,1,1).p("ABLhdIiVC7");
	this.shape_40.setTransform(-0.025,79.95);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgGt9IANDMIAAVjIgNDMg");
	this.shape_41.setTransform(-0.05,-0.025);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAHt9IgNDMIAAVjIANDMg");
	this.shape_42.setTransform(-0.05,-0.025);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#D80F81").ss(1,1,1).p("AhBBfICDi9");
	this.shape_43.setTransform(-0.025,-79.875);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#C4D82D").ss(1,1,1).p("ABCBfIiDi9");
	this.shape_44.setTransform(-0.025,79.85);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FDB813").ss(1,1,1).p("AAALAIAA1/");
	this.shape_45.setTransform(-6.65,0);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#C4D82D").ss(1,1,1).p("AB+BYIj7iv");
	this.shape_46.setTransform(-0.05,80.525);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FDB813").ss(1,1,1).p("AAALNIAA2Z");
	this.shape_47.setTransform(-12.6,-0.025);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#D80F81").ss(1,1,1).p("Ah9BYID7iv");
	this.shape_48.setTransform(-0.05,-80.575);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#D80F81").ss(1,1,1).p("Ai4BSIFxij");
	this.shape_49.setTransform(-0.025,-81.25);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#C4D82D").ss(1,1,1).p("AC5BRIlxih");
	this.shape_50.setTransform(-0.025,81.225);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FDB813").ss(1,1,1).p("AAALbIAA21");
	this.shape_51.setTransform(-18.5,0);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#D80F81").ss(1,1,1).p("AjzBLIHniV");
	this.shape_52.setTransform(-0.05,-81.95);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FDB813").ss(1,1,1).p("AAALpIAA3R");
	this.shape_53.setTransform(-24.45,-0.025);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#C4D82D").ss(1,1,1).p("AD0BKInniU");
	this.shape_54.setTransform(-0.05,81.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#D80F81").ss(1,1,1).p("AkuBEIJdiH");
	this.shape_55.setTransform(-0.05,-82.625);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#C4D82D").ss(1,1,1).p("AEvBEIpdiH");
	this.shape_56.setTransform(-0.05,82.575);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FDB813").ss(1,1,1).p("AAAL2IAA3r");
	this.shape_57.setTransform(-30.35,-0.025);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FDB813").ss(1,1,1).p("AAAMEIAA4H");
	this.shape_58.setTransform(-36.3,-0.025);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#D80F81").ss(1,1,1).p("AlqA9ILVh5");
	this.shape_59.setTransform(-0.05,-83.325);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#C4D82D").ss(1,1,1).p("AFrA9IrVh5");
	this.shape_60.setTransform(-0.05,83.275);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#D80F81").ss(1,1,1).p("AmlA2INLhr");
	this.shape_61.setTransform(-0.025,-84);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#C4D82D").ss(1,1,1).p("AGmA2ItLhr");
	this.shape_62.setTransform(-0.025,83.95);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FDB813").ss(1,1,1).p("AAAMSIAA4j");
	this.shape_63.setTransform(-42.2,-0.025);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#D80F81").ss(1,1,1).p("AngAvIPBhd");
	this.shape_64.setTransform(-0.025,-84.675);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#C4D82D").ss(1,1,1).p("AHhAvIvBhd");
	this.shape_65.setTransform(-0.025,84.625);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FDB813").ss(1,1,1).p("AAAMfIAA49");
	this.shape_66.setTransform(-48.1,-0.025);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#D80F81").ss(1,1,1).p("AobAoIQ3hQ");
	this.shape_67.setTransform(-0.025,-85.35);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#C4D82D").ss(1,1,1).p("AIcAoIw3hP");
	this.shape_68.setTransform(-0.025,85.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#FDB813").ss(1,1,1).p("AAAMtIAA5Z");
	this.shape_69.setTransform(-54,-0.025);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#D80F81").ss(1,1,1).p("ApWAiISthD");
	this.shape_70.setTransform(-0.025,-86.025);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#C4D82D").ss(1,1,1).p("AJXAiIythD");
	this.shape_71.setTransform(-0.025,85.975);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FDB813").ss(1,1,1).p("AAAM6IAA5z");
	this.shape_72.setTransform(-59.9,-0.025);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#D80F81").ss(1,1,1).p("AqRAbIUjg1");
	this.shape_73.setTransform(-0.025,-86.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#C4D82D").ss(1,1,1).p("AKSAbI0jg1");
	this.shape_74.setTransform(-0.025,86.65);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#FDB813").ss(1,1,1).p("AAANIIAA6P");
	this.shape_75.setTransform(-65.8,-0.025);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FDB813").ss(1,1,1).p("AAANVIAA6p");
	this.shape_76.setTransform(-71.7,-0.025);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#D80F81").ss(1,1,1).p("ArMAUIWZgn");
	this.shape_77.setTransform(-0.025,-87.375);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#C4D82D").ss(1,1,1).p("ALNAUI2Zgn");
	this.shape_78.setTransform(-0.025,87.325);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#D80F81").ss(1,1,1).p("AAANjIAA7F");
	this.shape_79.setTransform(-77.6,-0.025);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#C4D82D").ss(1,1,1).p("AMIANI4PgZ");
	this.shape_80.setTransform(-0.025,88);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#010101").ss(1,1,1).p("AsHAOIYPga");
	this.shape_81.setTransform(-0.025,-88.05);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#D80F81").ss(1,1,1).p("AtCAHIaFgN");
	this.shape_82.setTransform(-0.025,-88.725);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#C4D82D").ss(1,1,1).p("ANDAHI6FgN");
	this.shape_83.setTransform(-0.025,88.675);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#FDB813").ss(1,1,1).p("AAANwIAA7f");
	this.shape_84.setTransform(-83.5,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3,p:{x:89.35}},{t:this.shape_2,p:{x:-89.4}},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2,p:{x:-89.4}},{t:this.shape_3,p:{x:89.35}},{t:this.shape_1},{t:this.shape},{t:this.instance,p:{scaleX:0.4292,scaleY:0.4514,x:-89,y:-89}}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance,p:{scaleX:0.3933,scaleY:0.4468,x:-82,y:-89}}]},1).to({state:[{t:this.shape_10},{t:this.shape_2,p:{x:-75.8}},{t:this.shape_9},{t:this.shape_8},{t:this.instance,p:{scaleX:0.3026,scaleY:0.4379,x:-63,y:-87}}]},1).to({state:[{t:this.shape_13},{t:this.shape_2,p:{x:-69}},{t:this.shape_12},{t:this.shape_11},{t:this.instance,p:{scaleX:0.2438,scaleY:0.4227,x:-51,y:-82}}]},1).to({state:[{t:this.shape_16},{t:this.shape_2,p:{x:-62.15}},{t:this.shape_15},{t:this.shape_14},{t:this.instance,p:{scaleX:0.2329,scaleY:0.39,x:-48,y:-77}}]},1).to({state:[{t:this.shape_2,p:{x:-55.35}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.instance,p:{scaleX:0.1815,scaleY:0.4228,x:-37,y:-85}}]},1).to({state:[{t:this.shape_2,p:{x:-48.5}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.instance,p:{scaleX:0.176,scaleY:0.4118,x:-33,y:-83}}]},1).to({state:[{t:this.shape_2,p:{x:-41.7}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.instance,p:{scaleX:0.1554,scaleY:0.4005,x:-27,y:-80}}]},1).to({state:[{t:this.shape_28},{t:this.shape_2,p:{x:-34.85}},{t:this.shape_27},{t:this.shape_26},{t:this.instance,p:{scaleX:0.1318,scaleY:0.4005,x:-26,y:-79}}]},1).to({state:[{t:this.shape_31},{t:this.shape_2,p:{x:-28.05}},{t:this.shape_30},{t:this.shape_29},{t:this.instance,p:{scaleX:0.103,scaleY:0.4005,x:-20,y:-79}}]},1).to({state:[{t:this.shape_34},{t:this.shape_2,p:{x:-21.2}},{t:this.shape_33},{t:this.shape_32},{t:this.instance,p:{scaleX:0.0693,scaleY:0.4005,x:-14,y:-79}}]},1).to({state:[{t:this.shape_37},{t:this.shape_2,p:{x:-14.4}},{t:this.shape_36},{t:this.shape_35},{t:this.instance,p:{scaleX:0.0549,scaleY:0.4005,x:-11,y:-79}}]},1).to({state:[{t:this.shape_40},{t:this.shape_2,p:{x:-7.55}},{t:this.shape_39},{t:this.shape_38},{t:this.instance,p:{scaleX:0.0391,scaleY:0.4005,x:-8,y:-79}}]},1).to({state:[{t:this.shape_41}]},1).to({state:[]},1).to({state:[{t:this.shape_42}]},29).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_3,p:{x:6.6}},{t:this.instance,p:{scaleX:0.0391,scaleY:0.4005,x:-8,y:-79}}]},1).to({state:[{t:this.shape_3,p:{x:12.5}},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.instance,p:{scaleX:0.0549,scaleY:0.4005,x:-11,y:-79}}]},1).to({state:[{t:this.shape_3,p:{x:18.45}},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.instance,p:{scaleX:0.0693,scaleY:0.4005,x:-14,y:-79}}]},1).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_3,p:{x:24.35}},{t:this.shape_52},{t:this.instance,p:{scaleX:0.103,scaleY:0.4005,x:-20,y:-79}}]},1).to({state:[{t:this.shape_3,p:{x:30.25}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.instance,p:{scaleX:0.1318,scaleY:0.4005,x:-26,y:-79}}]},1).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_3,p:{x:36.2}},{t:this.instance,p:{scaleX:0.1554,scaleY:0.4005,x:-33,y:-80}}]},1).to({state:[{t:this.shape_3,p:{x:42.15}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.instance,p:{scaleX:0.176,scaleY:0.4118,x:-38,y:-83}}]},1).to({state:[{t:this.shape_3,p:{x:48.05}},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.instance,p:{scaleX:0.1815,scaleY:0.4228,x:-41,y:-85}}]},1).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_3,p:{x:53.95}},{t:this.instance,p:{scaleX:0.1954,scaleY:0.4228,x:-44,y:-85}}]},1).to({state:[{t:this.shape_3,p:{x:59.85}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.instance,p:{scaleX:0.2047,scaleY:0.4228,x:-45,y:-85}}]},1).to({state:[{t:this.shape_3,p:{x:65.75}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.instance,p:{scaleX:0.2047,scaleY:0.4228,x:-44,y:-85}}]},1).to({state:[{t:this.shape_3,p:{x:71.65}},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.instance,p:{scaleX:0.2333,scaleY:0.4228,x:-49,y:-85}}]},1).to({state:[{t:this.shape_81},{t:this.shape_3,p:{x:77.55}},{t:this.shape_80},{t:this.shape_79},{t:this.instance,p:{scaleX:0.2639,scaleY:0.4228,x:-55,y:-85}}]},1).to({state:[{t:this.shape_84},{t:this.shape_3,p:{x:83.45}},{t:this.shape_83},{t:this.shape_82},{t:this.instance,p:{scaleX:0.2852,scaleY:0.4228,x:-59,y:-85}}]},1).to({state:[{t:this.shape_3,p:{x:89.35}},{t:this.shape_2,p:{x:-89.4}},{t:this.shape_1},{t:this.shape},{t:this.instance,p:{scaleX:0.3639,scaleY:0.4228,x:-76,y:-85}}]},1).wait(1));

	// rec
	this.instance_1 = new lib.Iconslogo13();
	this.instance_1.setTransform(-90,-89,0.4292,0.4514);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AvgPhIAA/BIfBAAIAAfBg");
	this.shape_85.setTransform(-0.025,-0.025);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AuUvgIcpARIAAefI8pARg");
	this.shape_86.setTransform(-0.025,-0.025);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AtJvgIaTAjIAAd7I6TAjg");
	this.shape_87.setTransform(-0.025,-0.025);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("Ar9vgIX7A0IAAdZI37A0g");
	this.shape_88.setTransform(-0.025,-0.025);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AqxvgIVjBGIAAc1I1jBGg");
	this.shape_89.setTransform(-0.025,-0.025);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AplvgITLBXIAAcTIzLBXg");
	this.shape_90.setTransform(-0.025,-0.025);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AoavgIQ1BpIAAbvIw1Bpg");
	this.shape_91.setTransform(-0.05,-0.025);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AnOvgIOdB6IAAbNIudB6g");
	this.shape_92.setTransform(-0.025,-0.025);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AmCvgIMFCLIAAarIsFCLg");
	this.shape_93.setTransform(-0.05,-0.025);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("Ak2vgIJtCdIAAaHIptCdg");
	this.shape_94.setTransform(-0.05,-0.025);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AjqvgIHVCuIAAZlInVCug");
	this.shape_95.setTransform(-0.05,-0.025);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AifvgIE/DAIAAZBIk/DAg");
	this.shape_96.setTransform(-0.05,-0.025);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AhTvgICnDRIAAYfIinDRg");
	this.shape_97.setTransform(-0.05,-0.025);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgHvgIAPDjIAAX7IgPDjg");
	this.shape_98.setTransform(-0.05,-0.025);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgHL+IAA37IAPjjIAAfBg");
	this.shape_99.setTransform(-0.05,-0.025);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000B0E").s().p("AhOMOIAA4bICdjTIAAfBg");
	this.shape_100.setTransform(-0.05,-0.025);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#00161C").s().p("AiUMfIAA49IEpjCIAAfBg");
	this.shape_101.setTransform(-0.025,-0.025);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#00212A").s().p("AjaMvIAA5dIG1iyIAAfBg");
	this.shape_102.setTransform(-0.05,-0.025);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#002B38").s().p("AkgM/IAA59IJBiiIAAfBg");
	this.shape_103.setTransform(-0.05,-0.025);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#003646").s().p("AlnNPIAA6dILPiSIAAfBg");
	this.shape_104.setTransform(-0.05,-0.025);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#004154").s().p("AmtNgIAA6/INbiBIAAfBg");
	this.shape_105.setTransform(-0.025,-0.025);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#004C63").s().p("An0NwIAA7fIPphxIAAfBg");
	this.shape_106.setTransform(-0.025,-0.025);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#005771").s().p("Ao6OAIAA7/IR1hhIAAfBg");
	this.shape_107.setTransform(-0.05,-0.025);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#00627F").s().p("AqAOQIAA8fIUBhRIAAfBg");
	this.shape_108.setTransform(-0.025,-0.025);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#006D8D").s().p("ArHOgIAA8/IWPhBIAAfBg");
	this.shape_109.setTransform(-0.025,-0.025);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#00779B").s().p("AsNOxIAA9hIYbgwIAAfBg");
	this.shape_110.setTransform(-0.025,-0.025);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#0082A9").s().p("AtUPBIAA+BIapggIAAfBg");
	this.shape_111.setTransform(-0.05,-0.025);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#008DB7").s().p("AuaPRIAA+hIc1gQIAAfBg");
	this.shape_112.setTransform(-0.025,-0.025);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#0098C5").s().p("AvgPhIAA/BIfBAAIAAfBg");
	this.shape_113.setTransform(-0.025,-0.025);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#008DB7").s().p("AuavgIc1AQIAAehI81AQg");
	this.shape_114.setTransform(-0.025,-0.025);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#0082A9").s().p("AtUvgIapAgIAAeBI6pAgg");
	this.shape_115.setTransform(-0.05,-0.025);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#00779B").s().p("AsNvgIYbAwIAAdhI4bAwg");
	this.shape_116.setTransform(-0.025,-0.025);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#006D8D").s().p("ArHvgIWPBBIAAc/I2PBBg");
	this.shape_117.setTransform(-0.025,-0.025);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#00627F").s().p("AqAvgIUBBRIAAcfI0BBRg");
	this.shape_118.setTransform(-0.025,-0.025);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#005771").s().p("Ao6vgIR1BhIAAb/Ix1Bhg");
	this.shape_119.setTransform(-0.05,-0.025);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#004C63").s().p("An0vgIPpBxIAAbfIvpBxg");
	this.shape_120.setTransform(-0.025,-0.025);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#004154").s().p("AmtvgINbCBIAAa/ItbCBg");
	this.shape_121.setTransform(-0.025,-0.025);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#003646").s().p("AlnvgILPCSIAAadIrPCSg");
	this.shape_122.setTransform(-0.05,-0.025);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#002B38").s().p("AkgvgIJBCiIAAZ9IpBCig");
	this.shape_123.setTransform(-0.05,-0.025);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#00212A").s().p("AjavgIG1CyIAAZdIm1Cyg");
	this.shape_124.setTransform(-0.05,-0.025);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#00161C").s().p("AiUvgIEpDCIAAY9IkpDCg");
	this.shape_125.setTransform(-0.025,-0.025);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000B0E").s().p("AhOvgICdDTIAAYbIidDTg");
	this.shape_126.setTransform(-0.05,-0.025);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AhJMOIAA4aICTjUIAAfBg");
	this.shape_127.setTransform(-0.025,-0.025);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AiLMdIAA45IEWjEIAAfBg");
	this.shape_128.setTransform(-0.05,-0.025);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AjMMsIAA5XIGZi1IAAfBg");
	this.shape_129.setTransform(-0.05,-0.025);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AkOM7IAA51IIdimIAAfBg");
	this.shape_130.setTransform(-0.05,-0.025);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AlPNKIAA6TIKfiXIAAfBg");
	this.shape_131.setTransform(-0.05,-0.025);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AmRNZIAA6xIMjiIIAAfBg");
	this.shape_132.setTransform(-0.025,-0.025);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AnTNoIAA7PIOnh5IAAfBg");
	this.shape_133.setTransform(-0.05,-0.025);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AoUN3IAA7tIQphqIAAfBg");
	this.shape_134.setTransform(-0.05,-0.025);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("ApWOHIAA8NISthaIAAfBg");
	this.shape_135.setTransform(-0.025,-0.025);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AqYOWIAA8rIUxhLIAAfBg");
	this.shape_136.setTransform(-0.025,-0.025);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("ArZOlIAA9JIWzg8IAAfBg");
	this.shape_137.setTransform(-0.05,-0.025);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AsbO0IAA9nIY3gtIAAfBg");
	this.shape_138.setTransform(-0.025,-0.025);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AtdPDIAA+FIa7geIAAfBg");
	this.shape_139.setTransform(-0.025,-0.025);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AufPSIAA+jIc/gPIAAfBg");
	this.shape_140.setTransform(-0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_85},{t:this.instance_1}]}).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_85}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102,-101,203,203);


(lib.Card = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// anim
	this.anim = new lib.CardAnim();
	this.anim.name = "anim";

	this.timeline.addTween(cjs.Tween.get(this.anim).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Card, new cjs.Rectangle(-99.3,-101,198.6,203), null);


(lib.ArrowButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// arrow
	this.instance = new lib.Arrow("synched",0);
	this.instance.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-2.5},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:-2.45},0).to({_off:true},1).wait(1));

	// hit
	this.instance_1 = new lib.Hit("single",0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-32,64,64);


(lib.WinScreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// youWin
	this.instance = new lib.YouWinAnim();
	this.instance.setTransform(480,147.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// menuButton
	this.menuButton = new lib.MenuButton();
	this.menuButton.name = "menuButton";
	this.menuButton.setTransform(486.6,420.25,0.5602,0.5602,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.menuButton, 0, 1, 2, false, new lib.MenuButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.menuButton).wait(1));

	// playButton
	this.playAgainButton = new lib.PlayAgainButton();
	this.playAgainButton.name = "playAgainButton";
	this.playAgainButton.setTransform(480.25,486.9,0.5602,0.5602,0,0,0,0.2,0.1);
	new cjs.ButtonHelper(this.playAgainButton, 0, 1, 2, false, new lib.PlayAgainButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.playAgainButton).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.WinScreen, new cjs.Rectangle(363.6,139.5,232.5,376.6), null);


(lib.TapToStartScreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// invisibleButton
	this.instance = new lib.InvisibleButton();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.InvisibleButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// tapToStart
	this.instance_1 = new lib.TapToStartAnim();
	this.instance_1.setTransform(480,270);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TapToStartScreen, new cjs.Rectangle(0,0,960,540), null);


(lib.QuitPrompt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// box
	this.instance = new lib.sad02();
	this.instance.setTransform(316,112,0.1352,0.1352);

	this.noButton = new lib.NoButton();
	this.noButton.name = "noButton";
	this.noButton.setTransform(605.5,367.25);
	new cjs.ButtonHelper(this.noButton, 0, 1, 2, false, new lib.NoButton(), 3);

	this.yesButton = new lib.YesButton();
	this.yesButton.name = "yesButton";
	this.yesButton.setTransform(354.5,367.25);
	new cjs.ButtonHelper(this.yesButton, 0, 1, 2, false, new lib.YesButton(), 3);

	this.text = new cjs.Text("Are you sure you want to quit?", "normal 400 44px 'Passion One'", "#666666");
	this.text.textAlign = "center";
	this.text.lineHeight = 47;
	this.text.lineWidth = 324;
	this.text.parent = this;
	this.text.setTransform(480,36.2);
	if(!lib.properties.webfonts['Passion One']) {
		lib.webFontTxtInst['Passion One'] = lib.webFontTxtInst['Passion One'] || [];
		lib.webFontTxtInst['Passion One'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgpjAedQheABAAhfMAAAg59QAAhfBeABMBTGAAAQBggBAABfMAAAA59QAABfhggBg");
	this.shape.setTransform(480,270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text},{t:this.yesButton},{t:this.noButton},{t:this.instance}]}).wait(1));

	// fade
	this.hit = new lib.FadeButton();
	this.hit.name = "hit";
	this.hit.setTransform(480,270);
	this.hit.alpha = 0.75;
	new cjs.ButtonHelper(this.hit, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.hit).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.QuitPrompt, new cjs.Rectangle(0,0,960,540), null);


(lib.Deck = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cards
	this.instance = new lib.Card();
	this.instance.setTransform(555,90.5,0.911,0.911);

	this.instance_1 = new lib.Card();
	this.instance_1.setTransform(555,-95.1,0.911,0.911,0,0,0,0,-0.1);

	this.instance_2 = new lib.Card();
	this.instance_2.setTransform(370.05,90.5,0.911,0.911);

	this.instance_3 = new lib.Card();
	this.instance_3.setTransform(-370.05,90.5,0.911,0.911);

	this.instance_4 = new lib.Card();
	this.instance_4.setTransform(-370.1,-95.1,0.911,0.911,0,0,0,-0.1,-0.1);

	this.instance_5 = new lib.Card();
	this.instance_5.setTransform(370.05,-95.1,0.911,0.911,0,0,0,0,-0.1);

	this.instance_6 = new lib.Card();
	this.instance_6.setTransform(185,90.5,0.911,0.911);

	this.instance_7 = new lib.Card();
	this.instance_7.setTransform(-0.05,90.5,0.911,0.911);

	this.instance_8 = new lib.Card();
	this.instance_8.setTransform(-185.05,90.5,0.911,0.911);

	this.instance_9 = new lib.Card();
	this.instance_9.setTransform(185.05,-95,0.911,0.911);

	this.instance_10 = new lib.Card();
	this.instance_10.setTransform(0,-95,0.911,0.911);

	this.instance_11 = new lib.Card();
	this.instance_11.setTransform(-185.1,-95.1,0.911,0.911,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Deck, new cjs.Rectangle(-460.5,-187,1106,370.4), null);


(lib.InGameScreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// deck
	this.backButton = new lib.ArrowButton();
	this.backButton.name = "backButton";
	this.backButton.setTransform(45.85,34.55);
	new cjs.ButtonHelper(this.backButton, 0, 1, 2, false, new lib.ArrowButton(), 3);

	this.timeTF = new cjs.Text("00:00", "normal 400 64px 'Passion One'", "#C4D82D");
	this.timeTF.name = "timeTF";
	this.timeTF.textAlign = "center";
	this.timeTF.lineHeight = 68;
	this.timeTF.lineWidth = 254;
	this.timeTF.parent = this;
	this.timeTF.setTransform(480,1.5);
	if(!lib.properties.webfonts['Passion One']) {
		lib.webFontTxtInst['Passion One'] = lib.webFontTxtInst['Passion One'] || [];
		lib.webFontTxtInst['Passion One'].push(this.timeTF);
	}

	this.deck = new lib.Deck();
	this.deck.name = "deck";
	this.deck.setTransform(401.65,299.3,0.8501,0.8501,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.deck},{t:this.timeTF},{t:this.backButton}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.InGameScreen, new cjs.Rectangle(10,-0.5,940.3,455.7), null);


// stage content:
(lib.ICONGAMERIM2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {logo:1,menu:2,inGame:3,lose:4,win:5};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2,3,4,5];
	// timeline functions:
	this.frame_0 = function() {
		function tapToStartState()
		{
			window.root = exportRoot;
			document.querySelector(".lds-ripple").remove();
			document.body.style.backgroundColor =  lib.properties.color;
			createjs.Touch.enable(stage);
			fixText(0.14);
			root.stop();
			
			root.tapToStartScreen.on("click", function()
			{
				root.gotoAndStop("logo");
			}, null, true);
		}
		
		function fixText(lineHeightRatio)
		{
			const chrome = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
			const firefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
			
			if ((chrome || firefox) && createjs)
			{
				createjs.Text.prototype._drawTextLine = function(ctx, text, y)
				{
					if (this.textBaseline === "top")
						y += (this.lineHeight || this.getMeasuredLineHeight()) * lineHeightRatio;
					ctx[this.outline ? "strokeText" : "fillText"](text, 0, y, this.maxwidth || 0xFFFF);
				};
			}
		}
		
		tapToStartState();
	}
	this.frame_1 = function() {
		function logoState()
		{
			game.Sound.play("BGM0", "bgm", true, { volume: 0.02, loop: -1 });
		}
		
		logoState();
	}
	this.frame_2 = function() {
		function menuState()
		{
			root.menuScreen.playButton.on("click", function()
			{
				game.Sound.play("Button", "sfx", true, { volume: 0.5 });
				root.gotoAndStop("inGame");
			});	
		}
		
		if (!root.menuStateStarted)
		{
			menuState();
			root.menuStateStarted = true;
		}
		// Full-Screen Function
		function requestFullScreen() {
		    let elem = document.documentElement;
		    if (elem.requestFullscreen) elem.requestFullscreen();
		    else if (elem.mozRequestFullScreen) elem.mozRequestFullScreen();
		    else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
		    else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
		}
		
		// Full-Screen Button Event Listener
		root.fullScreenBtn.on("click", function() {
		    requestFullScreen();
		    root.fullScreenBtn.visible = false; // Hide button after entering full screen
		});
		
		// Menu State Setup for Frame 3
		function menuState() {
		    // Setup any other home screen functionalities here
		    root.menuScreen.playButton.on("click", function() {
		        game.Sound.play("Button", "sfx", true, { volume: 0.5 });
		        root.gotoAndStop("inGame");
		    });
		}
		
		// Initialize the menuState on Frame 3
		if (!root.menuStateStarted) {
		    menuState();
		    root.menuStateStarted = true;
		}
		// Full-Screen and Exit Full-Screen Functions
		function requestFullScreen() {
		    let elem = document.documentElement;
		    if (elem.requestFullscreen) elem.requestFullscreen();
		    else if (elem.mozRequestFullScreen) elem.mozRequestFullScreen();
		    else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
		    else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
		}
		
		function exitFullScreen() {
		    if (document.exitFullscreen) document.exitFullscreen();
		    else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
		    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
		    else if (document.msExitFullscreen) document.msExitFullscreen();
		}
		
		// Event Listeners for Full-Screen and Exit Full-Screen Buttons
		root.fullScreenBtn.on("click", function() {
		    requestFullScreen();
		    root.fullScreenBtn.visible = false;      // Hide Full Screen button
		    root.exitFullScreenBtn.visible = true;   // Show Exit Full Screen button
		});
		
		root.exitFullScreenBtn.on("click", function() {
		    exitFullScreen();
		    root.fullScreenBtn.visible = true;       // Show Full Screen button
		    root.exitFullScreenBtn.visible = false;  // Hide Exit Full Screen button
		});
		
		// Detect Full-Screen Changes and Toggle Button Visibility
		document.addEventListener("fullscreenchange", function() {
		    if (document.fullscreenElement) {
		        root.fullScreenBtn.visible = false;
		        root.exitFullScreenBtn.visible = true;
		    } else {
		        root.fullScreenBtn.visible = true;
		        root.exitFullScreenBtn.visible = false;
		    }
		});
		
		// Menu State Setup for Frame 3
		function menuState() {
		    // Additional setup for the home screen
		    root.menuScreen.playButton.on("click", function() {
		        game.Sound.play("Button", "sfx", true, { volume: 0.5 });
		        root.gotoAndStop("inGame");
		    });
		}
		
		// Initialize the menuState on Frame 3
		if (!root.menuStateStarted) {
		    menuState();
		    root.menuStateStarted = true;
		}
	}
	this.frame_3 = function() {
		var memoryGame, timer;
		
		function inGameState()
		{
			memoryGame = new game.MemoryGame
			({
				cards: root.inGameScreen.deck.children,
				callbacks:
				{
					onSetup: function()
					{
						console.log("memoryGame onSetup");
					},
					onMemorize: function()
					{
						console.log("memoryGame onMemorize");
					},
					onStart: function()
					{
						console.log("memoryGame onStart");
						timer.start();
					},
					onClick: function()
					{
						console.log("memoryGame onClick");
					},
					onFlip: function()
					{
						console.log("memoryGame onFlip");
						game.Sound.play("Flip", "sfx", true, { volume: 0.3 });
					},
					onPair: function()
					{
						console.log("memoryGame onPair");
					},
					onMiss: function()
					{
						console.log("memoryGame onMiss");
						game.Sound.play("Wrong", "sfx", true, { volume: 0.5 });
					},
					onMatch: function()
					{
						console.log("memoryGame onMatch");
						game.Sound.play("Right", "sfx", true, { volume: 0.5 });
					},
					onBeforeWin: function()
					{
						console.log("memoryGame onBeforeWin");
					},
					onWin: function()
					{
						console.log("memoryGame onWin");
						
						clear();
						root.gotoAndStop("win");
					}
				}
			});
		
			timer = new game.Timer
			({
				initialTime: 60000, // time in milliseconds | 1000 ms = 1 s
				callbacks:
				{
					onStart: function()
					{
						console.log("timer onStart");
						updateText(this);
					},
					onUpdate: function()
					{
						console.log("timer onUpdate");
						updateText(this);
					},
					onFinish: function()
					{
						console.log("timer onFinish");
						
						if (!memoryGame.win)
						{
							clear();
							root.gotoAndStop("lose");
						}
					}
				}
			});
		
			updateText(timer);
		
			root.inGameScreen.backButton.clickEvent = root.inGameScreen.backButton.on("click", addPrompt);
		}
		
		function addPrompt()
		{
			game.Sound.play("Button", "sfx", true, { volume: 0.5 });
		
			root.prompt = new lib.QuitPrompt();
			root.addChild(root.prompt);
			root.prompt.clickEvent = root.prompt.on("click", onPromptClick);
		}
		
		function onPromptClick(e)
		{
			if (e.target === e.currentTarget.noButton || e.target === e.currentTarget.hit)
			{
				game.Sound.play("Button", "sfx", true, { volume: 0.5 });
				removePrompt();
			}
			else if (e.target === e.currentTarget.yesButton)
			{
				game.Sound.play("Button", "sfx", true, { volume: 0.5 });
				clear();
				root.gotoAndStop("menu");
			}
		}
		
		function removePrompt()
		{
			if (!root.prompt)
				return;
			
			root.prompt.off("click", root.prompt.clickEvent);
			root.prompt.parent.removeChild(root.prompt);
			root.prompt._off = true;
			root.prompt = null;
		}
		
		function clear()
		{
			removePrompt();
			memoryGame.destroy();
			memoryGame = null;
			timer.destroy();
			timer = null;
			root.inGameScreen.backButton.off("click", root.inGameScreen.backButton.clickEvent);
		}
		
		function updateText(timer)
		{
			var time = timer.toTimecode(timer.currentTime);
			root.inGameScreen.timeTF.text = time.minutes + ":" + time.seconds;
		}
		
		inGameState();
	}
	this.frame_4 = function() {
		function loseState()
		{
			root.loseScreen.menuButton.on("click", function()
			{
				game.Sound.stop("bgm1");
				root.gotoAndStop("menu");
			});
		
			root.loseScreen.playAgainButton.on("click", function()
			{
				game.Sound.stop("bgm1");
				root.gotoAndStop("inGame");
			});
		
			game.Sound.play("Lose", "bgm1", true, { volume: 0.1 });
		}
		
		if (!root.loseStateStarted)
		{
			loseState();
			root.loseStateStarted = true;
		}
	}
	this.frame_5 = function() {
		function winState()
		{
			root.winScreen.menuButton.on("click", function()
			{
				game.Sound.stop("bgm1");
				root.gotoAndStop("menu");
			});
		
			root.winScreen.playAgainButton.on("click", function()
			{
				game.Sound.stop("bgm1");
				root.gotoAndStop("inGame");
			});
		
			game.Sound.play("Win", "bgm1", true, { volume: 0.1 });
		}
		
		if (!root.winStateStarted)
		{
			winState();
			root.winStateStarted = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1));

	// Layer_1
	this.fullScreenBtn = new lib.fullScreenBtn();
	this.fullScreenBtn.name = "fullScreenBtn";
	this.fullScreenBtn.setTransform(850.1,52.1,1.0289,1.0289,0,0,0,0.6,0.6);
	this.fullScreenBtn._off = true;
	new cjs.ButtonHelper(this.fullScreenBtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.fullScreenBtn).wait(2).to({_off:false},0).wait(4));

	// screens
	this.tapToStartScreen = new lib.TapToStartScreen();
	this.tapToStartScreen.name = "tapToStartScreen";

	this.instance = new lib.LogoScreen();

	this.exitFullScreenBtn = new lib.exitFullScreenBtn();
	this.exitFullScreenBtn.name = "exitFullScreenBtn";
	this.exitFullScreenBtn.setTransform(909.45,53.25,1.7688,1.7213,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.exitFullScreenBtn, 0, 1, 1);

	this.menuScreen = new lib.MenuScreen();
	this.menuScreen.name = "menuScreen";
	this.menuScreen.setTransform(1.2,10.75,1,0.9938,0,0,0,0,0.1);

	this.instance_1 = new lib.Homepages_nobutton();
	this.instance_1.setTransform(10,12,0.2346,0.2346);

	this.inGameScreen = new lib.InGameScreen();
	this.inGameScreen.name = "inGameScreen";

	this.loseScreen = new lib.LoseScreen();
	this.loseScreen.name = "loseScreen";

	this.instance_2 = new lib.Trophy01();
	this.instance_2.setTransform(362,78,0.0952,0.0952);

	this.winScreen = new lib.WinScreen();
	this.winScreen.name = "winScreen";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tapToStartScreen}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.menuScreen},{t:this.exitFullScreenBtn}]},1).to({state:[{t:this.inGameScreen}]},1).to({state:[{t:this.loseScreen}]},1).to({state:[{t:this.winScreen},{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(480,269.5,470.29999999999995,270.4);
// library properties:
lib.properties = {
	id: 'FC643B0B3A4F44D9AEDF61053C8EE40A',
	width: 960,
	height: 540,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/cryingface01.png", id:"cryingface01"},
		{src:"images/Homepages_nobutton.png", id:"Homepages_nobutton"},
		{src:"images/logofull02.png", id:"logofull02"},
		{src:"images/sad02.png", id:"sad02"},
		{src:"images/Trophy01.png", id:"Trophy01"},
		{src:"images/Index_atlas_1.png", id:"Index_atlas_1"},
		{src:"sounds/Lose.mp3", id:"Lose"},
		{src:"sounds/Flip.mp3", id:"Flip"},
		{src:"sounds/Win.mp3", id:"Win"},
		{src:"sounds/BGM0.mp3", id:"BGM0"},
		{src:"sounds/Button.mp3", id:"Button"},
		{src:"sounds/Wrong.mp3", id:"Wrong"},
		{src:"sounds/Right.mp3", id:"Right"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['FC643B0B3A4F44D9AEDF61053C8EE40A'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
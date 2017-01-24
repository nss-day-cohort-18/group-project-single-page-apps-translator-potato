"use strict";

var Translate = (function(originalTranslate){
	var langSpan = {
		merry: "feliez",
		christmas: "Navidad",
		and: "y",
		happy: "feliez",
		new: "nuevo",
		year: "año"
	};

	originalTranslate.toSpanish = function(eng){
		return langSpan[eng];
	};
	
	return originalTranslate;


})(Translate);
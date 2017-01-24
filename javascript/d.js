"use strict";
//this is one big function 
var Translate = (function(originalTranslate){
	var langElves = {
		merry: "merrui",
		christmas: "christmas",
		and: "a",
		happy: "happui",
		new: "siniath",
		year: "ín",
	};

	originalTranslate.toElvish = function(potato){
		return langElves[potato];
	};
	return originalTranslate;

})(Translate);
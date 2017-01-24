"use strict";

var Translate = (function(originalTranslate){
	var langSpan = {
		merry: "-- . .-. .-. -.--",
		christmas: "-.-. .... .-. .. ... - -- .- ...",
		and: ".- -. -..",
		happy: ".... .- .--. .--. -.--",
		new: "-. . .--",
		year: "-.-- . .- .-."
	};

	originalTranslate.toMorse = function(eng){
		return langSpan[eng];
	};
	
	return originalTranslate;


})(Translate);
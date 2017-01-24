"use strict";

var translateButton = document.getElementById("translate-button");
var languageSelected = document.getElementById("language-selected");

var Translate = (function(){
	var russian = {
		merry: "веселый",
		christmas: "рождество",
		and: "а также",
		happy: "счастливый",
		new: "новый",
		year: "год"
	};

	return {
		toRussian: function(wordToTranslate) {
			return russian[wordToTranslate];
		}
	};

})();



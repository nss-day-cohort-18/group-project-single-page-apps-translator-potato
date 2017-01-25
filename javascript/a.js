"use strict";

var Translate = (function(){
	var latin = {
		merry: "epulari",
		christmas: "christmas",
		and: "et",
		happy: "laeta",
		new: "novus",
		year: "anno"
	};

	return {
		toLatin: function(wordToTranslate) {
			return latin[wordToTranslate];
		}
	};

})();

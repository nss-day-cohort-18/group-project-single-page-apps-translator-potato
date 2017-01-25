"use strict";

var Translate = (function(){
	var latin = {
		merry: "epulari",
		christmas: "christmas",
		and: "et",
		happy: "laeta",
		new: "novus",
		year: "anno",
		one: "unum",
		does: "quod",
		not: "non",
		simply: " tantum",
		walk: "ambulemus",
		into: "in",
		mordor: "Mordor",	
		they: "quod",
		may: "ut",
		take: "accipere",
		our: "nostrorum",
		lives: "vitae",
		but: "sed", 
		will: "autem",
		never: "numquam",
		take: "accipere",
		freedom: "libertas"
	};

	return {
		toLatin: function(wordToTranslate) {
			return latin[wordToTranslate];
		}
	};

})();

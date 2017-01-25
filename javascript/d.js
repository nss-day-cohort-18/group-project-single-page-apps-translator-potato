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
		one: "er",
		does: "does",
		not: "ú",
		simply: " simplui",
		walk: "padad",
		into: "into",
		mordor: "Mordor",
		they: "hain",
		may: "lothron",
		take: "take",
		our: "mín",
		lives: "lives",
		but: "but",
		//they
		will: "will",
		take: "take",
		never: "never",
		our: "mín",
		freedom: "freedom"
	};

	originalTranslate.toElvish = function(potato){
		return langElves[potato];
	};
	return originalTranslate;

})(Translate);
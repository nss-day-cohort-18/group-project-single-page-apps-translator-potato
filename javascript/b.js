"use strict";

var Translate = (function(originalTranslate){
	var langSpan = {
        a: ".-", 
        b: "-...", 
        c: "-.-.", 
        d: "-..", 
        e: ".", 
        f: "..-.", 
        g: "--.", 
        h: "....", 
        i: "..", 
        j: ".---", 
        k: "-.-", 
        l: ".-..", 
        m: "--", 
        n: "-.", 
        o: "---", 
        p: ".--.", 
        q: "--.-", 
        r: ".-.", 
        s: "...", 
        t: "-", 
        u: "..-", 
        v: "...-", 
        w: ".--", 
        x: "-..-", 
        y: "-.--", 
        z: "--.."
    };

	originalTranslate.toMorse = function(eng){

		var letters = eng.split("");
        var wordArray = [];
        for (var i = 0; i < letters.length; i++) {
        	var wordToPush = langSpan[letters[i]];
            wordArray.push(wordToPush);
        };
        var fullWord = wordArray.join("");
        return fullWord;
	};
	
	return originalTranslate;


})(Translate);
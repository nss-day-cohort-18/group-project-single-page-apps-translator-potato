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


translateButton.addEventListener('click', function(){
	var inputField = document.getElementById("input-field").value;
	var outputField = document.getElementById("translated");
	var outputText;

	if (languageSelected.value === "russian") {
		outputText = Translate.toRussian(inputField);
	} else if (languageSelected.value === "spanish") {
		outputText = Translate.toSpanish(inputField);
	} else if (languageSelected.value === "elvish") {
		outputText = Translate.toElvish(inputField);
	} else {
		alert("Please select a language")
	}

	outputField.innerHTML = outputText;

})
var translateButton = document.getElementById("translate-button");
var languageSelected = document.getElementById("language-selected");

translateButton.addEventListener('click', function(){
	var inputField = document.getElementById("input-field").value;
	var outputField = document.getElementById("translated");
	var outputText;

	var longSentence = inputField.split(" ");
	var finishedArray = [];

	for (var i = 0; i < longSentence.length; i++) {


		if (languageSelected.value === "russian") {
			outputText = Translate.toRussian(longSentence[i].toLowerCase());
		} else if (languageSelected.value === "spanish") {
			outputText = Translate.toSpanish(longSentence[i].toLowerCase());
		} else if (languageSelected.value === "elvish") {
			outputText = Translate.toElvish(longSentence[i].toLowerCase());
		} else {
			alert("Please select a language")
		}

		finishedArray.push(outputText);
		finishedArray.push(" ");
		
	}

	var translatedWords = finishedArray.join("");
	outputField.innerHTML = translatedWords;

});
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
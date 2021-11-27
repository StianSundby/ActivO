function checkFilter(index, isChecked) {
	let filterArray = model.input.filtersChecked;
	let key = Object.keys(filterArray[index])[0];
	filterArray[index][key] = isChecked;
}

function suggestActivities() {
	let filterArray = model.input.filtersChecked;
	let activityArray = model.data.activities;
	tempArray = [];

	loop1: for (let i = 0; i < activityArray.length; i++) {
		let activityFilters = activityArray[i].filters;

		loop2: for (let j = 0; j < filterArray.length; j++) {
			let key = Object.keys(filterArray[j])[0];

			if (filterArray[j][key] !== null && activityFilters[j][key] !== null) {
				if (filterArray[j][key] !== activityFilters[j][key]) {
					continue loop1;
				}
			}
		}
		tempArray.push(activityArray[i].name);
	}
	randomActivity();
}

function randomActivity() {
	activtiesHtml = "";
	if (tempArray.length >= 3) {
		for (let i = 0; i < 3; i++) {
			let randomIndex = Math.floor(Math.random() * tempArray.length);
			activtiesHtml += "●" + tempArray[randomIndex] + "<br><br>";
			tempArray.splice(randomIndex, 1);
		}
	} else {
		activtiesHtml = "No other activities to suggest. Try changing your filters";
	}
	activitySuggestions();
}

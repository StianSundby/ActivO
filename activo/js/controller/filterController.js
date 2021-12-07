function checkFilter(index, isChecked) {
	let filterArray = model.input.filtersChecked;
	let key = Object.keys(filterArray[index])[0];
	filterArray[index][key] = isChecked;
}
//|||||||||| IKKE RØR |||||||||||| IKKE RØR |||||||||||| IKKE RØR |||||||||||| IKKE RØR |||||||||||| IKKE RØR |||||||||||| IKKE RØR ||||||
// IKKE RØR |||||||||| IKKE RØR |||||||||| IKKE RØR |||||||||||| IKKE RØR |||||||||||| IKKE RØR |||||||||||| IKKE RØR ||||||||||||||||||||
//|||||||||| IKKE RØR |||||||||||| IKKE RØR |||||||||||| IKKE RØR |||||||||||| IKKE RØR |||||||||||| IKKE RØR |||||||||||| IKKE RØR ||||||
// IKKE RØR |||||||| IKKE RØR |||||||||||| IKKE RØR ||||||||||||| IKKE RØR |||||||||||| IKKE RØR |||||||||||| IKKE RØR |||||||||||||||||||
function suggestActivities() {
	let filterArray = model.input.filtersChecked;
	let activityArray = model.data.activities;
	tempArray = [];

	getGroupAge();

	loop1: for (let i = 0; i < activityArray.length; i++) {
		let activityFilters = activityArray[i].filters;

		if (activityArray[i].ageLimit == null || groupAge[0] >= activityArray[i].ageLimit)
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

function getGroupAge() {
	groupAge = [];
	for (let a = 0; a < userSelectedGroup.members.length; a++) {
		groupAge.push(userSelectedGroup.members[a].age);
	}
	groupAge.sort(function (a, b) {
		return a - b;
	});
}

// let acitivitiesCount = tempArray.length >= 3 ? 3 : tempArray.length;
// if (tempArray.length <= 0) return;

function randomActivity() {
	activtiesHtml = "";
	let acitivitiesCount = tempArray.length >= 3 ? 3 : tempArray.length;
	if (tempArray.length <= 0) {
		activtiesHtml = "No other activities to suggest. Try changing your filters";
	}
	if (acitivitiesCount >= 1) {
		for (let i = 0; i < acitivitiesCount; i++) {
			let randomIndex = Math.floor(Math.random() * tempArray.length);
			activtiesHtml += "● " + tempArray[randomIndex] + "<br><br>";
			tempArray.splice(randomIndex, 1);
		}
	} else {
		activtiesHtml = "No other activities to suggest. Try changing your filters";
	}
	activitySuggestions();
}

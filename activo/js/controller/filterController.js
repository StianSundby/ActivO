function checkFilter(value, isChecked) {
	//passe på at det står skrevet likt på begge stedene som skal sammenlignes
	if (value == "Age limit") value = "ageRestriction";
	if (value == "Free") value = "cost";
	if (value == "Only inside") value = "indoors";
	if (value == "In the city") value = "city";
	if (value == "Winter activities") value = "winter";
	if (value == "Physical upper body") value = "physicalUpperbody";
	if (value == "Physical lower body") value = "physicalLowerbody";

	// hvis arrayet allerede har filteret og boksen allerede er huket av
	if (filterArray.includes(value) && isChecked) {
		return;
	}
	//hvis arrayet allerede har filteret og boksen ikke er huket av
	if (filterArray.includes(value) && !isChecked) {
		let indexOfFilter = filterArray.indexOf(value);
		filterArray.splice(indexOfFilter, 1); //fjern filteret fra arrayet
		return;
	}
	filterArray.push(value); //push filteret som er huket av inn i modellen
	console.log(filterArray);
}

function suggestActivities() {
	let userFilters = model.input.filtersChecked;
	let tempArray = [];

	for (let activity of model.data.activities) {
		if (hasAllFilters(activity, userFilters)) {
			tempArray.push(activity);
		}
	}
	// let randomIndexes = [],
	// 	i = tempArray.length,
	// 	j = 0;

	// while (i--) {
	// 	j = Math.floor(Math.random() * (i + 1));
	// 	randomIndexes.push(tempArray[j]);
	// 	tempArray.splice(j, 1);
	// }
	console.log(tempArray);
}

function hasAllFilters(activity, userFilters) {
	for (let filter of userFilters) {
		if (!activity.filters.includes(filter)) return false;
	}
	return true;
}

// 		-loope gjennom alle indeksene i model.data.activities

// 			-hvis model.data.activities.filters ikke har en lengde så push aktiviteten uansett
// 			-hvis model.data.activities.filters[indeks] er lik filterArray[indeks]

// 				-hvis model.data.activities.filters[indeks] er lik "cost",
// 				 skal den returnere true hvis filter-arrayet IKKE har den
// 				-hvis den har sjekket alle filterne mot hverandre

// 					-push aktiviteten
// 					-sjekk neste aktivitet
//
//
//
//
//
//
//
//

//
// function checkFilter(index, isChecked) {
// 	if (isChecked) {
// 		model.input.filtersChecked[index] = true;
// 	} else if (!isChecked) {
// 		model.input.filtersChecked[index] = false;
// 	}
// }

// function suggestActivities() {
// 	let userFilters = model.input.filtersChecked;
// 	let activityFilters;
// 	let tempArray = [];

// 	for (let i = 0; i < model.data.activities.length; i++) {
// 		activityFilters = model.data.activities[i].filters;
// 		for (let j = 0; j < userFilters.length; j++) {
// 			if (userFilters[j] === activityFilters[j]) {
// 				tempArray.push(model.data.activities[i].name);
// 				console.log(tempArray);
// 				continue;
// 			}
// 		}
// 	}
// 	console.log(tempArray);
// }

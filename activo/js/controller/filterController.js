function checkFilter(value, isChecked) {
	if (value == "Age limit") value = "ageRestriction";
	if (value == "Free") value = "cost";
	if (value == "Only inside") value = "indoors";
	if (value == "In the city") value = "city";
	if (value == "Winter activities") value = "winter";
	if (value == "Physical upper body") value = "physicalUpperbody";
	if (value == "Physical lower body") value = "physicalLowerbody";

	// Age limit -
	if (filterArray.includes(value) && isChecked) {
		return;
	}
	if (filterArray.includes(value) && !isChecked) {
		let indexOfFilter = filterArray.indexOf(value);
		filterArray.splice(indexOfFilter, 1);
		return;
	}
	filterArray.push(value);
	console.log(filterArray);
}

//TODO: På det andre [1] filteret, som er cost, skal den bare telle med de som IKKE har filteret.
//TODO: Mens på resten skal den bare ta med de som HAR filteret. Se helt på bunn for mer detaljer
function suggestActivities() {
	/*
	loope gjennom model.data.activities
	sjekke om model.data.activities[i].filter inneholder de samme filterne i filterArray
	push til tempArray
	hente 3 tilfeldige indexer fra temparray og vis temparray[x].name i activitiesHtml
	*/
}

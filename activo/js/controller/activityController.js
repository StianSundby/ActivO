//lik som loadActivity(), men:
//skjer hvis du er på Groups og skal bytte tilbake til New Activity
function newActivity() {
	activityButton = "activeButton"; //style for å vise at det er denne siden du er på
	groupButton = ""; //fjern stylen fra denne siden
	getGroups();
	activityHome();
}

//viser navnet på gruppen og alle medlemmene i den valgte gruppen
function groupInfo(groupIndex) {
	//navnet på gruppen
	page = `<div style="cursor: default; font-size: 2.2rem; color: #ec7f13;"><u><b>
				${model.app.currentUser.groups[groupIndex].name}
			</b></u></div><br>`;
	//signedInUser er ID'en til brukern, som starter på 1. Så vi tar -1 for å finne index
	for (let i = 0; i < model.app.currentUser.groups[groupIndex].members.length; i++) {
		//alle medlemmene
		page += `
			<div style="cursor: default">
				<i  style="float: right; padding-right: 10px; cursor: pointer;" 
					class="fas fa-trash filter-orange" 
					onclick="removeMember(${groupIndex}, ${i})">
				</i>
				<div>${model.app.currentUser.groups[groupIndex].members[i].name}</div>
			</div>
			<br>
	    `;
	}
	activityFilter(); //endrer viewet
}

//kalles fra activityFilter()
function filterInfo() {
	let filters = model.data.filterCheckboxes; //et array med alle filterne brukern har huket av
	let filterHtml = "";
	//lager en checkbox for hvert filter
	for (let i = 0; i < filters.length; i++) {
		const filter = filters[i];
		filterHtml += `
			<label class="b-contain">
				<span>${filter}</span>
				<input type="checkbox"
					value="${filter}"
					onclick="checkFilter(${i}, this.checked)">
				<div class="b-input"></div>
			</label>
		`;
	}
	return filterHtml; //vises inne i activityFilter.js viewet
}

//fjerner medlemmet fra modellen
//merk at hvis vi skal ha en backend må denne endres så den ikke permanent fjerner medlemmet
//siden det skal gjøres i groupsEdit.js, her skal det bare være midlertidig
function removeMember(groupIndex, index) {
	let memberArray = model.app.currentUser.groups[groupIndex].members;
	memberArray.splice(index, 1); //fjern medlemmet/indeksen én gang
	groupInfo(groupIndex);
}

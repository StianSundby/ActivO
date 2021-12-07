//lik som loadActivity(), men:
//skjer hvis du er på Groups og skal bytte tilbake til New Activity
function newActivity() {
	activityButton = "activeButton"; //style for å vise at det er denne siden du er på
	groupButton = ""; //fjern stylen fra denne siden
	getGroups();
	activityHome();
}

//viser navnet på gruppen og alle medlemmene i den valgte gruppen
/**
 *
 * @param {number} groupIndex blir lagd i en for-løkke i getGroups(), som ligger i activityHome.js
 */
function groupInfo(groupIndex) {
	userSelectedGroup = model.app.currentUser.groups[groupIndex];
	//navnet på gruppen
	page = `<div style="cursor: default; font-size: 2.2rem; color: #ec7f13;"><u><b>
				<h2 class="header">${userSelectedGroup.name}</h2>
			</b></u></div><br>`;
	//signedInUser er ID'en til brukern, som starter på 1. Så vi tar -1 for å finne index
	for (let i = 0; i < userSelectedGroup.members.length; i++) {
		//alle medlemmene
		page += `
			<div style="cursor: default">
				<i  style="float: left; padding-right: 10px; cursor: pointer;" 
					class="fas fa-trash filter-orange" 
					onclick="removeMember(${groupIndex}, ${i})">
				</i>
				<div style="color: white;">${userSelectedGroup.members[i].name}</div>
			</div>
			<br>
	    `;
	}
	activityFilter(); //endrer viewet
}

//kalles fra activityFilter()
function filterInfo() {
	let filters = model.data.filterCheckboxes; //et array med alle filterne brukern har huket av
	let filterHtml = `
					<div style="cursor: default; font-size: 2.2rem; color: #ec7f13;"><u><b>
						<h2 class="header">Select filters:</h2>
					</b></u></div><br>`;
	//lager en checkbox for hvert filter
	for (let i = 0; i < filters.length; i++) {
		const filter = filters[i];
		filterHtml += `
		<label class="checkboxContainer">${filter}
			<input onclick="checkFilter(${i}, this.checked)" type="checkbox"/>
			<span class="checkmark"></span>
		</label><br>
		`;
	}
	filterHtml += `
	<label class="checkboxContainer" style="cursor: not-allowed;">Age restriction
		<input type="checkbox" disabled checked/>
		<span class="checkmark"></span>
	</label>
	`;
	return filterHtml; //vises inne i activityFilter.js viewet
}

//fjerner medlemmet fra modellen
//merk at hvis vi skal ha en backend må denne endres så den ikke permanent fjerner medlemmet
//siden det skal gjøres i groupsEdit.js, her skal det bare være midlertidig
function removeMember(groupIndex, index, calledFrom) {
	let memberArray = model.app.currentUser.groups[groupIndex].members;
	memberArray.splice(index, 1); //fjern medlemmet/indeksen én gang
	groupInfo(groupIndex);
}

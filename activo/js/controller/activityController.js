//Lik som loadActivity(), men:
//skjer hvis du er på Groups og skal bytte tilbake til New Activity
function newActivity() {
	activityButton = "activeButton";
	groupButton = "";
	getGroups();
	activityView1();
}

function groupInfo(groupIndex) {
	page = `<div style="cursor: default; font-size: 2.2rem; color: #ec7f13;"><u><b>
				${model.app.currentUser.groups[groupIndex].name}
			</b></u></div><br>`;
	//signedInUser er ID'en til brukern, som starter på 1. Så vi tar -1 for å finne index
	for (let i = 0; i < model.app.currentUser.groups[groupIndex].members.length; i++) {
		page += `
			<div style="cursor: default">
				<i  style="float: right; padding-right: 10px; cursor: pointer;" 
					class="fas fa-trash filter-orange" 
					onclick="tempRemoveMember(${groupIndex}, ${i})">
				</i>
				<div>${model.app.currentUser.groups[groupIndex].members[i].name}</div>
			</div>
			<br>
	    `;
	}
	activityView2();
}

function filterInfo() {
	let filters = model.data.filterCheckboxes;
	let filterHtml = "";
	for (let i = 0; i < filters.length; i++) {
		const filter = filters[i];

		filterHtml += `
		<label class="b-contain">
			<span>${filter}</span>
			<input type="checkbox"
				value="${filter}"
				onclick="suggestActivities(this.value, this.checked)">
			<div class="b-input"></div>
		</label>
		`;
	}
	// data: {
	// 	filterCheckboxes: [],
	return filterHtml;
}

function tempRemoveMember(groupIndex, index) {
	let memberArray = model.app.currentUser.groups[groupIndex].members;
	memberArray.splice(index, 1);
	groupInfo(groupIndex);
}

function activitiesDetails() {
	let activitiesDetails = `
        nothing here yet
    `;
	return activitiesDetails;
}

let page = "";

function activityView2() {
	appDiv.innerHTML = /*html*/ `
	<div class="container">
        <div class="homeContent">
            <div class="leftSide">
                 <img class="logo" height="250px" width="250px" src="resources/images/ActivO.png">
                <div>
                    <button class="${activityButton}" onclick="newActivity()">New activity</button>
                    <br>
                    <button class="${groupButton}" onclick="groups()">Groups</button>
					<br>
					<button id="logoutButton" onclick="loginView()">Logout</button>
                </div>
            </div>
            <div class="rightSide"> 
				<div class="groupOverview">${page} </div>
				<div class="filterOverview">${filterInfo()}</div>
				<button class="nextButton" onclick="activityView3()">Next</button>
            </div>
		</div>
	</div>
    `;
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
//TODO: Filtere som er huket av må telle når du trykker på Next
function filterInfo() {
	const filterInfo = `
		<label class="b-contain">
			<span>Aldersgrense</span>
			<input type="checkbox" checked>
			<div class="b-input"></div>
		</label>
		<label class="b-contain">
			<span>Gratis</span>
			<input type="checkbox">
			<div class="b-input"></div>
		</label>
		<label class="b-contain">
			<span>Fysisk overkropp</span>
			<input type="checkbox">
			<div class="b-input"></div>
		</label>
		<label class="b-contain">
			<span>Fysisk underkropp</span>
			<input type="checkbox">
			<div class="b-input"></div>
		</label>
	`;
	return filterInfo;
}

function tempRemoveMember(groupIndex, index) {
	let memberArray = model.app.currentUser.groups[groupIndex].members;
	memberArray.splice(index, 1);
	groupInfo(groupIndex);
}

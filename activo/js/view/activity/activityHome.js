//venstre side av appen. Høyre side settes inn i "page" eller "loadActivity"
function activityHome() {
	appDiv.innerHTML = /*html*/ `
	<div class="container">
	
            <div class="homeContent">
				<div class="leftSide">
					<img class="logo" height="250px" width="250px" src="resources/images/ActivO.png">
					<div>
						<button class="${activityButton}" onclick="newActivity()">New activity</button>
						<br>
						<button class="${groupButton}" onclick="groupsHome()">Groups</button>
						<br>
						<button id="logoutButton" onclick="loginView()">Logout</button>
					</div>
				</div>
                <div class="rightSide"> 
					<div class="groups">
                    	${loadActivity()} 
					</div>
                </div>
			</div>
    `;
}

// ==================================CONTROLLER=============================
//Må være her for første siden

//Skjer når du laster inn siden. Viser gruppene til brukern som er logget inn
function loadActivity() {
	activityButton = "activeButton";
	groupButton = "";
	getGroups();
	return namesOfGroups;
}

//signedInUser er ID'en til brukern, som starter på 1. Så vi tar -1 for å finne index
function getGroups() {
	namesOfGroups = "";
	if (model.app.currentUser.groups.length <= 0) {
		namesOfGroups += `
		<p class="groupList1">You don't have any groups, click the button to make one</p>
		<button onclick="groupsHome()">Next</button>
		`;
		return;
	}
	for (let i = 0; i < model.app.currentUser.groups.length; i++) {
		let groupDiv = `<div onclick='groupInfo(${i})'>${model.app.currentUser.groups[i].name}</div><br>`;
		namesOfGroups += groupDiv;
	}
}

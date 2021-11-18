let signedInUser; //settes i loginAuth.js når brukern logger inn. Det er id'en til brukern
let activityButton = "activeButton"; //brukes for å indikere hvilken side du er på. Er egentlig bare en style
let groupButton = ""; //samme som over. Det byttes hvilken som har "activeButton"
let namesOfGroups; //viser alle navnene på gruppene tilknyttet brukern. Genereres i getGroups()

//venstre side av appen. Høyre side settes inn i "page" eller "loadActivity"
function activityView1() {
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
					<div class="groups">
                    	${loadActivity()} 
					</div>
                </div>
			</div>
    `;
}

//====================================================NEW ACTIVITY=============================================

//Skjer når du laster inn siden. Viser gruppene til brukern som er logget inn
function loadActivity() {
	activityButton = "activeButton";
	groupButton = "";
	getGroups();
	return namesOfGroups;
}

//Lik som loadActivity(), men:
//skjer hvis du er på Groups og skal bytte tilbake til New Activity
function newActivity() {
	activityButton = "activeButton";
	groupButton = "";
	getGroups();
	activityView1();
}

//signedInUser er ID'en til brukern, som starter på 1. Så vi tar -1 for å finne index
function getGroups() {
	namesOfGroups = "";
	if (model.app.currentUser.groups.length <= 0) {
		namesOfGroups += `
		<p class="groupList1">You don't have any groups, click the button to make one</p>
		<button onclick="groupsView1()">Next</button>
		`;
		return;
	}
	for (let i = 0; i < model.app.currentUser.groups.length; i++) {
		let groupDiv = `<div onclick='groupInfo(${i})'>${model.app.currentUser.groups[i].name}</div><br>`;
		namesOfGroups += groupDiv;
	}
}

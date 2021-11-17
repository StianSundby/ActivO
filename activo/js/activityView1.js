let page = ""; //Initsialisere page og sette den tom, så ikke noe vises når det ikke skal
let signedInUser; //settes i loginAuth.js når brukern logger inn. Det er id'en til brukern
let activityButton = "activeButton"; //brukes for å indikere hvilken side du er på. Er egentlig bare en style
let groupButton = ""; //samme som over. Det byttes hvilken som har "activeButton"
let namesOfGroups; //viser alle navnene på gruppene tilknyttet brukern. Genereres i getGroups()

//venstre side av appen. Høyre side settes inn i "page" eller "loadActivity"
function activityView1() {
	appDiv.innerHTML = /*html*/ `
	<div class="container">
        <button onclick="loginView()">Logout</button>
            <div class="homeContent">
				<div class="leftSide">
					<img class="logo" height="250px" width="250px" src="resources/images/ActivO.png">
					<div>
						<button class="${activityButton}" onclick="newActivity()">New activity</button>
						<br>
						<button class="${groupButton}" onclick="groups()">Groups</button>
					</div>
				</div>
                <div class="rightSide"> 
					${page}
                    ${loadActivity()} 
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
	page = `
	        
	`;
	return namesOfGroups;
}

//Lik som loadActivity(), men:
//skjer hvis du er på Groups og skal bytte tilbake til New Activity
function newActivity() {
	activityButton = "activeButton";
	groupButton = "";
	getGroups();
	page = `
	`;
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

//TODO: Hvis du trykker på en gruppe, skal de andre gruppene fjernes, og meldemmene skal vises under gruppen
//TODO: Til venstre for der groupInfo() vises skal det vises en liste med filtere
//TODO: Under der igjen skal det være en "Next" knapp
//TODO: Next knappen tar deg til siden som genererer forslag
//TODO: Under der igjen skal det være en "New reccomendations" knapp for å lage nye forslage

//====================================================GROUPS=============================================

//Knapp for å lage ny gruppe tilknyttet brukern
//Viser gruppene til brukern, og tar deg videre til en side der du kan redigere de
//TODO: createNewGroup() må faktisk gjøre noe
//TODO: gruppene til brukern skal vises under createNewGroup() knappen

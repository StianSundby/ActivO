let page = ""; //Initsialisere page og sette den tom, så ikke noe vises når det ikke skal
let signedInUser; //settes i loginAuth.js når brukern logger inn. Det er id'en til brukern
let activityButton = "activeButton"; //brukes for å indikere hvilken side du er på. Er egentlig bare en style
let GroupButton = ""; //samme som over. Det byttes hvilken som har "activeButton"
let namesOfGroups; //viser alle navnene på gruppene tilknyttet brukern. Genereres i getGroups()

//venstre side av appen. Høyre side settes inn i "page" eller "loadActivity"
function appView() {
	appDiv.innerHTML = /*html*/ `
        <button onclick="loginView()">Logout</button>
            <p>App page</p>
            <div class="homeContent">
            
                <img class="logo" height="250px" width="250px" src="resources/images/ActivO.png">
                <div>
                    <button class="${activityButton}" onclick="newActivity()">New activity</button>
                    <br>
                    <button class="${GroupButton}" onclick="groups()">Groups</button>
                </div>
                <div> ${page}
                    ${loadActivity()} 
                </div>
            </div>
    `;
}

//====================================================NEW ACTIVITY=============================================

//Skjer når du laster inn siden. Viser gruppene til brukern som er logget inn
function loadActivity() {
	activityButton = "activeButton";
	GroupButton = "";
	getGroups();
	page = `
	        
	`;
	return namesOfGroups;
}

//Lik som loadActivity(), men:
//skjer hvis du er på Groups og skal bytte tilbake til New Activity
function newActivity() {
	activityButton = "activeButton";
	GroupButton = "";
	getGroups();
	page = `
	`;
	appView();
}

//TODO: Hvis brukern ikke har noen grupper skal det istedenfor stå noe som "Lag ny gruppe"
//signedInUser er ID'en til brukern, som starter på 1. Så vi tar -1 for å finne index
function getGroups() {
	namesOfGroups = "";
	for (let i = 0; i < model.data.users[signedInUser - 1].groups.length; i++) {
		namesOfGroups +=
			`<div onclick='groupInfo(${i})'>` +
			model.data.users[signedInUser - 1].groups[i].name +
			"</div>" +
			"<br>";
	}
}

//TODO: Hvis du trykker på en gruppe, skal de andre gruppene fjernes, og meldemmene skal vises under gruppen
//signedInUser er ID'en til brukern, som starter på 1. Så vi tar -1 for å finne index
function groupInfo(index) {
	page = "";
	for (
		let i = 0;
		i < model.data.users[signedInUser - 1].groups[index].members.length;
		i++
	) {
		page += `
        <div>
            ${model.data.users[signedInUser - 1].groups[index].members[i].name}
        </div>
        <br>
        `;
	}
	appView();
}

//TODO: Til venstre for der groupInfo() vises skal det vises en liste med filtere
//TODO: Under der igjen skal det være en "Next" knapp
//TODO: Next knappen tar deg til siden som genererer forslag
//TODO: Under der igjen skal det være en "New reccomendations" knapp for å lage nye forslage

//====================================================GROUPS=============================================

//Knapp for å lage ny gruppe tilknyttet brukern
//Viser gruppene til brukern, og tar deg videre til en side der du kan redigere de
//TODO: createNewGroup() må faktisk gjøre noe
//TODO: gruppene til brukern skal vises under createNewGroup() knappen
function groups() {
	GroupButton = "activeButton";
	activityButton = "";
	page = `
        <button onclick="createNewGroup">Create new group</button>
    `;
	appView();
}

let activties;

function activityView3() {
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
                <div class="activities">${activties}</div>
				<div class="activitiesDetails">${activitiesDetails()}</div>
				<button class="nextButton" onclick="suggestActivities()">New reccomendations</button>
            </div>
		</div>
	</div>
    `;
}

suggestActivities();
function suggestActivities() {
	//TODO: Onlick så vises detaljer om aktiviteten?
	activties = `
        <div>Activity 1</div>
        <div>Activity 2</div>
        <div>Activity 3</div>
    `;
}

function activitiesDetails() {
	let activitiesDetails = `
        nothing here yet
    `;
	return activitiesDetails;
}

//TODO: 3 foreslåtte aktiviteter basert på filtere og medlemmer i den valgte gruppen

//TODO: "Back" knapp for å ta deg tilbake til landing page?

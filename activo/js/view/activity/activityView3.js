let activtiesHtml = "";
let activities = model.data.activities;
let tempArray = [];

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
                <div class="activities">${activtiesHtml}</div>
				<div class="activitiesDetails">${activitiesDetails()}</div>
				<button class="nextButton" onclick="suggestActivities()">New reccomendations</button>
            </div>
		</div>
	</div>
    `;
	suggestActivities();
}

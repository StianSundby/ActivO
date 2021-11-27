let page = "";

function activityFilter() {
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
				<button class="nextButton" onclick="activitySuggestions()">Next</button>
            </div>
		</div>
	</div>
    `;
}

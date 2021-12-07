function activityFilter() {
	switchStylesheet("stylesheets/threeColumns.css");

	appDiv.innerHTML = /*html*/ `
	<div class="container">
        <div class="leftSide">
            <img src="resources/images/ActivO.png">
            <div class="buttonContainer">
				<button class="${activityButton}" onclick="newActivity()">New activity</button>
				<button class="${groupButton}" onclick="groupsHome()">Groups</button><br>
                <button id="logoutButton" onclick="logOut()">Logout</button>
			</div>
        </div>
        <div class="middle">
            <div class="filterOverview">
                <div class="control-group">
                    ${filterInfo()}
                </div>
            </div>
            <button style="background-color: rgb(78, 78, 78);"  class="activityFilterButton" onclick="activityHome()">Cancel</button>
        </div>
        <div class="rightSide"> 
			<div class="groupOverview">${page} </div>
			<button class="activityFilterButton" onclick="suggestActivities(), activitySuggestions()">Next</button>
        </div>
	</div>
    `;
}

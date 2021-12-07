//activitiesHtml deklareres i declaration.js og settes i filterController
//i filterController.js
function activitySuggestions() {
	switchStylesheet("stylesheets/twoColumns.css");

	appDiv.innerHTML = /*html*/ `
	<div class="container">
        <div class="leftSide">
            <img height="250px" width="250px" src="resources/images/ActivO.png">
            <div class="buttonContainer">
				<button class="${activityButton}" onclick="newActivity()">New activity</button>
				<button class="${groupButton}" onclick="groupsHome()">Groups</button><br>
                <button id="logoutButton" onclick="logOut()">Logout</button>
			</div>
        </div>

        <div class="rightSide">
            <div style="font-size: 18px;" class="activities">${activtiesHtml}</div>
            <div class="rightSideButtonContainer">
                <button onclick="randomActivity()">New</button>
                <button id="logoutButton" onclick="activityHome()">Cancel</button>
            </div>
        </div>
	</div>
    `;
}

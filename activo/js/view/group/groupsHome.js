//loadGroups() er i groupController. Returnerer gruppene til brukern

function groupsHome() {
	switchStylesheet("stylesheets/twoColumns.css");
	activityButton = ""; //brukes for å indikere hvilken side du er på. Er egentlig bare en style
	groupButton = "activeButton"; //samme som over. Det bytter hvilken som har "activeButton"
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
			<div class="groupList">${loadGroups()} </div>
			<button onclick="groupsAdd()">New group</button>
		</div>	
	</div>
    `;
}

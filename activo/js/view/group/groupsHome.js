//loadGroups() er i groupController. Returnerer gruppene til brukern

function groupsHome() {
	activityButton = ""; //brukes for å indikere hvilken side du er på. Er egentlig bare en style
	groupButton = "activeButton"; //samme som over. Det bytter hvilken som har "activeButton"
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
						<button id="logoutButton" onclick="logOut()">Logout</button>
					</div>
				</div>
					<div class="groupStyle">
						<button onclick="groupsAdd()">Create new group</button>
						<br><br><br>
						${loadGroups()}
					</div>	
			</div>
    `;
}

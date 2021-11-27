function groupsAdd() {
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
				<div class="groupStyle">
                <h1> Create new group </h1>
                    <input oninput="model.input.createNewGroup.name = this.value"style="width: 90%;" class="css-input groupName" type="text" placeholder ="Group name">
                    <button onclick ="createNewGroup()"> Create group </button>
                    <div class="groupMembersOverview">${groupMembers}</div>
				</div>
                <button onclick="groupsHome()">Done</button>	
		</div>
    `;
}

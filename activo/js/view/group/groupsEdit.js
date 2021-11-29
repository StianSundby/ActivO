function groupsEdit() {
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
				Change group name
				<input type="text" placeholder="New groupname" oninput="model.input.changeGroupName = this.value">
				<button class="newGroupNameButton" onclick="changeGroupName()">Change name</button>
				<br><br>
				<p>Add new member:</p>
				<input oninput="model.input.addNewMember.name = this.value" class="css-input newMemberName" type="text" placeholder="Name"/>
				<input oninput="model.input.addNewMember.age = this.value" class="css-input age" type="number" placeholder="Age"/>
				<button class="addNewMemberButton" onclick="addMember()">Add member</button>
				<div class="groupMembersOverview">${groupMembers}</div>
			</div>
			<button onclick="groupsHome()">Done</button>	
		</div>
	`;
}

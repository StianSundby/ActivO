function groupsEdit() {
	switchStylesheet("stylesheets/threeColumns.css");
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

		<div class="middle">
			<h2 class="header">Edit ${groupToView}</h2><br>
			<input type="text" placeholder="New groupname" oninput="model.input.changeGroupName = this.value">
			<button class="newGroupNameButton" onclick="changeGroupName()">Change name</button>

			<p>Add new member:</p>
			<input oninput="model.input.addNewMember.name = this.value" class="css-input newMemberName" type="text" placeholder="Name"/>
			<input oninput="model.input.addNewMember.age = this.value" class="css-input age" type="number" placeholder="Age"/>
			<button class="addNewMemberButton" onclick="addMember()">Add member</button>

			<button style="background-color: rgb(78, 78, 78);" onclick="activityHome()">Cancel</button>
		</div>

		<div class="rightSide">
			<div class="groupMembersOverview">${groupMembers}</div>
			<button onclick="groupsHome()">Done</button>	
		</div>
	</div>
	`;
}

//TODO: Ok button
//TODO: addMember() funksjonen
//TODO: fjerne medlemmer
function groupsView2() {
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
                    <input style="width: 90%;" class="css-input groupName" type="text" placeholder ="${groupToView}">
                    <br><br>
                    <input class="css-input newMemberName" type="text" placeholder="Name"/>
                    <input class="css-input age" type="number" placeholder="Age"/>
                    <button class="addNewMemberButton" onclick="addMember()">Add member</button>
                    <div class="groupMembersOverview">${groupMembers}</div>
				</div>
                <button>Ok</button>	
		</div>
    `;
}

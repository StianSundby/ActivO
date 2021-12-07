function groupsAdd() {
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
            <h2 class="header"> Create new group </h2>
            <input 
				oninput="model.input.createNewGroup.name = this.value"
				style="width: 90%;" 
				class="css-input groupName" 
				type="text" 
				placeholder ="Group name">
            <button onclick ="createNewGroup()">Create group</button>
			<button class="nextButton" onclick="groupsHome()">Done</button>	
		</div>
	</div>
    `;
}

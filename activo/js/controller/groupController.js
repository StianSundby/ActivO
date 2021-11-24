function loadGroups() {
	groups();
	return groupList;
}

function groups() {
	groupList = "";
	if (model.app.currentUser.groups.length <= 0) {
		groupList += `
		<p class="groupList1">You don't have any groups, click the button to make one</p>
		<button onclick="groupsView1()">Next</button>
		`;
		return;
	}
	for (let i = 0; i < model.app.currentUser.groups.length; i++) {
		let groupDiv = `
			<div onclick="editGroup(${i})">
				<i  style="cursor: pointer;" 
					class="fas fa-cog filter-orange">
				</i>
				${model.app.currentUser.groups[i].name}
			</div>
			<br>
		`;
		groupList += groupDiv;
	}
}

function editGroup(index) {
	groupToView = model.app.currentUser.groups[index].name;
	for (let i = 0; i < model.app.currentUser.groups[index].members.length; i++) {
		groupMembers +=
			`<i  style="cursor: pointer;" 
				class="fas fa-trash filter-orange" 
				onclick=""></i>` +
			model.app.currentUser.groups[index].members[i].name +
			"<br>";
	}

	groupsView2();
}

function addMember() {}

function createNewGroup() {}

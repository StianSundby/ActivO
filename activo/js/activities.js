function getGroups() {
	groupName = "";
	for (let i = 0; i < model.data.users[signedInUser - 1].groups.length; i++) {
		groupName += model.data.users[signedInUser - 1].groups[i].name + "<br>";
		// groupMembers = model.data.users[signedInUser - 1].members;
	}
}
function getGroupMembers() {}

function removeMember() {}

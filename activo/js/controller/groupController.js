//kalles fra groupsHome for å hente gruppene til brukern
function loadGroups() {
	groups();
	return groupList;
}

//kalles fra loadGroups(), som kalles fra groupHome()
//viser en liste med grupper hvis brukern har 1 eller fler.
//hvis ikke så viser den en knapp som sender deg tilbake hvor du kan lage en
function groups() {
	groupList = "";
	if (model.app.currentUser.groups.length <= 0) {
		groupList += `
		<p style="color: white; font-size: 18px;" class="groupList1">You don't have any groups, click the button to make one</p>
		<button class="nextButton" onclick="groupsHome()">Next</button>
		`;
		return;
	}
	for (let i = 0; i < model.app.currentUser.groups.length; i++) {
		let groupDiv = `
			<div class="groupList" >
				<i  style="cursor: pointer;" 
					class="fas fa-cog filter-orange"
					onclick="editGroup(${i})">
				</i>
				${model.app.currentUser.groups[i].name}
			</div>
			<br>
		`;
		groupList += groupDiv;
		//returnerer groupList. Hvis brukern ikke har noen grupper skal den ikke returnere grupper
		//er derfor det er skrevet sånn.
	}
}

function removeGroupMember(index, memberIndex) {
	let memberArray = model.app.currentUser.groups[index].members;
	memberArray.splice(memberIndex, 1);
	editGroup(index);
}

//kalles fra groups(), som kalles fra loadGroups(), som kalles fra groupsHome()
//parameteret er "i" fra en for-løkke
let groupIndex;
function editGroup(index) {
	groupIndex = index;
	groupMembers = "";
	model.input.currentGroup = index;

	groupToView = model.app.currentUser.groups[index].name; //navnet på gruppa
	//looper gjennom alle medlemmene i gruppa
	for (let i = 0; i < model.app.currentUser.groups[index].members.length; i++) {
		groupMembers +=
			`<div onclick='${(model.input.editingGroup = model.app.currentUser.groups[index])}'>` +
			`<i 
				onclick="removeGroupMember(${index}, ${i})"
				style="cursor: pointer;"
				class="fas fa-trash filter-orange">
			</i>` +
			" " +
			model.app.currentUser.groups[index].members[i].name +
			"</div>" +
			"<br>";
	}

	groupsEdit(); //endrer/oppdaterer Viewet
}

//kalles fra groupsEdit()
function addMember() {
	let newMember = {
		name: model.input.addNewMember.name,
		age: model.input.addNewMember.age,
	};

	//pusher det nye medlemmet inn i arrayet av medlemmer til gruppa
	model.app.currentUser.groups[model.input.currentGroup].members.push(newMember);
	//oppdatere lista med medlemmer
	editGroup(groupIndex);
}

//kalles fra groupsAdd()
function createNewGroup() {
	let newGroup = {
		id: model.data.lastGroupID + 1,
		name: model.input.createNewGroup.name,
		members: [], //ingen medlemmer enda. Det settes i groupsEdit()
	};
	model.app.currentUser.groups.push(newGroup); //pusher den nye gruppa inn i groups[] arrayet til brukern
	model.data.lastGroupID = model.data.lastGroupID + 1;
	groupsHome(); //endrer/oppdaterer Viewet
}

//Gjør akkurat det den sier den gjør
function changeGroupName() {
	model.app.currentUser.groups[model.input.currentGroup].name = model.input.changeGroupName;
	groupsHome(); //endrer/oppdaterer Viewet
}

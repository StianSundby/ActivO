function groupsView1() {
	appDiv.innerHTML = /*html*/ `
	<div class="groupContainer"> 
	
	</div>
    `;
}

function groups() {
	groupButton = "activeButton";
	activityButton = "";
	page = `
        <button onclick="createNewGroup">Create new group</button>
    `;
	groupsView1();
}

//TODO: createNewGroup()

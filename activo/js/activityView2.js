let pageInfo = "";

function activityView2() {
	appDiv.innerHTML = /*html*/ `
	<div class="container">
        <button onclick="loginView()">Logout</button>
            <div class="homeContent">
                <div class="leftSide">
                    <img class="logo" height="250px" width="250px" src="resources/images/ActivO.png">
                    <div>
                        <button class="${activityButton}" onclick="newActivity()">New activity</button>
                        <br>
                        <button class="${groupButton}" onclick="groups()">Groups</button>
                    </div>
                </div>
                <div class="rightSide"> 
					${pageInfo} 
                </div>
			</div>
    `;
}

function groupInfo(groupIndex) {
	console.log(groupIndex);
	pageInfo = `
	    <h1>${model.app.currentUser.groups[groupIndex].name}</h1>
	`;
	//signedInUser er ID'en til brukern, som starter på 1. Så vi tar -1 for å finne index
	for (let i = 0; i < model.app.currentUser.groups[groupIndex].members.length; i++) {
		pageInfo += `
	    <div>
	        ${model.app.currentUser.groups[groupIndex].members[i].name}
	    </div>
	    <br>
	    `;
	}
	activityView2();
}

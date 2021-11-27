checkInfo();
//sjekker om det som er skrevet inn i inputfeltene stemmer overns/finnes i modellen
function checkInfo() {
	let userList = model.data.users;
	let inputUsername = model.input.credentialsLogin.username;
	let inputPassword = model.input.credentialsLogin.password;
	for (let i = 0; i < userList.length; i++) {
		if (inputUsername == userList[i].username) {
			//sjekker om brukernavnet stemmer
			if (inputPassword == userList[i].password) {
				//sjekker om passordet stemmer
				model.app.currentUser = userList[i]; //setter signedInUser til id'en til brukern
				activityHome(); //bytter fra loginView() til appView()
			} else if (inputPassword != userList[i].password) {
				//hvis passordet ikke stemmer
				alert("Error, wrong username or password");
				return;
			}
		} else if (i >= userList.length) {
			//gått igjennom alle brukerne
			alert("Error, wrong username or password");
			return;
		}
	}
}

checkInfo();
function checkInfo() {
	let userList = model.data.users;
	let inputUsername = model.input.credentialsLogin.username;
	let inputPassword = model.input.credentialsLogin.password;
	for (let i = 0; i < userList.length; i++) {
		if (
			inputUsername == userList[i].username &&
			inputPassword == userList[i].password
		) {
			if (inputPassword == userList[i].password) {
				appView();
			} else if (inputPassword != userList[i].password) {
				alert("Error, wrong username or password");
				return;
			}
		} else if (i >= userList.length) {
			alert("Error, wrong username or password");
			return;
		}
	}
}

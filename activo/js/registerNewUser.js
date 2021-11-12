let userList = model.data.users;
let inputUsername = model.input.credentialsRegister.username;
let inputEmail = model.input.credentialsRegister.email;
let inputPassword = model.input.credentialsRegister.password;
let inputPasswordConfirm = model.input.credentialsRegister.passwordConfirm;
let inputAge = model.input.credentialsRegister.age;

function registerNewUser() {
	if (1 + 1 == 2) {
		for (let i = 0; i < userList.length; i++) {
			if (inputUsername == userList[i].username) {
				alert("Username is already taken");
				return;
			} else if (inputEmail == userList[i].email) {
				alert("Email is already in use");
				return;
			} else if (inputPassword != inputPasswordConfirm) {
				alert("Passwords have to be the same");
				return;
			} else if (
				inputUsername != userList[i].username &&
				inputEmail != userList[i].email &&
				inputPassword == inputPasswordConfirm
			) {
				pushData();
				return;
			}
		}
	} else {
		console.log(inputUsername);
		console.log(inputEmail);
		console.log(inputPassword);
		console.log(inputPasswordConfirm);
		console.log(inputAge);
		console.log("Please fill out all the fields");
		console.log(model.input.credentialsRegister);
		// alert("Please fill out all the fields");
	}
}

function pushData() {
	model.data.users.push({
		id: userList.length + 1,
		email: inputEmail,
		username: inputUsername,
		password: inputPassword,
		age: inputAge,
	});
	loginView();
}

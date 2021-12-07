function registerNewUser() {
	let inputUsername = model.input.credentialsRegister.username;
	let inputEmail = model.input.credentialsRegister.email;
	let inputPassword = model.input.credentialsRegister.password;
	let inputPasswordConfirm = model.input.credentialsRegister.passwordConfirm;
	let inputAge = model.input.credentialsRegister.age;

	if (
		//sjekker at alle feltene er fylt ut
		inputUsername == "" ||
		inputEmail == "" ||
		inputPassword == "" ||
		inputPasswordConfirm == "" ||
		inputAge == ""
	) {
		alert("Please fill out all the fields");
		return;
	}
	checkEmail(inputEmail, 3);

	//sjekk om det allerede er en bruker i arrayet med samme username
	for (let i = 0; i < users.length; i++) {
		if (inputUsername.toLowerCase() === users[i].username.toLowerCase()) {
			alert("Username is already taken");
			return;
		}
		//sjekk om det allerede en bruker i arrayet med samme email
		else if (inputEmail.toLowerCase() === users[i].email.toLowerCase()) {
			alert("Email is already in use");
			return;
		}
	}
	//sjekk om begge passordfeltene er identiske
	if (inputPassword !== inputPasswordConfirm) {
		alert("Passwords must match");
		return;
	}

	//ny bruker objekt
	let user = {
		id: users.length + 1,
		email: inputEmail,
		username: inputUsername,
		password: inputPassword,
		age: inputAge,
		groups: [],
	};
	pushData(user);
}

//Pusher den nye brukern inn i arrayet
//Parameteret er objektet generert i registerNewUser()
function pushData(user) {
	model.data.users.push(user);
	loginView();
}

function checkEmail(email) {
	let atSymbol = email.indexOf("@");
	if (atSymbol < 1) return false;

	let dot = email.indexOf(".");
	if (dot <= atSymbol + 2) return false;
	if (dot === email.length - 1) return false;
	return true;
}

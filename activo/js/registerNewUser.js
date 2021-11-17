function registerNewUser() {
	//disse er bare her så vi slipper å skrive så mye
	let userList = model.data.users;
	let inputUsername = model.input.credentialsRegister.username;
	let inputEmail = model.input.credentialsRegister.email;
	let inputPassword = model.input.credentialsRegister.password;
	let inputPasswordConfirm = model.input.credentialsRegister.passwordConfirm;
	let inputAge = model.input.credentialsRegister.age;

	if (
		//sjekker at alle feltene er fylt ut
		!inputUsername ||
		!inputEmail ||
		!inputPassword ||
		!inputPasswordConfirm ||
		!inputAge
	) {
		alert("Please fill out all the fields");
		return;
	}
	//sjekk om det allerede er en bruker i arrayet med samme username
	for (let i = 0; i < userList.length; i++) {
		if (inputUsername == userList[i].username) {
			alert("Username is already taken");
			return;
		}
		//sjekk om det allerede en bruker i arrayet med samme email
		if (inputEmail == userList[i].email) {
			alert("Email is already in use");
			return;
		}
	}
	//sjekk om begge passordfeltene er identiske
	if (inputPassword !== inputPasswordConfirm) {
		alert("Password must match");
		return;
	}
	//ny bruker objekt
	let user = {
		id: userList.length + 1,
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

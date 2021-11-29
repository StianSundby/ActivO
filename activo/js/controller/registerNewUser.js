function registerNewUser() {
	if (
		//sjekker at alle feltene er fylt ut
		inputUsername != "" ||
		inputEmail != "" ||
		inputPassword != "" ||
		inputPasswordConfirm != "" ||
		inputAge != ""
	) {
		alert("Please fill out all the fields");
		return;
	}
	//sjekk om det allerede er en bruker i arrayet med samme username
	for (let i = 0; i < users.length; i++) {
		console.log("checking user: " + i + ":");
		console.log(users[i]);
		console.log("//");
		if (inputUsername.toLowerCase() === users[i].username.toLowerCase()) {
			alert("Username is already taken");
			return;
		}
		//sjekk om det allerede en bruker i arrayet med samme email
		else if (inputEmail.toLowerCase() === users[i].email.toLowerCase()) {
			console.log(users[i].email);
			alert("Email is already in use");
			return;
		}
	}
	//sjekk om begge passordfeltene er identiske
	if (inputPassword !== inputPasswordConfirm) {
		alert("Passwords must match");
		return;
	}
	if (validateEmail(inputEmail) !== true) {
		alert("Please enter a valid email address");
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

function validateEmail(email) {
	//              string@string.string
	var emailformat = /\S+@\S+\.\S+/;
	console.log(emailformat);
	console.log(email);
	console.log(emailformat.test(email));
	if (email.match(emailformat)) {
		return true;
	}
	return false;
}

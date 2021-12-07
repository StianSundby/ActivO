//viewet for å registrere en ny bruker
function registerView() {
	appDiv.innerHTML = `
        <div class="loginContainer">      
            <div id="Logo">
                <img class="logo" height="250px" width="250px" src="resources/images/ActivO.png">
            </div>
            <input  
                class="loginInput"
                type="text" 
                placeholder="Username" 
                value="${model.input.credentialsRegister.username}" 
                oninput="model.input.credentialsRegister.username = this.value">
            </input><br>
            <input  
                class="loginInput"
                type="text" 
                placeholder="Email" 
                value="${model.input.credentialsRegister.email}" 
                oninput="model.input.credentialsRegister.email = this.value;">
            </input><br>
            <input  
                class="loginInput"
                type="password" 
                placeholder="Password"
                value="${model.input.credentialsRegister.password}" 
                oninput="model.input.credentialsRegister.password = this.value">
            </input><br>
            <input  
                class="loginInput"
                type="password" 
                placeholder="Confirm password"
                value="${model.input.credentialsRegister.passwordConfirm}" 
                oninput="model.input.credentialsRegister.passwordConfirm = this.value">
            </input><br>
            <input
                class="loginInput"
                type="number"
                placeholder="Age"
                min="1"
                max="120"
                value="${model.input.credentialsRegister.age}" 
                oninput="model.input.credentialsRegister.age = this.value">
            </input><br>
            <button onclick="registerNewUser()">Register</button><br>
            <button onclick="loginView()">Go back</button>
        </div>
    `;
}

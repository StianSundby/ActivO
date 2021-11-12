function loginView() {
	appDiv = document.getElementById("app");
	appDiv.innerHTML = `
        <div class="loginWindow">      
            <div id="Logo">
                <img class="logo" height="250px" width="250px" src="resources/images/ActivO.png">
            </div>
            <p>Login page</p>
            <input  
                class="loginWindow"
                type="text" 
                placeholder="Username" 
                value="${model.input.credentialsLogin.username}" 
                oninput="model.input.credentialsLogin.username = this.value">
            </input>
            <br>
            <input  
                class="loginWindow"
                type="password" 
                placeholder="Password" 
                value="${model.input.credentialsLogin.password}" 
                oninput="model.input.credentialsLogin.password = this.value, console.log(this.value)">
            </input>
            <br>
            <button onclick="checkInfo()">Login</button>
            <br>
            <button onclick="registerView()">Register</button>
        </div>
    `;
}

function registerView() {
	appDiv = document.getElementById("app");
	appDiv.innerHTML = `
        <div class="loginWindow">      
            <div id="Logo">
                <img class="logo" height="250px" width="250px" src="resources/images/ActivO.png">
            </div>
            <p>Register new user</p>
            <input  
                class="loginWindow"
                type="text" 
                placeholder="Username" 
                value="${model.input.credentialsRegister.username}" 
                oninput="model.input.credentialsRegister.username = this.value">
            </input>
            <br>
            <input  
                class="loginWindow"
                type="text" 
                placeholder="Email" 
                value="${model.input.credentialsRegister.email}" 
                oninput="model.input.credentialsRegister.email = this.value">
            </input>
            <br>
            <input  
                class="loginWindow"
                type="password" 
                placeholder="Password"
                value="${model.input.credentialsRegister.password}" 
                oninput="model.input.credentialsRegister.password = this.value">
            </input>
            <br>
            <input  
                class="loginWindow"
                type="password" 
                placeholder="Confirm password"
                value="${model.input.credentialsRegister.passwordConfirm}" 
                oninput="model.input.credentialsRegister.passwordConfirm = this.value">
            </input>
            <br>
            <input
                class="loginWindow"
                type="number"
                placeholder="Age"
                min="1"
                max="120"
                value="${model.input.credentialsRegister.age}" 
                oninput="model.input.credentialsRegister.age = this.value">
            </input>
            <br>
            <button onclick="registerNewUser()">Register</button>
            <br>
            <button onclick="loginView()">Go back</button>
            <br>
            <button onclick="test()">Test</button>
        </div>
    `;
}

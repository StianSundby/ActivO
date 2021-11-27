//viewet for å logge inn
function loginView() {
	appDiv.innerHTML = `
        <div class="loginWindow">      
            <div id="Logo">
                <img class="logo" height="250px" width="250px" src="resources/images/ActivO.png">
            </div>
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
                oninput="model.input.credentialsLogin.password = this.value">
            </input>
            <br>
            <button onclick="checkInfo()">Login</button>
            <br>
            <button onclick="registerView()">Register</button>
        </div>
    `;
}

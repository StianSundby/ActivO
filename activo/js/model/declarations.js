let appDiv = document.getElementById("app"); //main div for all views

//disse brukes for det meste i loginAuth
let users = model.data.users;
let inputUsername = model.input.credentialsRegister.username;
let inputEmail = model.input.credentialsRegister.email;
let inputPassword = model.input.credentialsRegister.password;
let inputPasswordConfirm = model.input.credentialsRegister.passwordConfirm;
let inputAge = model.input.credentialsRegister.age;

let signedInUser; //ID'en til brukern. Settes i loginAuth.js når brukern logger inn.
let currentUser = model.app.currentUser; //hele bruker-objektet, ikke bare ID som den over
let userSelectedGroup; //den valgte gruppen, settes i activityController.js
let activityButton = "activeButton"; //brukes for å indikere hvilken side du er på. Er egentlig bare en style
let groupButton = ""; //samme som over. Det bytter hvilken som har "activeButton"
let namesOfGroups; //viser alle navnene på gruppene tilknyttet brukern. Genereres i getGroups()
let activtiesHtml = ""; //vises i activitySuggestions.js, settes i filterController.js

let activitiesArray = model.data.activities; //kortere
let filterArray = model.input.filtersChecked; //kortere
let tempArray = []; //brukes for å lagre alle aktiviteter (activitiesArray[i].name) som stemmer overens med filterne
//det hentes så ut 3 tilfeldige indekser som skal vises til brukern
let groupList; //vises i groupsHome.js og settes i groups() i groupController.js
let groupToView; //settes i editGroup() som blir kalt fra groups() i groupController.js. Hentes fra groupsHome.js
let groupMembers = ""; //samme som over
let groupAge = []; //lagrer aldrene på medlemmene i gruppa. Sortert lavest - høyest. Fylles i getGroupAge() i filterController()

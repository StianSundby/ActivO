let signedInUser; //settes i loginAuth.js når brukern logger inn. Det er id'en til brukern
let activityButton = "activeButton"; //brukes for å indikere hvilken side du er på. Er egentlig bare en style
let groupButton = ""; //samme som over. Det byttes hvilken som har "activeButton"
let namesOfGroups; //viser alle navnene på gruppene tilknyttet brukern. Genereres i getGroups()

let activitiesArray = model.data.activities;
let filterArray = model.input.filtersChecked;
let groupList;
let groupToView;
let groupMembers = "";

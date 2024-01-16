/* Variables */
/* var -> globally or locally entier function scope, let + const -> locally scope*/

if (typeof document !== "undefined") {
    console.log(`exists JvL`) // document exists
} else {
    console.log(`No exists JvL`) // document does not exist
}

/*date*/

//document.addEventListener('DOMContentLoaded', function() {
// Your code here
let showDate = document.getElementById("resentDate");
const d = new Date();
let year = d.getFullYear();
const yearMonth = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"]
let month = yearMonth[d.getMonth()];
const weekday = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
let day = weekday[d.getDay()];
let dayNr = d.getDate();
console.log(d);
showDate.innerHTML = `${day} ${dayNr} ${month} ${year}`;
//});
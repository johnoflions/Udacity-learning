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
console.log(d);
showDate.innerHTML = d;
//});
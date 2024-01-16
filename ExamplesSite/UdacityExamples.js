/* Variables */
/* var -> globally or locally entier function scope, let + const -> locally scope*/

if (typeof document !== "undefined") {
    console.log(`exists JvL`) // document exists
} else {
    console.log(`No exists JvL`) // document does not exist
}

/*date*/
const d = new Date();
console.log(d);
document.getElementById("recentDate").innerHTML = d;
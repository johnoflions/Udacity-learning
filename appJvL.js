let windowWidth = window.innerWidth;
console.log(`Vensterbreedte is: ${windowWidth}`);
let textTopic = document.querySelector('.textTopic');
const d = new Date();
let minutes = d.getMinutes();
let hours = d.getHours();
// let time24h = `${hours}:${minutes}`;
// console.log(time24h);
let greetingText = "";

function greeting() {
    if (hours < 6) { greetingText = "Goedenacht" } else if (hours >= 6 && hours < 12) { greetingText = "Goedemorgen" } else if (hours >= 12 && hours < 18) { greetingText = "Goedemiddag" } else { greetingText = "Goedenavond" };
    return greetingText
};

console.log(textTopic);
textTopic.addEventListener('mouseover', function(event) {
    const el = event.target;
    document.body.style.cursor = 'pointer';
    el.setAttribute('style', 'text-shadow: 6px 6px 16px black');
    el.setAttribute('style', 'color: red');

    document.getElementById('pre1').innerText = `"${greeting()}, welkom op mijn fotografie website!"`;
    document.getElementById('pre2').innerText = `              "Kijk gerust even rond, veel plezier!"`;

});

textTopic.addEventListener('mouseout', function(event) {
    const el = event.target;
    document.body.style.cursor = 'default';
    el.setAttribute('style', 'text-shadow: 3px 3px 8px black');
    el.setAttribute('style', 'color: darkblue');

    document.getElementById('pre1').innerText = `"Go outside, nature allways has something...`;
    document.getElementById('pre2').innerText = `                    ...beautiful to take pictures of."`;
});

let countClick = 0;
textTopic.addEventListener('click', function() {
    countClick += 1;
    //alert(`Welkom op mijn Site! Je hebt ${countClick} geklikt.`);
    console.log(`Geklikt: ${countClick}`);
});
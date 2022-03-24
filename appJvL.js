// "Get the greeting text similar to the moment of the day"
let windowWidth = window.innerWidth;
//console.log(`Vensterbreedte is: ${windowWidth}`);
let textTopic = document.querySelector('.textTopic');
const d = new Date();
let minutes = d.getMinutes();
let hours = d.getHours();
let greetingText = "";

function greeting() {
    if (hours < 6) { greetingText = "Goedenacht" } else if (hours >= 6 && hours < 12) { greetingText = "Goedemorgen" } else if (hours >= 12 && hours < 18) { greetingText = "Goedemiddag" } else { greetingText = "Goedenavond" };
    return greetingText
};

// "Mouse event on the logo name"
const quoteA = document.getElementById('pre1');
const quoteB = document.getElementById('pre2');

textTopic.addEventListener('mouseover', (event) => {
    const el = event.target;
    document.body.style.cursor = 'pointer';
    el.style.cssText = 'text-shadow: 6px 6px 16px black;color:lightgreen';

    quoteA.innerText = `"${greeting()}, welkom op mijn fotografie website!"`;
    quoteB.innerText = `"Klik op deze Fot[o]verbetuwe-logo voor de diashow, veel plezier!"`;
    quoteA.style.cssText = 'color:lightgreen;font-style:italic';
    quoteB.style.cssText = 'color:lightgreen;font-style:italic; font-size: 2em';
});

textTopic.addEventListener('mouseout', (event) => {
    const el = event.target;
    document.body.style.cursor = 'default';
    el.style.cssText = 'text-shadow:3px 3px 8px black;color:darkblue';
    quoteA.innerText = `"Go outside, nature allways has something...`;
    quoteB.innerText = `                    ...beautiful to take pictures of."`;
    quoteA.style.cssText = 'color:rgb(139,0,0);font-style:normal';
    quoteB.style.cssText = 'color:rgb(139,0,0);font-style:normal';
});
// "Store the pictures in an Array"
let imagesAll = ['photo/Photo_1604570641080.jpg',
    'photo/Photo_1610200771945.jpg',
    'photo/Photo_1610317702864.jpg',
    'photo/Photo_1610843207976.jpg',
    'photo/Photo_1613246570991.jpg',
    'photo/Photo_1613313234526.jpg',
    'photo/Photo_1614511968564.jpg',
    'photo/Photo_1616231924679.jpg',
    'photo/Photo_1620509140821.jpg',
    'photo/Photo_1620560539841.jpg',
    'photo/Photo_1621779838601.jpg',
    'photo/Photo_1626631883997.jpg',
    'photo/Photo_1628928315914.jpg',
    'photo/Photo_1629559496705.jpg',
    'photo/Photo_1630845060372.jpg',
    'photo/Photo_1633878455455.jpg',
    'photo/Photo_1634643309597.jpg',
    'photo/Photo_1634673083097.jpg',
    'photo/Photo_1635449991475.jpg',
    'photo/WN2_0008.JPG',
    'photo/Photo_1596370945442.jpg',
    'photo/Photo_1597689215306.jpg',
    'photo/Photo_1597819325764.jpg',
    'photo/Photo_1597953753488.jpg',
    'photo/Photo_1597953755606.jpg',
    'photo/Photo_1600716196451.jpg',
    'photo/Photo_1601070881954.jpg',
    'photo/Photo_1603042270833.jpg'
];


// "Create the insert diashow by clicking logo name"

const imgEl = document.createElement('img');
let countClick = 0;
textTopic.addEventListener('click', () => {
    countClick += 1;
    //alert(`Welkom op mijn Site! Je hebt ${countClick} geklikt.`);
    console.log(`Geklikt: ${countClick}`);
    const divEl = document.createElement('div');
    let imgSetInt = null;


    const images = document.querySelector('#quote');
    if (countClick === 1) {
        images.insertAdjacentElement('afterbegin', divEl);
        //imgEl.src = imagesAll[5];
        divEl.appendChild(imgEl);
        divEl.style.cssText = 'display:flex; height:600px; width:auto; border: 4px solid yellow; overflow:hidden; align-items:center; padding-left:25%; padding-right:25%';
        imgEl.style.cssText = 'max-height:550px; max-width:auto; border:5px solid pink; padding:5px; margin:inherit; opacity:0';
    }
    console.log(`je hebt ${countClick} keer geklikt `);
    imgSetInt = setInterval(function() {
        imgageSlides();
        if (countClick % 2 === 0) {
            clearInterval(imgSetInt);
            images.style.display = 'none';
            console.log(`je hebt ${countClick} DELEN door 2 keer geklikt`);
        } else {
            console.log(`je hebt ${countClick} ONEVEN keer geklikt `);
            images.style.display = 'block';
            imgSetInt;
        }
    }, 3500);


});

const imgNr = 0;
let i = imgNr;

function imgageSlides() {
    let imgCheck = true;
    console.log(`ì before if ${i}`);
    if (imgCheck) {
        imgEl.style.opacity = 1;
        imgEl.style.transition = "opacity 2s ease-in-out";
        imgEl.src = imagesAll[i];
        //console.log(`ì loopt op of ${i++}`);
        i++;
        console.log(`i = ${i}`);
        console.log(`ìmage is ${imagesAll[i]}`);
        if (i === imagesAll.length) { i = 0; }
        imgCheck = false;
    } else if (countClick % 2 === 0) {
        console.log(`Werkt 2e klik binnen imageSlides()`);
        clearInterval(imgSetInt);
        imgSetInt = null;
    } else {
        imgEl.style.opacity = 0;
        imgEl.style.transition = "opacity 2s ease-in-out";
        imgCheck = true;
        console.log(`else ${imagesAll[i]}`);
    }
}
// "Highlight the cards div section"
const threeCards = document.getElementById('section3Card');
const oneCards = threeCards.getElementsByClassName('cardDiv');
for (let j = 0; j < oneCards.length; j++) {
    //console.log(`net na loop card lengte ${oneCards.length}`);
    oneCards[j].addEventListener('click', function() {
        let currentCard = document.getElementsByClassName('active');
        if (currentCard.length > 0) {
            currentCard[0].className = currentCard[0].className.replace(' active', '');
        }
        this.className += ' active';
    });
}
// "Viewport section"
function isInVieuwport(element) {
    element = document.querySelector('#topic');
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= window.innerHeight &&
        rect.right <= window.innerWidth
    );
}
console.log(isInVieuwport());
// check if topic element is in the viewport
const topic = document.querySelector('#topic');
const topicViewData = topic.getBoundingClientRect();
console.log(topicViewData);
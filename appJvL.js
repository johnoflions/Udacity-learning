function start() {
    let textTopic = document.querySelector('.textTopic');

    console.log(textTopic);
    textTopic.addEventListener('mouseover', function(event) {
        const el = event.target;
        document.body.style.cursor = 'pointer';
        el.setAttribute('style', 'text-shadow: 6px 6px 16px black');
    });

    textTopic.addEventListener('mouseout', function(event) {
        const el = event.target;
        document.body.style.cursor = 'default';
        el.setAttribute('style', 'text-shadow: 3px 3px 8px black');
    });

    let countClick = 0;
    textTopic.addEventListener('click', function() {
        countClick += 1;
        //alert(`Welkom op mijn Site! Je hebt ${countClick} geklikt.`);
        console.log(`Geklikt: ${countClick}`);
    });

}
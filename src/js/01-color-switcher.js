const refs = {
    start: document.querySelector('[data-start]'),
    stop: document.querySelector('[data-stop]'),
}

refs.start.addEventListener("click", startColor);
refs.stop.addEventListener("click", stopColor);
let intervalId = null;

function startColor() {

    intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    
    refs.start.setAttribute('disabled', 'true');
}

function stopColor() {
    clearInterval(intervalId);
    refs.start.removeAttribute('disabled');
}

function getRandomHexColor() {
    const str1 = Math.floor(Math.random() * 16777215).toString(16);
    // console.log(str1);
    str1.padStart(6, '0')
    // console.log(str1);
    return `#${str1}`;
}

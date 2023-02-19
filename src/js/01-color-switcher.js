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
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

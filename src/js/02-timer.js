import flatpickr from "flatpickr"; 
import "flatpickr/dist/flatpickr.min.css"; 
import Notiflix from 'notiflix'; 

const startButton = document.querySelector('[data-start]');
startButton.setAttribute('disabled', 'true');
startButton.addEventListener("click", runTime);
let selectedDates = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selected) {
    startButton.removeAttribute('disabled'); 
    selectedDates = selected;
  },
};

flatpickr('input#datetime-picker', options);


function runTime() {
  const dateNow = new Date();
  if (dateNow.getTime() >=selectedDates[0].getTime()) {
    Notiflix.Notify.warning('Please choose a date in the future');
  }
  else { 
    startButton.setAttribute('disabled', 'true');
    const intervalId = setInterval(() => {

   
      const ms = selectedDates[0].getTime() - new Date().getTime();
      const msRound = Math.floor(ms / 1000);
      if (msRound === 0) { clearInterval(intervalId); }

      convertMs(ms); 
    },
    1000);
  }
}

function convertMs(ms) {

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  document.querySelector('span[data-days]').textContent = addLeadingZero(Math.floor(ms / day));
  document.querySelector('span[data-hours]').textContent = addLeadingZero(Math.floor((ms % day) / hour));
  document.querySelector('span[data-minutes]').textContent = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  document.querySelector('span[data-seconds]').textContent = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
}

function addLeadingZero(value) { 
  return String(value).padStart(2, "0");
}
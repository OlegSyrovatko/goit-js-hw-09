import flatpickr from "flatpickr"; 
import "flatpickr/dist/flatpickr.min.css"; 
import Notiflix from 'notiflix'; 

const startButton = document.querySelector('[data-start]');
startButton.setAttribute('disabled', 'true');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    
    const dateNow = new Date();
    const compareDate = dateNow - selectedDates[0];
    if (compareDate >=0) {
      Notiflix.Notify.warning('Please choose a date in the future');
    }
    else { 

      startButton.removeAttribute('disabled'); 
      const intervalId = setInterval(() => {

        const dateNow = new Date();
        const ms = selectedDates[0] - dateNow;
        if (Math.round(ms / 1000) == 0) { clearInterval(intervalId); }

        convertMs(ms); 
      },
      1000);
    }
  },
};

flatpickr('input#datetime-picker', options);

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
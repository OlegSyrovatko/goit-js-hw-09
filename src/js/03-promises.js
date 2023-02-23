import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector(".form"),
  delay: document.getElementsByName("delay"),
  step: document.getElementsByName("step"),
  amount: document.getElementsByName("amount"),
}

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const amount = Number(refs.amount[0].value);
  const step = Number(refs.step[0].value);
  const delayDefault = Number(refs.delay[0].value);
  let delay = delayDefault;
  let position = 1;

  setTimeout(() => {
    const timerId = setInterval(() => {

      createPromise(position, delay)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
        },
        ).catch(({ position, delay }) => {
          Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
        });

      delay += step;
      position += 1;
      if (position == amount + 1) { clearInterval(timerId) }
    }, step);
  }, delayDefault);
}

const createPromise = (position, delay) => {

  return new Promise((resolve, reject) => {

    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });

};


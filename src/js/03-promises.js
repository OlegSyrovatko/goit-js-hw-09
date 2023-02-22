import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector(".form"),
  delay: document.getElementsByName("delay"),
  step: document.getElementsByName("step"),
  amount: document.getElementsByName("amount"),
}

refs.form.addEventListener('submit', onFormSubmit);


const createPromise = (i, allDelay) => {
  return new Promise((resolve, reject) => {

    // setTimeout(() => {
    const shouldResolve = Math.random() > 0.3;

    if (shouldResolve) {
      Notiflix.Notify.success(`✅ Fulfilled promise ${i} in ${allDelay}ms`);
    } else {
      Notiflix.Notify.failure(`❌ Rejected promise ${i} in ${allDelay}ms`);
    }
    // }, step); 
  });
};

function onFormSubmit(e) {
  e.preventDefault();
  const step = refs.step[0].value;
  const delay = refs.delay[0].value;
  let allDelay = Number(delay);

  setTimeout(() => {
    for (let position = 1; position <= refs.amount[0].value; position++) {

      setTimeout(() => {
        allDelay += Number(step);
        console.log(step);
        createPromise(position, allDelay)
          .then(({ position, delay }) => {

          })
          .catch(({ position, delay }) => {

          });
      }, step);
    }
  }, delay);
}
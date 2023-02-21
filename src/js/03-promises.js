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
    console.log(refs.delay[0].value);

  Notiflix.Notify.warning(refs.delay[0].value);
Notiflix.Notify.success('Sol lucet omnibus');

Notiflix.Notify.failure('Qui timide rogat docet negare');
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

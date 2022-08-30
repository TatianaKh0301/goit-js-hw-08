import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input[name = "email"]'),
    message: document.querySelector('.feedback-form input[name = "message"]'),
}

refs.form.addEventListener('submit', onFormSubmit);
refs.email.addEventListener('input', onEmailInput);
refs.message.addEventListener('input', onMessageInput);

function onFormSubmit() {
    console.log('form data');
}

function onEmailInput() {
    console.log("email", refs.email.value);   
}

function onMessageInput() {
    console.log('message', refs.email.value);   
}
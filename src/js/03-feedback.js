import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
let formData = {};
const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea'),
};

populateMessage();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(e) {
    formData[e.target.name] = e.target.value;
    const formDataJSON = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, formDataJSON);
}

function onFormSubmit(e) {
    e.preventDefault();
    console.log("formData", formData);
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function populateMessage() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
        const parseSaveMessage = JSON.parse(savedMessage);
        formData = parseSaveMessage;
        refs.email.value = formData.email;
        refs.message.value = formData.message;
    }
}
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
    console.log("refs.email.textContent", refs.email.textContent);
    console.log("refs.message.textContent", refs.message.textContent);
    console.log("refs.email.value", refs.email.value);
    console.log("refs.message.value", refs.message.value);
    if(refs.email.value === '' || refs.message.value === '') {
        alert("ВСІ ПОЛЯ ПОВИННІ БУТИ ЗАПОВНЕНІ!!!!");
        return;
    } else {
        e.currentTarget.reset();
        localStorage.removeItem(STORAGE_KEY);
        formData = {};
    }         
}

function populateMessage() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
        const parseSaveMessage = JSON.parse(savedMessage);
        formData = parseSaveMessage;
        if (formData.message === undefined) {
            refs.message.value = '';
        } else {
            refs.message.value = formData.message;
        }
        if (formData.email === undefined) {
            refs.email.value = '';
        } else {
            refs.email.value = formData.email;
        }        
    }
}
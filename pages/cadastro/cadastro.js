const form = document.querySelector('form');
const inputEmail = document.querySelector('.input-email');
const inputSenha = document.querySelector('.input-senha');
const inputName = document.querySelector('.input-name');

const btnRegister = document.querySelector('.btn-register');
const btnCancel = document.querySelector('.btn-cancel');

const register = document.querySelector('.register, a');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!inputEmail.value || !inputSenha.value || !inputName.value) {
        return;
    }

    btnRegister.addEventListener('click', () => {
        window.location = '../login/login.html'
    })
})

register.addEventListener('click', () => {
    window.location = '../login/login.html'
});

btnCancel.addEventListener('click', () => {
    inputEmail.value = '';
    inputSenha.value = '';
    inputName.value = '';
});
const form = document.querySelector('form');
const inputEmail = document.querySelector('.input-email');
const inputSenha = document.querySelector('.input-senha');
const btnLogin = document.querySelector('.btn-login');
const cadastro = document.querySelector('.cadastro, a');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!inputEmail.value || !inputSenha.value) {
        return;
    }

    btnLogin.addEventListener('click', () => {
        window.location = '../home/home.html'
    })
})

cadastro.addEventListener('click', () => {
    window.location = '../cadastro/cadastro.html'
});




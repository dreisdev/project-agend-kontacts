
const btnAddTable = document.querySelector('.btn-add-table');
const btnAdd = document.querySelector('.btn-add');
const btnClear = document.querySelector('.btn-clear');

const modal = document.querySelector('.modal');
const backgroundModal = document.querySelector('.modal-background');

const btnClose = document.getElementById('close');
const logout = document.getElementById('logout');

const modalDelete = document.querySelector('.modal-delete');
const btnDelete = document.querySelector('.btn-delete');
const btnCancelDelete = document.querySelector('.btn-cancel-delete');

const trash = document.querySelectorAll('.trash');

const btnCloseDelete = document.getElementById('close-delete');


btnAddTable.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();

    backgroundModal.style.display = 'block';
    modal.style.display = 'flex';
});

btnAdd.addEventListener('click', () => {
    backgroundModal.style.display = 'none';
    modal.style.display = 'none';
});

btnClear.addEventListener('click', () => {
    backgroundModal.style.display = 'none';
    modal.style.display = 'none';
});

btnClose.addEventListener('click', () => {
    backgroundModal.style.display = 'none';
    modal.style.display = 'none';
});

logout.addEventListener('click', () => {
    window.location = '../login/login.html'
});



trash.forEach((trashs) => {

    trashs.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();

        backgroundModal.style.display = 'block';
        modalDelete.style.display = 'flex';

    });

});

btnDelete.addEventListener('click', () => {
    backgroundModal.style.display = 'none';
    modalDelete.style.display = 'none';
});

btnCancelDelete.addEventListener('click', () => {
    backgroundModal.style.display = 'none';
    modalDelete.style.display = 'none';
});

btnCloseDelete.addEventListener('click', () => {
    backgroundModal.style.display = 'none';
    modalDelete.style.display = 'none';
});








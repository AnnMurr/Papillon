const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.modal__btn-close');
const btnContact = document.querySelector('.btn-contact');
let isModalActive = false;

btnContact.addEventListener('click', function() {
    modal.classList.toggle('modal_active');
    isModalActive = modal.classList.contains('modal_active');
    
    if (isModalActive) {
        document.addEventListener('click', removeModal);
    } else {
        document.removeEventListener('click', removeModal);
    }
});

btnClose.addEventListener('click', function() {
    modal.classList.remove('modal_active');
});

function removeModal(event) {
    if (!modal.contains(event.target) && !btnContact.contains(event.target)) {
        modal.classList.remove('modal_active');
        document.removeEventListener('click', removeModal);
        isModalActive = false;
    }
}
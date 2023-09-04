const password_input = document.querySelector('.pass');
const confirm_input = document.querySelector('.confirm');

const error_div = document.querySelector('.error-div');

password_input.addEventListener('focusout', () => {
    if (confirm_input.value &&
        password_input.value !== confirm_input.value) {
        password_input.classList.add('error');
        confirm_input.classList.add('error');
        error_div.textContent = '* Passwords do not match';
    }
});

confirm_input.addEventListener('focusout', () => {
    if (confirm_input.value &&
        password_input.value !== confirm_input.value) {
        password_input.classList.add('error');
        confirm_input.classList.add('error');
        error_div.textContent = '* Passwords do not match';
    }
});

password_input.addEventListener('keyup', () => {
    if (password_input.value === confirm_input.value) {
        password_input.classList.remove('error');
        confirm_input.classList.remove('error');
        error_div.textContent = '';
    }
});

confirm_input.addEventListener('keyup', () => {
    if (password_input.value === confirm_input.value) {
        console.log("Hello?");
        password_input.classList.remove('error');
        confirm_input.classList.remove('error');
        error_div.textContent = '';
    }
});
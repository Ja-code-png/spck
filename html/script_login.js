const loginForm = document.getElementById('LoginForm');
const registrationForm = document.getElementById('RegistrationForm');
const forgotPasswordForm = document.getElementById('ForgotPasswordForm');
const showLoginBtn = document.getElementById('ShowLoginBtn');
const showRegistrationBtn = document.getElementById('ShowRegistrationBtn');

function showLoginForm() {
    loginForm.style.display = 'block';
    registrationForm.style.display = 'none';
    forgotPasswordForm.style.display = 'none';
    showLoginBtn.classList.add('active');
    showRegistrationBtn.classList.remove('active');
    document.getElementById('formTitle').innerText = 'Login';
}
function showRegistrationForm() {
    loginForm.style.display = 'none';
    registrationForm.style.display = 'block';
    forgotPasswordForm.style.display = 'none';
    showLoginBtn.classList.remove('active');
    showRegistrationBtn.classList.add('active');
    document.getElementById('formTitle').innerText = 'Registration';
}
function showForgotPasswordForm() {
    loginForm.style.display = 'none';
    registrationForm.style.display = 'none';
    forgotPasswordForm.style.display = 'block';
    showLoginBtn.classList.remove('active');
    showRegistrationBtn.classList.remove('active');
    document.getElementById('formTitle').innerText = 'Forgot Password';
}
const loginBtn = document.getElementById('LoginBtn');
loginBtn.addEventListener('click', function(event) {
    event.preventDefault(); 
    const email = document.getElementById('LoginEmail').value.trim();
    const password = document.getElementById('LoginPassword').value.trim();
    const errorMessage = document.getElementById('loginErrorMessage');

    if (email === '' || password === '') {
        errorMessage.innerText = 'Please enter both email and password.';
    } else {
        errorMessage.innerText = '';
        window.location.href = 'index.html'; 
    }
});

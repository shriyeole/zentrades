function validateForm() {
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');
    var usernameError = document.getElementById('username-error');
    var passwordError = document.getElementById('password-error');

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(usernameInput.value)) {
        usernameInput.classList.add('error');
        usernameError.innerHTML = 'Enter a valid email address';
        return false;
    } else {
        usernameInput.classList.remove('error');
        usernameError.innerHTML = '';
    }

    var passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?!.*[^A-Za-z\d@]).*$/;
    if (!passwordRegex.test(passwordInput.value)) {
        passwordInput.classList.add('error');
        passwordError.innerHTML = 'Password must contain an uppercase letter, a number, and only "@" as a special character';
        return false;
    } else {
        passwordInput.classList.remove('error');
        passwordError.innerHTML = '';
    }


    window.location.href = 'dashboard.html';   
    return false;
}

document.getElementById('password').addEventListener('input', function () {
    this.type = 'password';
});


//



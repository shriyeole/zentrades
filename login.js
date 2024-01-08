        document.addEventListener('DOMContentLoaded', function() {
            const usernameInput = document.getElementById('username');
            const passwordInput = document.getElementById('password');
            const loginButton = document.getElementById('loginButton');
            const errorContainer = document.getElementById('errorContainer');

            // Email validation for username
            usernameInput.addEventListener('input', function() {
                const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(usernameInput.value);
                if (!isValidEmail) {
                    usernameInput.setCustomValidity('Please enter a valid email address');
                } else {
                    usernameInput.setCustomValidity('');
                }
                displayErrorMessages();
            });

            // Password validation
            passwordInput.addEventListener('input', function() {
                const passwordValue = passwordInput.value;
                const containsUppercase = /[A-Z]/.test(passwordValue);
                const containsNumber = /\d/.test(passwordValue);
                const containsValidSpecialChar = /[@]/.test(passwordValue);
                const containsInvalidSpecialChar = /[^A-Za-z0-9@]/.test(passwordValue);

                if (!containsUppercase || !containsNumber || containsInvalidSpecialChar) {
                    passwordInput.setCustomValidity('Password must have an uppercase letter, a number, and only allow @ as a special character.');
                } else {
                    passwordInput.setCustomValidity('');
                }
                displayErrorMessages();
            });

            // Login button validation
            loginButton.addEventListener('click', function() {
                const isUsernameValid = usernameInput.checkValidity();
                const isPasswordValid = passwordInput.checkValidity();

                if (isUsernameValid && isPasswordValid) {
                    // Add your login logic here (e.g., redirect to another page)
                    alert('Login successful!');
                } else {
                    displayErrorMessages();
                }
            });

            // Toggle password visibility
            const togglePassword = document.getElementById('togglePassword');
            togglePassword.addEventListener('click', function() {
                const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordInput.setAttribute('type', type);
            });

            function displayErrorMessages() {
                errorContainer.innerHTML = ''; // Clear previous error messages

                if (!usernameInput.checkValidity()) {
                    errorContainer.innerHTML += '<p>Please enter a valid email address</p>';
                }

                if (!passwordInput.checkValidity()) {
                    const passwordErrorMessage = 'Password must have an uppercase letter, a number, and only allow @ as a special character.';
                    errorContainer.innerHTML += `<p>${passwordErrorMessage}</p>`;
                }
            }
        });
    
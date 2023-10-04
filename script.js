// DOM Elements
const password = document.querySelector('#password'); // Password input
const message = document.querySelector('#message'); // Strength message
const eyeIcon = document.querySelector('#eyeIcon'); // Password visibility icon

// Regex Patterns
const UPPERCASE_REGEX = /[A-Z]/; // At least one uppercase letter
const LOWERCASE_REGEX = /[a-z]/; // At least one lowercase letter
const NUMBER_REGEX = /\d/; // At least one number
const SYMBOL_REGEX = /[\W_]/; // At least one special symbol

// Password Strength Messages
const WEAK_MESSAGE = 'Password is: Weak <i class="fa-solid fa-face-frown"></i>';
const MEDIUM_MESSAGE =
  'Password is: Medium <i class="fa-solid fa-face-meh"></i>';
const STRONG_MESSAGE =
  'Password is: Strong <i class="fa-solid fa-face-smile"></i>';

// Handle Password Input Events
function handlePasswordInput() {
  let passLength = password.value.length,
    passValue = password.value;
  message.style.display = 'block';

  // Function to change password input style
  function changeStyle(color) {
    password.style.borderColor = color;
    message.style.color = color;
  }

  // Password strength checks and messages
  if (passLength <= 0) {
    message.innerHTML = '';
  } else if (passLength <= 8) {
    message.innerHTML = `${WEAK_MESSAGE} (Must be >8 chars)`;
    changeStyle('red');
  } else if (!UPPERCASE_REGEX.test(passValue)) {
    message.innerHTML = `${MEDIUM_MESSAGE} (no uppercase letter)`;
    changeStyle('#ff5925');
  } else if (!LOWERCASE_REGEX.test(passValue)) {
    message.innerHTML = `${MEDIUM_MESSAGE} (no lowercase letter)`;
    changeStyle('#ff5925');
  } else if (!NUMBER_REGEX.test(passValue)) {
    message.innerHTML = `${MEDIUM_MESSAGE} (no number)`;
    changeStyle('#ff5925');
  } else if (!SYMBOL_REGEX.test(passValue)) {
    message.innerHTML = `${MEDIUM_MESSAGE} (no special symbol)`;
    changeStyle('#ff5925');
  } else {
    message.innerHTML = `${STRONG_MESSAGE}`;
    changeStyle('green');
  }
}

// Event Listeners
password.addEventListener('input', handlePasswordInput); // Password input events
eyeIcon.addEventListener('click', () => {
  password.type = password.type === 'password' ? 'text' : 'password'; // Toggle password visibility
  eyeIcon.classList.toggle('fa-eye-slash');
  eyeIcon.classList.toggle('fa-eye');
});

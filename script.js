let password = document.querySelector('#password');
let message = document.querySelector('#message');
let eyeIcon = document.querySelector('#eyeIcon');

password.addEventListener('input', () => {
  let passLength = password.value.length,
    passValue = password.value;
  message.style.display = 'block';

  // Regex
  let hasCapitalLetter = /[A-Z]/.test(passValue),
    hasSmallLetter = /[a-z]/.test(passValue),
    hasNumber = /\d/.test(passValue),
    hasSymbols = /[~!@#$%^&*()_+`{}\[\];:'",.<>?/\\|=-]/.test(passValue);

  // Messages
  let weakMessage = 'Password is: Weak <i class="fa-solid fa-face-frown"></i>',
    mediumMessage = 'Password is: Medium <i class="fa-solid fa-face-meh"></i>',
    strongMessage =
      'Password is: Strong  <i class="fa-solid fa-face-smile"></i>';

  function changeColor(color) {
    password.style.borderColor = color;
    message.style.color = color;
  }

  if (passLength <= 0) {
    message.innerHTML = '';
  } else if (passLength <= 8) {
    message.innerHTML = `${weakMessage} (Must be >8 chars)`;
    changeColor('red');
  } else if (!hasCapitalLetter) {
    message.innerHTML = `${mediumMessage} (no uppercase letter)`;
    changeColor('#ff5925');
  } else if (!hasSmallLetter) {
    message.innerHTML = `${mediumMessage} (no lowercase letter)`;
    changeColor('#ff5925');
  } else if (!hasNumber) {
    message.innerHTML = `${mediumMessage} (no number) `;
    changeColor('#ff5925');
  } else if (!hasSymbols) {
    message.innerHTML = `${mediumMessage} (no special symbol) `;
    changeColor('#ff5925');
  } else {
    message.innerHTML = `${strongMessage}`;
    changeColor('green');
  }
});

eyeIcon.addEventListener('click', () => {
  password.type = password.type === 'password' ? 'text' : 'password';
  eyeIcon.classList.toggle('fa-eye-slash');
  eyeIcon.classList.toggle('fa-eye');
});

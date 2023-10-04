let password = document.querySelector('#password');
let message = document.querySelector('#message');
let eyeIcon = document.querySelector('#eyeIcon');

password.addEventListener('input', () => {
    let passValue = password.value;
    message.style.display = 'block';

    // Regular expressions
    let regexList = [
        { regex: /[A-Z]/, message: 'Uppercase letter' },
        { regex: /[a-z]/, message: 'Lowercase letter' },
        { regex: /\d/, message: 'Number' },
        { regex: /[~!@#$%^&*()_+`{}\[\];:'",.<>?/\\|=-]/, message: 'Special symbol' }
    ];

    let isValid = regexList.every(item => item.regex.test(passValue));

    // Messages
    let messages = {
        weak: 'Password is: weak <i class="fa-solid fa-face-frown"></i>',
        medium: 'Password is: Medium <i class="fa-solid fa-face-meh"></i>',
        strong: 'Password is: Strong  <i class="fa-solid fa-face-smile"></i>'
    };

    if (passValue.length <= 0) {
        message.innerHTML = '';
    } else if (passValue.length <= 8 || !isValid) {
        let missingConditions = regexList
            .filter(item => !item.regex.test(passValue))
            .map(item => item.message.toLowerCase())
            .join(', ');
        message.innerHTML = `${messages.weak} (Must be >8 chars and include ${missingConditions})`;
        password.style.borderColor = '#ff5925';
        message.style.color = '#ff5925';
    } else {
        message.innerHTML = `${messages.strong}`;
        password.style.borderColor = 'green';
        message.style.color = 'green';
    }
});

eyeIcon.addEventListener('click', () => {
    password.type = password.type === 'password' ? 'text' : 'password';
    eyeIcon.classList.toggle('fa-eye-slash');
    eyeIcon.classList.toggle('fa-eye');
});

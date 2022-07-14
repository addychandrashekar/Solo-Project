
let userName = document.getElementById('username')
let password = document.getElementById('password')
let signUpButton = document.getElementById('signup-button');

signUpButton.addEventListener('click', () => {
    fetch('/api/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({username: document.getElementById('username').value, password: document.getElementById('password').value})
    })
    .then(data => window.location.href = data)
})
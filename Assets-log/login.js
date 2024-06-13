const loginform = document.getElementById('loginForm')

loginform.addEventListener('submit', function(event){
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Retrieve values from input fields
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Retrieve existing users from local storage
    let storedUsersJSON = localStorage.getItem('users');
    let users = storedUsersJSON ? JSON.parse(storedUsersJSON) : [];

    // Check if the user exists and the password matches
    let user = users.find(user => user.email === email && user.password === password);
    if (user) {
        alert('Login successful!');
        window.location.href = 'quiz.html';
    } else {
        alert('Invalid email or password!');
    }
    loginform.reset()
});   



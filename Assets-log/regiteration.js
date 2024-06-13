const email = document.getElementById('email');
const password = document.getElementById('password');
const username = document.getElementById('fullName');
const form = document.querySelector('form');





form.addEventListener('submit',function(event){
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Retrieve values from input fields
    let username = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Create a new user object
    let newUser = {
        username: username,
        email: email,
        password: password
    };

    // Retrieve existing users from local storage
    let storedUsersJSON = localStorage.getItem('users');
    let users = storedUsersJSON ? JSON.parse(storedUsersJSON) : [];

    // Check if the user is already registered
    let userExists = users.some(user => user.email === email);
    if (userExists) {
        alert('User already registered!\n Please Change Email');
        return;
    }

    // Add the new user to the array
    users.push(newUser);

    // Convert the updated array to a JSON string
    let updatedUsersJSON = JSON.stringify(users);

    // Store the updated JSON string in local storage
    localStorage.setItem('users', updatedUsersJSON);

    // Display a confirmation message and clear the form
    alert('User registered successfully!');
    window.location = 'index.html'
    document.getElementById('form').reset();
});
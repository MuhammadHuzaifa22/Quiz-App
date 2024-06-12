const email = document.getElementById('email');
const password = document.getElementById('password');
const username = document.getElementById('fullName');
const form = document.querySelector('form');





form.addEventListener('submit',function(e){
    e.preventDefault();
    let newUser = {
        Email: email.value,
        Password: password.value,
        Username:username.value
    }         
    
    let storedUsersJSON = localStorage.getItem('users');
    let users = storedUsersJSON ? JSON.parse(storedUsersJSON) : [];
        
    let userExists = users.some(user => user.Email === email);
    if (userExists) {
        alert('User already registered!');
        return;
        window.location = 'index.html';
    }

    users.push(newUser);
    let updatedUsersJSON = JSON.stringify(users);

    localStorage.setItem('users', updatedUsersJSON);

    
    
alert('User registered successfully!');
    window.location = 'index.html'
    document.getElementById('registerform').reset();
})
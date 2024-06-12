const loginform = document.getElementById('loginForm')

loginform.addEventListener('submit', function(event){
    event.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let storedUsersJSON = localStorage.getItem('users');
    let users = storedUsersJSON ? JSON.parse(storedUsersJSON) : [];
    let user = users.find(user => user.Email === email && user.Password === password);
    if (user) {
        alert('Login successful!');
        window.location.href = 'quiz.html'; 
    } else {
        alert('Invalid email or password!');
    }
    

    

    
    loginform.reset()
})


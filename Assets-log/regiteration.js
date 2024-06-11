const email = document.getElementById('email');
const password = document.getElementById('password');
const username = document.getElementById('fullName');
const form = document.querySelector('form');

let usersArray = [];


let allarr = [];



form.addEventListener('submit',function(e){
    e.preventDefault();
     usersArray.push({
         Email: email.value,
         Password: password.value,
         Username:username.value
        })         
        console.log(usersArray)
        
    
    localStorage.setItem('send', JSON.stringify(usersArray))
    console.log()    
    
alert('User registered to our website');
window.location = 'index.html';
})
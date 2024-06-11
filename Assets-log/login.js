const getArr = localStorage.getItem('send')
// const password = localStorage.getItem('password')
const formLogin = document.querySelector('form');
let usersArrayFromStorage = JSON.parse(getArr);


formLogin.addEventListener('submit', function(event){
    event.preventDefault();


    const emailLogin = document.querySelector('#email-login').value;
    const passwordLogin = document.querySelector('#password-login').value;
    const empwdArr = [];
    empwdArr.push(emailLogin,passwordLogin);
    console.log(empwdArr[0])
    const Email1 = empwdArr[0];
    console.log(empwdArr[1]);
    const Pass1 = empwdArr[1];

    let email = usersArrayFromStorage[0].Email;
    console.log(email);
    let password = usersArrayFromStorage[0].Password;
    console.log(password);

       


    if (emailLogin === '' || passwordLogin ===  '') {
        alert('Please register before attempting to login.');
        return
    }


    
    if(email === Email1 && password === Pass1){
        alert('Login Successful')
        window.location = 'quiz.html'
    }else{
        alert('Email and Password do not match')
    }
    formLogin.reset()
})


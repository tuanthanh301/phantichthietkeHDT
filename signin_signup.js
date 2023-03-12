const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.tab-item')
const panes = $$('.tab-pane')



tabs.forEach((tab, index) => {
    const pane = panes[index]

    tab.onclick = function () {

        $('.tab-item.active').classList.remove('active')
        $('.tab-pane.active').classList.remove('active')

        this.classList.add('active')
        pane.classList.add('active')

    }
})

// hiển thị thông báo
const form = document.getElementById('form')
const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
const username = document.getElementById('username');
const username2 = document.getElementById('username2');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const email2 = document.getElementById('email2');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const email3 = document.getElementById('email3');
const password3 = document.getElementById('password3');
// const send = document.getElementById('send');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});



// send.addEventListener('submit', e => {
//     submit.preventDefault();
// });



const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const usernameValue2 = username2.value.trim();
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();
    const emailValue2 = email2.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const emailValue3 = email3.value.trim();
    const password3Value = password3.value.trim();


    if (usernameValue === '') {
        setError(username, 'Firstname is required');
    } else {
        setSuccess(username);
    }

    if (usernameValue2 === '') {
        setError(username2, 'Lastname is required');
    } else {
        setSuccess(username2);
    }

    if (phoneValue === '') {
        setError(phone, "Phone number is required");
    } else {
        setSuccess(phone);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if (emailValue2 === '') {
        setError(email2, 'Please confirm your email');
    } else if (emailValue2 !== emailValue) {
        setError(email2, "Email doesn't match");
    } else {
        setSuccess(email2);
    }

    if (passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if (password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

    if (emailValue3 === '') {
        setError(email3, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email3, 'Provide a valid email address');
    } else {
        setSuccess(email3);
    }

    if (password3Value === '') {
        setError(password3, 'Password is required');
    } else if (password3Value.length < 8) {
        setError(password3, 'Password must be at least 8 character.')
    } else {
        setSuccess(password3);
    }
};



// const email3 = document.getElementById('email3');
// const password3 = document.getElementById('password3');

// form1.addEventListener('submit', e => {
//     e.preventDefault();

//     validateInput2s();
// });
// const setError2 = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success')
// }

// const setSuccess2 = element => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// };

// const isValidEmail2 = email => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

// const validateInput2s = () => {
//     // const usernameValue = username.value.trim();
//     // const usernameValue2 = username2.value.trim();
//     // const phoneValue = phone.value.trim();
//     // const emailValue = email.value.trim();
//     // const emailValue2 = email2.value.trim();
//     // const passwordValue = password.value.trim();
//     // const password2Value = password2.value.trim();
//     const emailValue3 = email3.value.trim();
//     const password3Value = password3.value.trim();


//     // if(usernameValue === '') {
//     //     setError(username, 'Firstname is required');
//     // } else {
//     //     setSuccess(username);
//     // }

//     // if(usernameValue2 === '') {
//     //     setError(username2, 'Lastname is required');
//     // } else {
//     //     setSuccess(username2);
//     // }

//     // if(phoneValue === ''){
//     //     setError(phone, "Phone number is required");
//     // }else{
//     //     setSuccess(phone);
//     // }

//     // if(emailValue === '') {
//     //     setError(email, 'Email is required');
//     // } else if (!isValidEmail(emailValue)) {
//     //     setError(email, 'Provide a valid email address');
//     // } else {
//     //     setSuccess(email);
//     // }

//     // if(emailValue2 === '') {
//     //     setError(email2, 'Please confirm your email');
//     // } else if (emailValue2 !== emailValue) {
//     //     setError(email2, "Email doesn't match");
//     // } else {
//     //     setSuccess(email2);
//     // }

//     // if(passwordValue === '') {
//     //     setError(password, 'Password is required');
//     // } else if (passwordValue.length < 8 ) {
//     //     setError(password, 'Password must be at least 8 character.')
//     // } else {
//     //     setSuccess(password);
//     // }

//     // if(password2Value === '') {
//     //     setError(password2, 'Please confirm your password');
//     // } else if (password2Value !== passwordValue) {
//     //     setError(password2, "Passwords doesn't match");
//     // } else {
//     //     setSuccess(password2);
//     // }

//    if(emailValue3 === '') {
//         setError(email3, 'Email is required');
//     } else if (!isValidEmail(emailValue)) {
//         setError(email3, 'Provide a valid email address');
//     } else {
//         setSuccess(email3) ;
//     }

//     if(password3Value === '') {
//         setError(password3, 'Password is required');
//     } else if (password3Value.length < 8 ) {
//         setError(password3, 'Password must be at least 8 character.')
//     } else {
//         setSuccess(password3);
//     }
// };


// sign in
let signIn = document.querySelector(".btn-submit");
let dataUser = JSON.parse(localStorage.getItem("data"));
signIn.onclick = function () {
    let email = document.getElementById("email3").value;
    let password = document.getElementById("password3").value;
    let indexCheckEmail = -1;

    //   Kiểm tra tính hợp lệ của password
    console.log("password.length: ", password.length);
    if (password.length < 5 || password.length >= 20) {
        alert("Password không hợp lệ");
        flagSuccess = false;
    }
    //   Kiểm tra tính hợp lệ của email
    if (!email.includes("@") && !email.includes(".com")) {
        alert("Email không hợp lệ");
        flagSuccess = false;
    }
    for (let i = 0; i < dataUser.length; i++) {
        if (dataUser[i].email === email) {
            indexCheckEmail = i;
        }
    }
    if (indexCheckEmail !== -1) {
        if (dataUser[indexCheckEmail].password === password) {
            let loginSuccess = true;
            localStorage.setItem("loginSuccess", JSON.stringify(loginSuccess));
            alert("Đăng nhập thành công");
            //   Code này để điều hướng sang trang khác
            window.location.href = "http://www.google.com";
        } else {
            alert("Sai password");
        }
    } else {
        alert("Email chưa đăng ký");
    }
};


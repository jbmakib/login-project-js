var loginVar = [{
        fullName: "Jawad Bin Mobin Akib",
        userName: "jbmakib",
        passWord: "1234"
    },
    {
        fullName: "Nusrat Jahan Ananya",
        userName: "nusuananya",
        passWord: "1234"
    }
]


//login field
var loginFormField = document.getElementById("loginForm");
var newLogBtn = document.getElementById("newLogbtn");


// sign in field
var newSigninBtn = document.getElementById("newSignbtn");
var signInFormField = document.getElementById("signInForm");


// box field for output
var boxField = document.getElementById("box");

function login() {
    var usernameField = document.querySelector("#user").value;
    var pwdField = document.querySelector("#pwd").value;
    boxField.classList.remove("d-none");
    newLogBtn.classList.add("d-none");

    for (let i = 0; i < loginVar.length; i++) {
        if (usernameField == loginVar[i].userName && pwdField == loginVar[i].passWord) {
            loginFormField.classList.add("d-none");
            var fullName = loginVar[i].fullName;
            boxField.innerHTML = `Welcome: ${fullName}<br><button onclick="logout()">Logout</button>`;
            newSigninBtn.classList.add("d-none");
            return;
        }
        boxField.innerHTML = `Login Failed`;
    }
    if (usernameField = "" || pwdField == "") {
        window.alert("Username and password can't be blank\nPlease enter valid information")
    }
}

function newLogIn() {
    document.querySelector("#fullN").value = "";
    document.querySelector("#userSign").value = "";
    document.querySelector("#pwdSign").value = "";
    loginFormField.classList.remove("d-none");
    newSigninBtn.classList.remove("d-none");
    newLogBtn.classList.add("d-none");
    signInFormField.classList.add("d-none");
    boxField.classList.add("d-none");
}

function newSignIn() {
    document.querySelector("#fullN").value = "";
    document.querySelector("#userSign").value = "";
    document.querySelector("#pwdSign").value = "";
    loginFormField.classList.add("d-none");
    newSigninBtn.classList.add("d-none");
    newLogBtn.classList.remove("d-none");
    signInFormField.classList.remove("d-none");
    boxField.classList.add("d-none");
}

function signIn() {
    var fullNameSign = document.querySelector("#fullN").value;
    var userName = document.querySelector("#userSign").value;
    var signpwd = document.querySelector("#pwdSign").value;

    if (fullNameSign == "" || userName == "" || signpwd == "") {
        window.alert("Fullname, username and password can't be blank\nPlease enter valid informations");
        return;
    }
    for (i = 0; i < (loginVar.length); i++) {
        if (userName == loginVar[i].userName) {
            window.alert("this username is already taken");
            return;
        }
    }
    loginVar.push({
        fullName: fullNameSign,
        userName: userName,
        passWord: signpwd
    });
    newLogBtn.classList.add("d-none");
    signInFormField.classList.add("d-none");
    var fullName = loginVar[loginVar.length - 1].fullName;
    boxField.classList.remove("d-none");
    boxField.innerHTML = `Welcome: ${fullName}<br><button onclick="logout()">Logout</button>`;
}

function logout() {
    document.querySelector("#user").value = "";
    document.querySelector("#pwd").value = "";
    boxField.classList.add("d-none");
    loginFormField.classList.remove("d-none");
    newSigninBtn.classList.remove("d-none")
    newLogBtn.classList.add("d-none");
}
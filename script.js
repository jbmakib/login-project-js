// this array is for keeping user data.
// if new user arrive use push method

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


// get data from local storage
let loginVarObj = JSON.parse(localStorage.getItem("logged-in-users"));


// get those id(s) in a variable to use it later (login part)
var loginFormField = document.getElementById("loginForm");
var newLogBtn = document.getElementById("newLogbtn");


// get those id(s) in a variable to use it later (sign in part)
var newSigninBtn = document.getElementById("newSignbtn");
var signInFormField = document.getElementById("signInForm");


// box field for output
var boxField = document.getElementById("box");


// show element
function show(element) {
    element.classList.remove("d-none");
}


// hide element
function hide(element) {
    element.classList.add("d-none");
};


// if login button is clicked this function will run.
function login() {

    // take the input field's value in variable to validate
    var usernameField = document.querySelector("#user").value;
    var pwdField = document.querySelector("#pwd").value;

    // remove class from box-field to show the output && add class to new login button to hide it.
    show(boxField);
    hide(newLogBtn);

    // update loginVar array.
    if (loginVarObj != null) {
        loginVar = loginVarObj;
    }

    // run a for loop to validate data from array.
    for (let i = 0; i < loginVar.length; i++) {
        if (usernameField == loginVar[i].userName && pwdField == loginVar[i].passWord) {

            // add class to login form and sign in button to hide it
            hide(loginFormField);
            hide(newSigninBtn);

            // store the full name in a variable
            var fullName = loginVar[i].fullName;
            boxField.innerHTML = `Welcome: ${fullName}<br><button onclick="logout()">Logout</button>`;
            return;
        }

        // this code will show if the user inputs wrong data.
        boxField.innerHTML = `Login Failed`;
    };

    // if user inputs no data give them an alert
    if (usernameField = "" || pwdField == "") {
        window.alert("Username and password can't be blank\nPlease enter valid information");
    };
}


// if "have an account" button is clicked this function will run.
function newLogIn() {

    // make the input field blank
    document.querySelector("#user").value = "";
    document.querySelector("#pwd").value = "";

    // class added to hide and removed to show.
    show(loginFormField);
    show(newSigninBtn);
    hide(newLogBtn);
    hide(signInFormField);
    hide(boxField);
}


// if "new user? sign in now" button is clicked this function will run.
function newSignIn() {

    // make the sign in form's input field blank
    document.querySelector("#fullN").value = "";
    document.querySelector("#userSign").value = "";
    document.querySelector("#pwdSign").value = "";

    // added and removed class to hide and show element
    hide(loginFormField);
    hide(newSigninBtn);
    show(newLogBtn);
    show(signInFormField);
    hide(boxField);
}


// if sign-in button is clicked this function will run.
function signIn() {

    // take the field values in variables
    var fullNameSign = document.querySelector("#fullN").value;
    var userName = document.querySelector("#userSign").value;
    var signpwd = document.querySelector("#pwdSign").value;

    // show alert if the input fields are blank
    if (fullNameSign == "" || userName == "" || signpwd == "") {
        window.alert("Fullname, username and password can't be blank\nPlease enter valid informations");
        return;
    }

    // update loginVar array.
    if (loginVarObj != null) {
        loginVar = loginVarObj;
    }

    // run a for loop to validate data
    for (i = 0; i < (loginVar.length); i++) {
        if (userName == loginVar[i].userName) {
            window.alert("this username is already taken");
            return;
        }
    }

    // push new user data to array.
    loginVar.push({
        fullName: fullNameSign,
        userName: userName,
        passWord: signpwd
    });

    // add to localstorage
    let loginVarStr = JSON.stringify(loginVar);
    localStorage.setItem("logged-in-users", loginVarStr);

    // add or remove class to hide or show element
    hide(newLogBtn);
    hide(signInFormField);
    show(boxField);

    // add this into a variable.
    var fullName = loginVar[loginVar.length - 1].fullName;

    // show the output
    boxField.innerHTML = `Welcome: ${fullName}<br><button onclick="logout()">Logout</button>`;
}


// if logout button is clicked this function will run.
function logout() {

    // make the input field blank
    document.querySelector("#user").value = "";
    document.querySelector("#pwd").value = "";

    // add or remove class to hide or show the element.
    hide(boxField);
    show(loginFormField);
    show(newSigninBtn);
    hide(newLogBtn);
}
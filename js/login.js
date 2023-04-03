// let username = document.querySelector("#username");
// let user_info = document.querySelector("#user_info");
// let links = document.querySelector("#links")
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let signIn_btn = document.querySelector("#signIn_btn");

let getEmail = localStorage.getItem("email");
let getPassword = localStorage.getItem("password");

signIn_btn.addEventListener("click", fetchData)
// window.location = "index.html"


function fetchData() {
    if (email.value == '' || password.value == '') {
        alert("please fill the form");
    }
    else if (getEmail === email.value && getPassword === password.value) {
        setTimeout(() => {
            window.location = "index.html",1500
        }
        )
    }
    else {
        setTimeout(() => {
            window.location = "login.html",1500}
        )
    }

}



let username = document.querySelector("#username");

// let user_info = document.querySelector("#user_info");
// let links = document.querySelector("#links")
// user_info.style.display = "none"
// if(localStorage.getItem("username")){
//     user_info.style.display = "block"
//     username.innerHTML = `Welcome ${localStorage.getItem("username")} `
//     links.style.display = "none"

//     setTimeout(() => {
//         "login.html"
//     }, 1500);
// }


let email = document.querySelector("#email");
let password = document.querySelector("#password");
let signup_btn = document.querySelector("#btn_submit")


signup_btn.addEventListener("click", setData)
// window.location = "index.html"


function setData() {
    if (username.value == '' || email.value == '' || password.value == '') {
        alert("please fill the form");
    }
    else {
        localStorage.setItem("username", `${username.value}`);
        localStorage.setItem("email", email.value);
        localStorage.setItem("password", password.value);

        setTimeout(() => {
            window.location = "login.html", 1500
        }
        )
    }



}
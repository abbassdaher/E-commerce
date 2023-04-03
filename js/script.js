let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let signup_btn = document.querySelector("#btn_submit")
let log_out = document.querySelector("#logout")
let user_info = document.querySelector("#user_info")




user_info.style.display = "none"
if(localStorage.getItem("username")){
    user_info.style.display = "block"
    username.style.textDecoration = "none"
    username.innerHTML = `Welcome ${localStorage.getItem("username")} `
    links.style.display = "none"
    user_info.style.display = "flex"
    log_out.addEventListener("click",function() {
        setTimeout(() => {
            window.location = "login.html"
        }, 1500);
    })
}
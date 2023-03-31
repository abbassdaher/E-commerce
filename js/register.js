let username = document.querySelector("#username");
let user_info = document.querySelector("#user_info");
let links = document.querySelector("#links")

user_info.style.display = "none"
if(localStorage.getItem("username")){
    user_info.style.display = "block"
    username.innerHTML = `Welcome ${localStorage.getItem("username")} `
    links.style.display = "none"
}
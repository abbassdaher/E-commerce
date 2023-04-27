let username = document.querySelector("#username");


function ckeckForUser(){
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
    });
}
}
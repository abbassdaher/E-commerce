let usernamedom = document.querySelector("#username");
let username = localStorage.getItem("username")
let log_out = document.querySelector("#logout")


function ckeckForUser() {
    user_info.style.display = "none"
    if (username) {
        user_info.style.display = "block"
        usernamedom.style.textDecoration = "none"
        usernamedom.innerHTML = `Welcome ${username} `
        links.style.display = "none"
        user_info.style.display = "flex"
        log_out.addEventListener("click", function () {
            setTimeout(() => {
                window.location = "login.html"
            }, 1500);
        });
    }
    console.log(username)
}
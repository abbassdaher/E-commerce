let username = document.querySelector("#username");
let user_info = document.querySelector("#user_info");
let links = document.querySelector("#links")
let email = document.querySelector("#email");
let password = document.querySelector("#password");

signup_btn.addEventListener("click",setData)
// window.location = "index.html"
    

function setData(){
    if(email.value == '' || password.value == ''){
        alert("please fill the form");
    }
    else{
    localStorage.getItem("email",email.value);
    localStorage.getItem("password",password.value);
    
    setTimeout(()=>{
        window.location = "index.html",1500
        }
        )
    }
}
    
user_info.style.display = "none"
if(localStorage.getItem("username")){
    user_info.style.display = "block"
    username.innerHTML = `Welcome ${localStorage.getItem("username")} `
    links.style.display = "none"
}
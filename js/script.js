let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let signup_btn = document.querySelector("#btn_submit")


signup_btn.addEventListener("click",setData)
// window.location = "index.html"
    

function setData(){
    if(username.value == '' || email.value == '' || password.value == ''){
        alert("please fill the form");
    }
    else{
    localStorage.setItem("username",`${username.value}`);
    localStorage.setItem("email",email.value);
    localStorage.setItem("password",password.value);
    
    setTimeout(()=>{
        window.location = "index.html",1500
        }
        )
    }
    


}

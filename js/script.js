let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

if(username == "" || email == "" || password=""){
    alert("please fill the form")
}
else{
    localStorage.setItem("username",username.value);

}

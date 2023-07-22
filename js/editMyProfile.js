let profileAvatarUplodedDom = document.querySelector('.profile-avatar-uploded')
let profileName = document.querySelector('.profile-name')
let profileEmail = document.querySelector('.profile-email')
let editMyProfilebtn = document.querySelector('.SubmitButton')
let profileImage 
// localStorage
username = localStorage.getItem('username')
let email = localStorage.getItem('email')

profileName.value = username
profileEmail.value = email

ckeckForUser()

// event
editMyProfilebtn.addEventListener('click',editMyProfile)
profileAvatarUplodedDom.addEventListener('change',editProfileImage)

// if(!profileAvatar.value){
//     console.log("is null");
//     profileAvatar.style.borderRadius  = "0%" ;
// }else{
//     profileAvatar.style.borderRadius  = "50%" ;
// }

function editMyProfile(e){
    e.preventDefault()
    userName = profileName.value
email = profileEmail.value
profileAvatarUploded = localStorage.getItem('profileImage')
// local storage
localStorage.setItem('username',userName)
localStorage.setItem('email',email)
localStorage.setItem('profileImage',profileImage)

console.log(profileAvatarUploded);
profileAvatarUplodedDom.src = `'${profileAvatarUploded}'`

window.location = "profile.html"
}
function editProfileImage(){
    let file = this.files[0]
    convertImageBase64(file)
}

function convertImageBase64(file){
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function(){
        profileImage = reader.result
    }

}
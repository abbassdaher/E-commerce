let products = JSON.parse(localStorage.getItem('products')) 
let profileAvatarUploded = localStorage.getItem('profileImage') 
console.log(profileAvatarUploded);

console.log(products);
let myproducts = products.filter((item)=> item.itsMe == "yes" )
let userName = localStorage.getItem('username')
let email = localStorage.getItem('email')

let profileAvatarDom = document.querySelector('.profile-avatar')
let profileUsernameDom = document.querySelector('.profile-username')
let profileEmailDom = document.querySelector('.profile-email')
let productLength = document.querySelector('.profile-product-length')

ckeckForUser()

profileUsernameDom.innerHTML = userName
profileEmailDom.innerHTML = email
profileAvatarDom.src = profileAvatarUploded
productLength.innerHTML = 'number of my product: '+ myproducts.length

console.log(myproducts)
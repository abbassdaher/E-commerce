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


// define products
let productDom = document.querySelector('.products')
let shopping_basket = document.querySelector('.cart_product div')
let addToCart_badge =  document.querySelector('.badge')
var badge = 0

let products = [
    {   
        id:1,
        image:"images/headphone.jpg",
        title:"hedphone item",
        size:"large"

    },
    { 
        id:2,
        image:"images/glasses.jpg",
        title:"glasses item",
        size:"small"
    },
    {   
        id:3,
        image:"images/lab.jpg",
        title:"lap item",
        size:"large"
    },
    {   
        id:4,
        image:"images/watch.jpg",
        title:"lap item",
        size:"meduim"
    }
];
function drawProductsUi(){
    // list of products
    let productsUi = products.map(
        (item)=>{
            return `
            <div class="product-item">
                    <img src="${item.image}" alt="image" class="product-item-img">
                    <div class="product-item-content">
                        <div class="product-item-info">
                            <h2 class="product-item-title">${item.title}</h2>
                            <p class="product-item-desc">lorem ipsum, dolor sit amet consestuer</p>
                            <span class="product-item-size">size: ${item.size}</span>
                        </div>
                        <div class="product-item-actions">
                            <button class="add-to-cart" onclick = "addToCart(${item.id})">add to cart</button>
                            <i class="fa-sharp fa-regular fa-heart favorite"></i>
                        </div>
                    </div>
                    
                </div>
            `
        })
        productDom.innerHTML = productsUi
}
// list of products
drawProductsUi();
// add product to cart
function addToCart(id){
products.find((item)=>{
    if(item.id==id){
        console.log(item)
        shopping_basket.innerHTML += `<li>${item.title}</li>`
        badge+=1
        addToCart_badge.style.visibility = "visible"
        addToCart_badge.innerHTML = badge

    }
})
}
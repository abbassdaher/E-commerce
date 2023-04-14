let products = JSON.parse(localStorage.getItem('productsInCart'))
let productDom =document.querySelector('.products')
let user_info = document.querySelector("#user_info")

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
drawProductsUi()
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
    })
}
}
// check for user if open printed it on navbar
ckeckForUser()
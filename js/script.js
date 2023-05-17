let email = document.querySelector("#email");
let password = document.querySelector("#password");
let signup_btn = document.querySelector("#btn_submit")

let user_info = document.querySelector("#user_info")
let productsInCartObj = JSON.parse(localStorage.getItem('productsInCart'))
let productsIncart = localStorage.getItem('productsInCart')
let addItem = []

let productDom = document.querySelector('.products')
let shopping_basket = document.querySelector('.cart_product div')
let bascket = document.querySelector('.bascket')
let addToCart_badge = document.querySelector('.badge')
// var badge 
let badge
let cart_product_menu = document.querySelector('.cart_product')


//call function from user.js
// check for user if open printed it on navbar
ckeckForUser()

function drawProductsUi() {
    // list of products

    let productsUi = products.map(
        (item) => {
            return `
            <div class="product-item">
                    <img src="${item.image}" alt="image" class="product-item-img">
                    <div class="product-item-content">
                        <div class="product-item-info">
                            <h2 class="product-item-title" onclick='getID(${item.id})'>${item.title}</h2>
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

// check if products in cart at localstorage 
if (productsInCartObj) {
    badge = productsInCartObj.length
    productsInCartObj.map((item) => {
        shopping_basket.innerHTML += `<li>${item.title}</li>`
        addToCart_badge.style.visibility = "visible"
        addToCart_badge.innerHTML = badge
        addItem = [...addItem, item]
    })

} else {
    badge = 0
    console.log('badge: ' + badge)
}

console.log('badge: ' + badge)

// add product to cart
function addToCart(id) {
    // products in cart at local storage
    // let producr= localStorage.getItem('productsInCart')
    console.log('products: ' + products.length)
    //search for product in local storage
    products.find((item) => {
        if (item.id == id) {
            console.log('item: ' + item)
            // console.log('productsInCart : ' + productsInCart)
            shopping_basket.innerHTML += `<li>${item.title}</li>`
            badge += 1
            addToCart_badge.style.visibility = "visible"
            addToCart_badge.innerHTML = badge
            addItem = [...addItem, item]
            //  convert object to string to set in localstorage
            // JSON.stringify(addItem)
            localStorage.setItem('productsInCart', JSON.stringify(addItem))
            // console.log(addItem)


        }
    })

}

// addToCart_badge.style.visibility = "visible"
bascket.addEventListener('click', showMenu)
function showMenu() {
    if (cart_product_menu.style.visibility == "hidden") {
        if (shopping_basket.innerHTML != "") {
            cart_product_menu.style.visibility = "visible"
        }
    } else {
        cart_product_menu.style.visibility = "hidden"

    }

}
// go to productDetails page and show all data for this product
function getID(id) {
    localStorage.setItem('choosedItemId', JSON.stringify(id))
    window.location = "productDetails.html";
}

let productsInCart = JSON.parse(localStorage.getItem('productsInCart'))
let productDom = document.querySelector('.products')
let user_info = document.querySelector("#user_info")
// console.log("products: "+ JSON.stringify(productsInCart) )
function drawProductsUi() {
    // list of products
    let productsUi = productsInCart.map(
        (item) => {
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
                            <button class="remove-from-cart" onclick = "removeItemFromCart(${item.id})">Remove</button>
                            <i class="fa-sharp fa-regular fa-heart favorite"></i>
                        </div>
                    </div>
                    
                </div>
            `
        })
    productDom.innerHTML = productsUi
}
drawProductsUi()
//function called from user js
ckeckForUser()
// console.log(products)


// remove from localstorage
function removeItemFromCart(id) {
    productsInCart.map((item) => {
        if (item.id != id) {
            console.log(item)
            productsInCart = localStorage.setItem("productsInCart", JSON.stringify(item))
        }
    })
}

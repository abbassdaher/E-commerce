let productsInCart = localStorage.getItem('productsInCart')
let productsInCartDom = document.querySelector('.productsInCart')
let badge = 0
let noProductsDom = document.querySelector('.noProducts')


noProductsDom.style.visibility= 'hidden';
if(JSON.parse(productsInCart).length == 0){
    noProductsDom.style.visibility= 'visible';
}

//call function from user.js
// check for user if open printed it on navbar
ckeckForUser()
if (productsInCart) {
    
    // let items = JSON.parse(productsInCart)
    drawProductsInCartUi(JSON.parse(productsInCart))
}
// function for drawproducts cart ui
function drawProductsInCartUi(products) {
    // list of products
    let drawProductsInCartUi = products.map(
        (item) => {
            return `
            <div class="product-item">
                    <img src="${item.image}" alt="image" class="product-item-img">
                    <div class="product-item-content">
                        <div class="product-item-info">
                            <h2 class="product-item-title">${item.title}</h2>
                            <p class="product-item-desc">lorem ipsum, dolor sit amet consestuer</p>
                            <span class="product-item-size">size: ${item.size}</span>
                            <div class="product-item-qty">quantity: ${item.qty}</div>
                        </div>
                        <div class="product-item-actions">
                            <button class="remove-from-cart" onclick = "removeItemFromCart(${item.id})">Remove</button>
                            <i class="fa-sharp fa-regular fa-heart favorite"></i>
                        </div>
                    </div>
                    
                </div>
            `
        })
    productsInCartDom.innerHTML = drawProductsInCartUi
}


// remove from localstorage
function removeItemFromCart(id) {
    if (productsInCart) {
        // let items = JSON.parse(productsInCart)
        let items = productsInCart
        // return the array contains the item At the expense of conditions 
        let filtterdItems = items.filter((item) => item.id !== id)

        localStorage.setItem('productsInCart', JSON.stringify(filtterdItems))
        location.reload()

    }
}
nbOfBadge()
// nuber of badge
function nbOfBadge() {
    productsInCart = JSON.parse(productsInCart)
    productsInCart.map((item) => {
        badge++
    }
    )
    console.log('number of badge :' + badge)

}
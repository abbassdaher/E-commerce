let favoriteProducts = JSON.parse(localStorage.getItem('productsInFavorite'))
let favoriteProductsDom = document.querySelector('.productsFavorite-form')
// function drawProductsUi() {
//     let idForIconColor = localStorage.getItem('idForIconColor')

//     // list of products
//     let productsUi = favoriteProducts.map(
//         (item) => {
//             return `
//             <div class="product-item">
//                     <img src="${item.image}" alt="image" class="product-item-img">
//                     <div class="product-item-content">
//                         <div class="product-item-info">
//                             <h2 class="product-item-title" onclick='getID(${item.id})'>${item.title}</h2>
//                             <p class="product-item-desc">lorem ipsum, dolor sit amet consestuer</p>
//                             <span class="product-item-size">size: ${item.size}</span>
//                         </div>
//                         <div class="product-item-actions">
//                             <button class="add-to-cart" onclick = "addToCart(${item.id})">add to cart</button>
//                             <i class="fa-sharp fa-regular fa-heart favorite" style=" color:${item.liked=='true' ? "red" : ""} "  onclick = 'addToFavorite(${item.id})'></i>

//                             </div>
//                     </div>

//                 </div>
//             `
//         })
//         favoriteProductsDom.innerHTML = productsUi.join("")
// }

// drawProductsUi()
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
                            <button class="remove-from-cart" onclick = "removeItemFromFavorite(${item.id})">Remove</button>
                            <i class="fa-sharp fa-regular fa-heart favorite" style=" color:${item.liked == "true" ? "red" : "green"} "  onclick = 'removeItemFromFavorite(${item.id})'></i>

                        </div>

                    </div>
                    
                </div>
            `
        })
    favoriteProductsDom.innerHTML = drawProductsInCartUi.join("")
}


// remove from localstorage
// function removeItemFromFavorite(id) {
//     if (favoriteProducts) {
//         // let items = JSON.parse(productsInCart)
//         let items = favoriteProducts
//         // return the array contains the item At the expense of conditions 
//         let filtterdItems = items.filter((item) => item.id !== id)
//         localStorage.setItem('productsInFavorite', JSON.stringify(filtterdItems))
        

//     }
//     favoriteProducts = JSON.parse(localStorage.getItem('productsInFavorite'))
//     drawProductsInCartUi(favoriteProducts)
// }
function removeItemFromFavorite(id) {
    products = JSON.parse(localStorage.getItem('products'))
    // onclick on remove from favorite remove true in products at localdatabase
    products = products.map((item)=>{
        if(item.id == id)item.liked=''
        return item
    })
    localStorage.setItem('products', JSON.stringify(products))
    console.log(products);
    // remove item from favorite products in localdatabase
    if (favoriteProducts) {
        // let items = JSON.parse(productsInCart)
        let items = favoriteProducts
        // return the array contains the item At the expense of conditions 
        let filtterdItems = items.filter((item) => item.id !== id)
        localStorage.setItem('productsInFavorite', JSON.stringify(filtterdItems))
        

    }
    favoriteProducts = JSON.parse(localStorage.getItem('productsInFavorite'))
    drawProductsInCartUi(favoriteProducts)
}
drawProductsInCartUi(favoriteProducts)
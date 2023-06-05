let favoriteProducts = JSON.parse(localStorage.getItem('productsInFavorite')) 
let favoriteProductsDom = document.querySelector('.productsFavorite-form')

function drawProductsUi() {
    let idForIconColor = localStorage.getItem('idForIconColor')

    // list of products
    let productsUi = favoriteProducts.map(
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
                            <i class="fa-sharp fa-regular fa-heart favorite" style=" color:${item.liked=='true' ? "red" : ""} "  onclick = 'addToFavorite(${item.id})'></i>
                            
                            </div>
                    </div>
                    
                </div>
            `
        })
        favoriteProductsDom.innerHTML = productsUi
}

drawProductsUi()
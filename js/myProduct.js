let products = localStorage.getItem('products')
let productDom = document.querySelector('.productsInCart')
let badge = 0
let noProductsDom = document.querySelector('.noProducts')

let myProducts = JSON.parse(products).filter((item)=>item.itsMe=='yes')
console.log(myProducts);

noProductsDom.style.visibility= 'hidden';
if(myProducts.length == 0){
    noProductsDom.style.visibility= 'visible';
}

ckeckForUser()
drawProductsUi(myProducts)

// function for drawproducts cart ui
function drawProductsUi(products) {
    // list of products
    let productsUi = products.map(
        (item) => {
            return `
            <div class="product-item" style = ' border: ${item.itsMe == 'yes' ? ' 1px solid green' : ''}'>
                    <img src="${item.image}" alt="image" class="product-item-img">
                    <div class="product-item-content">
                        <div class="product-item-info">
                            <h2 class="product-item-title" onclick='getID(${item.id})'>${item.title}</h2>
                            <p class="product-item-desc">${item.description}</p>
                            <div class="product-item-size">size: ${item.size}</div>
                            ${ item.itsMe == 'yes' && "<button class ='editProduct' onclick = 'editProduct(" + item.id + ")'>Edit</button>"}
                            ${ item.itsMe == 'yes' && "<button class ='deleteProduct' onclick = 'deleteProduct(" + item.id + ")'>Delete</button>"}

                        </div>
                        <div class="product-item-actions">
                            <button class="add-to-cart" onclick = "addToCart(${item.id})">add to cart</button>
                            <i class="fa-sharp fa-regular fa-heart favorite" style="color:${item.liked == 'true' ? "red" : ""}"  onclick = 'addToFavorite(${item.id})'></i>
                            
                        </div>
                    </div>
                </div>
            `
        })
    productDom.innerHTML = productsUi.join("")

}
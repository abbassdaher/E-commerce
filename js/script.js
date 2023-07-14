let email = document.querySelector("#email");
let password = document.querySelector("#password");
let signup_btn = document.querySelector("#btn_submit")

let user_info = document.querySelector("#user_info")

let productsIncart = localStorage.getItem('productsInCart')
let productsInCartObj = JSON.parse(productsIncart)
// let addItemDB =JSON.parse(localStorage.getItem('productsInCart')) 
let allItems = []

let productDom = document.querySelector('.products')
let shopping_basket = document.querySelector('.cart_product_item')
let qty_cart_product = document.querySelector('.cart_product_item_badge')
let bascket = document.querySelector('.bascket')
let addToCart_badge = document.querySelector('.badge')
// var badge 
let badge
let cart_product_menu = document.querySelector('.cart_product')
let favoriteDom = document.querySelector('.favorite')
let productsLocal = localStorage.getItem('products')
let productsLocalOBJ = JSON.parse(productsLocal)
//call function from user.js
// check for user if open printed it on navbar
ckeckForUser()

// 🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹
/**
 * The function `drawProductsUi` takes an array of products and generates HTML elements to display each
 * product's information, including an image, title, description, size, and buttons for adding to cart
 * and adding to favorites.
 * @param products - An array of objects representing different products. Each object should have the
 * following properties:
 */
function drawProductsUi(products) {
    let idForIconColor = localStorage.getItem('idForIconColor')

    // list of products
    console.log(products);
    let productsUi = products.map(
        (item) => {
            return `
            <div class="product-item" style = ' border: ${item.itsMe == 'yes' ? ' 1px solid green' : ''}'>
                    <img src="${item.image}" alt="image" class="product-item-img">
                    <div class="product-item-content">
                        <div class="product-item-info">
                            <h2 class="product-item-title" onclick='getID(${item.id})'>${item.title}</h2>
                            <p class="product-item-desc">${item.description}</p>
                            <span class="product-item-size">size: ${item.size}</span>
                            ${ item.itsMe == 'yes' && "<button class ='editProduct' onclick = 'editProduct(" + item.id + ")'>Edit</button>"}
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
// ${(idForIconColor) ? console.log("true"):console.log("false")}
// list of products
// drawProductsUi((JSON.parse(productsLocal)) || products);
drawProductsUi((JSON.parse(productsIncart)) || (JSON.parse(productsLocal)));






// 🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹
// add product to cart

badge = 0
function addToCart(id) {
    allItems = productsInCartObj ? productsInCartObj : []
    // allItems = productsInCartObj
    if (localStorage.getItem('username')) {
        let choosedItem = products.find((item) => item.id === id) || JSON.parse(productsLocal).find((item) => item.id == id);
        // check proudect in cart
        let isProductInCart = allItems.some((i) => i.id === choosedItem.id)
        badge += 1
        addToCart_badge.style.visibility = "visible"
        addToCart_badge.innerHTML = badge
        //  convert object to string to set in localstorage
        // JSON.stringify(addItem)
        if (isProductInCart) {
            allItems = allItems.map((p) => {
                if (p.id == choosedItem.id) p.qty++
                return p
            })
        } else {
            allItems.push(choosedItem)
        }
        shopping_basket.innerHTML = ""
        allItems.forEach((item) => shopping_basket.innerHTML += `<li>${item.title} ${item.qty}</li>`)
        localStorage.setItem('productsInCart', JSON.stringify(allItems))
    } else {
        window.location = "login.html"
    }

}

// check if products in cart at localstorage 
if (productsInCartObj) {
    // console.log(allItems);
    addToCart_badge.style.visibility = "visible"
    productsInCartObj.map((item) => {
        badge += item.qty
        shopping_basket.innerHTML += `<li>${item.title} ${item.qty}</li>`
    })
    addToCart_badge.innerHTML = badge
} else {
    // allItems.map((item)=>localStorage.setItem('productsInCart',item))
    badge = 0
    console.log('badge: ' + badge)
}
// save
// localStorage.setItem('productsInCart', JSON.stringify(allItems))


// write title of item in cart product while item is not duplicated
// console.log(allItems);
// function cartItemDom(addItem, choosedItem) {
//     addItem.find((item) => {

//     })
// }

bascket.addEventListener('click', showMenu)

// 🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹
// show the menu when click on the basket icon at header
function showMenu() {
    if (cart_product_menu.style.visibility == "hidden") {
        if (shopping_basket.innerHTML != "") {
            cart_product_menu.style.visibility = "visible"
        }
    } else {
        cart_product_menu.style.visibility = "hidden"

    }

}
// 🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹
// go to productDetails page and show all data for this product
function getID(id) {
    localStorage.setItem('choosedItemId', JSON.stringify(id))
    window.location = "productDetails.html";
}
// 🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹
// search
let inputSearch = document.getElementById('search')


inputSearch.addEventListener('keyup', searchByName)



function searchByName() {
    // keyCode of enter =13
    // when enter clickup apply the condition
    //  if (event.keyCode === 13) {
    // search(inputSearch.value, products)
    // }else{
    //     search(inputSearch.value, products)
    // }
    // search when press any character
    if (inputSearch.value !== "") {
        search(inputSearch.value, products)
    } else {
        drawProductsUi((JSON.parse(productsLocal)) || products)
    }

}
function search(title, data) {
    let itemFilttred
    let productFiltred
    // search when write the fullname for product
    // data.find((item) => {
    //     if (item.title == title) {
    //         productFiltred = item
    //     }
    data.find((item) => {
        // search when entering every characters "instant search"💙
        if ((item.title).indexOf(title) == -1) {
            console.log(item);

        } else {
            productFiltred = item
        }
    })
    if (productFiltred) {
        itemFilttred =
            `
            <div class="product-item">
                    <img src="${productFiltred.image}" alt="image" class="product-item-img">
                    <div class="product-item-content">
                        <div class="product-item-info">
                            <h2 class="product-item-title" onclick='getID(${productFiltred.id})'>${productFiltred.title}</h2>
                            <p class="product-item-desc">lorem ipsum, dolor sit amet consestuer</p>
                            <span class="product-item-size">size: ${productFiltred.size}</span>
                        </div>
                        <div class="product-item-actions">
                            <button class="add-to-cart" onclick = "addToCart(${productFiltred.id})">add to cart</button>
                            <i class="fa-sharp fa-regular fa-heart favorite" style="color:${productFiltred.liked == 'true' ? "red" : ""}"  onclick = 'addToFavorite(${productFiltred.id})'></i>
                        </div>
                    </div>
                    
                </div>
            `
        // <i class="fa-sharp fa-regular fa-heart favorite" onclick = 'addToFavorite(${productFiltred.id})'></i>
        productDom.innerHTML = itemFilttred
    } else {
        console.log("no result");
        drawProductsUi((JSON.parse(productsLocal)) || products)
    }

}
// 💙💙💙💙💙💙💙💙💙💙💙💙💙💙💙💙💙💙💙💙💙💙💙💙💙💙💙💙💙💙
// Favorite
let favoriteIcon = document.querySelector('.favoriteIcon')
let favoriteProduct = []
let productsInFavorite = localStorage.getItem('productsInFavorite')
// check if i have products in productsInFavorite 
if (JSON.parse(productsInFavorite) != '') {
    favoriteIcon.style.color = 'red'
}
// function addToFavorite(id) {

//     if (localStorage.getItem('username')) {
//         let favoriteItem = products.find((item) => item.id === id)
//         favoriteItem.liked = 'true'

//         products.map((item) => {
//             if (item.id == id) {
//                 item.liked = 'true'
//                 drawProductsUi(products || (JSON.parse(productsLocal)))

//             }
//         })
//         localStorage.setItem('products', JSON.stringify(products));
//         // change the color of favorite icon
//         let checkfavoriteProduct = favoriteProduct.find((i) => i.id == id)
//         if (!checkfavoriteProduct) {
//             favoriteProduct.push(favoriteItem)
//             favoriteIcon.style.color = 'red'

//         }

//         favoriteProduct.map((p) => console.log(p))
//         localStorage.setItem('productsInFavorite', JSON.stringify(favoriteProduct))
//     } else {
//         window.location = "login.html"
//     }
// }


// console.log(productsLocal);

function addToFavorite(id) {
    let productsInFavorite = localStorage.getItem('productsInFavorite')
    if (localStorage.getItem('username')) {
        let productsLocal = localStorage.getItem('products')
        console.log(productsLocal);
        let choosedItem = products.find((item) => item.id == id) || JSON.parse(productsLocal).find((item) => item.id == id)
        let isfavoriteProducts = JSON.parse(productsLocal).some((p) => (p.id == choosedItem.id && choosedItem.liked == "true"))
        console.log(isfavoriteProducts);
        if (!isfavoriteProducts) {
            choosedItem.liked = 'true'
            favoriteIcon.style.color = 'red'
            favoriteProduct.push(choosedItem)
            localStorage.setItem('productsInFavorite', JSON.stringify(favoriteProduct))
        } else {

            // toggle red to gray and remove from local storage
            products = products.map((item) => {
                if (item.id == choosedItem.id) choosedItem.liked = ''
                return item
            })

            // 
            console.log(JSON.stringify(productsInFavorite));
            productsInFavorite = (JSON.parse(productsInFavorite)).filter((item) => item.id !== choosedItem.id)
            console.log("productsInFavorite: " + JSON.stringify(productsInFavorite));
            localStorage.setItem('productsInFavorite', JSON.stringify(productsInFavorite))
        }
        productsLocalOBJ = productsLocalOBJ.map((p) => {
            if (p.id == choosedItem.id) p = choosedItem
            return p
        })
        localStorage.setItem('products', JSON.stringify(productsLocalOBJ))
        drawProductsUi(productsLocalOBJ || products)

        // console.log(productsLocalOBJ);


    } else { window.location = "login.html" }


}
function isDuplicateProduct(products, item) {
    let isDuplicate = products.some((i) => i.id == item.id)
    console.log("isDuplicate: " + isDuplicate);
}
// favoriteProduct = productsInCartObj.map((fav)=> fav.liked = "true")
//     console.log(favoriteProduct);

drawProductsUi(productsLocalOBJ || products)
console.log(productsLocal);

// prees to favorite icon in the top off page to go favorite page
favoriteIcon.addEventListener("click", function () { window.location = "favorite.html" })


// Filtter by size
let filtterSize = document.querySelector('.filtter-size')
filtterSize.addEventListener('change', fillterProductBySize)

/**
 * The function filters products based on size and updates the UI accordingly.
 * @param e - The parameter "e" is an event object that represents the event that triggered the
 * function. In this case, it is likely an event object from a user interacting with a dropdown menu or
 * input field.
 */
function fillterProductBySize(e) {
    let size = e.target.value
    let products = productsLocalOBJ
    if (size === "all") {
        drawProductsUi(products)
    } else {
        products = products.filter((item) => item.size === size)
        drawProductsUi(products)

    }

}

// edit product
function editProduct(id){
    let idForEditProduct = id
localStorage.setItem('idForEditProduct',JSON.stringify(idForEditProduct))
window.location = 'editProduct.html'
}
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let signup_btn = document.querySelector("#btn_submit")

let user_info = document.querySelector("#user_info")
let productsInCartObj = JSON.parse(localStorage.getItem('productsInCart'))
let productsIncart = localStorage.getItem('productsInCart')
let addItem = []

let productDom = document.querySelector('.products')
let shopping_basket = document.querySelector('.cart_product_item')
let qty_cart_product = document.querySelector('.cart_product_item_badge')
let bascket = document.querySelector('.bascket')
let addToCart_badge = document.querySelector('.badge')
// var badge 
let badge
let cart_product_menu = document.querySelector('.cart_product')


//call function from user.js
// check for user if open printed it on navbar
ckeckForUser()

// 🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹
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

// 🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹🔹
// add product to cart
// function addToCart(id) {
//     //search for product in local storage
//     products.find((item) => {
//         if (item.id == id) {
//         chooseditem = item
//              addItem.map((item)=>{
//                 if(item.id == chooseditem.id){
//                     console.log("item is duplicated");
//                 }else{
//                     shopping_basket.innerHTML += `<li>${item.title}</li>`
//             // badge += 1
//             addToCart_badge.style.visibility = "visible"
//             addToCart_badge.innerHTML = badge
//             // addItem = [...addItem, item]
//             //  convert object to string to set in localstorage
//             // JSON.stringify(addItem)
//             localStorage.setItem('productsInCart', JSON.stringify(chooseditem))
//                 }
//             })


//             shopping_basket.innerHTML += `<li>${item.title}</li>`
//             badge += 1
//             addToCart_badge.style.visibility = "visible"
//             addToCart_badge.innerHTML = badge
//             addItem = [...addItem, item]
//             //  convert object to string to set in localstorage
//             // JSON.stringify(addItem)
//             localStorage.setItem('productsInCart', JSON.stringify(chooseditem))
//         }
//     })

// }
let allItems =[]
function addToCart(id) {
    if(localStorage.getItem('username')){
        let choosedItem = products.find((item) => item.id === id);
        console.log('choosed item is : ' + JSON.stringify(choosedItem) );
        let items = allItems.find((i)=> i.id === choosedItem.id)
             badge += 1
            addToCart_badge.style.visibility = "visible"
            addToCart_badge.innerHTML = badge
            
            //  convert object to string to set in localstorage
            // JSON.stringify(addItem)
            

        
        if(items){
            choosedItem.qty++
            // qty_cart_product.innerHTML = `<li>${choosedItem.qty}</li>`
            console.log('add qty for'+ JSON.stringify(choosedItem));
            
        }else{
            allItems.push(choosedItem)
            console.log("items is : "+ JSON.stringify(items));
        }
        addItem = allItems
        console.log(addItem);
        localStorage.setItem('productsInCart', JSON.stringify(addItem) )
        shopping_basket.innerHTML=""
        allItems.forEach((item)=>shopping_basket.innerHTML += `<li>${item.title} ${item.qty}</li>`)
        
        

    }
   

    // get item from database through the ID
    // products.find((item) => {
    //     if (item.id == id) {
    //         addToCart_badge.style.visibility = "visible"
    //         addItem = [...addItem, item]
    //         console.log(addItem);
    //         choosedItem.push(item)
    //     }
    // })

    // addItem.map((item) => {
    //     if (item.id !== choosedItem.id) {
    //         shopping_basket.innerHTML += `<li>${item.title}</li>`
    //         console.log("item is added");
    //     }
    // })
    // cartItemDom(addItem,chosedItem)
    // console.log(addItem);

}
// write title of item in cart product while item is not duplicated

function cartItemDom(addItem,choosedItem){
    addItem.find((item)=>{
        choosedItem.find((i)=>{
            if(item.id == i.id){}
        })
    })   
}

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
        drawProductsUi()
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
                            <i class="fa-sharp fa-regular fa-heart favorite"></i>
                        </div>
                    </div>
                    
                </div>
            `
        productDom.innerHTML = itemFilttred
    } else {
        console.log("no result");
        drawProductsUi()
    }

}


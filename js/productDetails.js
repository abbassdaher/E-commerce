let productDeatailDom = document.querySelector('.productDeatail-form')
let choosedItemId = JSON.parse(localStorage.getItem('choosedItemId')) 
let chooseditem =[]
let productDetailsUi
// productDeatailDom.innerHTML =
//     `
//                 <div class="container">
//                     <img src="images/watch.jpg" alt="watch">
//                     <div class="desc">lorem ipsum, dolor sit amet consestuer</div>
//                     <div class="size">large</div>

//                 </div>
//                 `
console.log(choosedItemId);

function drawProductsDetails(id) {
    products.map(
        (item) => { 
            if(item.id == id ){
                chooseditem = 
                `
                <div class="container">
                    <img src="${item.image}" alt="watch">
                    <div class="desc">lorem ipsum, dolor sit amet consestuer</div>
                    <div class="size">Size : ${item.size}</div>
                    <div class="size">Quantity : ${item.qty}</div>

                </div>
                `
            }
            

        }
    )
    console.log(choosedItemId);
    productDeatailDom.innerHTML = chooseditem.join("")
}

drawProductsDetails(choosedItemId)
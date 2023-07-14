let idForEditProduct = JSON.parse(localStorage.getItem('idForEditProduct'))
products = localStorage.getItem('products')

let editProduct = (JSON.parse(products)).find((item) => item.id == idForEditProduct)


console.log(editProduct.title);

ckeckForUser()


let productTitle = document.querySelector('.product-title')
let productDescription = document.querySelector('.product-description')
let productSize = document.querySelector('.product-size')
let SubmitButtom = document.querySelector('.SubmitButtom')
let uploadedImage = document.querySelector('.upload-image')
let imageUrl

console.log(editProduct.image);
productTitle.value = editProduct.title
productDescription.value = editProduct.description
productSize.value = editProduct.size
// uploadedImage.value = editProduct.image
// event

productTitle.addEventListener('change', editProductTitle)
productDescription.addEventListener('change', editProductDesc)
productSize.addEventListener('change', editProductSize)
SubmitButtom.addEventListener('click', EditProduct)
uploadedImage.addEventListener('change', updateImage)

// uploadedImage.addEventListener('change', updateImage)

// // function
// /**
//  * The function `getProductSizeValue` retrieves the value of the `productSize` input field and logs it
//  */
// function getProductSizeValue() {
//     productSizeValue = productSize.value
//     console.log(productSizeValue);
// }
// // create the product
// /* The `createProduct` function is responsible for creating a new product object based on the values
// entered by the user in the form. */
// function createProduct(e) {
//     e.preventDefault()
//     let namevalue = productTitle.value
//     let productDescriptionvalue = productDescription.value
//     if (namevalue && productDescription) {
//         let obj = {
//             id: (JSON.parse(allproducts)).length + 1,
//             image: imageUrl,
//             title: productTitle.value,
//             size: productSizeValue,
//             qty: 1,
//             description: productDescription.value,
//             itsMe:'yes'
//         };
//         let newProduct = [...(JSON.parse(allproducts)), obj]
//         localStorage.setItem('products', JSON.stringify(newProduct))
//         console.log(newProduct);
//         productTitle.value = ""
//         productSizeValue = ""
//         productDescription.value = ""
//         window.location = "index.html"
//     } else {
//         alert('Please Fill The Form')
//     }
// }

// /**
//  * The function `setImage()` is used to handle the selection of an image file and display it on the
//  * webpage if it is a JPEG image.
//  * @returns The function does not explicitly return anything.
//  */
// function setImage() {
//     let file = this.files[0]
//     convertImageBase64(file)
//     console.log(file);
//     let type = file.type
//     if (type !== "image/jpeg") {
//         alert("the file is not supported")
//         return
//     }
//     // if (file.size > 5 * 1024) {
//     //     alert("the file is to large")
//     //     return
//     // }
//     imageUrl = URL.createObjectURL(file)


// }
// /**
//  * The function `convertImageBase64` converts an image file to a base64 encoded string using
//  * JavaScript.
//  * @param file - The `file` parameter is the image file that you want to convert to base64.
//  */
// function convertImageBase64(file){
//     let reader = new FileReader()
//     reader.readAsDataURL(file)
//     reader.onload = function () {
//         imageUrl = reader.result ;
//     }
// }

function editProductTitle() {
    editProduct.title = productTitle.value
    console.log(editProduct.title);
}
function editProductSize() {
    editProduct.title = productSize.value
    console.log(editProduct.title);
}
function editProductDesc() {
    editProduct.title = productDescription.value
    console.log(editProduct.title);
}

/**
 * The EditProduct function is used to update a product's information and store it in the local
 * storage.
 * @param e - The parameter "e" is an event object that is passed to the function when it is triggered
 * by an event. It is commonly used to prevent the default behavior of an event, such as submitting a
 * form or following a link. In this case, the function is preventing the default form submission
 * behavior using
 */
function EditProduct(e) {
    e.preventDefault()
    let namevalue = productTitle.value
    let productDescriptionvalue = productDescription.value
    if (namevalue && productDescription) {
        let obj = {
            id: idForEditProduct,
            image: imageUrl,
            title: productTitle.value,
            size: productSize.value,
            qty: 1,
            description: productDescription.value,
            itsMe: 'yes'
        };
        let newProduct = [...products, obj]
        localStorage.setItem('products', JSON.stringify(newProduct))
        console.log(newProduct);
        productTitle.value = ""
        productSizeValue = ""
        productDescription.value = ""
        window.location = "index.html"
    } else {
        alert('Please Fill The Form')
    }
}

function updateImage() {
    let file = this.files[0]
    convertImageBase64(file)
    console.log(file);

    let type = file.type
    if (type !== "image/jpeg") {
        alert("the file is not supported")
        return
    }

    imageUrl = URL.createObjectURL(file)


}
function convertImageBase64(file) {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function () {
        imageUrl = reader.result;
    }
}
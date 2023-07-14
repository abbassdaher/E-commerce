let productTitle = document.querySelector('.product-title')
let productDescription = document.querySelector('.product-description')
let productSize = document.querySelector('.product-size')
let SubmitButtom = document.querySelector('.SubmitButtom')
let productSizeValue;
let allproducts = localStorage.getItem('products')
let uploadedImage = document.querySelector('.upload-image')
let imageUrl 

ckeckForUser()
// event
productSize.addEventListener('change', getProductSizeValue)
SubmitButtom.addEventListener('click', createProduct)
uploadedImage.addEventListener('change', setImage)

// function
/**
 * The function `getProductSizeValue` retrieves the value of the `productSize` input field and logs it
 */
function getProductSizeValue() {
    productSizeValue = productSize.value
    console.log(productSizeValue);
}
// create the product
/* The `createProduct` function is responsible for creating a new product object based on the values
entered by the user in the form. */
function createProduct(e) {
    e.preventDefault()
    let namevalue = productTitle.value
    let productDescriptionvalue = productDescription.value
    if (namevalue && productDescription) {
        let obj = {
            id: (JSON.parse(allproducts)).length + 1,
            image: imageUrl,
            title: productTitle.value,
            size: productSizeValue,
            qty: 1,
            description: productDescription.value,
            itsMe:'yes'
        };
        let newProduct = [...(JSON.parse(allproducts)), obj]
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

/**
 * The function `setImage()` is used to handle the selection of an image file and display it on the
 * webpage if it is a JPEG image.
 * @returns The function does not explicitly return anything.
 */
function setImage() {
    let file = this.files[0]
    convertImageBase64(file)
    console.log(file);
    let type = file.type
    if (type !== "image/jpeg") {
        alert("the file is not supported")
        return
    }
    // if (file.size > 5 * 1024) {
    //     alert("the file is to large")
    //     return
    // }
    imageUrl = URL.createObjectURL(file)
    

}
/**
 * The function `convertImageBase64` converts an image file to a base64 encoded string using
 * JavaScript.
 * @param file - The `file` parameter is the image file that you want to convert to base64.
 */
function convertImageBase64(file){
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function () {
        imageUrl = reader.result ;
    }
}
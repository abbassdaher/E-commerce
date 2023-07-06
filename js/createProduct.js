let productTitle = document.querySelector('.product-title')
let productDescription = document.querySelector('.product-description')
let productSize = document.querySelector('.product-size')
let SubmitButtom = document.querySelector('.SubmitButtom')
let productSizeValue;
let allproducts = localStorage.getItem('product')

ckeckForUser()
// event
productSize.addEventListener('change', getProductSizeValue)
SubmitButtom.addEventListener('click', createProduct)

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
    let obj = {
    id: JSON.parse(allproducts).length + 1,
    image: "",
    title: productTitle.value,
    size: productSizeValue,
    qty: 1,
    description: productDescription.value,
    };
    let newProduct = {...(JSON.parse(allproducts)),obj}
    localStorage.setItem('newprodect',JSON.stringify(newProducts) )
    // console.log(newProduct);
}
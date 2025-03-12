
const products = [
    { id:0, name: "Laptop", price: 1200, stock: 5 },
    { id:1, name: "Phone", price: 700, stock: 0 },
    { id:2, name: "Tablet", price: 400, stock: 3 },
    { id:3, name: "Watch", price: 400, stock: 0 },
];
console.log(products[0].price)
 // products[laptop] error
function checkStock(){
    const selectedProductIndex
        = document.getElementById("selectedProduct").value;
    if( products[selectedProductIndex].stock  === 0 ){
        console.log(`${products[selectedProductIndex].name} is out of stock`);
    }else{
        console.log(`${products[selectedProductIndex].name} is available 
            at the price of ${products[selectedProductIndex].price}`)
    }

  
}
/*  Output
Phone is out of stock 
Laptop is available at the price of 1200.
Tablet is available at the price of 400.

*/
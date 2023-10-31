let n = 6;
function factorProduct(n) {
    let productNumber = [];
    for(let i = 1; i <= Math.min(n); i++){
        let f = i * i;
        productNumber.push(f);
    }
   return productNumber.at(-1);
}
let number = factorProduct(n);

console.log(number);


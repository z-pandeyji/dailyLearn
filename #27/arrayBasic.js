const numbers = [1,2,3,4,5]
const tenNumbers = numbers.concat(6,7,8,9,10)
function sumArray(arr) {
    return arr.reduce((a,b) => a + b, 0)
}
const sum = sumArray(tenNumbers);
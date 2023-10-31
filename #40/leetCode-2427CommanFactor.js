let a = 12;
let b = 6;

function commonFactors(a, b) {
    let commonFactorsArray = [];
    for (let i = 1; i <= Math.min(a, b); i++) {
        if (a % i === 0 && b % i === 0) {
            commonFactorsArray.push(i);
        }
    }
    return commonFactorsArray;
}

const result = commonFactors(a, b);
console.log(result);

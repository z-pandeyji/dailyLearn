// get the even number only using loop

// first try 

// let evenNumber = [];

// for(let i = 0; i < 20; i+=2) {
//     evenNumber.push(i);
// }

// console.log(evenNumber)


// second try 

let evenNumber = []
let oddNumber = []

for(let i = 0; i < 20; i++) {
    if(i % 2 === 0) {
        evenNumber.push(i)
    } else {
        oddNumber.push(i)
    }
}

console.log(evenNumber,oddNumber)
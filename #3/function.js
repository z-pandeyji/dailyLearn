// let myAge = 22;


// function addtoMyAge(incrementBy,multiplyBy) {
//     myAge = (myAge + incrementBy) * multiplyBy;
// }

// // addtoMyAge(5);
// // addtoMyAge(7);

// addtoMyAge(5,2)

// console.log(myAge);

// return statement

const myAge = 22;

function addtoMyAge(incrementBy,multiplyBy) {
    return (myAge + incrementBy) * multiplyBy
}

const myNewAge = addtoMyAge(5,2);

console.log(myAge, myNewAge);
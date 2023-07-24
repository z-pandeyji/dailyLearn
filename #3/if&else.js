// function shouldGetLicense(age) {
//     if(age > 18) {
//         return true;
//     } else {
//         return false;
//     }
// }

// writing the same thing

function shouldGetLicense(age) {
    if(age > 18) {
         console.log('This person is above 18');
         return;
    }
     console.log('This person is below 18');
}

shouldGetLicense(20);

// console.log(shouldGetLicense(20));
// console.log(shouldGetLicense(17));

// O1 and On
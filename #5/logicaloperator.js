// logical operator uses

// function shouldGetALicense(age,bribe) {
//     if(age > 18) {
//         console.log('This person is above 18');
//         return;
//     } else {
//         if(bribe >= 100) {
//             console.log('You Pass');
//         } else {
//             console.log('This person is below 18: FAIL')
//         }
//     }
// }

// shouldGetALicense(5,90);

// && : both condition should be true
// || : in both condition, one should be true
// ! : this is the not operator

function shouldGetALicenseV2(age, bribe, whitelisted) {
    if(!whitelisted) {
        console.log('You are Banned', whitelisted);
        return
    }

    if((age <= 18 && bribe > 100) || bribe > 500) {
        console.log('You Pass')
        return
    } else if(age > 18){
        console.log('This person is above 18');
    } else if(bribe <= 100) {
        console.log('This person is below 18');
    }
}

shouldGetALicenseV2(18,200,true)
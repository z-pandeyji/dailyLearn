// function fn(customPromise) {
//     return customPromise.then(result => {
//         return result + 1;
//     })
// }


function getMePromises() {
    return fetch('/data.json')
}

// let promise = getMePromises();


promise.then(result => {
    return console.log('result', result);
})


// let promise = getMePromises();
// both commented code showed the pending state because the .then() always delayed by internally in the backend.
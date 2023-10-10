// function fn(customPromise) {
//     return customPromise.then(result => {
//         return result;
//     }).catch(()=> {
//         return 'error';
//     })
// }

// Nesting Promises

function getMeaPromise() {
    return fetch('data.json');
}

const promise = getMeaPromise();

promise.then((data)=> {
    console.log('data', data);
})
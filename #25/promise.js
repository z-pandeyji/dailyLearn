function getMeAPromise(){
    return fetch('data.json')
}

let promise = getMeAPromise();

promise.then(result=> {
    console.log('Get me a Something', result.json());
}).then(result2 => {
    console.log('Result 2', result2)
}).then(data=> {
    throw new Error('Yoo ERROR')
    console.log('hey', data);
})

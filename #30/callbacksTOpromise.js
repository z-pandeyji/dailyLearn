// start with callbacks function

// setTimeout(()=> {
//     console.log('Hello Pandeyji')
// }, 1000);

// function promiseSetTimeOut(){
// return new Promise((resolve, reject) => {
//     resolve();
//     reject();
// })
// }


function promiseSetTimeOut() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log('Hello Pandeyji');
            resolve();
            reject();
        }, 1000);
    });
}




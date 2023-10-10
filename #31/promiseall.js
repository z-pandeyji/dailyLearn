// async function fetchAll() {
//     try {
//     const req1 = await fetch('./data1.json');
//     const data1  = await req1.json()

//     const req2 = await fetch('./data2.json');
//     const data2  = await req2.json()

//     const req3 = await fetch('./data3.json');
//     const data3  = await req3.json()

//     console.log(data1, data2, data3)
//     // console.log('request',req1, req2, req3);
//     } catch(error) {
//         console.log('error', error);
//     }
// }

async function fetchAll() {
    const req1 = fetch('./data1.json');


    const req2 = fetch('./data2.json');


    const req3 = fetch('./data3.json');

    const promise = await Promise.all([req1, req2, req3]);

    const response = await Promise.all(promise.map(t => t.json()))

    console.log(response)
 
}

fetchAll()
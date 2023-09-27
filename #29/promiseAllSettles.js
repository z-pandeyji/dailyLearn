async function fn(...promises) {
    const awaitedValues = await Promise.allSettled(promises)
    return awaitedValues.map(t => t.status === 'fulfilled' ? t.value * 2 : null)
 }

function fn(...promises) {
    return new Promise ((resolve,reject)=> {
     Promise.allSettled(promises).then(
         values => {
             const result = values.map((val)=> val.status === 'fulfilled' ? val.value*2 : null);
             resolve(result);
         }
     ).catch(error => reject(error))
    })
 }



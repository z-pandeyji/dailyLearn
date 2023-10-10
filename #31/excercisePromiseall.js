function fn(...promises) {
	return new Promise((resolve, reject) => {
        Promise.all(promises)
        .then(values => {
            const result = values.map(value => value * 2);
            resolve(result);
        }).catch(error => {
            reject(error)
        })
    })
}
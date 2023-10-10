const fetchData = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve('data fetched!')
		}, 1000)
	})

}

const processData = (data) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(data+' - processed!')
		}, 1000)
	})
}


const main = async () => {
	try {
		const data = await fetchData()
		const processed = await processData(data)
		console.log(processed)
	} catch (err) {
		console.error('Error Occurred:', err)
	}
}

main()

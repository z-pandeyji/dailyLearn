function calculator(num1, num2, operation) {
	return new Promise((resolve,reject)=>{
		let result;
		switch(operation) {
			case '+':
			result = num1 + num2;
			resolve(result);
			break;
			case '-':
			result = num1 - num2;
			resolve(result);
			break;
			default:
			reject("error");
		}
	})
};

let value = calculator(0,0,'yo');

console.log('value', value);

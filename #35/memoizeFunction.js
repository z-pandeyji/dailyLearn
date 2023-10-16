function memoize(fn) {
	const cache = new Map()

	return function (...args) {
		const key = JSON.stringify(args)
		if (cache.has(key)) {
			return cache.get(key)
		}
		const result = fn.apply(this, args)
		cache.set(key, result)
		return result
	}
}


function sum(a, b) {
    console.log('Calculating sum...');
    return a + b;
}

const memoizedSum = memoize(sum);

console.log(memoizedSum(1, 2)); // Outputs: 'Calculating sum...' and 3
console.log(memoizedSum(1, 2)); // Outputs: 3 (from cache)
console.log(memoizedSum(2, 3)); // Outputs: 'Calculating sum...' and 5


function factorial(n) {
    console.log('Calculating factorial...');
    let result = 1;
    for (let i = 2; i <= n; i++)
        result *= i;
    return result;
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5)); // Outputs: 'Calculating factorial...' and 120
console.log(memoizedFactorial(5)); // Outputs: 120 (from cache)
console.log(memoizedFactorial(6)); // Outputs: 'Calculating factorial...' and 720


function fib(n) {
    console.log('Calculating fibonacci...');
    if (n <= 0) return 0;
    else if (n == 1) return 1;
    else return fib(n - 1) + fib(n - 2);
}

const memoizedFib = memoize(fib);

console.log(memoizedFib(10)); // Outputs: 'Calculating fibonacci...' and 55
console.log(memoizedFib(10)); // Outputs: 55 (from cache)
console.log(memoizedFib(11)); // Outputs: 'Calculating fibonacci...' and 89

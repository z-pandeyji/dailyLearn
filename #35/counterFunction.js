/**
 * @param {number} n
 * @return {Function} counter
 */
export function createCounter(n) {
	let count = n;
	return function counter() {
		let currentCount = count;
		count += 1;
		return currentCount;
	};
}

// Sample Test Cases

const counter = createCounter(10);
counter(); // 10
counter(); // 11
counter(); // 12

const secondCounter = createCounter(42);
counter(); // 43
counter(); // 44

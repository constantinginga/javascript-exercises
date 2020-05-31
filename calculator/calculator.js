function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (arr) {
	// let arrSum = 0;
	// for (let i = 0; i < arr.length; i++) {
	// 	arrSum += arr[i];
	// }
	// return arrSum;
	return arr.reduce((total, value) =>{
		total += value;
		return total;
	}, 0);
}

function multiply (arr) {
	return arr.reduce((total, value) =>{
		total *= value;
		return total;
	}, 1);
}

function power(a, b) {
	return a**b;
}

function factorial(a) {
	return (a === 0) ? 1 : (a * factorial(a-1));
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
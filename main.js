const solution = (numbers) => {
	//create variable to hold current number
	let currentNumber = 0;
    // use a loop to iterate through array
    for (i=0; i< numbers.length; i++) {
    if (numbers[i] > currentNumber) {
    //update currentNumbers
	currentNumber = numbers[i] }
    }
    return currentNumber;
}


const solution = (max) => {
    // test if number is even
   let isEven = max % 2 == 0
    //return isEven is it is less than max
   return isEven <= max;
}

// use a loop to iterate through Fibonacci sequence
// create variable that holds current total
// 
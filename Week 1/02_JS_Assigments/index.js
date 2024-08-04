// Assignment 1
// Create a variable for each of the following: your favorite color, your height in centimeters, and whether you like pizza. Use appropriate variable declarations (let, const, or var). Try logging it using console.log

var favColor = 'Green';
let myHeight = 180;
const likePizza = true;

console.log(favColor);
console.log(myHeight);
console.log(likePizza);

// ----------------------------------------------------------------------------------------------------------

// Assignment 2
// Write a function sum that finds the sum of two numbers.
// Side quest - Try passing in a string instead of a number and see what happens?
function sumForNumbers(num1, num2) {
	return num1 + num2;
}
function sumForStrings(str1, str2) {
	return str1 + str2;
}

console.log(sumForNumbers(5, 4));
console.log(sumForNumbers('5', '4'));

// ----------------------------------------------------------------------------------------------------------

// Assignment 3
// Write a function called canVote that returns true or false if the age of a user is > 18
function canVote(age) {
	if (age > 18) {
		return true;
	}
	return false;
}

console.log(canVote(21));

// ----------------------------------------------------------------------------------------------------------

// Assignment 4
// Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd."
function oddOrEven(num) {
	if (num % 2 == 0) {
		console.log('The number is even');
	} else {
		console.log('The number is odd');
	}
}

oddOrEven(4);
oddOrEven(5);

// ----------------------------------------------------------------------------------------------------------

// Assignment 5
// Write a function called sum that finds the sum from 1 to a number

function sum(num) {
	let total = 0;
	for (let i = 0; i <= num; i++) {
		total += i;
	}
	return total;
}

console.log(sum(5));

// ----------------------------------------------------------------------------------------------------------

// Assignment 6
// Write a function that takes a user as an input and greets them with their name and age
function greet(user) {
	console.log('Hello, ' + user.name);
}

const user = {
	name: 'Amit',
	age: 21,
};
greet(user);

// ----------------------------------------------------------------------------------------------------------

// Assignment 7
// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

function greetWithInfo(user) {
	let pronoun = '';
	if (user.gender === 'M') {
		pronoun = 'Mr';
	} else if (user.gender === 'F') {
		pronoun = 'Mrs';
	} else {
		pronoun = 'Others';
	}
	console.log(`Hi ${pronoun} ${user.name}, your age is ${user.age}`);
}

const user2 = {
	name: 'Amit',
	age: 21,
	gender: 'M',
};
greetWithInfo(user2);

// ----------------------------------------------------------------------------------------------------------

// Assignment 8
// Also tell the user if they are legal to vote or not
function greetWithInfoAndVote(user) {
	let pronoun = '';
	if (user.gender === 'M') {
		pronoun = 'Mr';
	} else if (user.gender === 'F') {
		pronoun = 'Mrs';
	} else {
		pronoun = 'Others';
	}

	let vote = '';
	if (user.age < 18) {
		vote = 'cannot vote';
	} else {
		vote = 'can vote';
	}
	console.log(`Hi ${pronoun} ${user.name}, your age is ${user.age}, you ${vote}`);
}

greetWithInfoAndVote(user2);

// ----------------------------------------------------------------------------------------------------------

// Assignment 9
// Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS
function filterEven(nums) {
	const newArr = [];
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] % 2 == 0) {
			newArr.push(nums[i]);
		}
	}
	return newArr;
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterEven(nums));

// With Filter Method
function filterEvenWithFilterMethod(nums) {
	return nums.filter((num) => num % 2 == 0);
}
const even = filterEvenWithFilterMethod(nums);
console.log(even);

// ----------------------------------------------------------------------------------------------------------

// Assignment 10
// Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old
const users = [
	{ name: 'Alice', age: 25, gender: 'F' },
	{ name: 'Bob', age: 17, gender: 'M' },
	{ name: 'Charlie', age: 19, gender: 'M' },
	{ name: 'David', age: 16, gender: 'M' },
	{ name: 'Eve', age: 22, gender: 'F' },
];

function usersAbove18(users) {
	return users.filter((user) => user.age > 18);
}

console.log(usersAbove18(users));

// ----------------------------------------------------------------------------------------------------------

// Assignment 11
// Create a function that takes an array of objects as input, and returns the users whose age > 18 and are male
function usersAbove18WithGender(users) {
	return users.filter((user) => user.age > 18 && user.gender === 'M');
}

console.log(usersAbove18WithGender(users));

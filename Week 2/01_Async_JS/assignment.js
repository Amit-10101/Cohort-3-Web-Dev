// Try to create a promisified version of
// - setTimeout
// - fetch
// - fs.readFile

// Promisified version of setTimeout function
function promisifiedSetTimeout(delay) {
	return new Promise((resolve) => {
		console.log('Processing...');
		setTimeout(() => {
			resolve();
		}, delay);
	});
}

promisifiedSetTimeout(2000)
	.then(() => {
		console.log('Promise completed!!!');
	})
	.catch(() => {
		console.log('Promise failed!!!');
	});

// ------------------------------------------------------------------------------------------------

// Promisified version of fetch function
function promisifiedFetch(url, options = {}) {
	return new Promise((resolve, reject) => {
		fetch(url, options)
			.then((response) => resolve(response.json()))
			.catch((error) => reject(error));
	});
}

promisifiedFetch('https://dummyjson.com/products?limit=5&select=title,price')
	.then((data) => {
		console.log('Data:', data);
	})
	.catch((error) => {
		console.error('Error:', error);
	});

// ------------------------------------------------------------------------------------------------

// Promisified version of fs.readFile function
const fs = require('fs');
function promisifiedFileRead(path, encoding) {
	return new Promise((resolve, reject) => {
		fs.readFile(path, encoding, (err, data) => {
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		});
	});
}

promisifiedFileRead('./a.txt', 'utf-8')
	.then((data) => console.log('Data:\n' + data))
	.catch((error) => console.log('Error occured!!!\n' + error));

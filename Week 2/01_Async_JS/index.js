const fs = require('fs');

const data = fs.readFileSync('a.txt', 'utf-8');
console.log('File Data: \n' + data);

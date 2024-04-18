const arrays = require('./arrays');

console.log([1,2,3] instanceof Object);
console.log([1,2,3].constructor === Object);
console.log(Array.isArray([1,2,3]));
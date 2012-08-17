var JSML = require('./jsml.js');

console.log('\nparse:\n');

console.log(JSML.parse('{}'));
console.log(JSML.parse('[]'));
console.log(JSML.parse('true'));

var jsml = JSML.parse('---\n{"hi": "there"}\n---\n{"i\'m": "jsml!"}');
console.log(jsml);

console.log('\nstringify:\n');

console.log(JSML.stringify(jsml));

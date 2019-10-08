const lowerCase = require('./ex01');
const upperCase = require('./ex02');
const length = require('./ex03');
const capitalize = require('./ex04');
const decapitalize = require('./ex05');
const kebabCase = require('./ex06');



console.log(lowerCase("HELLO, WORLD !"));
// => hello, world !

console.log(upperCase("hello, world !"));
// => HELLO, WORLD !

console.log(length("Hello, world !"));
// => 14

console.log(capitalize("hello, World !"));
//Hello, World !
console.log(capitalize("hello, World !", true));
// => true: Hello, world ! / false: Hello, World !

console.log(decapitalize("Hello, WORLD !"));
// => hello, wORLD !

console.log(kebabCase("-Hello world !-"));
console.log(kebabCase("Hello World !"));
console.log(kebabCase("HelloWorld!"));
// => hello-world

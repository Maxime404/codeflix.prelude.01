const lowerCase = require('./ex01');
const upperCase = require('./ex02');
const length = require('./ex03');
const capitalize = require('./ex04');
const decapitalize = require('./ex05');
const kebabCase = require('./ex06');
const snakeCase = require('./ex07');
const swapCase = require('./ex08');
const charAt = require('./ex09');
const first = require('./ex10');
const last = require('./ex11');
const substr = require('./ex12');
const slice = require('./ex13');
const count = require('./ex14');
const countSubstrings = require('./ex15');
const countWords = require('./ex16');
const indexOf = require('./ex17');
const lastIndexOf = require('./ex18');
const insert = require('./ex19');
const repeat = require('./ex20');
const reverse = require('./ex21');
const splice = require('./ex22');
const trim = require('./ex23');
const endsWith = require('./ex24');
const includes = require('./ex25');

function indexedLog(index, func) {
    console.log(index + ' => ' + func);
}

indexedLog(1, lowerCase("HELLO, WORLD !"));
// => hello, world !

indexedLog(2, upperCase("hello, world !"));
// => HELLO, WORLD !

indexedLog(3, length("Hello, world !"));
// => 14

indexedLog(4, capitalize("hello, World !"));
//Hello, World !
indexedLog(4, capitalize("hello, World !", true));
// => true: Hello, world ! / false: Hello, World !

indexedLog(5, decapitalize("Hello, WORLD !"));
// => hello, wORLD !

indexedLog(6, kebabCase("-Hello world !-"));
// => hello-world-!
indexedLog(6, kebabCase("Hello World !"));
// => hello-world-!
indexedLog(6, kebabCase("HelloWorld!"));
// => hello-world!
indexedLog(6, kebabCase("-HELLO-World!-"));
// => hello-world!

indexedLog(7, snakeCase("_Hello world !_"));
// => hello_world_!
indexedLog(7, snakeCase("-Hello-world-!-"));
// => hello_world_!
indexedLog(7, snakeCase("Hello World !"));
// => hello_world_!
indexedLog(7, snakeCase("HelloWorld!"));
// => hello_world!

indexedLog(8, swapCase("Hello WoRlD !"));
// => hELLO wOrLd !

indexedLog(9, charAt('Hello, World !', 4));
// => o

indexedLog(10, first('Hello, World !', 5));
// => Hello

indexedLog(11, last('Hello, World !', 5));
// => rld !

indexedLog(12, substr('Hello, World !', 7, 5));
// => World

indexedLog(13, slice('Hello, World !', -7));
// => World !

indexedLog(14, count('Hello, World !'));
// => 14

indexedLog(15, countSubstrings('Hello HELLO hello Hello, World !', 'Hello'));
// => 2

indexedLog(16, countWords('Hello World !'));
// => 2
indexedLog(16, countWords('HelloWorld!'));
// => 2
indexedLog(16, countWords('Hello - World !'));
// => 2

indexedLog(17, indexOf('Hello, World !', 'o', 5));
// => 8

indexedLog(18, lastIndexOf('Hello, World !', 'o'));
// => 8

indexedLog(19, insert('Hello, World !', 'o', 5));
// => Helloo, World !

indexedLog(20, repeat('Hello, World !', 2));
// => Hello, World !Hello, World !

indexedLog(21, reverse('Hello, World !'));
// => ! dlroW ,olleH

indexedLog(22, splice('Hello, World !', 7, 5, 'Hello'));
// => Hello, Hello !
indexedLog(22, splice('Hello, World !', -7, 5, 'Hello'));
// => Hello, Hello !

indexedLog(23, trim(' Hello, World ! '));
// => Hello, Hello !
indexedLog(23, trim('--Hello, World !--', '-'));
// => Hello, Hello !

indexedLog(24, endsWith('Hello, World !', '!'));
// => true
indexedLog(24, endsWith('Hello, World !', 'lo', 5));
// => true

indexedLog(25, includes('Hello, World !', 'World'));
// => true
indexedLog(25, includes('Hello, World !', 'World', 7));
// => true
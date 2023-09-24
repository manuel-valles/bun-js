import path from 'path'; // ES Modules
// const path = require('path'); // CommonJS

const filepath = path.join('foo', 'bar', 'example.png');
const filename = path.basename(filepath);

console.log(filename); // example.png
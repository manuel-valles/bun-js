// Comment out the following line to write to the file
/*
const data = 'I ❤️ JS!';
await Bun.write('data.txt', data);
*/

const file = Bun.file('data.txt');
const readData = await file.text();
console.log(readData); // I ❤️ JS!
console.log(file.size); // 12
const readableData = file.stream();
console.log(readableData); // ReadableStream
const bufferData = await file.arrayBuffer();
console.log(bufferData); // ArrayBuffer

const fs = require('fs');

// const book = {
//     title: "Think and grow Rich",
//     author: "Napoleon Hill"
// }

// const bookJson = JSON.stringify(book);
// console.log(bookJson);

// const parsedJson = JSON.parse(bookJson);
// console.log(parsedJson.title);

// fs.writeFileSync('1-json.json', bookJson);

// reading the file
// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJson = dataBuffer.toString();
// const data = JSON.parse(dataJson);
//
// console.log(dataBuffer);
// console.log(data.title);


const dataBuffer = fs.readFileSync('1-json.json');
const dataJson = dataBuffer.toString();
const user = JSON.parse(dataJson);

user.name = "Sylvester";
user.age = 24;

const userJson = JSON.stringify(user);

fs.writeFileSync('1-json.json', userJson);



let user = require('./user/user');

let vasya = new user.User('Vasya');
let petya = new user.User('Petya');

vasya.hello(vasya);

console.log("user.js is required!");

const fs = require('fs');
const path = require('path');

// task 1 - lear to read file
// way 1
/*
fs.readFile('t1.txt', 'utf-8', (err, data) => {
    console.log(data);
});

let text = fs.readFileSync('t1.t xt', 'utf-8');
console.log(text);

console.log('==============');*/

fs.readdir('one', (err, data) => {
    console.log(data);
    data.forEach(file => {
        console.log(file);
        console.log(path.extname(file));
        console.log(fs.statSync('one/'+file).size);
    })
});
const add = require('./add.js').add;
const sub = require("./subtract.js").sub;

const readline = require('readline').createInterface( {
    input:process.stdin,
    output:process.stdout
})

const args = process.argv.slice(2)

readline.question(' add | subtract ', symbol => {
    if (symbol === 'add') {
        console.log(`${args[0]} + ${args[1]} = ${add(parseInt(args[0]), parseInt(args[1]))}`);
    } else if (symbol === 'sub') {
        console.log(`${args[0]} - ${args[1]} = ${sub(parseInt(args[0]), parseInt(args[1]))}`);
    } else {
        console.log('Unknown operator')
    }

    readline.close()
})
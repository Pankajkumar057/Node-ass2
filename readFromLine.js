// read from line assignment-2
// like question and answer==>

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question("Please enter your name:",name => {
    console.log(`Hello ${name}!`);
    readline.close();
  });
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Equivalent to sc.nextInt()
readline.question('Enter a: ', (input) => {
  let a = parseInt(input); // Convert the string input to an integer
  console.log("Value of a is: " + a);
  
  readline.close();
});

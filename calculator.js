/// BASE CASE SAMPLE INPUTS ///

const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  op: 'Add',
}

const exampleAdditionInputSign = {
  num1: 3,
  num2: 5,
  op: '+',
}

const exampleSubtractInput = {
  num1: 10,
  num2: 5,
  op: 'subtract',
}

const exampleSubtractInputSign = {
  num1: 10,
  num2: 5,
  op: '-',
}

const exampleMultiInput = {
  num1: 3,
  num2: 5,
  op: 'multiply',
}

const exampleMultiInputSign = {
  num1: 3,
  num2: 5,
  op: '*',
}

const exampleDivideInput = {
  num1: 3,
  num2: 5,
  op: 'divide',
}

const exampleDivideInputSign = {
  num1: 3,
  num2: 5,
  op: '/',
}

const exampleModuloInput = {
  num1: 5,
  num2: 3,
  op: 'modulo',
}

const exampleModuloInputSign = {
  num1: 5,
  num2: 3,
  op: '%',
}

const exampleExponentInput = {
  num1: 2,
  num2: 3,
  op: 'exponent',
}

const exampleExponentInputSign = {
  num1: 2,
  num2: 3,
  op: '**',
}

/// EDGE CASE SAMPLE INPUTS ///

const exampleMissingNum = {
  num1: null,
  num2: 5,
  op: '+',
}

const exampleMissingOp = {
  num1: 3,
  num2: 5,
  op: null,
}

const exampleWrongSign = {
  num1: 3,
  num2: 5,
  op: '(',
}

const exampleOneNonNum = {
  num1: 'hotdog',
  num2: 5,
  op: '/',
}

const exampleTwoNonNum = {
  num1: 'hotdog',
  num2: 'elephant',
  op: '*',
}

const exampleDivideByZero = {
  num1: 5,
  num2: 0,
  op: 'divide',
}

/// CALCULATOR FUNCTIONALITY ///

function verifyNum(input) {
  return isNaN(input) || !input
}

function calculator(data) {
  let sign = String(data.op)
  sign = sign.toLowerCase()
  
  if (verifyNum(data.num1) || verifyNum(data.num1)) {
    return "Input provided is not a number"
  }
  else if (data.num2 === 0) {
    return "Cannot divide by zero"
  }
  else if (sign === 'add' || sign === '+') {
    return data.num1 + data.num2
  } 
  else if (sign === 'subtract' || sign === '-') {
    return data.num1 - data.num2
  } 
  else if (sign === 'multiply' || sign === '*') {
    return data.num1 * data.num2
  } 
  else if (sign === 'divide' || sign === '/') {
    return data.num1 / data.num2
  } 
  else if (sign === 'modulo' || sign === '%') {
    return data.num1 % data.num2
  } 
  else if (sign === 'exponent' || sign === '**') {
    return data.num1 ** data.num2
  } 
  else {
    return "Operator not recognized"
  }
} 

/// BASE CASE EXAMPLES ///

console.log("*** ADDITION ***");
console.log(calculator(exampleAdditionInput));
console.log(calculator(exampleAdditionInputSign));
console.log("*** SUBTRACTION ***");
console.log(calculator(exampleSubtractInput));
console.log(calculator(exampleSubtractInputSign));
console.log("*** MULTIPLICATION ***");
console.log(calculator(exampleMultiInput));
console.log(calculator(exampleMultiInputSign));
console.log("*** DIVIDE ***");
console.log(calculator(exampleDivideInput));
console.log(calculator(exampleDivideInputSign));
console.log("*** MODULO ***");
console.log(calculator(exampleModuloInput));
console.log(calculator(exampleModuloInputSign));
console.log("*** EXPONENT ***");
console.log(calculator(exampleExponentInput));
console.log(calculator(exampleExponentInputSign));


/// EDGE CASE EXAMPLES ///

console.log("*** MISSING NUMBER ***")
console.log(calculator(exampleMissingNum));
console.log("*** MISSING OPERATOR ***")
console.log(calculator(exampleMissingOp));
console.log("*** WRONG SIGN ***")
console.log(calculator(exampleWrongSign));
console.log("*** ADDING NON-NUMBER ***")
console.log(calculator(exampleOneNonNum));
console.log(calculator(exampleTwoNonNum));
console.log("*** DIVIDE BY ZERO ***")
console.log(calculator(exampleDivideByZero));

console.log("*************************************");
console.log("You can now enter in your own values to calculate:");

// This line "loads" the prompt package and puts it into a variable we can use called prompt
// Lines like this (that use require()) typically go on the top of the file
const prompt = require('prompt');

const collectUserInput = function(error, promptInput) {
  console.log('This is the value of the promptInput variable that got passed in by prompt, after our prompt package collect user input', promptInput);

  promptInput.num1 = Number(promptInput.num1)
  promptInput.num2 = Number(promptInput.num2)

  console.log("*** RESULT ***")
  console.log(calculator(promptInput))
}  


//start the prompt
prompt.start();

//collect two numbers (num1 and num2) and an operation
//then call the function `calculator` with the user input
prompt.get(['num1','num2','op'], collectUserInput);

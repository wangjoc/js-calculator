/// BASE CASE SAMPLE INPUTS ///

const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  op: 'add',
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

/// CALCULATOR FUNCTIONALITY ///

function verifyNum(input) {
  if (!isNaN(input)) {
    return "Input provided is not a number"
  }
}

function calculator(data) {
  
  if ((isNaN(data.num1) || !data.num1 || isNaN(data.num2) || !data.num2)) {
    return "Input provided is not a number"
  }
  else if (data.op === 'add' || data.op === '+') {
    return data.num1 + data.num2
  } 
  else if (data.op === 'subtract' || data.op === '-') {
    return data.num1 - data.num2
  } 
  else if (data.op === 'multiply' || data.op === '*') {
    return data.num1 * data.num2
  } 
  else if (data.op === 'divide' || data.op === '/') {
    return data.num1 / data.num2
  } 
  else {
    return "Operator not recognized"
  }
} 

/// BASE CASE EXAMPLES ///

console.log("*** ADDITION ***")
console.log(calculator(exampleAdditionInput));
console.log(calculator(exampleAdditionInputSign));
console.log("*** SUBTRACTION ***")
console.log(calculator(exampleSubtractInput));
console.log(calculator(exampleSubtractInputSign));
console.log("*** MULTIPLICATION ***")
console.log(calculator(exampleMultiInput));
console.log(calculator(exampleMultiInputSign));
console.log("*** DIVIDE ***")
console.log(calculator(exampleDivideInput));
console.log(calculator(exampleDivideInputSign));


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

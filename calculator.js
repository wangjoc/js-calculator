/// SAMPLE INPUTS ///

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

/// CALCULATOR FUNCTIONALITY ///

function calculator(data) {
  if (data.op === 'add' || data.op === '+') {
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

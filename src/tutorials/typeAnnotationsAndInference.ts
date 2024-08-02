// Strings:
let awesomeName: string = "shakeAndBake";
awesomeName = "something";
// awesomeName = 20;
awesomeName = awesomeName.toUpperCase();
// console.log(awesomeName);

// Numbers:
let amount: number = 20;
amount = 12 - 1;
// amount = 'pants';

// Boolean:
let isAwesome: boolean = true;
isAwesome = false;
// isAwesome = "shakeAndBake";

// Challenge
// You can use Type Annotation or Inference

// Create a variable of type string and try to invoke a string method on it:
let greeting: string = "Hello, TypeScript";
greeting = greeting.toUpperCase();
// console.log(`Greeting: ${greeting}`);

// Create a variable of type number and try to perform a mathematical operation on it:
let age: number = 25;
age = age * 2;
// console.log(`age: ${age}`);

// Create a variable of type boolean and try to perform a logical operation on it:
let isAdult: boolean = age >= 18;
isAdult = !isAdult;
// console.log(`Is adult: ${isAdult}`);

// Try to assign a value of a different type to each of these variables and observe the TypeScript compiler's response:
// greeting = 10;
// age = "thirty";
// isAdult = "yes";
// console.log(greeting, age, isAdult);

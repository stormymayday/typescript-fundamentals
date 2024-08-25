// Function Params
function sayHi(name: string) {
    console.log(`Hello there ${name.toUpperCase()}`);
}

sayHi("John");
// sayHi(3);

// Function Returns
function calculateDiscount(price: number): number {
    // const hasDiscount = true;
    // if (hasDiscount) {
    //     return "Discount Applied";
    // }

    return price * 0.9;
}
const finalPrice = calculateDiscount(200);

console.log(finalPrice);

// "any" example
function addThree(number: any) {
    let anotherNumber: number = 3;

    return number + anotherNumber;
}
const result = addThree(3);
const someValue = result;
// someValue.myMethod();

// Function Params and Returns Challenge
// Create a new array of names.
// Write a new function that checks if a name is in your array. This function should take a name as a parameter and return a boolean.
// Use this function to check if various names are in your array and log the results.

let names: string[] = ["john", "peter"];

function checkName(name: string): boolean {
    for (let i = 0; i < names.length; i++) {
        if (name === names[i]) {
            return true;
        }
    }
    return false;

    // return names.includes(name);
}

console.log(checkName("kevin"));
console.log(checkName("peter"));

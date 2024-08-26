// Optional Parameters
function calculatePrice(price: number, discount?: number): number {
    return price - (discount || 0);
}

console.log(calculatePrice(100, 20));
console.log(calculatePrice(100));

// Default Parameters
function calculateScore(
    initialScore: number,
    penaltyPoints: number = 0
): number {
    return initialScore - penaltyPoints;
}

console.log(calculateScore(100, 20));
console.log(calculateScore(300));

// Rest Parameters
function sum(message: string, ...numbers: number[]): string {
    const doubled = numbers.map((num) => num * 2);
    console.log(doubled);

    let total = numbers.reduce((previous, current) => {
        return previous + current;
    }, 0);

    return `${message}${total}`;
}

let result = sum("The total is : ", 1, 2, 3, 4, 5);

console.log(result);

// "void" return type
function logMessage(message: string) {
    console.log(message);
}

logMessage("Hello, Typescript");

// Functions - Using Union Types as Function Parameters
// Challenge
// Your task is to create a function named processInput that accepts a parameter of a union type string | number. The function should behave as follows:
// - If the input is of type number, the function should multiply the number by 2 and log the result to the console.
// - If the input is of type string, the function should convert the string to uppercase and log the result to the console.

function processInput(input: string | number) {
    if (typeof input === "number") {
        console.log(input * 2);
    }

    if (typeof input === "string") {
        console.log(input.toUpperCase());
    }
}

processInput(10);
processInput("hello");

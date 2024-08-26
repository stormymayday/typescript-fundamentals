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

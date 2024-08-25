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

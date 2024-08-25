// Optional Parameters
function calculatePrice(price: number, discount?: number): number {
    return price - (discount || 0);
}

console.log(calculatePrice(100, 20));
console.log(calculatePrice(100));

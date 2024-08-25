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

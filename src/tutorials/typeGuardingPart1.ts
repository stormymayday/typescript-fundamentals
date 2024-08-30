type ValueType = string | number | boolean;

let value: ValueType;
const random = Math.random();
value = random < 0.33 ? "Hello" : random < 0.66 ? 123.456 : true;

// Define the function checkValue that takes one parameter value of type ValueType.

// Inside the function, use an if statement to check if value is of type string. If it is, log value converted to lowercase and then return from the function.

// If value is not a string, use another if statement to check if value is of type number. If it is, log value formatted to two decimal places and then return from the function.

// If value is neither a string nor a number, it must be a boolean. Log the string "boolean: " followed by the boolean value.
function checkValue(value: ValueType): void {
    if (typeof value === "string") {
        console.log(value.toLowerCase());
        // return;
    } else if (typeof value === "number") {
        console.log(value.toFixed(2));
    } else {
        console.log(`Boolean: ${value}`);
    }
}
// Finally, call the checkValue function with value as the argument.

checkValue(value);

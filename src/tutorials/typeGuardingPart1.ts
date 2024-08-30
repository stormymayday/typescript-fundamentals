// Challenge - "typeof" guard
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

// Equality Narrowing

// In TypeScript, equality narrowing is a form of type narrowing that occurs when you use equality checks like === or !== in your code

type Dog = { type: "dog"; name: string; bark: () => void };
type Cat = { type: "cat"; name: string; meow: () => void };
type Animal = Dog | Cat;

const cat1: Cat = {
    type: "cat",
    name: "spot",
    meow() {
        console.log(`${this.type} named ${this.name} meows!`);
    },
};

const dog1: Dog = {
    type: "dog",
    name: "sparky",
    bark() {
        console.log(`${this.type} named ${this.name} barks!`);
    },
};

// Define a function named makeSound that takes one parameter animal of type Animal.

// Inside the function, use an if statement to check if animal.type is 'dog'.

// If animal.type is 'dog', TypeScript knows that animal is a Dog in this block. In this case, call the bark method of animal.

// If animal.type is not 'dog', TypeScript knows that animal is a Cat in the else block. In this case, call the meow method of animal.

// Now you can call the makeSound function with an Animal as the argument. The function will call the appropriate method (bark or meow) depending on the type of the animal.
function makeSound(animal: Animal) {
    // if ("bark" in animal) {
    //     animal.bark();
    // } else {
    //     animal.meow();
    // }

    if (animal.type === "dog") {
        animal.bark();
    } else {
        animal.meow();
    }
}

makeSound(cat1);
makeSound(dog1);

// Challenge - "Truthy"/"Falsy" guard

// In TypeScript, "Truthy"/"Falsy" guard is a simple check for a truthy or falsy value

// Define a function named printLength that takes one parameter str which can be of type string, null, or undefined.

// Inside the function, use an if statement to check if str is truthy. In JavaScript and TypeScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy (i.e., except for false, 0, -0, 0n, "", null, undefined, and NaN).

// If str is truthy, it means it's a string (since null and undefined are falsy). In this case, log the length of str using the length property of the string.

// If str is not truthy (i.e., it's either null or undefined), log the string 'No string provided'.

function printLength(str: string | null | undefined): void {
    if (str) {
        console.log(str.length);
    } else {
        console.log(`No string provided`);
    }
}

// Now you can call the printLength function with a string, null, or undefined as the argument. The function will print the length of the string if a string is provided, or 'No string provided' otherwise.

printLength(`hello`);
printLength("");
printLength(null);
printLength(undefined);

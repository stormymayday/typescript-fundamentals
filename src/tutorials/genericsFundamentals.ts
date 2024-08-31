// In TypeScript, you can declare an array using two syntaxes:

// let array1: string[] = ['Apple', 'Banana', 'Mango'];
let array1: Array<string> = ["Apple", "Banana", "Mango"];

// let array2: number[] = [1,2,3];
let array2: Array<number> = [1, 2, 3];

// let array3: boolean[] = [true, false];
let array3: Array<boolean> = [true, false];

// Creating Generic Function and Interface
function genericFunction<T>(arg: T): T {
    return arg;
}

const someStringValue = genericFunction<string>("Hello World");
console.log(someStringValue);

const someNumberValue = genericFunction<number>(1);
console.log(someNumberValue);

interface GenericInterface<T> {
    value: T;
    getValue(): T;
}

const genericString: GenericInterface<string> = {
    value: "Hello World",
    getValue() {
        return this.value;
    },
};
console.log(genericString);
console.log(genericString.getValue());

const genericNumer: GenericInterface<number> = {
    value: 1,
    getValue() {
        return this.value;
    },
};
console.log(genericNumer);
console.log(genericNumer.getValue());

// Promise Example
async function someFunc(): Promise<string> {
    return "hello world";
}

const result = someFunc();

// Challenge - Generate Generic Array
// function generateStringArray(length: number, value: string): string[] {
//     let result: string[] = [];
//     result = Array(length).fill(value);
//     return result;
// }
// console.log(generateStringArray(3, "hello"));

function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    result = Array(length).fill(value);
    return result;
}
console.log(createArray(2, 1));
console.log(createArray(3, "hello"));
console.log(createArray(5, true));

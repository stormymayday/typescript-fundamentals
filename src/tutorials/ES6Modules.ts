// Named Export:
export function sayHello(name: string): void {
    console.log(`Hello ${name}`);
}

// Named Export:
export let person: string = "susan";

export type Student = {
    name: string;
    age: number;
};

const newStudent: Student = {
    name: "peter",
    age: 24,
};

// Default Export:s
export default newStudent;

// import newStudent, {
//     sayHello,
//     person,
//     type Student,
// } from "./tutorials/ES6Modules";

// import { someValue } from "./example.js";

// sayHello("john");
// console.log(person);
// console.log(newStudent);

// const anotherStudent: Student = {
//     name: "bob",
//     age: 23,
// };

// console.log(someValue);

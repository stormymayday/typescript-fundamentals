// Using 'destructuring'
// function createEmployee({ id }: { id: number }): {
//     id: number;
//     isActive: boolean;
// } {
//     return { id, isActive: id % 2 === 0 };
// }

// const first = createEmployee({ id: 1 });
// const second = createEmployee({ id: 2 });

// console.log(first, second);

// Naming an object
function createEmployee(employee: { id: number }): {
    id: number;
    isActive: boolean;
} {
    return { id: employee.id, isActive: employee.id % 2 === 0 };
}

const first = createEmployee({ id: 1 });
const second = createEmployee({ id: 2 });

console.log(first, second);

// Alternative
function createStudent(student: { id: number; name: string }): void {
    console.log(`Welcome ${student.name.toUpperCase()}`);
}

const newStudent = {
    id: 5,
    name: "anna",
};

createStudent(newStudent);

// Gotcha - Excess Property Checks:
// createStudent({ id: 1, name: "bob", email: "bobo@gmail.com" });

// ## Challenge
// Your task is to create a function named processData that accepts two parameters:
// - The first parameter, input, should be a union type that can be either a string or a number.
// - The second parameter, config, should be an object with a reverse property of type boolean, by default it "reverse" should be false
// The function should behave as follows:
// - If input is of type number, the function should return the square of the number.
// - If input is of type string, the function should return the string in uppercase.
// - If the reverse property on the config object is true, and input is a string, the function should return the reversed string in uppercase.

function processData(
    input: string | number,
    config: { reverse: boolean } = { reverse: false }
): string | number {
    if (typeof input === "number") {
        return input * input;
    } else {
        return config.reverse
            ? input.toUpperCase().split("").reverse().join("")
            : input.toUpperCase();
    }
}

console.log(processData(2));
console.log(processData("hello", { reverse: false }));
console.log(processData("hello", { reverse: true }));

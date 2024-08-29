// Length: 2, string and number
let person: [string, number] = ["john", 25];

// Tuples are useful when you want to return multiple values from a function
function getPerson(): [string, number] {
    return ["john", 25];
}

// Length: 3, 3 numbers
let date1: [number, number, number] = [12, 17, 2001];
// By default, tuples in TypeScript are not read-only.
// This means you can modify the values of the elements in the tuple.
date1.push(34);
// However, TypeScript does provide a way to make tuples read-only using the readonly keyword.
let date2: readonly [number, number, number] = [12, 17, 2001];
// date2.push(34);

// Optional Parameters
let susan: [string, number?] = ["susan"];

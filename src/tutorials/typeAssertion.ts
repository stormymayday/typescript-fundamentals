let someValue: any = "this is a string";

// Using type assertion to treat 'someValue' as a string
let strLength: number = (someValue as string).length;
// console.log(strLength);

// Can be used with JSON Parse because it returns type 'any'
type Bird = {
    name: string;
};

// Assume we have a JSON string from an API or local file
let birdString = '{"name": "Eagle"}';
let dogString = '{"breed": "Poodle"}';

// Parse the JSON string into an object
let birdObject = JSON.parse(birdString);
let dobObject = JSON.parse(dogString);

let bird = birdObject as Bird;
let dog = dobObject as Bird;

console.log(bird.name);
console.log(dog.name); // undefined

enum Status {
    Pending = "pending",
    Declined = "declined",
}

type User = {
    name: string;
    status: Status;
};

// save Status.Pending in the DB as a string
// retrieve string from the DB
const statusValue = "pending";

const user: User = { name: "john", status: statusValue as Status };

// Challenge - Type Predicate
// A type predicate is a function whose return type is a special kind of type that can be used to narrow down types within conditional blocks.
type User = {
    name: string;
    login(): void;
};

type Student = {
    name: string;
    study(): void;
};

type Person = User | Student;

function randomPerson(): Person {
    return Math.random() < 0.5
        ? {
              name: "john",
              study() {
                  console.log(`${this.name} is studying.`);
              },
          }
        : {
              name: "susan",
              login() {
                  console.log(`${this.name} is logging in.`);
              },
          };
}

const person = randomPerson();
console.log(person);

function isStudent(person: Person): person is Student {
    // return "study" in person;
    return (person as Student).study !== undefined;
}

if (isStudent(person)) {
    person.study();
} else {
    person.login();
}

// Challenge - Discriminated Unions and exhaustive check using the never type

// A discriminated union in TypeScript is a type that can be one of several different types, each identified by a unique literal property (the discriminator), allowing for type-safe handling of each possible variant.

type IncrementAction = {
    type: "increment";
    amount: number;
    timestamp: number;
    user: string;
};

type DecrementAction = {
    type: "decrement";
    amount: number;
    timestamp: number;
    user: string;
};

type Action = IncrementAction | DecrementAction;

// Write a reducer function that takes the current state and an action, and returns the new state. The reducer function should use a switch statement or if-else chain on the type property of the action to handle each action type differently.

// In the default case of the switch statement or the final else clause, perform an exhaustive check by assigning the action to a variable of type never. If there are any action types that haven't been handled, TypeScript will give a compile error.

// Implement the logic for each action type in the reducer function. This typically involves returning a new state based on the current state and the properties of the action.

// Use the reducer function in your application to handle actions and update the state.

function reducer(state: number, action: Action) {
    switch (action.type) {
        case "increment":
            return state + action.amount;
        case "decrement":
            return state - action.amount;
        default:
            // exhaustive check using the never type
            const unexpectedAction: never = action;
            throw new Error(`Unexpected action: ${unexpectedAction}`);
    }
}

const initialState = 5;

const newState = reducer(initialState, {
    // type: "increment",
    type: "decrement",
    amount: 15,
    timestamp: 123,
    user: "john",
});

console.log(newState);

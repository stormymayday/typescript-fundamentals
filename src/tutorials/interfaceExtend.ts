interface Person {
    name: string;
    getDetails(): string;
}

interface DogOwner {
    dogName: string;
    getDogDetails(): string;
}

// Merge
interface Person {
    age: number;
}

// Extend
interface Employee extends Person {
    employeeId: number;
}

const person: Person = {
    name: "john",
    age: 30,
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    },
};

const employee: Employee = {
    name: "jane",
    age: 28,
    employeeId: 123,
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`;
    },
};

// console.log(employee.getDetails());

interface Manager extends Employee, DogOwner {
    managePeople(): void;
}

const manager: Manager = {
    name: "bob",
    employeeId: 321,
    age: 35,
    dogName: "rex",
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`;
    },
    getDogDetails() {
        return `Dog: ${this.dogName}`;
    },
    managePeople() {
        console.log(`Managing people`);
    },
};

console.log(manager.getDetails());
console.log(manager.getDogDetails());
manager.managePeople();

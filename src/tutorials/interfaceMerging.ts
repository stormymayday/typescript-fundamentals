interface Person {
    name: string;
    getDetails(): string;
}

interface Person {
    age: number;
}

const person: Person = {
    name: "john",
    age: 30,
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    },
};

console.log(person.getDetails());

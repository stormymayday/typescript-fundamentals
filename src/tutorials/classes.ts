class Book {
    private checkedOut: boolean = false;
    constructor(public readonly title: string, public author: string) {}

    get info() {
        return `${this.title} by ${this.author}`;
    }

    set checkOut(checkedOut: boolean) {
        this.checkedOut = checkedOut;
    }
}

const deepWork = new Book("Deep Work", "Cal Newport");
console.log(deepWork.info);
deepWork.checkOut = true;
console.log(deepWork);

// Implementing a Class Interface
interface IPerson {
    name: string;
    age: number;
    greet(): void;
}

class Person implements IPerson {
    constructor(public name: string, public age: number) {}
    greet(): void {
        console.log(`My name is ${this.name} and I am ${this.age} years old`);
    }
}

const hipster = new Person("shakeandbake", 100);
hipster.greet();

interface Book {
    readonly isbn: number;
    title: string;
    author: string;
    genre?: string;

    // Method Blueprints:
    printAuthor(): void;
    printTitle(message: string): string;
    // Method as a property:
    printSomething: (someValue: number) => number;
}

const deepWork: Book = {
    isbn: 123,
    title: "deep work",
    author: "cal newport",
    genre: "self-help",

    // Methods:
    printAuthor() {
        console.log(this.author);
    },
    printTitle(message: string) {
        return `${this.title} ${message}`;
    },
    // first option ('function' keyword):
    // printSomething: function (someValue: number) {
    //     return someValue;
    // },
    // second option (arrow function)
    // printSomething: (someValue: number) => {
    //     // Gotcha - 'this'
    //     // console.log(this);
    //     return someValue;
    // },
    // third option (method)
    printSomething(someValue: number) {
        return someValue;
    },
};

deepWork.printAuthor();
console.log(deepWork.printTitle("hello"));
console.log(deepWork.printSomething(123));

// deepWork.isbn = 'some value';

// ## Challenge

// - Start by defining an interface Computer using the interface keyword. This will serve as a blueprint for objects that will be of this type.

// - Inside the interface, define the properties that the object should have. In this case, we have id, brand, ram, and storage.

// - Use the readonly keyword before the id property to indicate that it cannot be changed once it's set.

// - Use the ? after the storage property to indicate that this property is optional and may not exist on all objects of this type.

// - Also inside the interface, define any methods that the object should have. In this case, we have upgradeRam, which is a function that takes a number and returns a number.
interface Computer {
    // Properties:
    readonly id: number;
    brand: string;
    ram: number;
    storage?: number;
    // Methods:
    upgradeRam(value: number): number;
}
// - Now that we have our interface, we can create an object that adheres to this interface. This object should have all the properties defined in the interface (except for optional ones, which are... optional), and the methods should be implemented.
const myComputer: Computer = {
    id: 1,
    brand: "apple",
    ram: 8,
    // storage: 256,
    upgradeRam(value) {
        this.ram = this.ram + value;
        return this.ram;
    },
};
// - Finally, we can use our object. We can call its upgradeRam method to increase its RAM.
console.log(myComputer.upgradeRam(8));

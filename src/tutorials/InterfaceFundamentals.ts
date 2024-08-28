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

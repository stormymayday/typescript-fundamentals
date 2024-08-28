interface Book {
    readonly isbn: number;
    title: string;
    author: string;
    genre?: string;

    // Methods:
    printAuthor(): void;
    printTitle(message: string): string;
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
    printTitle(message: string): string {
        return `${this.title} ${message}`;
    },
};

deepWork.printAuthor();
console.log(deepWork.printTitle("hello"));

// deepWork.isbn = 'some value';

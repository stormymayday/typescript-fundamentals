class Book {
    readonly title: string;
    author: string;
    // checkedOut: boolean = false;
    checkedOut = false;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }
}

const deepWork = new Book("Deep Work", "Cal Newport");
deepWork.checkedOut = true;
// deepWork.title = 'something else';
console.log(deepWork);

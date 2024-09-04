class Book {
    public readonly title: string;
    author: string;
    // checkedOut: boolean = false;
    private checkedOut = false;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }

    checkOut() {
        this.checkedOut = true;
    }
}

const deepWork = new Book("Deep Work", "Cal Newport");
// deepWork.checkedOut = true;
deepWork.checkOut();
// deepWork.title = 'something else';
console.log(deepWork);

class Book {
    private checkedOut: boolean = false;
    constructor(public readonly title: string, public author: string) {}
}

const deepWork = new Book("Deep Work", "Cal Newport");

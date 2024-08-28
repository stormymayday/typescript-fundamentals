// type Book = {
//     readonly isbn: number;
//     title: string;
//     author: string;
//     genre?: string;
// };

interface Book {
    readonly isbn: number;
    title: string;
    author: string;
    genre?: string;
}

const deepWork: Book = {
    isbn: 123,
    title: "deep work",
    author: "cal newport",
    genre: "self-help",
    // price: 20
};

// deepWork.isbn = 'some value';

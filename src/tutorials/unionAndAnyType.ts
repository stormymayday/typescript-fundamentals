let tax: number | string = 10;
tax = 100;
tax = "$10";

// Literal Value Type
let requestStatus: "pending" | "success" | "error" = "pending";
requestStatus = "success";
requestStatus = "error";
// requestStatus = "random";

// Type 'any' (default JavaScript behavior)
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

// Practical Application of Type Annotation
const books = ["1984", "Brave New World", "Fahrenheit 451"];

let foundBook: string | undefined;

for (let book of books) {
    if (book == "1984") {
        foundBook = book;
        foundBook = foundBook.toUpperCase();
        break;
    }
}

console.log(foundBook?.length);

// Challenge

// Create a variable orderStatus of type 'processing' | 'shipped' | 'delivered' and assign it the value 'processing'. Then, try to assign it the values 'shipped' and 'delivered'.
let orderStatus: "processing" | "shipped" | "delivered";
orderStatus = "processing";
orderStatus = "shipped";
orderStatus = "delivered";

// Create a variable discount of type number | string and assign it the value 20. Then, try to assign it the value '20%'.
let discount: number | string;
discount = 20;
discount = "20%";

// Array of numbers:
let prices: number[] = [100, 75, 42, 34];

prices.push(20);
// prices.push('hello');

let array: (string | boolean)[] = ["apple", true];

// Create an array temperatures of type number[] and assign it some values. Then, try to add a string value to it.
let temperatures: number[] = [1, 2, 3];
// temperatures.push('hello');

// Create an array colors of type string[] and assign it some values. Then, try to add a boolean value to it.
let colors: string[] = ["red", "green", "blue"];
// colors.unshift(false);

//Create an array mixedArray of type (number | string)[] and assign it some values. Then, try to add a boolean value to it.
let mixedArray: (number | string)[] = [1, "hello"];
// mixedArray.push(true);

// Objects
let car: { brand: string; year: number } = { brand: "toyota", year: 2020 };

// Arrays and Objects
let book = { title: "book", cost: 20 };
let pen = { title: "pen", cost: 10 };
let notebook = { title: "notebook" };

let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];
// items[0].title = "hello";

// Create an object bike of type { brand: string, year: number } and assign it some values. Then, try to assign a string to the year property.
let bike: { brand: string; year: number } = { brand: "bmw", year: 1980 };
// bike.year = '2000';

// Create an object laptop of type { brand: string, year: number } and try to assign an object with missing year property to it.
let laptop: { brand: string; year: number } = { brand: "apple", year: 2020 };
// let laptop2: { brand: string; year: number } = { brand: "hp" };

// Create an array products of type { title: string, price?: number }[] and assign it some values. Then, try to add an object with a price property of type string to it.
let product1 = { title: "shirt", price: 20 };
let product2 = { title: "pants" };
let products: { title: string; price?: number }[] = [product1, product2];
// products.push({title: 'shoes', price: "expensive"});

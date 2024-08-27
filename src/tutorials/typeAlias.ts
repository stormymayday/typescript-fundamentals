// Type Alias
type User = { id: number; name: string; isActive: boolean };

const john: User = {
    id: 1,
    name: "john",
    isActive: true,
};

const susan: User = {
    id: 2,
    name: "susan",
    isActive: false,
};

function helloUser(user: User): void {
    console.log(`Hello ${user.name}`);
}

helloUser(john);
helloUser(susan);

// Type alias for string | number
type StringOrNumber = string | number;
let value: StringOrNumber;
value = "hello";
value = 123;

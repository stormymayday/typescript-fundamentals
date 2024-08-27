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

// Type alias for theme
type Theme = "light" | "dark";
let theme: Theme;
theme = "dark";
theme = "light";
function setTheme(t: Theme) {
    theme = t;
}
setTheme("dark");

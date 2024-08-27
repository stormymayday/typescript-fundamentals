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

// ## Challenge

// - Define the Employee type: Create a type Employee with properties id (number), name (string), and department (string).
type Employee = { id: number; name: string; department: string };

// - Define the Manager type: Create a type Manager with properties id (number), name (string), and employees (an array of Employee).
type Manager = { id: number; name: string; employees: Employee[] };

// - Create a Union Type: Define a type Staff that is a union of Employee and Manager.
type Staff = Employee | Manager;

// - Create the printStaffDetails function: This function should accept a parameter of type Staff. Inside the function, use a type guard to check if the 'employees' property exists in the passed object. If it does, print a message indicating that the person is a manager and the number of employees they manage. If it doesn't, print a message indicating that the person is an employee and the department they belong to.
function printStaffDetails(staff: Staff): void {
    if ("employees" in staff) {
        // console.log(`Manager`);
        console.log(
            `${staff.name} is a manager and manages ${staff.employees.length} employees.`
        );
    } else {
        console.log(
            `${staff.name} is an employee and works in ${staff.department} department.`
        );
    }
}

// - Create Employee and Manager objects: Create two Employee objects. One named alice and second named steve. Also create a Manager object named bob who manages alice and steve.
const alice: Employee = {
    id: 1,
    name: "alice",
    department: "sales",
};
const steve: Employee = {
    id: 2,
    name: "steve",
    department: "hr",
};
const bob: Manager = {
    id: 3,
    name: "bobo",
    employees: [alice, steve],
};

// - Test the function: Call the printStaffDetails function with alice and bob as arguments and verify the output.
printStaffDetails(alice);
printStaffDetails(steve);
printStaffDetails(bob);

// Computed Properties
const propName = "age";
type Animal = {
    [propName]: number;
};
let tiger: Animal = {
    [propName]: 5,
};

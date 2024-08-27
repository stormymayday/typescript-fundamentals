// Using 'destructuring'
// function createEmployee({ id }: { id: number }): {
//     id: number;
//     isActive: boolean;
// } {
//     return { id, isActive: id % 2 === 0 };
// }

// const first = createEmployee({ id: 1 });
// const second = createEmployee({ id: 2 });

// console.log(first, second);

// Naming an object
function createEmployee(employee: { id: number }): {
    id: number;
    isActive: boolean;
} {
    return { id: employee.id, isActive: employee.id % 2 === 0 };
}

const first = createEmployee({ id: 1 });
const second = createEmployee({ id: 2 });

console.log(first, second);

// Alternative
function createStudent(student: { id: number; name: string }): void {
    console.log(`Welcome ${student.name.toUpperCase()}`);
}

const newStudent = {
    id: 5,
    name: "anna",
};

createStudent(newStudent);

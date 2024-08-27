// Using 'destructuring'
function createEmployee({ id }: { id: number }): {
    id: number;
    isActive: boolean;
} {
    return { id, isActive: id % 2 === 0 };
}

const first = createEmployee({ id: 1 });
const second = createEmployee({ id: 2 });

console.log(first, second);

let unkownValue: unknown;

unkownValue = "hello world";
unkownValue = [1, 2, 3];
unkownValue = 42.3;

// unkownValue.toFixed(2); // Error: Object is of type 'unknown'

if (typeof unkownValue === "number") {
    unkownValue.toFixed(2);
}

function runSomeCode() {
    const random = Math.random();
    if (random < 0.5) {
        throw new Error("there was an error...");
    } else {
        throw "some error";
    }
}

try {
    runSomeCode();
} catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    } else {
        console.log(error);
    }
}

// Challenge - Type Predicate
// A type predicate is a function whose return type is a special kind of type that can be used to narrow down types within conditional blocks.
type User = {
    name: string;
    login(): void;
};

type Student = {
    name: string;
    study(): void;
};

type Person = User | Student;

function randomPerson(): Person {
    return Math.random() < 0.5
        ? {
              name: "john",
              study() {
                  console.log(`${this.name} is studying.`);
              },
          }
        : {
              name: "susan",
              login() {
                  console.log(`${this.name} is logging in.`);
              },
          };
}

const person = randomPerson();
console.log(person);

function isStudent(person: Person): person is Student {
    // return "study" in person;
    return (person as Student).study !== undefined;
}

if (isStudent(person)) {
    person.study();
} else {
    person.login();
}

// Primitives: number, string, boolean
// More complex types: arrays, objects
// function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string;
userName = 'Max';

let isInstructor: boolean;
isInstructor = true;

// more complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

// object type
let person: {
  name: string;
  age: number
};

person = {
  name: 'Max',
  age: 32
};

// type alias
type Person = {
  name: 'Max',
  age: 32
};

let people: Person[];

// type inference

let course = 'React - The Complete Guide';

// course = 12341; // by default it tries to infer type as much as possible

// union types

let courseUnion: string | number = 'React - The Complete Guide';

courseUnion = 12341; // this works now without error

// Functions & types

function add(a: number, b: number): number {
  return a +b;
}

// void function
function printOutput(s: any) {
  console.log(s);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(['a', 'b'], 'c');

// updatedArray[0].split(''); // this won't work because type inference
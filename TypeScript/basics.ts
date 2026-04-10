function greet(name: string): string {
  return `Hello ${name}`;
}

console.log(greet("Areeba"));

// console.log(greet(23));
// This will give error since the type is not string but a number

function greetHello(person: string): string {
  return `Hello ${person}, Welcome to learning TypeScript`;
}

const username: string = "Areeba Moosa";

console.log(greetHello(username));

// 1. Traditional Function
function traditionalSayHello(name) {
  return "Hello " + name;
}

// 2. Arrow Function (Standard)
const arrowSayHello = (name) => {
  return `Hello ${name}`; 
};

// 3. Arrow Function (Implicit Return)
// If it's a single line, you can omit the curly braces and 'return' keyword.
const implicitSayHello = name => `Hello ${name}`;

console.log(traditionalSayHello("Alice"));
console.log(arrowSayHello("Bob"));
console.log(implicitSayHello("Charlie"));

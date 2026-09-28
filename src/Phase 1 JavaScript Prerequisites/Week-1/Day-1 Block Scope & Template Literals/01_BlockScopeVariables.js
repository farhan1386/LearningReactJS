// var keyword

var number = 10;
console.log(number);

var number = 20; // Re-declaration (and reassignment) is allowed with var
console.log(number);


// let keyword

let name = "Farhan";
name = "Farhan Ahmed"; // Value can be updated (reassigned)

// let name = "Irfan Ahmed"; //  Cannot re-declare in the same scope (Missing '=' fixed)

console.log(name);


// const keyword

const value = 100;
// value = 200; // This will throw TypeError: Assignment to constant variable.

console.log(value);

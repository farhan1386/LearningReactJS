//  Spread Operator


const fruits = ["Apple", "Banana"];
const veggies = ["Carrot", "Potato"];

// Combine arrays
const food = [...fruits, ...veggies]; 
console.log(food); // ["Apple", "Banana", "Carrot", "Potato"]

// Copy an array (creates a new reference)
const cloneFruits = [...fruits];


// With Objects

const user = { name: "Alex", age: 25 };

// Copy and add/update a property
const updatedUser = { ...user, country: "India", age: 26 };
console.log(updatedUser); // { name: "Alex", age: 26, country: "India" }



// Rest Operator

function sum(...numbers) {
  // 'numbers' is an array: [1, 2, 3, 4]
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10


// In Destructuring (Arrays & Objects)

// Array Rest
const [first, second, ...theRestOfDays] = ["Mon", "Tue", "Wed", "Thu", "Fri"];
console.log(theRestOfDays); // ["Wed", "Thu", "Fri"]

// Object Rest
const settings = { theme: "dark", volume: 80, notifications: true };
const { theme, ...otherSettings } = settings;
console.log(otherSettings); // { volume: 80, notifications: true }

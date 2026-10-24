//  Spread Operator

const fruits = ["Apple", "Banana"];
const veggies = ["Carrot", "Potato"];

// Combine arrays
const food = [...fruits, ...veggies]; 
console.log(food);

// Copy an array (creates a new reference)
const cloneFruits = [...fruits];


// With Objects

const user = { name: "Alex", age: 25 };

const updatedUser = { ...user, country: "India", age: 26 };
console.log(updatedUser);

// Rest Operator

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); 

// In Destructuring (Arrays & Objects)

// Array Rest
const [first, second, ...theRestOfDays] = ["Mon", "Tue", "Wed", "Thu", "Fri"];
console.log(theRestOfDays); 

// Object Rest
const settings = { theme: "dark", volume: 80, notifications: true };
const { theme, ...otherSettings } = settings;
console.log(otherSettings); 
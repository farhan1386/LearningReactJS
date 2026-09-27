 // Object Destructuring

const user = {
  name: "Alex",
  age: 25,
  country: "India"
};

// Destructuring values into variables matching the keys
const { name, age, country } = user;

console.log(name);    // Alex
console.log(age);     // 25
console.log(country); // India


  // Array Destructuring

  const dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday"];

// Destructuring based on position
const [firstDay, secondDay, thirdDay] = dayOfWeek;

console.log(firstDay);  // Monday
console.log(secondDay); // Tuesday
console.log(thirdDay);  // Wednesday

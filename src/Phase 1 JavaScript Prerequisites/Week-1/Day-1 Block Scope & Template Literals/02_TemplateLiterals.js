// 1. String Interpolation 

const name = "Farhan";
// Old way: "Hello " + name + "!"
const greeting = `Hello ${name}!`; 

console.log(greeting); 


// 2. Multi-line Strings

// Old way required adding "\n" at the end of every line
const listSnippet = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

console.log(listSnippet);


// 3. Expression Evaluation

const price = 500;
const discount = 50;

const totalMessage = `Your total is: $${price - discount}`;

console.log(totalMessage); 

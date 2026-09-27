// 1. String Interpolation (Injecting variables)

const name = "Farhan";
// Old way: "Hello " + name + "!"
const greeting = `Hello ${name}!`; 

console.log(greeting); // Outputs: Hello Farhan!


// 2. Multi-line Strings (Preserves formatting without \n)

// Old way required adding "\n" at the end of every line
const listSnippet = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

console.log(listSnippet);


// 3. Expression Evaluation (Math & Logic inside \${})

const price = 500;
const discount = 50;

// You can calculate directly inside the placeholder
const totalMessage = `Your total is: $${price - discount}`;

console.log(totalMessage); // Outputs: Your total is: \$450

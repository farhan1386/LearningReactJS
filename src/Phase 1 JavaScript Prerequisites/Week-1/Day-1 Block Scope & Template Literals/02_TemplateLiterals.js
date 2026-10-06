// 1. String Interpolation 

const runnerName = "Farhan";
const distanceKM = 5;
const caloriesBurnedPerKM = 65;

// Template Literal combining Interpolation, Multi-line, and Math Expression
const workoutSummary = `
--- Morning Workout ---
Great job, ${runnerName}!
You ran ${distanceKM} kilometers today.
Total calories burned: ${distanceKM * caloriesBurnedPerKM} kcal.
`;

console.log(workoutSummary);



// 2. Multi-line Strings

// Old way required adding "\n" at the end of every line

const orderId = "ORD-9921";
const itemName = "Wireless Mouse";
const itemPrice = 1200;
const quantity = 2;

// 🚀 Template Literal generating an HTML template on the fly
const invoiceHTML = `
<div class="invoice">
  <h3>Receipt for Order: #${orderId}</h3>
  <p>Item: ${itemName} (x${quantity})</p>
  <strong>Total Charged: ₹${itemPrice * quantity}</strong>
</div>
`;

console.log(invoiceHTML);



// 3. Expression Evaluation

const username = "ProGamer99";
const finalScore = 8400;
const currentHighScore = 10000;

// Template Literal injecting values and doing quick subtraction math
const gameOverMessage = `
GAME OVER
Player: ${username}
Final Score: ${finalScore} points.
You were only ${currentHighScore - finalScore} points away from the High Score!
`;

console.log(gameOverMessage);


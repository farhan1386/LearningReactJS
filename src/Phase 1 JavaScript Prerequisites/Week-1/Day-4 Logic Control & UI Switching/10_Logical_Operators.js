// Logical AND(&&)
console.log("......................LOGICAL AND(&&)......................")
const indianCitizen = true; 
const age = 18;

if (indianCitizen === true && age >= 18) {
    console.log("You are eligible for voting");
}


//  Logical AND use in function

function checkVotingEligibility(isCitizen, userAge) {
    if (isCitizen === true && userAge >= 18) {
        console.log(`Eligible: You are ${userAge} and an Indian citizen.`);
    } else {
        console.log(`Not Eligible: You must be an Indian citizen and at least 18 years old.`);
    }
}

checkVotingEligibility(true, 18);


// Logical OR (||)
console.log("......................LOGICAL OR (||)......................")

const hasVoterId = true;
const hasAadhaarCard = false;

if (hasVoterId === true || hasAadhaarCard === true) {
    console.log("Identity verified. You are allowed to enter the polling booth.");
}


function greetUser(username) { 
    const finalName = username || "Guest";
    console.log(`Welcome back, ${finalName}!`);
}

greetUser("Rahul"); 
greetUser("");      


// Logical NOT (!)
console.log("......................LOGICAL NOT (!)......................")

const isLoggedOut = false;

if (!isLoggedOut) {
    console.log("User is active. Showing dashboard...");
}

function processPayment(paymentAmount) {
    if (!paymentAmount) {
        console.log("Error: Invalid or empty payment amount.");
    } else {
        console.log(`Processing payment of ₹${paymentAmount}...`);
    }
}

processPayment(500); 
processPayment(0); 

// Ternary Operator
let passsingMarks = 50;

const result = passsingMarks > 40? "Pass":"Fail";
console.log(result);


// Nested Ternary Operators

let day = 3;

let greeting = (day === 1) ? 'Start of the week' :
               (day === 2) ? 'Second day' :
               (day === 3) ? 'Midweek' :
               (day === 4) ? 'Almost weekend' :
               'Weekend';

console.log(greeting);

// Ternary Operator in Functions

function getFee(isPrimeMember){
    return isPrimeMember === true? "20% off": "5% off";
}

const checkEligibility = getFee(true);
console.log(checkEligibility);


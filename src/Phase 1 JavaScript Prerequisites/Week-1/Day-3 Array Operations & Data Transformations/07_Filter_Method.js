const numbers =[1,2,3,7,7,8,4,5,9,3];

// The function checks each item (num) and keeps it if it equals 7
const result = numbers.filter(num => num === 7);

console.log(result); 

const result2 = numbers.filter(num => num > 3);
console.log(result2);
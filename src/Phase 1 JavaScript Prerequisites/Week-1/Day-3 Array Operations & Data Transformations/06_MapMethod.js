// map() 

const monthsOfYear = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

const modernMonths = monthsOfYear.map(month => month);

console.log(modernMonths);

const UpperCase = modernMonths.map(month => month.toUpperCase());
console.log(UpperCase);

const monthsObject = modernMonths.map((month, index) => ({ id: index + 1, name: month }));

console.log(monthsObject);
// map() 

const monthsOfYear = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

const modernMonths = monthsOfYear.map(month => month);

console.log(modernMonths);

const UpperCase = modernMonths.map(month => month.toUpperCase());
console.log(UpperCase);

const monthsObject = modernMonths.map((month, index) => ({ id: index + 1, name: month }));

console.log(monthsObject);

const apiResponse = [
  { shortName: "Jan", days: 31, weather: "Cold" },
  { shortName: "Jun", days: 30, weather: "Hot" },
  { shortName: "Dec", days: 31, weather: "Snowy" }
];

// Instantly destructure 'shortName' and 'days' straight out of the parameter
const simpleSummary = apiResponse.map(({ shortName, days }) => `${shortName} has ${days} days.`);

console.log(simpleSummary);
// Output: ["Jan has 31 days.", "Jun has 30 days.", "Dec has 31 days."]

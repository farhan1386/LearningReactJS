// Arrow Function

const dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const modernDays = dayOfWeek.map(day => day);
console.log(modernDays);


const dayTypes = dayOfWeek.map(day => {
  if (day === "Saturday" || day === "Sunday") {
    return `${day} (Weekend)`;
  }
  return `${day} (Weekday)`;
});

console.log(dayTypes);
// Output: ["Monday (Weekday)", "Tuesday (Weekday)", ..., "Saturday (Weekend)", "Sunday (Weekend)"]

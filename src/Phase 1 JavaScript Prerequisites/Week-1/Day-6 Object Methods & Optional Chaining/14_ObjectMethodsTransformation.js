// Object Methods Transformation
const serverStatus = { 
  node: "AP-SOUTH", 
  uptime: "99.8%", 
  loads: 42 
};

const propertyKeys = Object.keys(serverStatus);
const propertyValues = Object.values(serverStatus);
const nestedMatrix = Object.entries(serverStatus);

console.log(propertyKeys);
console.log(propertyValues);
console.log(nestedMatrix);

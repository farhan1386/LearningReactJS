// Constant: The user's unique ID never changes
const userId = "user_98765";

// Variable: Followers and online status change constantly
let followerCount = 1200;
let isOnline = true;

// Updating the variables as activity happens
followerCount = 1201; 
isOnline = false;     

// userId = "user_00000"; // Error! You cannot change a user's unique ID.

console.log(`User ID: ${userId}`);
console.log(`Follower Count: ${followerCount}`);
console.log(`Is Online: ${isOnline}`);  
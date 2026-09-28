// Nullish Coalescing (??)

// Example 1: Differentiating between Nullish and Falsy values
const userScore = 0; // 0 is a valid score, but it is falsy in JavaScript

// Using Logical OR (||) overwrites valid 0 data
const scoreWithOR = userScore || 10; 
console.log(`Using OR (||): ${scoreWithOR}`); // Output: 10 (incorrectly overwrites 0)

// Using Nullish Coalescing (??) preserves valid 0 data
const scoreWithNullish = userScore ?? 10;
console.log(`Using Nullish (??): ${scoreWithNullish}`); // Output: 0 (correctly preserves 0)

// Example 2: Setting Safe Fallbacks for Missing Properties
function displayUserProfile(settings) {
    // Only falls back if profilePic or theme is null or undefined
    const displayImage = settings.profilePic ?? "default-avatar.png";
    const displayTheme = settings.theme ?? "light-mode";

    console.log(`Image: ${displayImage}, Theme: ${displayTheme}`);
}

displayUserProfile({ theme: "dark-mode", profilePic: null }); 
// Output: Image: default-avatar.png, Theme: dark-mode

displayUserProfile({ theme: "", profilePic: "user-photo.jpg" }); 
// Output: Image: user-photo.jpg, Theme:  (empty string is preserved!)

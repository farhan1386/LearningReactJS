
function fetchUserProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "Farhan Ahmed", age: 32 };
            resolve(data);
        }, 2000);
    });
}

async function displayDashboard() {
    try {
        const user = await fetchUserProfile(); 
        console.log("User Profile Loaded:", user);
    } catch (error) {
        console.error("Failed to load user profile:", error);
    }
}

displayDashboard();

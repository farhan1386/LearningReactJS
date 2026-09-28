async function fetchAllUsers() {
    const url = "https://jsonplaceholder.typicode.com/users";
    
    try {
        console.log("Fetching user directory...");
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Failed to fetch users. Status: ${response.status}`);
        }
        
        const usersList = await response.json();
        
        console.log(`Successfully retrieved ${usersList.length} users:`);
        
        usersList.forEach(user => {
            console.log(`- [ID: ${user.id}] ${user.name} works at "${user.company.name}"`);
        });

    } catch (error) {
        console.error("User Directory Fetch Failed:", error.message);
    }
}

fetchAllUsers();

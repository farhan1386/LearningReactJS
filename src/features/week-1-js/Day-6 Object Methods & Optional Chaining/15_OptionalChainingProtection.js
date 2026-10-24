const userResponse = {
  id: "usr_99X",
  preferences: {
    theme: "dark"
  }
};

const userTheme = userResponse.preferences?.theme;
const emailAlerts = userResponse.settings?.notifications?.email;

console.log(userTheme);
console.log(emailAlerts);

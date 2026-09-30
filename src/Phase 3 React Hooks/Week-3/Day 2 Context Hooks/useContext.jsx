import { createContext, useContext } from 'react';

const UserContext = createContext(null);

const ProfileCard = () => {
  const user = useContext(UserContext);
  return <h1>Welcome back, {user}!</h1>;
};

const App = () => {
  return (
    <UserContext.Provider value="Rahul">
      <ProfileCard />
    </UserContext.Provider>
  );
};

export default App;

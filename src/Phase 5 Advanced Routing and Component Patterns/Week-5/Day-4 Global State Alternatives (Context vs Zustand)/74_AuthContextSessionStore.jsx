import React, { createContext, useContext, useState } from 'react';

const SessionContext = createContext(null);

export const SessionProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);

  const authenticateSession = () => setUserToken('JWT-SESSION-KEY');
  const terminateSession = () => setUserToken(null);

  return (
    <SessionContext.Provider value={{ userToken, authenticateSession, terminateSession }}>
      {children}
    </SessionContext.Provider>
  );
};

const DashboardView = () => {
  const { userToken, authenticateSession, terminateSession } = useContext(SessionContext);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <p>Session Identity: <strong>{userToken || 'Anonymous'}</strong></p>
      {userToken ? (
        <button onClick={terminateSession}>Clear Session</button>
      ) : (
        <button onClick={authenticateSession}>Generate Session</button>
      )}
    </div>
  );
};

const AuthContextSessionStore = () => (
  <SessionProvider>
    <DashboardView />
  </SessionProvider>
);

export default AuthContextSessionStore;
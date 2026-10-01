import React, { createContext, useContext } from 'react';

const CompoundContext = createContext(null);

const CompoundCard = ({ children }) => {
  const headerTheme = { accentColor: '#2980b9' };
  return (
    <CompoundContext.Provider value={headerTheme}>
      <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '6px', maxWidth: '260px' }}>
        {children}
      </div>
    </CompoundContext.Provider>
  );
};

const Heading = ({ text }) => {
  const { accentColor } = useContext(CompoundContext);
  return <h3 style={{ color: accentColor, margin: '0 0 10px 0' }}>{text}</h3>;
};

const Content = ({ label }) => <p style={{ margin: 0, fontSize: '14px' }}>{label}</p>;

CompoundCard.Heading = Heading;
CompoundCard.Content = Content;

const CompoundCardPattern = () => {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <CompoundCard>
        <CompoundCard.Heading text="System Node Architecture" />
        <CompoundCard.Content label="Isolated payload structures verified." />
      </CompoundCard>
    </div>
  );
};

export default CompoundCardPattern;
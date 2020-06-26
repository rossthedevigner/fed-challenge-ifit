import React, { useState, useContext, createContext } from 'react';

const AppContext = createContext();

const defaultLanguage = 'English';

function AppProvider(props) {
  const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  function handleSetCurrentLanguage(lang) {
    return setCurrentLanguage(lang);
  }

  function handleSetIsMobileNavOpen() {
    return setIsMobileNavOpen(!isMobileNavOpen);
  }

  return (
    <AppContext.Provider
      value={{
        currentLanguage,
        handleSetCurrentLanguage,
        isMobileNavOpen,
        handleSetIsMobileNavOpen
      }}>
      {props.children}
    </AppContext.Provider>
  );
}

function useAppContext() {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error(`useAppContext must be used with an AppProvider`);
  }
  return context;
}

export { AppProvider, useAppContext };

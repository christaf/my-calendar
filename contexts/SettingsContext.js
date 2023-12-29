import React, { createContext, useContext, useState } from 'react';

const SettingsContext = createContext({
    darkMode: true,
    toggleDarkMode: () => {},
});

export const useSettings = () => {
    return useContext(SettingsContext);
};

export const SettingsProvider = ({ children }) => {

    //TODO store somewhere darkMode
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <SettingsContext.Provider value={{ darkMode: darkMode, toggleDarkMode: toggleDarkMode}}>
            {children}
        </SettingsContext.Provider>
    );
};

import React, { createContext, useContext, useState } from 'react';

const SettingsContext = createContext(null);

export const useSettings = () => {
    return useContext(SettingsContext);
};

export const SettingsProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <SettingsContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </SettingsContext.Provider>
    );
};

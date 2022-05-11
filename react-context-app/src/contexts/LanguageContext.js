import React, { useState } from 'react';

const Context = React.createContext('english');

export const LanguageStore = (props) => {
    let [language, setLanguage] = useState('english');

    const onLanguageChange = (newLanguage) => {
        setLanguage(newLanguage);
    };

    return (
        <Context.Provider value={{ language: language, onLanguageChange: onLanguageChange }}>
            {props.children}
        </Context.Provider>
    );
};

export default Context;

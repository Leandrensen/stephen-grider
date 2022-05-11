import React from 'react';
import { Box } from '@material-ui/core';
import { LanguageStore } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';
import UserCreate from './UserCreate';

const App = () => {
    return (
        <Box>
            <LanguageStore>
                <LanguageSelector />
                <ColorContext.Provider value='secondary'>
                    <UserCreate />
                </ColorContext.Provider>
            </LanguageStore>
        </Box>
    );
};

export default App;

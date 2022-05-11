import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import { Box } from '@material-ui/core';

const Field = () => {
    const { language } = useContext(LanguageContext);

    const text = language === 'english' ? 'Name' : 'Naam';

    return (
        <Box>
            <label>{`${text}: `}</label>
            <input />
        </Box>
    );
};

export default Field;

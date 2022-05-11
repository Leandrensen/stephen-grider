import React, { useContext } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { Box } from '@material-ui/core';
import LanguageContext from '../contexts/LanguageContext';

const LanguageSelector = (props) => {
    const languageContext = useContext(LanguageContext);
    const { onLanguageChange } = languageContext;

    return (
        <Box>
            <span
                style={{
                    paddingRight: '2px',
                }}>
                Select a language:
            </span>
            <ReactCountryFlag
                countryCode='US'
                svg
                style={{
                    width: '1.2em',
                    height: '1.2em',
                    paddingRight: '2px',
                }}
                title='US'
                onClick={() => onLanguageChange('english')}
            />
            <ReactCountryFlag
                countryCode='NL'
                svg
                style={{
                    width: '1.2em',
                    height: '1.2em',
                    paddingRight: '2px',
                }}
                title='NL'
                onClick={() => onLanguageChange('dutch')}
            />
        </Box>
    );
};

export default LanguageSelector;

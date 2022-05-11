import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import { Button as MaterialButton } from '@material-ui/core';

const Button = () => {
    const { language } = useContext(LanguageContext);
    const color = useContext(ColorContext);

    const text = language === 'english' ? 'Submit' : 'Voorleggen';

    return (
        <MaterialButton variant='contained' color={color}>
            {text}
        </MaterialButton>
    );
};

export default Button;

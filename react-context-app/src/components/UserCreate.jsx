import React from 'react';
import Field from './Field';
import Button from './Button';
import { Box } from '@material-ui/core';

const UserCreate = () => {
    return (
        <Box style={{ paddingTop: '5px' }}>
            <Box>
                <Field />
            </Box>
            <Box style={{ paddingTop: '5px' }}>
                <Button />
            </Box>
        </Box>
    );
};

export default UserCreate;

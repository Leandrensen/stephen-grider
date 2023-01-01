import React from 'react';
import { Button } from '@material-ui/core';

const Logout = (props) => {
    const { signOut } = props;

    return (
        <Button color='inherit' onClick={signOut}>
            Logout
        </Button>
    );
};

export default Logout;

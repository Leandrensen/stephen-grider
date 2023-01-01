import React from 'react';
import { Link } from 'react-router-dom';
import { Box, AppBar, Toolbar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Logout from '../containers/Logout';

const Header = (props) => {
    // CSS ///////////////////////////
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        toolbar: {
            justifyContent: 'space-between',
        },
    }));

    const classes = useStyles();
    ///////////////////////////////////

    const { isSignedIn } = props;

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar variant='dense' className={classes.toolbar}>
                    <Button component={Link} to={'/login'} className={classes.streamer} color='inherit'>
                        Streamer
                    </Button>
                    <Box>
                        <Button component={Link} to={'/'} className={classes.streams} color='inherit'>
                            Streams
                        </Button>
                        {!isSignedIn && (
                            <Button component={Link} to={'/login'} color='inherit'>
                                Login
                            </Button>
                        )}
                        {isSignedIn && <Logout />}
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;

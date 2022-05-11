import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StreamForm from './StreamForm';

const StreamCreate = (props) => {
    // CSS ///////////////////////////
    const useStyles = makeStyles((theme) => ({
        root: {
            margin: theme.spacing(3),
        },
        title: {
            paddingBottom: '10px',
        },
    }));

    const classes = useStyles();
    /////////////////////////////////

    const { createStream } = props;

    const onSubmit = (formValues) => {
        createStream(formValues);
    };

    return (
        <Box className={classes.root}>
            <Box className={classes.title}>
                <Typography variant={'h3'}>
                    Create a Stream
                </Typography>
            </Box>
            <StreamForm onSubmit={onSubmit} />
        </Box>
    );
};

export default StreamCreate;

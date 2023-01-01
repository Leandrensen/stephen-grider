import React, { useEffect } from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StreamForm from './StreamForm';

const StreamEdit = (props) => {
    // CSS ////////////////////////////
    const useStyles = makeStyles((theme) => ({
        root: {
            margin: theme.spacing(2),
        },
        title: {
            paddingBottom: '10px',
        },
    }));

    const classes = useStyles();
    /////////////////////////////////

    const { stream, fetchStream, editStream } = props;

    useEffect(() => {
        fetchStream(props.match.params.id);
    }, []);

    const onSubmit = (formValues) => {
        editStream(props.match.params.id, formValues);
    };

    return (
        <Box className={classes.root}>
            {stream && (
                <Box className={classes.root}>
                    <Box className={classes.title}>
                        <Typography variant={'h3'}>
                            Edit a Stream
                        </Typography>
                    </Box>
                    <StreamForm onSubmit={onSubmit} streamId={stream.id} title={stream.title} description={stream.description} />
                </Box>
            )}
            {!stream && (<Box>Loading...</Box>)}
        </Box>
    );
};

export default StreamEdit;

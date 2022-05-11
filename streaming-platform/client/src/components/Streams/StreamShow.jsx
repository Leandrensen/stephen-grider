import React, { useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";
import flv from 'flv.js'
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const StreamShow = (props) => {
    // CSS ///////////////////////////
    const useStyles = makeStyles((theme) => ({
        root: {
            padding: '10px',
        },
    }));

    const classes = useStyles();
    /////////////////////////////////

    const { stream, fetchStream } = props;

    const params = useParams();

    useEffect(() => {
        fetchStream(params.id);
    }, []);

    let flvPlayer;

    useEffect(() => {
        if(flvPlayer || !stream) {
            return;
        }

        flvPlayer = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${stream.id}.flv`,
        })

        flvPlayer.attachMediaElement(videoRef.current);
        flvPlayer.load();

        // Specify how to clean up after this effect
        // When you return a function inside an useEffect it runs when component unmounts
        return function cleanup() {
            flvPlayer.destroy();
            console.log('componentWillUnmount cleanup');
        };

    }, [stream]);

    const videoRef = useRef();

    return (
        <Box className={classes.root}>
            {!stream && (<Box>Loading...</Box>)}
            {stream && (
                <>
                    <video ref={videoRef} style={{ width: '100%', marginBottom: '10px' }} controls/>
                    <h1>{stream.title}</h1>
                    <h5>{stream.description}</h5>
                </>
            )}
        </Box>
    );
};

export default StreamShow;

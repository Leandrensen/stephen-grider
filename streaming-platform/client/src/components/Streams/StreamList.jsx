import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
    Divider,
    Typography,
    Button,
    Tooltip,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const StreamList = (props) => {
    // CSS ///////////////////////////
    const useStyles = makeStyles((theme) => ({
        streams: {
            width: '95%',
            margin: theme.spacing(2),
        },
        streamsList: {
          padding: '10px 0',
        },
        listItem: {
            padding: '5px',
        },
        icon: {
          color: 'black',
          minWidth: '35px',
        },
        buttonContainer: {
            display: 'flex',
            justifyContent: 'flex-end',
        },
    }));

    const classes = useStyles();
    /////////////////////////////////

    const { streams, currentUserId, isSignedIn, fetchStreams } = props;

    useEffect(() => {
        fetchStreams();
    }, []);

    const renderAdmin = (stream) => {
        if(stream.userId === currentUserId) {
            return (
                <ListItemSecondaryAction>
                    <Tooltip arrow title='Edit'>
                        <IconButton component={Link} to={`/streams/edit/${stream.id}`} edge="end" aria-label="edit">
                            <EditIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip arrow title='Delete'>
                        <IconButton component={Link} to={`/streams/delete/${stream.id}`} edge="end" aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                </ListItemSecondaryAction>
            );
        }
    }

    const renderList = () => {
        return streams.map((stream) => {
            return (
                <div className={classes.stream} key={stream.id}>
                    <List dense component="nav" aria-label="main streams">
                        <ListItem button className={classes.listItem} component={Link} to={`/streams/show/${stream.id}`}>
                            <ListItemIcon className={classes.icon} >
                                <PhotoCameraIcon />
                            </ListItemIcon>
                            <ListItemText primary={stream.title} secondary={stream.description} />
                        </ListItem>
                        {renderAdmin(stream)}
                    </List>
                    <Divider />
                </div>
            );
        });
    };

    const renderCreateStream = () => {
        if(isSignedIn) {
            return (
                <Box className={classes.buttonContainer}>
                    <Button component={Link} to={'/streams/new'} variant='contained' color='primary'>
                        Create Stream
                    </Button>
                </Box>
            );
        }
    };

    return (
        <Box className={classes.streams}>
            <Typography variant={'h3'}>
                Streams
            </Typography>
            <Box className={classes.streamsList}>
                {streams && renderList()}
            </Box>
            {renderCreateStream()}
        </Box>
    );
};

export default StreamList;

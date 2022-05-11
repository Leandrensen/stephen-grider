import React, {useEffect} from 'react';
import Modal from '../Globales/Modal';
import {Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import history from '../../history';
import { useParams } from "react-router-dom";

const StreamDelete = (props) => {
    const useStyles = makeStyles((theme) => ({
        deleteButton: {
            marginTop: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
        cancelButton: {
            marginTop: theme.spacing(1),
        }
    }));

    const classes = useStyles();

    const { stream, fetchStream, deleteStream } = props;

    const params = useParams();

    useEffect(()=>{
        fetchStream(params.id);
    }, []);

    const handleDeleteButtonClick = () => {
        deleteStream(params.id);
    }

    const handleCancelButtonClick = () => {
        history.push('/')
    }

    const actions = (
        <>
            <Button className={classes.deleteButton} variant='contained' color='primary' onClick={handleDeleteButtonClick}>
                Delete
            </Button>
            <Button className={classes.cancelButton} variant='contained' color='inherit' onClick={handleCancelButtonClick}>
                Cancel
            </Button>
        </>
    );

    const renderContent = () => {
        if(!stream) {
            return 'Are you sure you want to delete this Stream ?';
        }

        return `Are you sure you want to delete this Stream with title: ${stream.title} ?`
    }

    return (
        <Modal
            title={'Delete Stream'}
            content={renderContent()}
            actions={actions}
            onDismiss={(event)=>{history.push('/')}}
        />
    );
};

export default StreamDelete;

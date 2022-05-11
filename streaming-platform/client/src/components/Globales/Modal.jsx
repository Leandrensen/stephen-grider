import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import {Modal as MaterialUIModal, Box, Button} from '@material-ui/core';
import './modal.scss';

const Modal = (props) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            height: 300,
            flexGrow: 1,
            minWidth: 300,
            transform: 'translateZ(0)',
            // The position fixed scoping doesn't work in IE 11.
            // Disable this demo to preserve the others.
            '@media all and (-ms-high-contrast: none)': {
                display: 'none',
            },
        },
        modal: {
            display: 'flex',
            padding: theme.spacing(1),
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            minWidth: '50%',
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2),
        },
        modalTitle: {
            padding: theme.spacing(0, 0, 1),
        },
        modalDescription: {
            padding: theme.spacing(0, 0, 1),
        },
        actions: {
            display: 'flex',
            justifyContent: 'flex-end',
        },
    }));

    const classes = useStyles();

    const { title, content, actions, onDismiss } = props;

    // return ReactDOM.createPortal(
    //         <Box className='modal'>
    //             <Box className='modal__content'>
    //                 <h2>Server-side modal</h2>
    //                 <p>Example modal</p>
    //             </Box>
    //         </Box>,
    //     document.querySelector('#modal')
    // );

    return ReactDOM.createPortal(
        <div onClick={onDismiss}>
            <MaterialUIModal
                disablePortal
                disableEnforceFocus
                disableAutoFocus
                open
                aria-labelledby="server-modal-title"
                aria-describedby="server-modal-description"
                className={classes.modal}
                container={document.querySelector('#modal')}
            >
                <div className={classes.paper} onClick={(e) => {e.stopPropagation()}}>
                    <h2 id="server-modal-title" className={classes.modalTitle}>{title}</h2>
                    <span id="server-modal-description" className={classes.modalDescription}>{content}</span>
                    <div className={classes.actions}>
                        {actions}
                    </div>
                </div>
            </MaterialUIModal>
        </div>,
        document.querySelector('#modal')
    );

    // return(
    //     <MaterialUIModal
    //         disablePortal
    //         disableEnforceFocus
    //         disableAutoFocus
    //         open
    //         aria-labelledby="server-modal-title"
    //         aria-describedby="server-modal-description"
    //         className={classes.modal}
    //         container={document.querySelector('#modal')}
    //     >
    //         <div className={classes.paper}>
    //             <h2 id="server-modal-title">Server-side modal</h2>
    //             <p id="server-modal-description">If you disable JavaScript, you will still see me.</p>
    //         </div>
    //     </MaterialUIModal>
    // );
};

export default Modal;
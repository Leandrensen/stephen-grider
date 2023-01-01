import React from 'react';
import { TextField, FormControl, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import PropTypes from 'prop-types';

const StreamForm = (props) => {
    // CSS ///////////////////////////
    const useStyles = makeStyles((theme) => ({
        textField: {
            width: '100%',
            '&:first-of-type': {
                marginTop: 0,
            },
            marginTop: theme.spacing(3),
        },
        submitButton: {
            marginTop: theme.spacing(3),
        },
    }));

    const classes = useStyles();
    /////////////////////////////////

    const { onSubmit, title, description } = props;

    const schema = yup.object().shape({
        title: yup.string().required(),
        description: yup.string().required(),
    });

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl fullWidth={true}>
                    <TextField
                        defaultValue={title}
                        inputRef={register}
                        name='title'
                        label='Title'
                        type='text'
                        variant='outlined'
                        className={classes.textField}
                        error={errors.title !== undefined}
                        helperText={errors.title?.message}

                    />
                    <TextField
                        defaultValue={description}
                        inputRef={register}
                        name='description'
                        label='Description'
                        type='text'
                        variant='outlined'
                        className={classes.textField}
                        error={errors.description !== undefined}
                        helperText={errors.description?.message}
                    />
                </FormControl>
                <Button type='submit' variant='contained' color='primary' className={classes.submitButton}>
                    Submit
                </Button>
            </form>
    );
};

export default StreamForm;

StreamForm.defaultProps = {
    title: '',
    description: '',
};

StreamForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
};

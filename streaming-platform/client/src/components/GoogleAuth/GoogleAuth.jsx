import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';

const GoogleAuth = (props) => {
    const { isSignedIn, signIn, signOut } = props;

    let authInstance, googleUser, profile;

    useEffect(() => {
        window.gapi.load('client:auth2', () => {
            window.gapi.client
                .init({
                    clientId: '889969289914-io4e8oq3dm7n3jq7njbm8h110niohqja.apps.googleusercontent.com',
                    scope: 'email',
                })
                .then(() => {
                    authInstance = window.gapi.auth2.getAuthInstance();
                    googleUser = authInstance.currentUser.get();
                    profile = googleUser.getBasicProfile();

                    window.gapi.signin2.render('my-signin2', {
                        scope: 'email',
                        width: 'auto',
                        height: 50,
                        longtitle: true,
                        theme: 'dark',
                        onsuccess: onSuccess,
                        onfailure: onFailure,
                    });

                    onAuthChange(authInstance.isSignedIn.get());
                    authInstance.isSignedIn.listen(onAuthChange);
                });
        });
    }, []);

    const onSuccess = () => {
        console.log('googleUser', googleUser);
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if
    };

    const onFailure = () => {
        return;
    };

    const onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            signIn(googleUser.getId());
        } else {
            signOut();
        }
    };

    return <Box id='my-signin2'></Box>;
};

export default GoogleAuth;

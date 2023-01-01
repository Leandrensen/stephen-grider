import React from 'react';
import { connect } from 'react-redux';
import GoogleAuth from '../../components/GoogleAuth/GoogleAuth';
import { signIn, signOut } from '../../actions';

const GoogleAuthContainer = (props) => <GoogleAuth {...props} />;

const mapStateToProps = (state) => {
    return { isSignedIn: state.googleAuth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuthContainer);
